import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "http://127.0.0.1:8000/api/",
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: false, 
});

axiosInstance.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("token");
		if (token) {
			config.headers = config.headers || {};
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			const expiredToken = localStorage.getItem("token");

			try {
				const refreshResponse = await axiosInstance.post(
					"/refresh",
					{},
					{
						headers: {
							Authorization: `Bearer ${expiredToken}`,
						},
					}
				);

				const newToken = refreshResponse.data.access_token;
				localStorage.setItem("token", newToken);

				originalRequest.headers.Authorization = `Bearer ${newToken}`;
				return axiosInstance(originalRequest);
			} catch (refreshError) {
				console.error("Refresh failed. Redirecting to login.");
				// localStorage.clear();
				// window.location.href = "/admin/login";
			}
		}

		return Promise.reject(error);
	}
);
  

export default axiosInstance;

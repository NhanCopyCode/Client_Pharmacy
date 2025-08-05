import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "http://127.0.0.1:8000/api/",
	timeout: 10000,
	withCredentials: false, 
});

axiosInstance.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("access_token");
		if (token) {
			config.headers = config.headers || {};
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);
const refreshInstance = axios.create({
	baseURL: "http://127.0.0.1:8000/api/",
	timeout: 10000,
	withCredentials: false,
});

axiosInstance.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			try {
				const refresh_token = localStorage.getItem("refresh_token");
				const refreshResponse = await refreshInstance.post("/refresh", {
					refresh_token,
				});

				const newToken = refreshResponse.data.access_token;
				localStorage.setItem("token", newToken);

				originalRequest.headers.Authorization = `Bearer ${newToken}`;
				return axiosInstance(originalRequest);
			} catch (err) {
				console.error("Refresh token failed");
				// localStorage.cld
			}
		}

		return Promise.reject(error);
	}
);
  

export default axiosInstance;

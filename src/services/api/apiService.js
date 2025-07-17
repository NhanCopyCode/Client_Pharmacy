import axios from "./axiosInstance";


export const createApiService = (resource) => {
	return {
		getAll: (params = {}) => axios.get(`/${resource}`, { params }),

		getById: (id) => axios.get(`/${resource}/${id}`),

		create: (data) => axios.post(`/${resource}`, data),

		update: (id, data) => {
			if (data instanceof FormData) {
				data.append("_method", "PUT");
				return axios.post(`/${resource}/${id}`, data);
			}
			return axios.put(`/${resource}/${id}`, data);
		},
		deleteById: (id) => axios.delete(`/${resource}/${id}`),

		
	};
};

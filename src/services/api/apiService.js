import axios from "./axiosInstance"; 

export const createApiService = (resource) => ({
	getAll: (params) => axios.get(`/${resource}`, { params }),

	getById: (id) => axios.get(`/${resource}/${id}`),

	create: (data) => axios.post(`/${resource}`, data),

	update: (id, data) => axios.put(`/${resource}/${id}`, data),

	deleteById: (id) => axios.delete(`/${resource}/${id}`),
});

import axios from "./axiosInstance";

/**
 * Create a reusable API service for any REST resource
 * @param {string} resource - e.g. "brands", "categories", etc.
 */
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

		// // Optional: extra flexibility for PATCH
		// patch: (id, data) => axios.patch(`/${resource}/${id}`, data),

		// // Optional: if your API uses soft-delete restore
		// restore: (id) => axios.post(`/${resource}/${id}/restore`),
	};
};

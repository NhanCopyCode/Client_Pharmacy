import publicAxios from "./publicAxios";

export const createApiService = (resource) => {
	return {
		getAll: (params = {}) => publicAxios.get(`/${resource}`, { params }),

		getById: (id) => publicAxios.get(`/${resource}/${id}`),

		create: (data) => publicAxios.post(`/${resource}`, data),

		update: (id, data) => {
			if (data instanceof FormData) {
				data.append("_method", "PUT");
				return publicAxios.post(`/${resource}/${id}`, data);
			}
			return publicAxios.put(`/${resource}/${id}`, data);
		},
		deleteById: (id) => publicAxios.delete(`/${resource}/${id}`),
	};
};

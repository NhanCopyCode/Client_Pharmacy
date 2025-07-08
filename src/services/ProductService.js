import { createApiService } from "./api/apiService";
import axios from "./api/axiosInstance";

const productService = {
	...createApiService("products"),
	generateDescription: (objData) => {
		const { name, description } = objData;
		const keyword = "loại thuốc";
		return axios.post("/ai/generate-description", {
			name,
			description,
			keyword,
		});
	},
	search: (query) => {
		return axios.get("/products/search", {
			params: { q: query },
		});
	},
	searchMultiple: (query) => {
		return axios.get("/products/search-multiple-products", {
			params: { q: query },
		});
	},
};

export default productService;
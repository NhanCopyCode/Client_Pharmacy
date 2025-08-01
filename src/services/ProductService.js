import { createApiService } from "./api/apiService";
import axios from "./api/axiosInstance";
import publicAxios from "./api/publicAxios";

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
	searchMultiple(params) {
		return axios.get("/products/search-multiple-products", {
			params,
		});
	},
	getLatest() {
		return axios.get("/products/latest");
	},
	getProductTrending() {
		return axios.get("/products/trending");
	},
	getProductSameSegment() {
		return axios.get("/products/sameSegment");
	},
	getAllProductsNoPagination() {
		return axios.get("/products/all");
	},

	getAllProductsByIds: (ids) => {
		return publicAxios.get("/products/getAllProductsByIds", {
			params: { ids: ids.join(",") },
		});
	},
	
};


export default productService;

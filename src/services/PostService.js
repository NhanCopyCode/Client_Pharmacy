import { createApiService } from "./api/apiService";
import axiosInstance from "./api/axiosInstance";

const postService = {
	...createApiService("posts"),
	generateDescription: (objData) => {
		const { name, description } = objData;
		const keyword = "bài viết";
		return axiosInstance.post("/ai/generate-description", {
			name,
			description,
			keyword,
		});
	},
	search: (query) => {
		return axiosInstance.get("/posts/search", {
			params: { q: query },
		});
	},
};

export default postService;

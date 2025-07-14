import { createApiService } from "./api/apiService";
import axiosInstance from "./api/axiosInstance";

const postCategoryService = {
	...createApiService("post-categories"),
	getListCategories: () => {
		return axiosInstance.get("/post-categories/get-list-categories");
	}
};

export default postCategoryService;

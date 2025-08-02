import { createApiService } from "./api/apiService";
import axios from "./api/axiosInstance";
import publicAxios from "./api/publicAxios";

const categoryService = {
	...createApiService("categories"),
	generateDescription: (objData) => {
		const { name, description } = objData;
		const keyword = "thể loại thuốc";
		return axios.post("/ai/generate-description", {
			name,
			description,
			keyword,
		});
	},
	getListParents: () => {
		return publicAxios.get("/categories/parents");
	},
	getListChild: () => {
		return publicAxios.get("/categories/child");
	},
	getListChildNotDeleted: () => {
		return publicAxios.get("/categories/childNotDeleted");
	},
	getListApproved: () => {
		return publicAxios.get("/categories/getListApproved");
	},
	getListOutstanding: () => {
		return publicAxios.get("/categories/getListOutstanding");
	},
	getCategoryParentAndChildHeader: () => {
		return publicAxios.get("/categories/getCategoryParentAndChildHeader");
	},
	getCategoryAvailable: () => {
		return publicAxios.get("/categories/available");
	},
};

export default categoryService;

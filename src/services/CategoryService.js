import { createApiService } from "./api/apiService";
import axios from "./api/axiosInstance";

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
		return axios.get("/categories/parents");
	},
	getListChild: () => {
		return axios.get("/categories/child");
	},
	getListChildNotDeleted: () => {
		return axios.get("/categories/childNotDeleted");
	},
	getListApproved: () => {
		return axios.get("/categories/getListApproved");
	},
	getListOutstanding: () => {
		return axios.get("/categories/getListOutstanding");
	},
};

export default categoryService;
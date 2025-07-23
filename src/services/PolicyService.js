import { createApiService } from "./api/apiService";
import axios from "./api/axiosInstance";

const policyService = {
	...createApiService("policies"),
	getAllPolicies: () => {
		return axios.get("/policies/getAll");
	},
};

export default policyService;

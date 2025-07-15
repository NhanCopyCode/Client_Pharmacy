import { createApiService } from "./api/apiService";
import axios from "./api/axiosInstance";

const policyService = {
	...createApiService("policies"),
	
};

export default policyService;

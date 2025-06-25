import { createApiService } from "./api/apiService";
import axios from "./api/axiosInstance";

const brandService = { ...createApiService("brands") ,
    generateDescription: (name, description) => {
        return axios.post("/ai/generate-description", { name, description });
    }
};

export default brandService;
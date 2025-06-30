import { createApiService } from "./api/apiService";
import axios from "./api/axiosInstance";

const productService = { ...createApiService("products") ,
    generateDescription: (objData) => {
        const {name, description} = objData;
        const keyword = 'loại thuốc';
        return axios.post("/ai/generate-description", { name, description, keyword });
    }
};

export default productService;
import { createApiService } from "./api/apiService";
import axios from "./api/axiosInstance";

const productService = { ...createApiService("categories") ,
    generateDescription: (objData) => {
        const {name, description} = objData;
        const keyword = 'thể loại thuốc';
        return axios.post("/ai/generate-description", { name, description, keyword });
    }
};

export default productService;
import { createApiService } from "./api/apiService";
import axios from "./api/axiosInstance";

const brandService = { ...createApiService("brands") ,
    generateDescription: (objData) => {
        const {name, description} = objData;
        const keyword = 'hãng';
        return axios.post("/ai/generate-description", { name, description, keyword });
    },
    getSelectBrands: () => {
        return axios.get("/brands/selectBrands");
    },
    getSelectBrandsNotDeleted: () => {
        return axios.get("/brands/selectBrandsNotDeleted");
    }
};

export default brandService;
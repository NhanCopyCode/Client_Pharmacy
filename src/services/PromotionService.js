import { createApiService } from "./api/apiService";
import axiosInstance from "./api/axiosInstance";

const promotionService = { ...createApiService("promotions"),
    createPromotionWithProduct: () => {
        return axiosInstance.post('/promotions/')
    },
    getAllPromoNoPagination: () => {
        return axiosInstance.get('/promotions/all')
    }
 };

export default promotionService;

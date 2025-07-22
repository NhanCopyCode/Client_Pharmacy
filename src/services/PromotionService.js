import { createApiService } from "./api/apiService";
import axiosInstance from "./api/axiosInstance";

const promotionService = { ...createApiService("promotions"),
    createPromotionWithProduct: () => {
        return axiosInstance.post('/promotions/')
    },
    getAllPromoNoPagination: () => {
        return axiosInstance.get('/promotions/all')
    },
    getPromotionAvailable: () => {
        return axiosInstance.get('/promotions/available')
    },
    syncProducts: (formData) => {
        return axiosInstance.post('/promotions/sync-products', formData);
    }
 };

export default promotionService;

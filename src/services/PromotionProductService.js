import { createApiService } from "./api/apiService";

const promotionProductService = { ...createApiService("promotions-products") };

export default promotionProductService;

import { createApiService } from "./api/apiService";

const promotionService = { ...createApiService("promotions") };

export default promotionService;

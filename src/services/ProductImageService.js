import { createApiService } from "./api/apiService";

const productImageService = { ...createApiService("product-images") };

export default productImageService;

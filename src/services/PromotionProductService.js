import { createApiService } from "./api/apiService";
import axiosInstance from "./api/axiosInstance";

const promotionProductService = {
	...createApiService("promotions-products"),
	getPromotionAndProducts: () => {
		return axiosInstance.get(
			"/promotions-products/get-promotions-and-products"
		);
	},
	getPromotionShowOnFrontend: () => {
		return axiosInstance.get(
			"/promotions-products/get-promotions-and-products-show-on-frontend"
		);
	}
};

export default promotionProductService;

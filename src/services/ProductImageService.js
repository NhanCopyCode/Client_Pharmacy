import { createApiService } from "./api/apiService";
import axiosInstance from "./api/axiosInstance";

const productImageService = {
	...createApiService("product-images"),
	getImagesByProductId: (productId) => {
		return axiosInstance.post("product-images/getImagesByProductId", {
			productId,
		});
	},
};

export default productImageService;

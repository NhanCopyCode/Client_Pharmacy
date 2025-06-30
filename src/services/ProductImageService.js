import { createApiService } from "./api/apiService";
import axiosInstance from "./api/axiosInstance";

const productImageService = {
	...createApiService("product-images"),
	getImagesByProductId: (productId) => {
		return axiosInstance.post("product-images/getImagesByProductId", {
			productId,
		});
	},
	deleteAllImagesByProductId: (productId) => {
		return axiosInstance.post("product-images/deleteAllImagesByProductId", {
			productId,
		});
	},
	updateImagesForProduct: (formData) => {
		return axiosInstance.post(
			"product-images/update-by-product-id",
			formData
		);
	},
};

export default productImageService;

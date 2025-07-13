import axiosInstance from "./api/axiosInstance";
import { createApiService } from "./api/apiService";

const bannerService = {
	...createApiService("banners"),

	getBannerHomePage: () => axiosInstance.get("/banners/get-banner-homepage"),

	getBannerTop: () => axiosInstance.get("/banners/get-banner-top"),

	getBannerProductLatest: () =>
		axiosInstance.get("/banners/get-banner-product-latest"),

	getBannerProductOutstanding: () =>
		axiosInstance.get("/banners/get-banner-product-outstanding"),

	getBannerPositionSelect: () =>
		axiosInstance.get("/banner-positions/select"),
};

export default bannerService;

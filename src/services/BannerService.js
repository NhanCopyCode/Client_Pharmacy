import axiosInstance from "./api/axiosInstance";
import { createApiService } from "./api/apiService";
import publicAxios from "./api/publicAxios";

const bannerService = {
	...createApiService("banners"),

	getBannerHomePage: () => publicAxios.get("/banners/get-banner-homepage"),

	getBannerTop: () => publicAxios.get("/banners/get-banner-top"),

	getBannerProductLatest: () =>
		publicAxios.get("/banners/get-banner-product-latest"),

	getBannerProductOutstanding: () =>
		publicAxios.get("/banners/get-banner-product-outstanding"),

	getBannerPositionSelect: () =>
		axiosInstance.get("/banner-positions/select"),
};

export default bannerService;

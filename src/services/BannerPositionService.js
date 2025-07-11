import { createApiService } from "./api/apiService";
import axiosInstance from "./api/axiosInstance";

const bannerPositionService = {
	...createApiService("banner-positions"),
	getBannerPositionSelect: () => {
		return axiosInstance.get("/banner-positions/banner-positions-select");
	},
};

export default bannerPositionService;

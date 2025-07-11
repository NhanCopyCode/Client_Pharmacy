import { createApiService } from "./api/apiService";

const bannerService = { ...createApiService("banners") };

export default bannerService;

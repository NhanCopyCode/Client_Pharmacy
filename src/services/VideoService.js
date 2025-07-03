import { createApiService } from "./api/apiService";

const videoService = { ...createApiService("videos") };

export default videoService;

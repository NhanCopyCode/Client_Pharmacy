import { createApiService } from "./api/publicApiService";
import publicAxios from "./api/publicAxios";
const homeService = {
	...createApiService("home"),
	getApiHomePage: () => {
		return publicAxios.get("/home/getApiHomePage");
	}
};

export default homeService;

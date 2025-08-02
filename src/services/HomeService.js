import { createApiService } from "./api/publicApiService";
import publicAxios from "./api/publicAxios";
const homeService = {
	...createApiService("home"),
	getApiHomePage: () => {
		return publicAxios.get("/home/getApiHomePage");
	},
	getHeaderFooterApi: () => {
		return publicAxios.get("/home/getApiHeaderFooter");
	},
	cartInfoApi: () => {
		return publicAxios.get("/home/cartInfoApi");
	}
};

export default homeService;

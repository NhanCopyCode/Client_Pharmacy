import publicAxios from "../api/publicAxios";

const publicProductService = {
	getById: (id) => {
		return publicAxios.get(`/products/getById/${id}`);
	},
};
export default publicProductService;

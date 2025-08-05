import axiosInstance from "./api/axiosInstance";

const orderService = {
	addOrderToCart: (cartItem) => {
		return axiosInstance.post("/cart/add-product-to-cart", { cartItem });
	},
};

export default orderService;

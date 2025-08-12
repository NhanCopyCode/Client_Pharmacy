import publicAxios from "./api/publicAxios";
import { default as privateAxios} from "./api/axiosInstance";

const cartService = {
	syncCart: (cartItems) => {
		const payload = {
			cart_items: cartItems.map((item) => ({
				product_id: item.productId,
				unit_price: item.price,
				discount_amount: item.discount,
				quantity: item.quantity,
				final_price: item.finalPrice,
				meta: null,
			})),
		};
		return privateAxios.post("/cart/sync", payload);
	},
};

export default cartService;
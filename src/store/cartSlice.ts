import { createSlice } from "@reduxjs/toolkit";

const cart_items = JSON.parse(localStorage.getItem("cart_items") || "[]");
const cart_quantity = JSON.parse(localStorage.getItem("cart_quantity") || "0");
const initialState = {
	items: cart_items,
	cart_quantity: cart_items.length,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const product = action.payload;
			const existing = state.items.find((item) => item.id === product.id);
			if (existing) {
				existing.quantity += product.quantity || 1;
			} else {
				state.items.push({
					...product,
					quantity: product.quantity || 1,
				});
				state.cart_quantity += 1;
			}

			localStorage.setItem("cart_items", JSON.stringify(state.items));
			localStorage.setItem(
				"cart_quantity",
				JSON.stringify(state.cart_quantity)
			);
		},
		removeFromCart: (state, action) => {
			const product_id = action.payload;
			const new_cart_items = state.items.filter(
				(item) => item.id !== product_id
			);
			state.cart_quantity += 1;

			localStorage.setItem("cart_items", JSON.stringify(new_cart_items));
			localStorage.setItem(
				"cart_quantity",
				JSON.stringify(state.cart_quantity)
			);
		},
		clearCart: (state) => {
			state.items = [];
			localStorage.removeItem("cart_items");
			localStorage.removeItem("cart_quantity");
		},
	},
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

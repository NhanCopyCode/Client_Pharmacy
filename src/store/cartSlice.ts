// src/store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const saveCartToLocalStorage = (items) => {
	localStorage.setItem("cart_items", JSON.stringify(items));
	localStorage.setItem(
		"cart_quantity",
		JSON.stringify(items.reduce((total, item) => total + item.quantity, 0))
	);
};

const loadCartFromLocalStorage = () => {
	try {
		const stored = localStorage.getItem("cart_items");
		return stored ? JSON.parse(stored) : [];
	} catch {
		return [];
	}
};

// Maintain a consistent cart item shape (same as CartContext)
const createCartItem = (product, quantity = 1) => ({
	id: crypto.randomUUID(),
	orderId: null,
	productId: product.id,
	quantity,
	price: product.price,
	discount: product.discount || 0,
	finalPrice: (product.price - (product.discount || 0)) * quantity,
});

const cart_items = loadCartFromLocalStorage();

const initialState = {
	items: cart_items,
	cart_quantity: cart_items.reduce((total, item) => total + item.quantity, 0),
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCartRedux: (state, action) => {
			const { product, quantity = 1 } = action.payload;
			const existing = state.items.find(
				(item) => item.productId === product.id
			);

			if (existing) {
				existing.quantity += quantity;
				existing.finalPrice =
					(existing.price - existing.discount) * existing.quantity;
			} else {
				state.items.push(createCartItem(product, quantity));
			}

			state.cart_quantity = state.items.reduce(
				(t, i) => t + i.quantity,
				0
			);
			saveCartToLocalStorage(state.items);
		},

		updateQuantityRedux: (state, action) => {
			const { productId, quantity } = action.payload;
			const item = state.items.find((i) => i.productId === productId);

			if (item) {
				if (quantity <= 0) {
					state.items = state.items.filter(
						(i) => i.productId !== productId
					);
				} else {
					item.quantity = quantity;
					item.finalPrice = (item.price - item.discount) * quantity;
				}
			}

			state.cart_quantity = state.items.reduce(
				(t, i) => t + i.quantity,
				0
			);
			saveCartToLocalStorage(state.items);
		},

		removeFromCartRedux: (state, action) => {
			const productId = action.payload;
			state.items = state.items.filter(
				(item) => item.productId !== productId
			);
			state.cart_quantity = state.items.reduce(
				(t, i) => t + i.quantity,
				0
			);
			saveCartToLocalStorage(state.items);
		},

		clearCartRedux: (state) => {
			state.items = [];
			state.cart_quantity = 0;
			localStorage.removeItem("cart_items");
			localStorage.removeItem("cart_quantity");
		},

		replaceCartRedux: (state, action) => {
			state.items = action.payload || [];
			state.cart_quantity = state.items.reduce(
				(t, i) => t + i.quantity,
				0
			);
			saveCartToLocalStorage(state.items);
		},
	},
});

export const {
	addToCartRedux,
	updateQuantityRedux,
	removeFromCartRedux,
	clearCartRedux,
	replaceCartRedux,
} = cartSlice.actions;

export default cartSlice.reducer;

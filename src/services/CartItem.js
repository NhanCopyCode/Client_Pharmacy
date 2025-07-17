const CART_KEY = "cart_items";

export const getCartItems = () => {
	return JSON.parse(localStorage.getItem(CART_KEY)) || [];
};

export const setCartItems = (items) => {
	localStorage.setItem(CART_KEY, JSON.stringify(items));
};

export const clearCart = () => {
	localStorage.removeItem(CART_KEY);
};

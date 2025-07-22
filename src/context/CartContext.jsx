// src/contexts/CartContext.js
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState(() => {
		const stored = localStorage.getItem("cart_items");
		return stored ? JSON.parse(stored) : [];
	});

	const [cartItemQuantity, setCartItemQuantity] = useState(() => {
		const stored = localStorage.getItem("cart_items");
		if (!stored) return 0;
		const parsed = JSON.parse(stored);
		return parsed.reduce((sum, item) => sum + item.quantity, 0);
	});

	const updateLocalStorage = (items) => {
		localStorage.setItem("cart_items", JSON.stringify(items));
	};

	const updateCartStorage = (items) => {
		setCartItems(items);
		localStorage.setItem("cart_items", JSON.stringify(items));
	};
	useEffect(() => {
		const totalQuantity = cartItems.reduce(
			(sum, item) => sum + item.quantity,
			0
		);
		setCartItemQuantity(totalQuantity);
	}, [cartItems]);

	const addToCart = (newItem) => {
		setCartItems((prev) => {
			const existingIndex = prev.findIndex(
				(item) => item.productId === newItem.productId
			);
			let updated;

			if (existingIndex > -1) {
				updated = [...prev];
				updated[existingIndex].quantity += newItem.quantity;
				updated[existingIndex].finalPrice =
					(updated[existingIndex].price -
						updated[existingIndex].discount) *
					updated[existingIndex].quantity;
			} else {
				updated = [...prev, newItem];
			}

			updateLocalStorage(updated);
			return updated;
		});
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				setCartItems: updateCartStorage,
				cartItemQuantity,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);

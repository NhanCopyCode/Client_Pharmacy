// src/contexts/CartContext.js
import { createContext, useContext, useEffect, useState } from "react";
import productService from "../services/ProductService";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState(() => {
		const stored = localStorage.getItem("cart_items");
		return stored ? JSON.parse(stored) : [];
	});
	const [totalPrice, setTotalPrice] = useState(0);
	const [products, setProducts] = useState([]);

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

	// Quantity and total price calculation
	useEffect(() => {
		if (!cartItems || cartItems.length === 0) {
			setCartItemQuantity(0);
			setTotalPrice(0);
			return;
		}

		const quantity = cartItems.length;
		setCartItemQuantity(quantity);

		const total = cartItems.reduce((sum, item) => sum + item.finalPrice, 0);
		setTotalPrice(total);
	}, [JSON.stringify(cartItems)]);

	useEffect(() => {
		if (cartItems.length === 0) return;

		const fetchProducts = async () => {
			try {
				const uniqueIds = [
					...new Set(cartItems.map((item) => item.productId)),
				];
				const res = await productService.getAllProductsByIds(uniqueIds);
				setProducts(res.data.data);
			} catch (error) {
				console.error("Failed to fetch products:", error);
			}
		};

		fetchProducts();
	}, [JSON.stringify(cartItems)]); // ✅ Only triggers if content really changes

	const deleteCartItem = (cartItemId) => {
		setCartItems((prev) => {
			const updated = prev.filter((item) => item.id !== cartItemId);
			updateLocalStorage(updated);
			return updated;
		});
	};

	const updateCartItemQuantity = (productId, quantity) => {
		if(quantity === 0) {
			setCartItems((prev) => {
				return prev.filter((item) => item.productId !== productId);
			})
		}
		setCartItems((prev) => {
			const updated = prev.map((item) => {
				if (item.productId === productId) {
					return { ...item, quantity };
				}
				return item;
			});
			updateLocalStorage(updated);
			return updated;
		});
	};

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
				cartItemQuantity,
				products,
				totalPrice,
				addToCart,
				setCartItems: updateCartStorage,
				deleteCartItem,
				updateCartItemQuantity,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);

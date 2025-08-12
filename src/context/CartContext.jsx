// src/contexts/CartContext.js
import {
	createContext,
	useContext,
	useEffect,
	useState,
	useCallback,
} from "react";
import productService from "../services/ProductService";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [cartItems, setCartItems] = useState(() => {
		const stored = localStorage.getItem("cart_items");
		return stored ? JSON.parse(stored) : [];
	});
	const [totalPrice, setTotalPrice] = useState(0);
	const [products, setProducts] = useState([]);
	const [cartItemQuantity, setCartItemQuantity] = useState(0);

	/** Create a consistent cart item shape */
	const createCartItem = (product, quantity = 1) => ({
		id: crypto.randomUUID(),
		orderId: null,
		productId: product.id,
		quantity,
		price: product.price,
		discount: product.discount || 0,
		finalPrice: (product.price - (product.discount || 0)) * quantity,
	});

	const updateCart = useCallback((items) => {
		setCartItems(items);
		localStorage.setItem("cart_items", JSON.stringify(items));
	}, []);

	const addToCart = (product, quantity = 1) => {
		setCartItems((prev) => {
			const existingIndex = prev.findIndex(
				(item) => item.productId === product.id
			);
			let updated;

			if (existingIndex > -1) {
				const existingItem = { ...prev[existingIndex] };
				existingItem.quantity += quantity;
				existingItem.finalPrice =
					(existingItem.price - existingItem.discount) *
					existingItem.quantity;

				updated = [...prev];
				updated[existingIndex] = existingItem;
			} else {
				updated = [...prev, createCartItem(product, quantity)];
			}

			localStorage.setItem("cart_items", JSON.stringify(updated));
			return updated;
		});
	};

	/** Delete an item from cart */
	const deleteCartItem = (cartItemId) => {
		const updated = cartItems.filter((item) => item.id !== cartItemId);
		updateCart(updated);
	};

	/** Update quantity of an existing cart item */
	const updateCartItemQuantity = (productId, quantity) => {
		if (quantity <= 0) {
			updateCart(
				cartItems.filter((item) => item.productId !== productId)
			);
			return;
		}

		const updated = cartItems.map((item) =>
			item.productId === productId
				? {
						...item,
						quantity,
						finalPrice: (item.price - item.discount) * quantity,
				  }
				: item
		);
		updateCart(updated);
	};

	/** Calculate total price & total quantity whenever cart changes */
	useEffect(() => {
		if (!cartItems.length) {
			setCartItemQuantity(0);
			setTotalPrice(0);
			return;
		}

		const quantitySum = cartItems.reduce(
			(sum, item) => sum + item.quantity,
			0
		);
		setCartItemQuantity(quantitySum);

		const total = cartItems.reduce((sum, item) => sum + item.finalPrice, 0);
		setTotalPrice(total);
	}, [cartItems]);

	/** Fetch product details for all items in cart */
	useEffect(() => {
		if (!cartItems.length) {
			setProducts([]);
			setLoading(false);
			return;
		}

		const fetchProducts = async () => {
			try {
				setLoading(true);
				const uniqueIds = [
					...new Set(cartItems.map((item) => item.productId)),
				];
				const res = await productService.getAllProductsByIds(uniqueIds);
				setProducts(res.data.data);
			} catch (error) {
				console.error("Failed to fetch products:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, [cartItems]);

	return (
		<CartContext.Provider
			value={{
				cartItems,
				cartItemQuantity,
				products,
				totalPrice,
				loading,
				addToCart,
				deleteCartItem,
				updateCartItemQuantity,
				setCartItems: updateCart, // expose for rare full resets
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);

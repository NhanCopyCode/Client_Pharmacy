import Button from "./Button";
import productService from "../../services/ProductService";
import { useEffect, useState } from "react";
import formatPriceVND from "../../utils/formatPriceVND";
import { TailSpin } from "react-loader-spinner";
import { useCart } from "../../context/CartContext";

function CartItem({ productId, cartItem, handleDeleteCartItem }) {
	const { updateCartItemQuantity } = useCart();
	const [product, setProduct] = useState(null);
	const [quantity, setQuantity] = useState(cartItem.quantity || 1);
	const [totalPrice, setTotalPrice] = useState(
		cartItem.price * cartItem.quantity
	);
	const [loading, setLoading] = useState(true);

	// Fetch product info
	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const res = await productService.getById(productId);
				console.log('res cartitem jsx:', res)
				setProduct(res.data.data);
			} catch (error) {
				console.log("error cartItem jsx: ", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [productId]);

	useEffect(() => {
		setTotalPrice(cartItem.price * quantity);
	}, [quantity, cartItem.price]);

	useEffect(() => {
		setQuantity(cartItem.quantity || 1);
	}, [cartItem.quantity]);

	const handleDecrease = () => {
		if (quantity > 1) {
			const newQuantity = quantity - 1;
			setQuantity(newQuantity);
			updateCartItemQuantity(productId, newQuantity);
		}
	};

	const handleIncrease = () => {
		const newQuantity = quantity + 1;
		setQuantity(newQuantity);
		updateCartItemQuantity(productId, newQuantity);
	};

	const handleManualChange = (e) => {
		const value = e.target.value;
		if (/^\d*$/.test(value)) {
			if (!value) {
				setQuantity(""); // allow empty temporarily
			} else {
				setQuantity(parseInt(value, 10));
			}
		}
	};

	const handleBlur = () => {
		let safeQuantity = quantity;
		if (!quantity || quantity < 1) {
			safeQuantity = 1;
			setQuantity(1);
		}
		updateCartItemQuantity(productId, safeQuantity);
	};

	if (loading) {
		return (
			<div className="flex items-center justify-center py-4">
				<TailSpin height={24} width={24} color="#1d4ed8" />
			</div>
		);
	}

	return (
		<div className="flex items-center gap-4 py-2 text-black hover:text-darkBlue cursor-pointer">
			<div className="w-[75px]">
				<img
					src={product?.main_image}
					alt={product?.title}
					className="w-full object-cover"
				/>
			</div>
			<div className="flex items-start flex-col flex-[1]">
				<h3 className="text-[13px] font-bold mb-1">{product?.title}</h3>

				<span
					className="text-redColor font-bold text-[13px] cursor-pointer"
					onClick={handleDeleteCartItem}
				>
					Xóa
				</span>

				<div className="flex flex-col w-full">
					<div className="flex items-center justify-between">
						<span className="text-[12px] text-[#333] font-light mt-2">
							Số lượng
						</span>
						<span className="text-sm text-darkBlue font-bold">
							{formatPriceVND(totalPrice)}
						</span>
					</div>
				</div>

				<div className="flex items-center justify-between w-[85px] h-[30px] p-[2px] gap-1 rounded-md border border-darkBlue mt-1">
					<Button
						buttonSize="w-[25px] h-[25px]"
						color="text-white"
						hoverEffect="hover:bg-primary"
						fontSize="text-[20px]"
						background="bg-darkBlue"
						onClick={handleDecrease}
					>
						-
					</Button>
					<input
						type="text"
						value={quantity}
						className="w-full text-center border-0 outline-0 text-primary text-[12px] font-medium"
						onChange={handleManualChange}
						onBlur={handleBlur}
					/>
					<Button
						buttonSize="w-[25px] h-[25px]"
						color="text-white"
						fontSize="text-[20px]"
						background="bg-darkBlue"
						hoverEffect="hover:bg-primary"
						onClick={handleIncrease}
					>
						+
					</Button>
				</div>
			</div>
		</div>
	);
}

export default CartItem;

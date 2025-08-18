import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";
import { toast } from "react-toastify";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import CartItem from "./CartItem";
import Button from "./Button";
import NotificationContainer from "./NotificationContainer";
import formatPriceVND from "../../utils/formatPriceVND";
import { useCart } from "../../context/CartContext";
import { useEffect, useState } from "react";
import productService from "../../services/ProductService";
import { useSelector } from "react-redux";


function HeaderCart() {
	const { items, cart_quantity, total_price } = useSelector((state) => state.cart);
	const [productsCart, setProductsCart] = useState([]);

	const handleDeleteCartItem = () => {
		toast.info("🗑️ Đã xoá sản phẩm khỏi giỏ hàng!", {
			position: "top-right",
		});
	};

	useEffect(() => {
		const productIds = items.map((item) => item.product_id);
		const fetchProduct = async () => {
			try {
				const res = await productService.getAllProductsByIds(productIds);
				setProductsCart(res.data.data);
			} catch (error) {
				console.log("error header cart: ", error );
			}
		}

		fetchProduct();

	}, [items])
	return (
		<div className="flex items-center gap-2">
			<Link className="w-[30px] h-[30px] relative hidden md:inline-block">
				<IoLocationOutline className="w-full h-full" />
				<span className="absolute top-[-2px] right-[-3px] rounded-[50%] text-white w-[15px] h-[15px] text-center flex items-center justify-center bg-success text-[12px]">
					3
				</span>
			</Link>
			<Link className="w-[30px] h-[30px] relative hidden md:inline-block">
				<IoIosHeartEmpty className="w-full h-full" />
				<span className="absolute top-[-2px] right-[-3px] rounded-[50%] text-white w-[15px] h-[15px] text-center flex items-center justify-center bg-success text-[12px]">
					0
				</span>
			</Link>
			{/* Notification here */}
			<NotificationContainer />
			<Tippy
				interactive
				placement="bottom-start"
				render={(attrs) => (
					<div
						className="bg-white shadow-md rounded-md border border-darkBlue w-[350px] p-[5px] relative z-50 "
						tabIndex={-1}
						{...attrs}
					>
						<div
							className={`p-[15px] max-h-[360px] ${
								items.length > 0 ? "overflow-y-scroll" : ""
							} flex flex-col divide-y divide-gray-200`}
						>
							{items.length > 0 ? (
								items.map((item) => (
									<CartItem
										key={item.id}
										productCart={productsCart.find(product => product.id === item.product_id)}
										cartItem={item}
										handleDeleteCartItem={() =>
											handleDeleteCartItem(item.id)
										}
									/>
								))
							) : (
								<div className="flex flex-col gap-4 items-center justify-center text-black text-sm">
									<BsCart />
									<p className="text-sm font-light text-gray-700 text-center">
										Không có sản phẩm nào trong giỏ hàng của
										bạn
									</p>
								</div>
							)}
						</div>

						{items.length > 0 ? (
							<div className="p-[10px]">
								<div className="flex items-center justify-between mb-4">
									<span className="text-[15px] text-black font-medium">
										Tổng tiền:
									</span>
									<span className="text-[15px] text-darkBlue font-bold">
										{formatPriceVND(total_price)}
									</span>
								</div>
								<Button
									fontSize="text-sm"
									buttonSize="h-[43px]"
									fontWeight="font-light"
									color="text-white"
									background="bg-[#1b74e7]"
									rounded="rounded-xl"
									hoverEffect="hover:bg-primary"
								>
									Thanh toán
								</Button>
							</div>
						) : null}
					</div>
				)}
			>
				<Link
					to="/gio-hang"
					className="flex items-center justify-center gap-1 bg-primary rounded-xl h-[50px] p-[10px] text-white hover:text-darkBlue hover:bg-white transition-all duration-150 ease-linear cursor-pointer"
				>
					<span className=" text-sm font-medium hidden md:inline-block">
						Giỏ hàng
					</span>
					<div className="w-[30px] h-[30px] relative">
						<BsCart className="w-full h-full" />
						{cart_quantity > 0 && (
							<span className="absolute top-[-2px] right-[-3px] rounded-[50%] text-white w-[15px] h-[15px] text-center flex items-center justify-center bg-success text-[12px]">
								{cart_quantity > 0 ? cart_quantity : ""}
							</span>
						)}
					</div>
				</Link>
			</Tippy>
		</div>
	);
}

export default HeaderCart;

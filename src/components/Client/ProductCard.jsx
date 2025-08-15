import Button from "./Button";
import { FaRegHeart } from "react-icons/fa";
import { BsMinecart } from "react-icons/bs";
import formatPriceVND from "../../utils/formatPriceVND";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useCart } from "../../context/CartContext";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCartRedux } from "../../store/cart/cartSlice";

function ProductCard({
	product,
	hoverEffect,
	displayNumProductSold = false,
	
}) {
	const { addToCart } = useCart();
	const dispatch  = useDispatch();
	const handleAddProductToCart = (e) => {
		e.preventDefault?.();
		e.stopPropagation?.();
		
		addToCart(product);
		dispatch(addToCartRedux({ product }));
		toast.success("🛒 Đã thêm vào giỏ hàng!", {
			position: "top-right",
		});
	};
	const {
		id = 0,
		title = "Không có tiêu đề",
		price = 0,
		main_image = "",
	} = product || {};
	return (
		<Link
			to={`/san-pham/${id}`}
			className={`${hoverEffect} cursor-pointer hover:shadow-[0_0px_2px_0_#003cbf,_0_0px_6px_0px_#003cbf]
 rounded-md shadow-xl border border-gray-200  bg-white relative overflow-hidden group !inline-block !w-full`}
		>
			<div className="flex items-center justify-between p-[5px] absolute top-0 w-[100%] z-[2]">
				<Button
					background="bg-darkRed"
					fontSize="text-sm"
					hoverEffect="hover:none"
					padding="py-[5px] px-[10px]"
				>
					- 11%
				</Button>
				<FaRegHeart
					className="w-5 h-5 hover:cursor-pointer text-darkRed"
					color="redColor"
				/>
			</div>
			<div className="w-[100%] h-[250px] flex items-center justify-center">
				<img
					className=" h-full object-cover  group-hover:scale-105 transition-transform duration-300"
					src={main_image}
				/>
			</div>
			<div className="mt-2 px-[5px] py-[10px]">
				<h3 className="text-[16px] text-black line-clamp-2 font-bold h-[48px]">
					{title}
				</h3>
				<div className="flex items-center justify-between mt-1">
					<div className="flex flex-col items-start">
						<span className="text-[18px] font-bold text-success">
							{formatPriceVND(price)}
						</span>
						{/* <span className="text-[12px] font-bold text-[#666] line-through">
								1.000.000đ
							</span> */}
					</div>
					<Button
						rounded="rounded-[50%]"
						buttonHeight="w-[35px]"
						buttonWidth="h-[35px]"
						background="bg-darkBlue"
						hoverEffect="transition transform hover:-translate-y-[4px]"
						onClick={(e) => handleAddProductToCart(e)}
					>
						<BsMinecart className="w-[18px] h-[18px]" />
					</Button>
				</div>
				{displayNumProductSold && (
					<>
						<div className="h-2 w-[100%] rounded-md bg-[#dfdfdf] mt-2 relative">
							<span className="w-[38%] bg-primary inline-block rounded-md h-2 absolute left-0 progress_bar_fill bg-[linear-gradient(45deg,_rgba(255,255,255,0.15)_25%,_transparent_25%,_transparent_50%,_rgba(255,255,255,0.15)_50%,_rgba(255,255,255,0.15)_75%,_transparent_75%,_transparent)] bg-[length:40px_40px]"></span>
						</div>
						<span className="text-black font-bold text-sm">
							Đã bán 21
						</span>
					</>
				)}
			</div>
		</Link>
	);
}

export default ProductCard;

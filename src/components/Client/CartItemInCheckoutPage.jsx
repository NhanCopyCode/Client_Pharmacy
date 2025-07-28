import Logo from "../../assets/images/logo.png";
import formatPriceVND from "../../utils/formatPriceVND";

function CartItemInCheckoutPage({ title, image, quantity, price}) {
	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center gap-1 w-[80%]">
				<div className="w-[50px] h-[50px] shrink-0 bg-white border border-gray-200 rounded-sm p-1 flex items-center justify-center relative">
					<span className="absolute top-[-5px] right-[-5px] bg-[#2a9dcc] text-white w-4 h-4 text-center rounded-full text-[10px]">
						{quantity}
					</span>
					<img src={image} alt="" className="w-full object-cover" />
				</div>
				<span className="text-sm text-gray-800 font-bold">{title}</span>
			</div>

			<span className="text-[12px] text-gray-600">
				{formatPriceVND(price)}
			</span>
		</div>
	);
}

export default CartItemInCheckoutPage;

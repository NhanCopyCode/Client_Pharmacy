import Button from "./Button";
import { IoIosInformationCircleOutline } from "react-icons/io";

function DiscountItem() {
	return (
		<div className="flex items-stretch w-full flex-1 mt-8">
			{/* This div below */}
			<div className="border-2 border-primary border-r-0 rounded-md w-[75px] p-2 shrink-0 flex items-center justify-center after:content-['']">
				<img
					className="w-full object-cover"
					src="https://bizweb.dktcdn.net/100/491/197/themes/917410/assets/img_coupon_1.jpg?1736388760084"
					alt=""
				/>
			</div>
			<div className="border-2 border-primary rounded-md p-[5px] flex-1 border-l-1">
				<div className="flex items-center justify-between text-[16px]">
					<h4 className="text-black">DOLA10</h4>
					<Button
						background="bg-none"
						hoverEffect="hover:none"
						color="text-primary"
						buttonHeight="h-[25px]"
						buttonWidth="w-[25px]"
						padding="p-none"
					>
						<IoIosInformationCircleOutline className="w-full h-full" />
					</Button>
				</div>
				<span className="text-[12px]">
					Giảm 10.000đ giá trị đơn hàng
				</span>
				<div className="flex items-center justify-between">
					<span className="text-primary text-[12px]">
						HSD: 1/1/2024
					</span>
					<Button fontSize="text-sm">Sao chép</Button>
				</div>
			</div>
		</div>
	);
}

export default DiscountItem;

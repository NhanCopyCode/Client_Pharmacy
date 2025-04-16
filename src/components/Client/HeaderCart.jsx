import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";

import { IoLocationOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import CartItem from "./CartItem";
import Button from "./Button";
import NotificationContainer from "./NotificationContainer";

function HeaderCart() {
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
					3
				</span>
			</Link>
			{/* Notification here */}
			<NotificationContainer />
			<Tippy
				interactive
				placement="bottom-start"
				render={(attrs) => (
					<div
						className="bg-white shadow-md rounded-md border border-darkBlue w-[350px] p-[5px] "
						tabIndex={-1}
						{...attrs}
					>
						<div className="p-[15px] max-h-[360px] overflow-y-scroll flex flex-col divide-y divide-gray-200">
							<CartItem />
							<CartItem />
							<CartItem />
						</div>

						<div className="p-[10px]">
							<div className="flex items-center justify-between mb-4">
								<span className="text-[15px] text-black font-medium">
									Tổng tiền:
								</span>
								<span className="text-[15px] text-darkBlue font-bold">
									1.555.555đ
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
					</div>
				)}
			>
				<div className="flex items-center justify-center gap-1 bg-primary rounded-xl h-[50px] p-[10px] text-white hover:text-darkBlue hover:bg-white transition-all duration-150 ease-linear cursor-pointer">
					<span className=" text-sm font-medium hidden md:inline-block">
						Giỏ hàng
					</span>
					<div className="w-[30px] h-[30px] relative">
						<BsCart className="w-full h-full" />
						<span className="absolute top-[-2px] right-[-3px] rounded-[50%] text-white w-[15px] h-[15px] text-center flex items-center justify-center bg-success text-[12px]">
							3
						</span>
					</div>
				</div>
			</Tippy>
		</div>
	);
}

export default HeaderCart;

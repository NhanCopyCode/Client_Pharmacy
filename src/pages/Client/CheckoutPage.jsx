import {
	Button,
	CartItemInCheckoutPage,
	CheckoutForm,
	Container,
} from "../../components/Client";
import { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

function CheckoutPage() {
	const [isShow, setIsShow] = useState(false);
	return (
		<>
			<div className="flex items-center flex-col justify-center h-[88px] p-4">
				<img src={Logo} alt="" className="h-full object-cover" />
			</div>
			<div className="bg-[#fafafa] py-2 border-b-2 border-gray-200 block xl:hidden">
				<Container>
					<div className="flex items-center justify-between py-2">
						<div
							className="flex gap-2 items-center cursor-pointer"
							onClick={() => setIsShow(!isShow)}
						>
							<span className="text-[18px] font-bold text-black">
								Đơn hàng (12 sản phẩm)
							</span>
							{isShow ? <FaChevronUp /> : <FaChevronDown />}
						</div>
					</div>
					<div
						className={`overflow-hidden transition-all duration-300 ease-in-out ${
							isShow
								? "max-h-[1000px] opacity-100 py-4"
								: "max-h-0 opacity-0 p-0"
						} `}
					>
						<div className="flex flex-col gap-4 ">
							<CartItemInCheckoutPage
								image={""}
								title="Viên uống Okinawa Fucoidan +++ Jpanwell hỗ trợ tăng cường sức để kháng và trung hòa các gốc tự do (30 viên)"
								quantity={2}
								price={995000}
							/>
							<CartItemInCheckoutPage
								image={""}
								title="Viên uống Okinawa Fucoidan +++ Jpanwell hỗ trợ tăng cường sức để kháng và trung hòa các gốc tự do (30 viên)"
								quantity={2}
								price={995000}
							/>
							<CartItemInCheckoutPage
								image={""}
								title="Viên uống Okinawa Fucoidan +++ Jpanwell hỗ trợ tăng cường sức để kháng và trung hòa các gốc tự do (30 viên)"
								quantity={2}
								price={995000}
							/>
						</div>
					</div>
				</Container>
			</div>
			<div className="bg-[#fafafa] py-2 border-b-2 border-gray-200 block xl:hidden">
				<Container>
					<div className="flex items-center justify-between py-2 gap-2">
						<input
							className="p-3 border border-gray-300 rounded-md outline-0 w-[70%] bg-white"
							placeholder="Nhập mã giảm giá"
						/>
						<Button
							background="bg-[#2a9dcc]"
							subClass="w-[30%] h-full whitespace-nowrap !p-3"
						>
							Áp dụng
						</Button>
					</div>
				</Container>
			</div>
			<div
				className={`overflow-hidden transition-all duration-300 ease-in-out ${
					isShow
						? "max-h-[1000px] opacity-100"
						: "max-h-0 opacity-0 p-0"
				} `}
			>
				<div className="bg-[#fafafa] py-2 border-b-2 border-gray-200">
					<Container>
						<div className="flex items-center justify-between text-[18px] text-gray-600 p-2">
							<span>Tạm tính</span>
							<span>6.469.000₫</span>
						</div>
						<div className="flex items-center justify-between text-[18px] text-gray-600 p-2">
							<span>Tạm tính</span>
							<span>6.469.000₫</span>
						</div>
					</Container>
				</div>
				<div className="bg-[#fafafa] py-2 border-gray-200">
					<Container>
						<div className="flex items-center justify-between text-[18px] text-gray-600 p-2">
							<span>Tổng cộng</span>
							<span className="text-xl text-[#2a9dcc] font-bold">
								6.469.000₫
							</span>
						</div>
					</Container>
				</div>
			</div>
			<Container>
				<div className="grid grid-cols-12 gap-4">
					<div className="col-span-12 xl:col-span-8 p-7">
						<CheckoutForm />
					</div>

					<div className="col-span-12 hidden xl:block xl:col-span-4 bg-[#fafafa] xl:h-[100vh]">
						<div className="p-4 border-b border-gray-200">
							<span className="font-bold text-sm">
								Thông tin nhận hàng
							</span>
						</div>
						<div className="p-4 h-[280px] overflow-y-scroll border-b border-gray-300">
							<CartItemInCheckoutPage
								image={""}
								title="Viên uống Okinawa Fucoidan +++ Jpanwell hỗ trợ tăng cường sức để kháng và trung hòa các gốc tự do (30 viên)"
								quantity={2}
								price={995000}
							/>
							<CartItemInCheckoutPage
								image={""}
								title="Viên uống Okinawa Fucoidan +++ Jpanwell hỗ trợ tăng cường sức để kháng và trung hòa các gốc tự do (30 viên)"
								quantity={2}
								price={995000}
							/>
							<CartItemInCheckoutPage
								image={""}
								title="Viên uống Okinawa Fucoidan +++ Jpanwell hỗ trợ tăng cường sức để kháng và trung hòa các gốc tự do (30 viên)"
								quantity={2}
								price={995000}
							/>
							<CartItemInCheckoutPage
								image={""}
								title="Viên uống Okinawa Fucoidan +++ Jpanwell hỗ trợ tăng cường sức để kháng và trung hòa các gốc tự do (30 viên)"
								quantity={2}
								price={995000}
							/>
						</div>

						<div className="p-4 border-b border-gray-300 flex items-center justify-between flex-wrap gap-4">
							<input
								className="p-3 border border-gray-300 rounded-md outline-0"
								placeholder="Nhập mã giảm giá"
							/>
							<Button
								background="bg-[#2a9dcc]"
								subClass="w-[30%] h-full whitespace-nowrap !p-3"
							>
								Áp dụng
							</Button>
						</div>

						<div className="p-4  border-b border-gray-300 flex flex-col gap-4">
							<div className="flex items-center justify-between text-[16px] text-gray-600">
								<span>Tạm tính</span>
								<span>6.469.000₫</span>
							</div>
							<div className="flex items-center justify-between text-[16px] text-gray-600">
								<span>Phí vận chuyển</span>
								<span>6.469.000₫</span>
							</div>
						</div>

						<div className="p-4 flex items-center justify-between text-[16px] text-gray-600">
							<span>Tổng cộng</span>
							<span className="text-xl text-[#2a9dcc] font-bold">
								6.509.000₫
							</span>
						</div>

						<div className="px-4 py-2 flex items-center justify-between">
							<Button
								subClass="!p-0"
								leftIcon={<FaChevronLeft />}
								color="text-[#2a9dcc]"
								fontSize="text-sm"
								fontWeight="font-bold"
								background="bg-transparent"
								hoverEffect=""
							>
								Quay về giỏ hàng
							</Button>
							<Button
								background="bg-[#2a9dcc]"
								subClass="w-[30%] h-full whitespace-nowrap"
							>
								Đặt hàng
							</Button>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}

export default CheckoutPage;

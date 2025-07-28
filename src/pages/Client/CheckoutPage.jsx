import { Button, CartItemInCheckoutPage, CheckoutForm, Container } from "../../components/Client";
import Logo from "../../assets/images/logo.png";
import { FaChevronLeft } from "react-icons/fa";

function CheckoutPage() {
	return (
		<Container>
			<div className="grid grid-cols-12 gap-4">
				<div className="col-span-12 xl:col-span-8 p-7">
					<div className="flex items-center flex-col justify-center h-[88px] ">
						<img
							src={Logo}
							alt=""
							className="h-full object-cover"
						/>
					</div>
					<CheckoutForm />
				</div>

				<div className="col-span-12 xl:col-span-4 bg-[#fafafa] h-[100vh]">
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
							subClass="w-[30%] h-full whitespace-nowrap"
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
	);
}

export default CheckoutPage;

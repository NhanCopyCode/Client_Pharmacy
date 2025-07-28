import { useState } from "react";
import Button from "./Button";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FaChevronLeft } from "react-icons/fa";

function CheckoutForm() {
	const [selectedPayment, setSelectedPayment] = useState("bank");

	return (
		<div className="grid grid-cols-12 gap-4 mb-4">
			<div className="col-span-12 md:col-span-6 mt-4">
				<div className=" flex flex-col gap-3">
					<div className="flex items-center justify-between">
						<span className="font-bold text-[18px]">
							Thông tin nhận hàng
						</span>
						<div className="flex items-center gap-1 text-sm font-bold text-[#2a9dcc] cursor-pointer hover:text-[#2a6395]">
							<RiLogoutBoxLine />
							<span>Đăng xuất</span>
						</div>
					</div>
					<div className="p-[4px] w-full relative">
						<label className="text-sm font-bold text-gray-500 absolute top-1 left-[16px]">
							Họ và tên
						</label>
						<input
							className="w-full border border-gray-300 outline-0 text-sm p-2 rounded pt-[22px] px-[11px] pb-1"
							placeholder="Nhập họ và tên"
						/>
					</div>

					<div className="p-[4px] w-full relative">
						<label className="text-sm font-bold text-gray-500 absolute top-1 left-[16px]">
							Email
						</label>
						<input
							type="email"
							className="w-full border border-gray-300 outline-0 text-sm p-2 rounded pt-[22px] px-[11px] pb-1"
							placeholder="Nhập email"
						/>
					</div>

					<div className="p-[4px] w-full relative">
						<label className="text-sm font-bold text-gray-500 absolute top-1 left-[16px]">
							Số điện thoại
						</label>
						<input
							type="number"
							className="w-full border border-gray-300 outline-0 text-sm p-2 rounded pt-[22px] px-[11px] pb-1"
							placeholder="Nhập số điện thoại"
						/>
					</div>
					<div className="p-[4px] w-full relative">
						<label className="text-sm font-bold text-gray-500 absolute top-1 left-[16px]">
							Địa chỉ
						</label>
						<input
							className="w-full border border-gray-300 outline-0 text-sm p-2 rounded pt-[22px] px-[11px] pb-1"
							placeholder="Nhập địa chỉ"
						/>
					</div>
					<div className="p-[4px] w-full relative">
						<label className="text-sm font-bold text-gray-500 absolute top-1 left-[16px]">
							Ghi chú
						</label>
						<textarea
							rows="3"
							className="w-full border border-gray-300 outline-0 text-sm p-2 rounded pt-[22px] px-[11px] pb-1"
							placeholder="Nhập ghi chú"
						/>
					</div>
				</div>
			</div>

			<div className="col-span-12 md:col-span-6 mt-4">
				<div className="flex flex-col gap-3">
					<div className="flex items-center justify-between">
						<span className="font-bold text-[18px]">
							Vận chuyển
						</span>
					</div>

					<div className="border border-gray-400 flex items-center justify-between p-[14px] rounded-sm">
						<div className="flex items-center gap-3">
							<input
								type="radio"
								name="delivery_method"
								className="w-4 h-4"
								checked
							/>
							<span className="text-sm font-bold">
								Giao hàng tận nơi
							</span>
						</div>
						<span className="text-sm text-black">44.000đ</span>
					</div>

					<div className="flex items-center justify-between mt-6">
						<span className="font-bold text-[18px]">
							Thanh toán
						</span>
					</div>
					<div className="border border-gray-400 rounded-sm">
						<div
							className="flex items-center justify-between p-[14px] rounded-sm hover:cursor-pointer"
							onClick={() => setSelectedPayment("bank")}
						>
							<div className="flex items-center gap-3 cursor-pointer">
								<input
									type="radio"
									name="shipping"
									className="w-4 h-4"
									value="bank"
									checked={selectedPayment === "bank"}
									onChange={() => setSelectedPayment("bank")}
								/>
								<label
									id="shipping"
									className="text-sm font-bold"
								>
									Chuyển khoản
								</label>
							</div>
						</div>
						<div
							className="flex items-center justify-between p-[14px] border-t border-gray-400 hover:cursor-pointer"
							onClick={() => setSelectedPayment("cod")}
						>
							<div className="flex items-center gap-3">
								<input
									type="radio"
									name="shipping"
									className="w-4 h-4"
									value="cod"
									checked={selectedPayment === "cod"}
									onChange={() => setSelectedPayment("cod")}
								/>
								<label
									id="shipping"
									className="text-sm font-bold"
								>
									Thu hộ (COD)
								</label>
							</div>
						</div>
					</div>
					<div className="block xl:hidden">
						<div className="bg-[#357ebd] hover:bg-[#2a6395] py-3 px-6 cursor-pointer uppercase text-white text-xl rounded-sm text-center">
							Đặt hàng
						</div>
						<div className="flex items-center justify-center gap-2 text-sm text-[#2a6395]">
							<FaChevronLeft />
							<span className="font-bold">Quay về giỏ hàng</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CheckoutForm;

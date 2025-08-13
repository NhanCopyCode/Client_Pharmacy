import { useState } from "react";
import Button from "../../components/Client/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import formatPriceVND from "../../utils/formatPriceVND";
import CartEmptyIcon from "./CartEmptyIcon";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantityRedux } from "../../store/cartSlice";

function CartInfo() {
	const { items, total_price } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedTime, setSelectedTime] = useState(null);
	const [showForm, setShowForm] = useState(false);
	const [form, setForm] = useState({
		companyName: "",
		taxCode: "",
		address: "",
		email: "",
	});
	const [errors, setErrors] = useState({});

	const validateForm = () => {
		let newErrors = {};
		if (!form.companyName.trim()) {
			newErrors.companyName = "Vui lòng nhập tên công ty";
		}
		if (!form.taxCode.trim()) {
			newErrors.taxCode = "Vui lòng nhập mã số thuế";
		}
		if (!form.address.trim()) {
			newErrors.address = "Vui lòng nhập địa chỉ công ty";
		}
		if (!form.email.trim()) {
			newErrors.email = "Vui lòng nhập email nhận hóa đơn";
		} else if (!/\S+@\S+\.\S+/.test(form.email)) {
			newErrors.email = "Email không hợp lệ";
		}
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleCheckout = () => {
		if (showForm) {
			if (!validateForm()) {
				return; // Stop checkout if form invalid
			}
		}
		console.log("Proceed to checkout with:", {
			cart: items,
			deliveryDate: selectedDate,
			deliveryTime: selectedTime,
			invoiceInfo: showForm ? form : null,
		});
	};

	return (
		<div className="grid grid-cols-12 gap-4 mt-8">
			<div
				className={`border border-gray-200 shadow-md rounded-md p-2 ${
					items.length === 0
						? "md:col-span-12 col-span-12"
						: "md:col-span-9 col-span-12"
				}`}
			>
				<div className="relative overflow-x-auto">
					<table className="w-full text-sm text-left text-gray-500 border border-gray-200">
						<thead className="text-sm text-black bg-gray-50 font-bold border border-gray-200">
							<tr>
								<th className="px-6 py-3">
									Thông tin sản phẩm
								</th>
								<th className="px-6 py-3">Đơn giá</th>
								<th className="px-6 py-3">Số lượng</th>
								<th className="px-6 py-3">Thành tiền</th>
							</tr>
						</thead>
						<tbody>
							{items.length > 0 ? (
								items.map((item) => (
									<tr
										key={item.product.id}
										className="bg-white border-b border-gray-200 hover:bg-gray-50"
									>
										<th className="px-6 py-4 font-medium text-black whitespace-nowrap">
											<div className="flex items-center gap-4">
												<div className="w-[110px] h-[110px]">
													<img
														src={
															item.product
																.main_image ||
															"https://via.placeholder.com/110"
														}
														className="max-w-full max-h-full object-cover"
													/>
												</div>
												<div className="flex gap-1 flex-col items-start">
													<Link
														to={`/san-pham/${item.product.id}`}
														className="text-sm font-bold hover:text-primary"
													>
														{item.product.title}
													</Link>
													<Button
														subClassName="inline-block"
														background="bg-transparent"
														border="border-0"
														color="text-darkBlue"
														fontWeight="font-bold"
														padding="p-0"
													>
														Xóa
													</Button>
												</div>
											</div>
										</th>
										<td className="px-6 py-4 text-sm font-bold text-success">
											{formatPriceVND(item.product.price)}
										</td>
										<td className="px-6 py-4">
											<div className="inline-flex items-center gap-1 border border-darkBlue rounded-md p-[2px]">
												<Button
													buttonSize="w-[25px] h-[25px]"
													color="text-white"
													hoverEffect="hover:bg-primary"
													fontSize="text-[20px]"
													background="bg-darkBlue"
													onClick={() =>
														dispatch(
															updateQuantityRedux(
																{
																	productId:
																		item
																			.product
																			.id,
																	quantity:
																		item.quantity -
																		1,
																}
															)
														)
													}
												>
													-
												</Button>
												<input
													className="text-primary font-medium border-0 outline-0 w-[30px] h-[25px] text-center text-[15px]"
													value={item.quantity || 1}
													readOnly
												/>
												<Button
													buttonSize="w-[25px] h-[25px]"
													color="text-white"
													fontSize="text-[20px]"
													background="bg-darkBlue"
													hoverEffect="hover:bg-primary"
													onClick={() =>
														dispatch(
															updateQuantityRedux(
																{
																	productId:
																		item
																			.product
																			.id,
																	quantity:
																		item.quantity +
																		1,
																}
															)
														)
													}
												>
													+
												</Button>
											</div>
										</td>
										<td className="px-6 py-4 text-sm text-success font-bold">
											{formatPriceVND(item.finalPrice)}
										</td>
									</tr>
								))
							) : (
								<tr>
									<td
										colSpan="4"
										className="px-6 py-4 text-center"
									>
										<div className="flex flex-col items-center gap-2">
											<CartEmptyIcon className="w-20 h-20 text-gray-400 mb-2" />
											<span>
												Không có sản phẩm nào trong giỏ
												hàng
											</span>
										</div>
									</td>
								</tr>
							)}
						</tbody>
					</table>

					{items.length > 0 && (
						<div className="flex justify-end mt-8">
							<div className="w-[300px]">
								<div className="flex justify-between mb-4">
									<span className="text-[15px]">
										Tổng tiền:
									</span>
									<span className="text-[15px] text-success font-bold">
										{formatPriceVND(total_price)}
									</span>
								</div>
								<Button
									fontSize="text-sm"
									padding="py-[1px] px-[6px]"
									buttonHeight="h-[44px]"
									background="bg-darkBlue"
									hoverEffect="hover:bg-primary"
									onClick={handleCheckout}
								>
									Thanh toán
								</Button>
							</div>
						</div>
					)}
				</div>
			</div>

			{items.length > 0 && (
				<div className="md:col-span-3 col-span-12 border border-gray/30 shadow-md rounded-md p-[10px] h-fit">
					<h3 className="text-[18px] font-bold">
						Thời gian giao hàng
					</h3>
					<div className="flex items-center gap-4 mt-4">
						<DatePicker
							selected={selectedDate}
							onChange={(date) => setSelectedDate(date)}
							placeholderText="Chọn ngày"
							className="bg-gray-50 border h-[35px] border-gray-300 text-sm rounded-lg block w-full ps-3"
							minDate={new Date()}
						/>
						<DatePicker
							selected={selectedTime}
							onChange={(time) => setSelectedTime(time)}
							showTimeSelect
							showTimeSelectOnly
							timeIntervals={30}
							timeCaption="Giờ"
							dateFormat="HH:mm"
							placeholderText="Chọn giờ"
							className="bg-gray-50 border h-[35px] border-gray-300 text-sm rounded-lg block w-full ps-3"
						/>
					</div>

					<div className="flex items-center gap-4 mt-4">
						<input
							type="checkbox"
							id="show-bill"
							checked={showForm}
							onChange={() => setShowForm(!showForm)}
						/>
						<label htmlFor="show-bill">Xuất hóa đơn công ty</label>
					</div>

					{showForm && (
						<div className="flex flex-col gap-4 text-sm mt-4">
							<div>
								<label>Tên công ty</label>
								<input
									value={form.companyName}
									onChange={(e) =>
										setForm({
											...form,
											companyName: e.target.value,
										})
									}
									className="border p-1 rounded w-full border-gray-300 outline-0"
								/>
								{errors.companyName && (
									<span className="text-red-500 text-xs">
										{errors.companyName}
									</span>
								)}
							</div>
							<div>
								<label>Mã số thuế</label>
								<input
									value={form.taxCode}
									onChange={(e) =>
										setForm({
											...form,
											taxCode: e.target.value,
										})
									}
									className="border p-1 rounded w-full border-gray-300 outline-0"
								/>
								{errors.taxCode && (
									<span className="text-red-500 text-xs">
										{errors.taxCode}
									</span>
								)}
							</div>
							<div>
								<label>Địa chỉ công ty</label>
								<textarea
									value={form.address}
									onChange={(e) =>
										setForm({
											...form,
											address: e.target.value,
										})
									}
									className="border p-1 rounded w-full border-gray-300 outline-0"
								/>
								{errors.address && (
									<span className="text-red-500 text-xs">
										{errors.address}
									</span>
								)}
							</div>
							<div>
								<label>Email nhận hóa đơn</label>
								<input
									type="email"
									value={form.email}
									onChange={(e) =>
										setForm({
											...form,
											email: e.target.value,
										})
									}
									className="border p-1 rounded w-full border-gray-300 outline-0"
								/>
								{errors.email && (
									<span className="text-red-500 text-xs">
										{errors.email}
									</span>
								)}
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export default CartInfo;

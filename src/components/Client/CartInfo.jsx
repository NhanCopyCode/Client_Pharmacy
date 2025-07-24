import { useState } from "react";
import Button from "../../components/Client/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import formatPriceVND from "../../utils/formatPriceVND";
function CartInfo() {
	const { products, cartItems, totalPrice, updateCartItemQuantity } =
		useCart();
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

	const handleShowForm = () => {};

	const validate = () => {
		const newErrors = {};
		if (!form.companyName)
			newErrors.companyName = "Vui lòng nhập tên công ty";
		if (!form.taxCode) newErrors.taxCode = "Vui lòng nhập mã số thuế";
		if (!form.address) newErrors.address = "Vui lòng nhập địa chỉ";
		if (!form.email) newErrors.email = "Vui lòng nhập email";
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
			newErrors.email = "Email không hợp lệ";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};
	return (
		<div className="grid grid-cols-12 gap-4 mt-8">
			<div className="border border-gray-200 shadow-md rounded-md  p-2 md:col-span-9 col-span-12">
				<div className="relative overflow-x-auto  ">
					<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-gray-200">
						<thead className="text-sm text-black bg-gray-50 dark:bg-gray-700 font-bold dark:text-gray-400 border border-gray-200">
							<tr>
								<th scope="col" className="px-6 py-3">
									Thông tin sản phẩm
								</th>
								<th scope="col" className="px-6 py-3">
									Đơn giá
								</th>
								<th scope="col" className="px-6 py-3">
									Số lượng
								</th>
								<th scope="col" className="px-6 py-3">
									Thành tiền
								</th>
							</tr>
						</thead>
						<tbody>
							{products.length > 0 ? (
								products.map((product) => (
									<tr
										key={product.id}
										className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
									>
										<th
											scope="row"
											className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-white"
										>
											<div className="flex items-center gap-4">
												<div className="w-[110px] h-[110px]">
													<img
														src={
															product.main_image ||
															"https://bizweb.dktcdn.net/thumb/compact/100/491/197/products/00031920-top-grow-jpanwell-10-ch-3f81b1a4-df3b-41f3-869d-c64cb90506fa.png"
														}
														className="max-w-full max-h-full object-cover"
													/>
												</div>
												<div className="flex gap-1 flex-col items-start">
													<Link
														to={`/san-pham/${product.id}`}
														className="text-sm font-bold hover:text-primary"
													>
														{product.title}
													</Link>

													<Button
														subClassName="inline-block"
														background="bg-transparent"
														border="border-0"
														color="text-darkBlue"
														fontWeight="font-bold"
														padding="p-0"
														hoverEffect=""
													>
														Xóa
													</Button>
												</div>
											</div>
										</th>
										<td className="px-6 py-4 text-sm font-bold text-success">
											{formatPriceVND(product.price)}
										</td>
										<td className="px-6 py-4">
											<div className="inline-flex w-fit items-center justify-between  p-[2px] gap-1 rounded-md border border-darkBlue">
												<Button
													buttonSize="w-[25px] h-[25px]"
													color="text-white"
													hoverEffect="hover:bg-primary"
													fontSize="text-[20px]"
													background="bg-darkBlue"
													onClick={() =>
														updateCartItemQuantity(
															product.id,
															cartItems.find(
																(item) =>
																	item.productId ===
																	product.id
															)?.quantity - 1
														)
													}
												>
													-
												</Button>
												<input
													className="text-primary font-medium border-0 outline-0 inline-block w-[30px] h-[25px] text-center text-[15px]"
													value={
														cartItems.find(
															(item) =>
																item.productId ===
																product.id
														)?.quantity || 1
													}
													readOnly
												/>

												<Button
													buttonSize="w-[25px] h-[25px]"
													color="text-white"
													fontSize="text-[20px]"
													background="bg-darkBlue"
													hoverEffect="hover:bg-primary"
													onClick={() =>
														updateCartItemQuantity(
															product.id,
															cartItems.find(
																(item) =>
																	item.productId ===
																	product.id
															)?.quantity + 1
														)
													}
												>
													+
												</Button>
											</div>
										</td>
										<td className="px-6 py-4 text-sm text-success font-bold">
											{formatPriceVND(
												product.price *
													cartItems.find(
														(item) =>
															item.productId ===
															product.id
													)?.quantity
											)}
										</td>
									</tr>
								))
							) : (
								<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
									<td
										colSpan="4"
										className="px-6 py-4 text-center"
									>
										Không có sản phẩm nào trong giỏ hàng
									</td>
								</tr>
							)}
						</tbody>
					</table>
					<div className="flex justify-end mt-8">
						<div className="w-[300px]">
							<div className="flex items-center justify-between flex-1 mb-4">
								<span className="text-[15px] text-black">
									Tổng tiền:
								</span>
								<span className="text-[15px] text-success font-bold">
									{formatPriceVND(totalPrice)}
								</span>
							</div>
							<Button
								fontSize="text-sm"
								padding="py-[1px] px-[6px]"
								buttonHeight="h-[44px]"
								background="bg-darkBlue"
								hoverEffect="hover:bg-primary"
							>
								Thanh toán
							</Button>
						</div>
					</div>
				</div>
			</div>

			<div className="md:col-span-3 col-span-12 border border-gray/30 shadow-md rounded-md p-[10px] h-fit">
				<h3 className="text-[18px] font-bold">Thời gian giao hàng</h3>

				<div className="relative max-w-sm flex items-center justify-between h-[35px] gap-4 mt-4">
					<DatePicker
						selected={selectedDate}
						onChange={(date) => setSelectedDate(date)}
						placeholderText="Chọn ngày"
						className="bg-gray-50 border h-[35px] border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-3 p-2.5"
						minDate={new Date(Date.now())}
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
						className="bg-gray-50 border h-[35px] border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-3 p-2.5"
					/>

					{/* Add new timepicker in here */}
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
					<div className="flex flex-col gap-4 text-sm">
						<div className="flex flex-col  gap-2">
							<label htmlFor="company_name">Tên công ty</label>
							<input
								id="company_name"
								placeholder="Tên công ty"
								className="outline-0 border-0 px-[2px] py-[1px]"
								value={form.companyName}
								onChange={(e) =>
									setForm({
										...form,
										companyName: e.target.value,
									})
								}
							/>
							{errors.companyName && (
								<span className="text-red-500 text-xs">
									{errors.companyName}
								</span>
							)}
						</div>

						<div className="flex flex-col  gap-2">
							<label htmlFor="masothue">Mã số thuế</label>
							<input
								id="masothue"
								placeholder="Tên công ty"
								className="outline-0 border-0 px-[2px] py-[1px]"
								value={form.taxCode}
								onChange={(e) =>
									setForm({
										...form,
										taxCode: e.target.value,
									})
								}
							/>

							{errors.taxCode && (
								<span className="text-red-500 text-xs">
									{errors.taxCode}
								</span>
							)}
						</div>

						<div className="flex flex-col  gap-2">
							<label htmlFor="address">Địa chỉ công ty</label>
							<textarea
								id="address"
								placeholder="Địa chỉ công ty"
								className="outline-0 border-0 px-[2px] py-[1px]"
								value={form.address}
								onChange={(e) =>
									setForm({
										...form,
										address: e.target.value,
									})
								}
							/>

							{errors.address && (
								<span className="text-red-500 text-xs">
									{errors.address}
								</span>
							)}
						</div>
						<div className="flex flex-col  gap-2">
							<label htmlFor="email">Email nhận hóa đơn</label>
							<input
								id="email"
								placeholder="Email nhận hóa đơn"
								className="outline-0 border-0 px-[2px] py-[1px]"
								value={form.email}
								onChange={(e) =>
									setForm({
										...form,
										email: e.target.value,
									})
								}
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
		</div>
	);
}

export default CartInfo;

import { useState, useEffect } from "react";
import TiptapEditor from "../../../components/Admin/TiptapEditor";
import { Button } from "../../../components/Client";
import { adminPath } from "../../../utils/constants";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TitleHeader } from "../../../components/Admin";
import Select from "react-select";
import { readMoneyVND } from "../../../utils/moneyUtils";
import { readPercent } from "../../../utils/readPercent";

const discountTypeOptions = [
	{ value: "percent", label: "Giảm %" },
	{ value: "fixed", label: "Giảm tiền" },
];

const appliesToOptions = [
	{ value: "order", label: "Đơn hàng" },
	{ value: "product", label: "Sản phẩm" },
	{ value: "category", label: "Danh mục" },
];

function PromotionForm({
	model,
	initialData = {},
	mode = "create",
	errors = {},
	onSubmit,
}) {
	const [initialized, setInitialized] = useState(false);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [discountType, setDiscountType] = useState(null);
	const [discountValue, setDiscountValue] = useState("");
	const [maxDiscountValue, setMaxDiscountValue] = useState("");
	const [minOrderValue, setMinOrderValue] = useState("");
	const [appliesTo, setAppliesTo] = useState(null);
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [approved, setApproved] = useState(false);
	const [show_on_frontend, setShowOnFrontend] = useState(false);

	useEffect(() => {
		if (initialData && !initialized) {
			setTitle(initialData.title || "");
			setDescription(initialData.description || "");
			setDiscountType(
				discountTypeOptions.find(
					(opt) => opt.value === initialData.discount_type
				) || null
			);
			setDiscountValue(initialData.discount_value || "");
			setMaxDiscountValue(initialData.max_discount_value || "");
			setMinOrderValue(initialData.min_order_value || "");
			setAppliesTo(
				appliesToOptions.find(
					(opt) => opt.value === initialData.applies_to
				) || null
			);
			setStartDate(initialData.start_date?.slice(0, 16) || ""); // for datetime-local input
			setEndDate(initialData.end_date?.slice(0, 16) || "");
			setApproved(Boolean(initialData.approved));
			setShowOnFrontend(Boolean(initialData.show_on_frontend));

			setInitialized(true);
		}
	}, [initialData, initialized]);

	useEffect(() => {
		if (discountType?.value === "fixed") {
			setMaxDiscountValue("");
		}
	}, [discountType]);

	const handleSubmit = async () => {
		const formData = new FormData();
		formData.append("title", title);
		formData.append("description", description);
		formData.append("discount_type", discountType?.value || "");
		formData.append("discount_value", discountValue);
		formData.append("max_discount_value", maxDiscountValue);
		formData.append("min_order_value", minOrderValue);
		formData.append("applies_to", appliesTo?.value || "");
		formData.append("approved", approved ? 1 : 0);
		formData.append("show_on_frontend", show_on_frontend ? 1 : 0);
		formData.append("start_date", startDate);
		formData.append("end_date", endDate);
		if (mode === "edit") {
			formData.append("id", initialData.id);
		}

		await onSubmit(formData);
	};

	return (
		<>
			<TitleHeader
				to={adminPath.list("promotions")}
				title={"Thêm mới"}
				buttonIcon={<FaArrowLeftLong />}
				titleButton={"Danh sách"}
			/>
			<div className="p-3 overflow-y-scroll">
				<table className="table-auto w-full">
					<tbody>
						{/* Title */}
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-2">Tên khuyến mãi</td>
							<td className="col-span-9 p-2">
								<input
									type="text"
									value={title}
									onChange={(e) => setTitle(e.target.value)}
									className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
								/>
								<span className="text-redColor">
									{errors.title}
								</span>
							</td>
						</tr>

						{/* Description */}
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-2">Mô tả</td>
							<td className="col-span-9 p-2">
								<TiptapEditor
									placeholder="Nhập mô khuyến mãi"
									initialContent={description}
									onChange={setDescription}
								/>
								<span className="text-redColor">
									{errors.description}
								</span>
							</td>
						</tr>

						{/* Discount type */}
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-2">Loại giảm</td>
							<td className="col-span-9 p-2">
								<Select
									options={discountTypeOptions}
									value={discountType}
									onChange={setDiscountType}
								/>
								<span className="text-redColor">
									{errors.discount_type}
								</span>
							</td>
						</tr>

						{/* Discount value */}
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-2">Giá trị giảm</td>
							<td className="col-span-9 p-2">
								<input
									type="number"
									value={discountValue}
									min={0}
									max={
										discountType == "percent"
											? 100
											: undefined
									}
									onChange={(e) =>
										setDiscountValue(e.target.value)
									}
									className="w-full border  border-gray-300 rounded px-2 py-1 text-sm"
								/>
								<span className="text-success">
									{discountValue &&
										(discountType?.value === "percent"
											? readPercent(discountValue)
											: readMoneyVND(discountValue))}
								</span>

								<span className="text-redColor">
									{errors.discount_value}
								</span>
							</td>
						</tr>

						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-2">Giảm tối đa</td>
							<td className="col-span-9 p-2">
								<input
									type="number"
									value={maxDiscountValue}
									onChange={(e) =>
										setMaxDiscountValue(e.target.value)
									}
									disabled={discountType?.value === "fixed"}
									className={`w-full border rounded px-2 py-1 text-sm ${
										discountType?.value === "fixed"
											? "bg-gray- border-gray-200 cursor-not-allowed"
											: ""
									}`}
								/>
								<span className="text-success">
									{maxDiscountValue &&
										readMoneyVND(maxDiscountValue)}
								</span>
								<span className="text-redColor">
									{errors.max_discount_value}
								</span>
							</td>
						</tr>

						{/* Min order value */}
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-2">
								Giá trị tối thiểu
							</td>
							<td className="col-span-9 p-2">
								<input
									type="number"
									value={minOrderValue}
									onChange={(e) =>
										setMinOrderValue(e.target.value)
									}
									className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
								/>
								<span className="text-success">
									{minOrderValue &&
										readMoneyVND(minOrderValue)}
								</span>
								<span className="text-redColor">
									{errors.min_order_value}
								</span>
							</td>
						</tr>

						{/* Applies to */}
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-2">Áp dụng cho</td>
							<td className="col-span-9 p-2">
								<Select
									options={appliesToOptions}
									value={appliesTo}
									onChange={setAppliesTo}
								/>
								<span className="text-redColor">
									{errors.applies_to}
								</span>
							</td>
						</tr>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-2">Ngày bắt đầu</td>
							<td className="col-span-9 p-2">
								<input
									type="datetime-local"
									value={startDate}
									onChange={(e) =>
										setStartDate(e.target.value)
									}
									className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
								/>
								<span className="text-redColor">
									{errors.start_date}
								</span>
							</td>
						</tr>

						{/* End Date */}
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-2">Ngày kết thúc</td>
							<td className="col-span-9 p-2">
								<input
									type="datetime-local"
									value={endDate}
									onChange={(e) => setEndDate(e.target.value)}
									className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
								/>
								<span className="text-redColor">
									{errors.end_date}
								</span>
							</td>
						</tr>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-2">Hiển thị trên frontend</td>
							<td className="col-span-9 p-2">
								<input
									type="checkbox"
									checked={show_on_frontend}
									onChange={(e) =>
										setShowOnFrontend(e.target.checked)
									}
									className="w-5 h-5 accent-blue-600"
								/>
								<span className="text-redColor">
									{errors.show_on_frontend}
								</span>
							</td>
						</tr>
						{/* Approval */}
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-2">Duyệt</td>
							<td className="col-span-9 p-2">
								<input
									type="checkbox"
									checked={approved}
									onChange={(e) =>
										setApproved(e.target.checked)
									}
									className="w-5 h-5 accent-blue-600"
								/>
								<span className="text-redColor">
									{errors.approved}
								</span>
							</td>
						</tr>
					</tbody>
				</table>
				<div className="flex items-center justify-end gap-2 mt-4">
					<Button
						background="bg-gray"
						color="text-white"
						hoverEffect="hover:bg-gray/90"
						to={adminPath.list(model)}
					>
						Đóng
					</Button>
					<Button
						background="bg-darkBlue"
						hoverEffect="hover:bg-primary"
						onClick={handleSubmit}
					>
						{mode === "edit" ? "Cập nhật" : "Lưu"}
					</Button>
				</div>
			</div>
		</>
	);
}

export default PromotionForm;

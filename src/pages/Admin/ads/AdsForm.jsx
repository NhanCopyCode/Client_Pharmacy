import { useState, useEffect } from "react";
import ImageUploadBrand from "../../../components/Admin/ImageUpload";
import { Button } from "../../../components/Client";
import { adminPath } from "../../../utils/constants";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TitleHeader } from "../../../components/Admin";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import formatDate from "../../../utils/formatDate";


function AdsForm({
	model,
	initialData = {},
	mode = "create",
	errors = {},
	onSubmit,
}) {
	const [initialized, setInitialized] = useState(false);
	const [title, setTitle] = useState("");
	const [images, setImages] = useState([]);
	const [approved, setApproved] = useState(false);
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	useEffect(() => {
		if (initialData && !initialized) {
			setTitle(initialData.title || "");
			setApproved(Boolean(initialData.approved));

			setStartDate(
				initialData.start_date
					? new Date(initialData.start_date)
					: new Date()
			);
			setEndDate(
				initialData.end_date
					? new Date(initialData.end_date)
					: new Date()
			);

			if (initialData.image && typeof initialData.image === "string") {
				setImages([{ data_url: initialData.image }]);
			}

			setInitialized(true);
		}
	}, [initialData, initialized]);
	

	const handleSubmit = async () => {
		const formData = new FormData();
		formData.append("title", title);
		formData.append("approved", approved ? 1 : 0);
		formData.append("start_date", formatDate(startDate));
		formData.append("end_date", formatDate(endDate));
		if (images.length > 0 && images[0].file) {
			formData.append("image", images[0].file);
		}

		if (mode === "edit") {
			formData.append("id", initialData.id);
		}

		await onSubmit(formData);
	};

	return (
		<>
			<TitleHeader
				to={adminPath.list("ads")}
				title={"Thêm mới"}
				buttonIcon={<FaArrowLeftLong />}
				titleButton={"Danh sách"}
			/>
			<div className="p-3 overflow-y-scroll">
				<table className="table-auto w-full">
					<tbody>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								Tiêu đề quảng cáo
							</td>
							<td className="col-span-9 p-[10px]">
								<input
									type="text"
									className="border border-gray-300 w-full rounded-sm py-[5px] px-[10px] text-sm outline-0"
									value={title}
									onChange={(e) => setTitle(e.target.value)}
								/>
								<span className="text-redColor">
									{errors.title}
								</span>
							</td>
						</tr>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								Hình ảnh quảng cáo
							</td>
							<td className="col-span-9 p-[10px]">
								<ImageUploadBrand
									images={images}
									setImages={setImages}
									isUploadMultiple={false}
								/>

								<span className="text-redColor">
									{errors.image}
								</span>
							</td>
						</tr>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								Ngày bắt đầu
							</td>
							<td className="col-span-9 p-[10px]">
								<DatePicker
									selected={startDate}
									onChange={(date) => setStartDate(date)}
									showTimeSelect
									timeFormat="HH:mm"
									timeIntervals={15}
									dateFormat="yyyy-MM-dd HH:mm"
									className="border border-gray-300 w-full rounded-sm py-[5px] px-[10px] text-sm outline-0"
								/>
								<span className="text-redColor">
									{errors.start_date}
								</span>
							</td>
						</tr>

						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								Ngày kết thúc
							</td>
							<td className="col-span-9 p-[10px]">
								<DatePicker
									selected={endDate}
									onChange={(date) => setEndDate(date)}
									showTimeSelect
									timeFormat="HH:mm"
									timeIntervals={15}
									dateFormat="yyyy-MM-dd HH:mm"
									className="border border-gray-300 w-full rounded-sm py-[5px] px-[10px] text-sm outline-0"
								/>
								<span className="text-redColor">
									{errors.end_date}
								</span>
							</td>
						</tr>

						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								<label htmlFor="test">Duyệt</label>
							</td>
							<td className="col-span-9 p-[10px]">
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

export default AdsForm;

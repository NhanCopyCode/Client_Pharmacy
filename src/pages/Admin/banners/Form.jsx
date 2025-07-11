import { useState, useEffect } from "react";
import TiptapEditor from "../../../components/Admin/TiptapEditor";
import { Button } from "../../../components/Client";
import { adminPath } from "../../../utils/constants";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TitleHeader } from "../../../components/Admin";
import Select from "react-select";
import ImageUploadBrand from "../../../components/Admin/ImageUpload";
import bannerPositionService from "../../../services/BannerPositionService";

function Form({
	model,
	initialData = {},
	mode = "create",
	errors = {},
	onSubmit,
}) {
	const [initialized, setInitialized] = useState(false);
	const [title, setTitle] = useState("");
	const [image, setImage] = useState("");
	const [bannerPosition, setBannerPosition] = useState([]);
	const [positionSelected, setPositionSelected] = useState(null);
	const [approved, setApproved] = useState(false);

	useEffect(() => {
		try {
			const fetchData = async () => {
				const res =
					await bannerPositionService.getBannerPositionSelect();
				setBannerPosition(res.data);
			};

			fetchData();
		} catch (error) {
			console.log("Error from banners form: ", error);
		}
	}, []);
	useEffect(() => {
		if (initialData && !initialized && bannerPosition.length > 0) {
			setTitle(initialData.title || "");

			if (initialData.image && typeof initialData.image === "string") {
				setImage([{ data_url: initialData.image }]);
			}

			setApproved(Boolean(initialData.approved));

			const selectedPosition = bannerPosition.find(
				(option) => option.value === initialData.position_id
			);
			setPositionSelected(selectedPosition || null);

			setInitialized(true);
		}
	}, [initialData, initialized, bannerPosition]);

	const handleChange = (selectedOption) => {
		setPositionSelected(selectedOption);
	};
	const handleSubmit = async () => {
		const formData = new FormData();
		formData.append("title", title);
		formData.append("approved", approved ? 1 : 0);
		formData.append("position_id", positionSelected?.value || "");

		if (image.length > 0 && image[0].file) {
			formData.append("image", image[0].file);
		}
		if (mode === "edit") {
			formData.append("id", initialData.id);
		}
		await onSubmit(formData);
	};
	return (
		<>
			<TitleHeader
				to={adminPath.list("banners")}
				title={"Thêm mới"}
				buttonIcon={<FaArrowLeftLong />}
				titleButton={"Danh sách"}
			/>
			<div className="p-3 overflow-y-scroll">
				<table className="table-auto w-full">
					<tbody>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-2">Tên hình ảnh</td>
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

						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-2">Vị trí hiển thị</td>
							<td className="col-span-9 p-2">
								<Select
									placeholder="Chọn vị trí hiển thị..."
									value={positionSelected}
									onChange={handleChange}
									options={bannerPosition}
									isSearchable
									isClearable
								/>
								<span className="text-redColor">
									{errors.position_id}
								</span>
							</td>
						</tr>

						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								Hình ảnh banner
							</td>
							<td className="col-span-9 p-[10px]">
								<ImageUploadBrand
									images={image}
									setImages={setImage}
									isUploadMultiple={false}
								/>

								<span className="text-redColor">
									{errors.image}
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

export default Form;

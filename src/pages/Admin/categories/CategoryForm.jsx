import { useState, useEffect } from "react";
import ImageUploadBrand from "../../../components/Admin/ImageUpload";
import TiptapEditor from "../../../components/Admin/TiptapEditor";
import { Button, ModalGenerateText } from "../../../components/Client";
import { adminPath } from "../../../utils/constants";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TitleHeader } from "../../../components/Admin";
import Select from "react-select";
import categoryService from "../../../services/CategoryService";

function CategoryForm({
	model,
	initialData = {},
	mode = "create",
	errors = {},
	onSubmit,
}) {
	const [name, setName] = useState("");
	const [approved, setApproved] = useState(false);
	const [initialized, setInitialized] = useState(false);
	const [listParents, setListParents] = useState([]);
	const [outstanding, setOutstanding] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);
	const [images, setImages] = useState([]);

	useEffect(() => {
		const fetchListParents = async () => {
			try {
				const response = await categoryService.getListParents();
				const options = [
					{ value: 0, label: "Không có danh mục cha" },
					...response.data,
				];

				setListParents(options);
				if (mode === "create") {
					setSelectedOption(options[0]);
				}
			} catch (error) {
				console.log("error: ", error);
			}
		};

		fetchListParents();
	}, []);

	useEffect(() => {
		if (initialData && listParents.length > 0 && !initialized) {
			setName(initialData.name || "");

			const matchedOption = listParents.find(
				(opt) => opt.value === initialData.parentId
			);
			setSelectedOption(
				matchedOption || { value: 0, label: "Không có danh mục cha" }
			);
			setApproved(Boolean(initialData.approved));
			setOutstanding(Boolean(initialData.outstanding));

			if (initialData.image) {
				setImages([{ data_url: initialData.image }]);
			}

			setInitialized(true);
		}
	}, [initialData, initialized, listParents]);

	const handleSubmit = async () => {
		const formData = new FormData();
		formData.append("name", name);
		formData.append("parentId", selectedOption?.value || 0);
		formData.append("approved", approved ? 1 : 0);
		formData.append("outstanding", outstanding ? 1 : 0);

		if (images?.[0]?.file) {
			formData.append("image", images[0].file);
		}
		await onSubmit(formData);
	};

	return (
		<>
			<TitleHeader
				to={adminPath.list("categories")}
				title={"Thêm mới"}
				buttonIcon={<FaArrowLeftLong />}
				titleButton={"Danh sách"}
			/>
			<div className="p-3 overflow-y-scroll">
				<table className="table-auto w-full">
					<tbody>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								Tên danh mục
							</td>
							<td className="col-span-9 p-[10px]">
								<input
									type="text"
									placeholder="Nhập tên danh mục"
									value={name}
									onChange={(e) => setName(e.target.value)}
									className="border border-gray-300 w-full rounded-sm py-[5px] px-[10px] text-sm outline-0"
								/>
								<span className="text-redColor">
									{errors.name}
								</span>
							</td>
						</tr>

						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								<label htmlFor="category">
									Chọn danh mục cha
								</label>
							</td>
							<td className="col-span-9 p-[10px]">
								<Select
									id="category"
									className=" text-sm"
									placeholder="Chọn danh mục cha"
									value={selectedOption}
									onChange={setSelectedOption}
									options={listParents}
									isSearchable={true}
									isClearable={true}
								/>

								<span className="text-redColor">
									{errors.parentId}
								</span>
							</td>
						</tr>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								Hình ảnh hãng
							</td>
							<td className="col-span-9 p-[10px]">
								<ImageUploadBrand
									images={images}
									setImages={setImages}
								/>
								<span className="text-redColor">
									{errors.image}
								</span>
							</td>
						</tr>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								<label htmlFor="outstanding">Nổi bật</label>
							</td>
							<td className="col-span-9 p-[10px]">
								<input
									type="checkbox"
									checked={outstanding}
									onChange={(e) =>
										setOutstanding(e.target.checked)
									}
									className="w-5 h-5 accent-blue-600"
								/>
								<span className="text-redColor">
									{errors.outstanding}
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

export default CategoryForm;

import { useState, useEffect } from "react";
import ImageUploadBrand from "../../../components/Admin/ImageUpload";
import TiptapEditor from "../../../components/Admin/TiptapEditor";
import { Button, ModalGenerateText } from "../../../components/Client";
import { adminPath } from "../../../utils/constants";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TitleHeader } from "../../../components/Admin";
import Select from "react-select";
import productService from "../../../services/ProductServie";
import { readMoneyVND } from "../../../utils/moneyUtils";

function ProductForm({
	model,
	initialData = {},
	mode = "create",
	errors = {},
	onSubmit,
}) {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [approved, setApproved] = useState(false);
	const [initialized, setInitialized] = useState(false);
	const [listParents, setListParents] = useState([]);
	const [selectedOption, setSelectedOption] = useState(null);
	const [images, setImages] = useState([]);

	useEffect(() => {
		const fetchListParents = async () => {
			try {
				const response = await productService.getListParents();
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
		if (images?.[0]?.file) {
			formData.append("image", images[0].file);
		}
		await onSubmit(formData);
	};

	return (
		<>
			<TitleHeader
				to={adminPath.DANH_SACH_SAN_PHAM}
				title={"Thêm mới"}
				buttonIcon={<FaArrowLeftLong />}
				titleButton={"Danh sách"}
			/>
			<div className="p-3">
				<table className="table-auto w-full">
					<tbody>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								Tên sản phẩm
							</td>
							<td className="col-span-9 p-[10px]">
								<input
									type="text"
									className="border border-gray-300 w-full rounded-sm py-[5px] px-[10px] text-sm outline-0"
								/>
							</td>
						</tr>

						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								Giá sản phẩm
							</td>
							<td className="flex flex-col col-span-9">
								<div className=" p-[10px] w-full">
									<input
										type="number"
										className="border border-gray-300 w-full rounded-sm py-[5px] px-[10px] text-sm outline-0"
										value={price}
										onChange={(e) =>
											setPrice(e.target.value)
										}
									/>
								</div>
								{price && (
									<span className="text-success">
										{readMoneyVND(price)}
									</span>
								)}
							</td>
						</tr>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								<label htmlFor="category">Chọn danh mục</label>
							</td>
							<td className="col-span-9 p-[10px]">
								{/* <Select
									id="category"
									className=" text-sm"
									placeholder="Chọn danh mục"
									defaultValue={selectedOption}
									onChange={setSelectedOption}
									options={options}
								/> */}
							</td>
						</tr>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								<span>Mô tả sản phẩm</span>
								<ModalGenerateText
									service={productService}
									name={name}
									description={description}
								/>
							</td>
							<td className="col-span-9 p-[10px]">
								<TiptapEditor
									placeholder="Nhập mô tả hãng"
									initialContent={description}
									onChange={setDescription}
								/>
								<span className="text-redColor">
									{errors.description}
								</span>
							</td>
						</tr>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								Hình ảnh sản phẩm
							</td>
							<td className="col-span-9 p-[10px]">
								<ImageUploadBrand
									images={images}
									setImages={setImages}
									isUploadMultiple={true}
								/>

								<span className="text-redColor">
									{errors.image}
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

export default ProductForm;

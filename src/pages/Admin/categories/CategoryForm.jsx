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
	const [selectedOption, setSelectedOption] = useState(null);
	const [images, setImages] = useState([]);


	const onChange = (imageList) => {
		setImages(imageList);
	};

	useEffect(() => {
		const fetchListParents = async () => {
			try {
				const response = await categoryService.getListParents();
				const options = [
					{ value: 0, label: "Không có danh mục cha" },
					...response.data,
				];
				setListParents(options);
				setSelectedOption(options[0]);
			} catch (error) {
				console.log("error: ", error);
			}
		};

		fetchListParents();
	}, []);
	useEffect(() => {
		if (initialData && !initialized) {
			setName(initialData.name || "");
			setSelectedOption(initialData.parentId);
			setApproved(Boolean(initialData.approved));
			if (initialData.logo) {
				setImages([{ data_url: initialData.logo }]);
			}
			setInitialized(true);
		}
	}, [initialData, initialized]);

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
				to={adminPath.list("categories")}
				title={"Thêm mới"}
				buttonIcon={<FaArrowLeftLong />}
				titleButton={"Danh sách"}
			/>
			<div className="p-3">
				<table className="table-auto w-full">
					<tbody>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								Tên danh mục
							</td>
							<td className="col-span-9 p-[10px]">
								<input
									type="text"
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
									defaultValue={selectedOption}
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
						{/* <tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								<label htmlFor="test">Chọn ảnh</label>
							</td>
							<td className="col-span-9 p-[10px]">
								<ImageUploading
									multiple
									value={images}
									onChange={onChange}
									maxNumber={maxNumber}
									minNumber={minNumber}
									dataURLKey="data_url"
								>
									{({
										imageList,
										onImageUpload,
										onImageRemoveAll,
										onImageUpdate,
										onImageRemove,
										isDragging,
										dragProps,
									}) => (
										<div className="upload__image-wrapper">
											<button
												style={
													isDragging
														? { color: "red" }
														: undefined
												}
												onClick={onImageUpload}
												{...dragProps}
											>
												<input
													type="file"
													onClick={(e) =>
														e.preventDefault()
													}
												/>
											</button>
											&nbsp;
											<Button
												background="bg-darkRed"
												hoverEffect="hover:none"
												subClass="inline-block"
												onClick={onImageRemoveAll}
											>
												Xóa tất cả ảnh
											</Button>
											<div className=" grid grid-cols-12 gap-2">
												{imageList.map(
													(image, index) => (
														<div
															key={index}
															className="image-item col-span-4 p-2"
														>
															<img
																src={
																	image[
																		"data_url"
																	]
																}
																alt=""
																width="100"
																className="w-[100%] h-[100px] object-cover"
															/>
															<div className="image-item__btn-wrapper flex items-center justify-between gap-2 mt-2">
																<Button
																	background="bg-success"
																	onClick={() =>
																		onImageUpdate(
																			index
																		)
																	}
																>
																	Sửa
																</Button>
																<Button
																	background="bg-redColor"
																	hoverEffect="hover:bg-darkRed"
																	onClick={() =>
																		onImageRemove(
																			index
																		)
																	}
																>
																	Xóa
																</Button>
															</div>
														</div>
													)
												)}
											</div>
										</div>
									)}
								</ImageUploading>
								<span className="text-redColor">
									{errors.image}
								</span>
							</td>
						</tr> */}

						{/* <tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								<label htmlFor="test">Mô tả sản phẩm</label>
							</td>
							<td className="col-span-9 p-[10px]">
								<Editor placeholder="Nhập mô tả sản phẩm" />
							</td>
						</tr> */}
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

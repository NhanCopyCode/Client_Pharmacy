import Select from "react-select";
import { useState } from "react";
import ImageUploading from "react-images-uploading";
import { Editor } from "../../../components/Admin";

import { TitleHeader } from "../../../components/Admin";
import { Button } from "../../../components/Client";
import { FaArrowLeftLong } from "react-icons/fa6";
import { adminPath } from "../../../utils/constants";
import { readMoneyVND } from "../../../utils/moneyUtils";

const options = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
];
function AddNewPromotion() {
	const [price, setPrice] = useState("");
	const [selectedOption, setSelectedOption] = useState(null);
	const [images, setImages] = useState([]);
	const maxNumber = 69;
	const minNumber = 5;
	const onChange = (imageList, addUpdateIndex) => {
		console.log(imageList, addUpdateIndex);
		setImages(imageList);
	};

	const handleSetPrice = (e) => {
		setPrice(e.target.value);
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
										onChange={handleSetPrice}
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
								<Select
									id="category"
									className=" text-sm"
									placeholder="Chọn danh mục"
									defaultValue={selectedOption}
									onChange={setSelectedOption}
									options={options}
								/>
							</td>
						</tr>

						<tr className="grid grid-cols-12 gap-2">
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
										// write your building UI
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
																	Update
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
																	Remove
																</Button>
															</div>
														</div>
													)
												)}
											</div>
										</div>
									)}
								</ImageUploading>
							</td>
						</tr>

						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								<label htmlFor="test">Mô tả sản phẩm</label>
							</td>
							<td className="col-span-9 p-[10px]">
								<Editor placeholder="Nhập mô tả sản phẩm" />
							</td>
						</tr>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								<label htmlFor="test">Duyệt</label>
							</td>
							<td className="col-span-9 p-[10px]">
								<input
									id="test"
									type="checkbox"
									className="border border-gray-300 w-3 h-3 scale-150 accent-blue-600 rounded-sm py-[5px] px-[10px] text-sm outline-0"
								/>
							</td>
						</tr>
					</tbody>
				</table>
				<div className="flex items-center justify-end gap-2 mt-4">
					<Button
						background="bg-gray"
						color="text-white"
						hoverEffect="hover:bg-gray/90"
					>
						Đóng
					</Button>
					<Button
						background="bg-darkBlue"
						hoverEffect="hover:bg-primary"
					>
						Lưu
					</Button>
				</div>
			</div>
		</>
	);
}

export default AddNewPromotion;

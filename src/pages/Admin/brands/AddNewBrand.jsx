import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUploadBrand from "../../../components/Admin/ImageUpload";
import Editor from "../../../components/Admin/Editor";
import { TitleHeader } from "../../../components/Admin";
import { Button } from "../../../components/Client";
import { FaArrowLeftLong } from "react-icons/fa6";
import { adminPath } from "../../../utils/constants";
import brandService from "../../../services/BrandService";

function AddNewBrand({ model }) {
	const [name, setName] = useState("");
	const [approved, setApproved] = useState(false);
	const [images, setImages] = useState([]); 
	const [description, setDescription] = useState("");

	const navigate = useNavigate();

	const handleSubmit = async () => {
		const formData = new FormData();
		formData.append("name", name);
		formData.append("approved", approved ? 1 : 0);
		formData.append("description", description);

		if (images.length > 0) {
			formData.append("image", images[0].file);
		}

		try {
			await brandService.create(formData);
			console.log("Tạo hãng thành công");
			// navigate(adminPath.list(model));
		} catch (error) {
			alert("Tạo hãng thất bại. Kiểm tra console.");
		}
	};

	return (
		<>
			<TitleHeader
				to={adminPath.list(model)}
				title={"Thêm mới"}
				buttonIcon={<FaArrowLeftLong />}
				titleButton={"Danh sách"}
			/>
			<div className="p-3">
				<table className="table-auto w-full">
					<tbody>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">Tên hãng</td>
							<td className="col-span-9 p-[10px]">
								<input
									type="text"
									value={name}
									onChange={(e) => setName(e.target.value)}
									className="border border-gray-300 w-full rounded-sm py-[5px] px-[10px] text-sm outline-0"
								/>
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
							</td>
						</tr>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">Mô tả hãng</td>
							<td className="col-span-9 p-[10px]">
								<Editor
									placeholder="Nhập mô tả hãng"
									onChange={setDescription}
								/>
							</td>
						</tr>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">Duyệt</td>
							<td className="col-span-9 p-[10px]">
								<input
									type="checkbox"
									checked={approved}
									onChange={(e) =>
										setApproved(e.target.checked)
									}
									className="w-5 h-5 accent-blue-600"
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
						to={adminPath.list(model)}
					>
						Đóng
					</Button>
					<Button
						background="bg-darkBlue"
						hoverEffect="hover:bg-primary"
						onClick={handleSubmit}
					>
						Lưu
					</Button>
				</div>
			</div>
		</>
	);
}

export default AddNewBrand;

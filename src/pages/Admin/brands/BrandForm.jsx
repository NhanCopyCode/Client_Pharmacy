import { useState, useEffect } from "react";
import ImageUploadBrand from "../../../components/Admin/ImageUpload";
import TiptapEditor from "../../../components/Admin/TiptapEditor";
import { Button, ModalGenerateText } from "../../../components/Client";
import { adminPath } from "../../../utils/constants";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TitleHeader } from "../../../components/Admin";

function BrandForm({
	model,
	initialData = {},
	mode = "create",
	errors = {},
	onSubmit,
}) {
	const [name, setName] = useState("");
	const [approved, setApproved] = useState(false);
	const [images, setImages] = useState([]);
	const [description, setDescription] = useState("");
	const [initialized, setInitialized] = useState(false);

	useEffect(() => {
		if (initialData && !initialized) {
			setName(initialData.name || "");
			setApproved(Boolean(initialData.approved));
			setDescription(initialData.description || "");
			if (initialData.logo) {
				setImages([{ data_url: initialData.logo }]);
			}
			setInitialized(true);
		}
	}, [initialData, initialized]);

	const handleSubmit = async () => {
		const formData = new FormData();
		formData.append("name", name);
		formData.append("approved", approved ? 1 : 0);
		formData.append("description", description);
		if (images?.[0]?.file) {
			formData.append("logo", images[0].file);
		}
		await onSubmit(formData);
	};

	return (
		<>
			<TitleHeader
				to={adminPath.list(model)}
				title={mode === "edit" ? "Cập nhật" : "Thêm mới"}
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
								<span className="text-redColor">
									{errors.name}
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
									{errors.logo}
								</span>
							</td>
						</tr>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								<span>Mô tả hãng</span>
								<ModalGenerateText  name={name} description={description} />
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

export default BrandForm;

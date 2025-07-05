import { useState, useEffect } from "react";
import TiptapEditor from "../../../components/Admin/TiptapEditor";
import { Button } from "../../../components/Client";
import { adminPath } from "../../../utils/constants";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TitleHeader } from "../../../components/Admin";
import ImageUploadBrand from "../../../components/Admin/ImageUpload";

function Form({
	model,
	initialData = {},
	mode = "create",
	errors = {},
	onSubmit,
}) {
	const [initialized, setInitialized] = useState(false);
	const [name, setName] = useState("");
	const [src, setSrc] = useState("");
	const [image, setImage] = useState("");
	const [approved, setApproved] = useState(false);

	useEffect(() => {
		if (initialData && !initialized) {
			setName(initialData.name || "");
			setSrc(initialData.src || "");
			if (initialData.image && typeof initialData.image === "string") {
				setImage([{ data_url: initialData.image }]);
			}
			setApproved(Boolean(initialData.approved));
			setInitialized(true);
		}
	}, [initialData, initialized]);

	const handleSubmit = async () => {
		const formData = new FormData();
		formData.append("name", name);
		formData.append("src", src);
		formData.append("approved", approved ? 1 : 0);
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
				to={adminPath.list("videos")}
				title={"Thêm mới"}
				buttonIcon={<FaArrowLeftLong />}
				titleButton={"Danh sách"}
			/>
			<div className="p-3 overflow-y-scroll">
				<table className="table-auto w-full">
					<tbody>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-2">Tên video</td>
							<td className="col-span-9 p-2">
								<input
									type="text"
									value={name}
									onChange={(e) => setName(e.target.value)}
									className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
								/>
								<span className="text-redColor">
									{errors.name}
								</span>
							</td>
						</tr>

						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-2">Nhập link video</td>
							<td className="col-span-9 p-2">
								<input
									type="text"
									value={src}
									onChange={(e) => setSrc(e.target.value)}
									className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
								/>
								<span className="text-redColor">
									{errors.src}
								</span>
							</td>
						</tr>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								Hình ảnh video
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

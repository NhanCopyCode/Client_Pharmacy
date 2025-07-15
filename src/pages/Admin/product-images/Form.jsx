import { useState, useEffect } from "react";
import Select from "react-select";
import TiptapEditor from "../../../components/Admin/TiptapEditor";
import { Button, ModalGenerateText } from "../../../components/Client";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TitleHeader } from "../../../components/Admin";
import { adminPath } from "../../../utils/constants";
import postService from "../../../services/PostService";
import postCategoryService from "../../../services/PostCategoryService";
import ImageUploadBrand from "../../../components/Admin/ImageUpload";

function Form({
	model,
	initialData = {},
	mode = "create",
	errors = {},
	onSubmit,
}) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [approved, setApproved] = useState(false);
	const [initialized, setInitialized] = useState(false);
	const [userId, setUserId] = useState("");
	const [image, setImage] = useState(null);
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(null);

	useEffect(() => {
		if (initialData && !initialized) {
			setTitle(initialData.title || "");
			setDescription(initialData.description || "");
			setApproved(Boolean(initialData.approved));
			if (initialData.image) {
				setImage({ data_url: initialData.image });
			}
			if (initialData.post_category_id && initialData.category_name) {
				setSelectedCategory({
					value: initialData.post_category_id,
					label: initialData.category_name,
				});
			}
			setInitialized(true);
		}
	}, [initialData, initialized]);

	useEffect(() => {
		setUserId(JSON.parse(localStorage.getItem("user"))?.id);
		const fetchCategories = async () => {
			try {
				const res = await postCategoryService.getListCategories();

				setCategories(res.data);
			} catch (err) {
				console.error("Error loading categories:", err);
			}
		};
		fetchCategories();
	}, []);

	const handleSubmit = async () => {
		const formData = new FormData();
		formData.append("title", title);
		formData.append("description", description);
		formData.append("approved", approved ? 1 : 0);
		formData.append("userId", userId);
		if (selectedCategory?.value) {
			formData.append("post_category_id", selectedCategory.value);
		}
		if (image?.file) {
			formData.append("image", image.file);
		}
		if (mode === "edit") formData.append("id", initialData.id);
		await onSubmit(formData);
	};

	return (
		<>
			<TitleHeader
				to={adminPath.list(model)}
				title={mode === "edit" ? "Cập nhật bài viết" : "Thêm bài viết"}
				buttonIcon={<FaArrowLeftLong />}
				titleButton="Danh sách"
			/>

			<div className="p-3 overflow-y-scroll">
				<table className="table-auto w-full">
					<tbody>
						{/* Title */}
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-2">Tiêu đề</td>
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
							<td className="col-span-3 p-2">
								Danh mục bài viết
							</td>
							<td className="col-span-9 p-2">
								<Select
									placeholder="Chọn danh mục"
									options={categories}
									value={selectedCategory}
									onChange={(val) => setSelectedCategory(val)}
								/>
								<span className="text-redColor">
									{errors.post_category_id}
								</span>
							</td>
						</tr>
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-[10px]">
								Hình ảnh bài viết
							</td>
							<td className="col-span-9 p-[10px]">
								<ImageUploadBrand
									images={image ? [image] : []}
									setImages={(imgs) =>
										setImage(imgs[0] || null)
									}
									isUploadMultiple={false}
								/>

								<span className="text-redColor">
									{errors.image}
								</span>
							</td>
						</tr>
						{/* Description */}
						<tr className="grid grid-cols-12 gap-2">
							<td className="col-span-3 p-2">
								<span>Nội dung bài viết</span>
								<ModalGenerateText
									service={postService}
									name={title}
									description={description}
								/>
							</td>
							<td className="col-span-9 p-2">
								<TiptapEditor
									placeholder="Nhập nội dung bài viết"
									initialContent={description}
									onChange={setDescription}
								/>
								<span className="text-redColor">
									{errors.description}
								</span>
							</td>
						</tr>

						{/* Approved */}
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

				<div className="flex justify-end gap-2 mt-4">
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

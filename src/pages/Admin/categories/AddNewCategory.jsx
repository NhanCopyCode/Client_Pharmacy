import { useState } from "react";
import ImageUploading from "react-images-uploading";
import { Editor } from "../../../components/Admin";
import categoryService from "../../../services/CategoryService";
import { TitleHeader } from "../../../components/Admin";
import { Button } from "../../../components/Client";
import { FaArrowLeftLong } from "react-icons/fa6";
import CategoryForm from "./CategoryForm";
import { adminPath } from "../../../utils/constants";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const options = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
];
function AddNewCategory({ model}) {
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();
	const handleSubmit = async (formData) => {
		try {
			await categoryService.create(formData);
			await Swal.fire({
				icon: "success",
				title: "Thành công!",
				text: "Danh mục đã được thêm mới thành công.",
				showConfirmButton: true,
			});
			navigate(adminPath.list(model));
		} catch (error) {
			setErrors(error.response?.data?.errors || {});
			if (!error.response?.data?.errors) {
				Swal.fire({
					icon: "error",
					title: "Lỗi!",
					text: "Đã xảy ra lỗi không xác định. Vui lòng thử lại.",
				});
			}
		}
	};
	return (
		<CategoryForm model={model} errors={errors} onSubmit={handleSubmit} />
	);
}

export default AddNewCategory;

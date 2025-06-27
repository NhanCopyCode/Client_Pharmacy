import { useState } from "react";
import { adminPath } from "../../../utils/constants";
import ProductForm from "./ProductForm";
import { useNavigate } from "react-router-dom";
import productService from "../../../services/ProductServie";
import Swal from "sweetalert2";


function AddNewCategory({ model }) {
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();
	const handleSubmit = async (formData) => {
		try {
			await productService.create(formData);
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
		<ProductForm model={model} errors={errors} onSubmit={handleSubmit} />
	);
}

export default AddNewCategory;

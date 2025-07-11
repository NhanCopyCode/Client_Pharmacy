import { useState } from "react";
import { adminPath } from "../../../utils/constants";
import ProductForm from "./ProductForm";
import { useNavigate } from "react-router-dom";
import productService from "../../../services/ProductService";
import productImageService from "../../../services/ProductImageService";
import Swal from "sweetalert2";

function AddNewProduct({ model }) {
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();
	const handleSubmit = async ({ formData, images }) => {
		try {
			const response = await productService.create(formData);
			const productId = response?.data?.data?.id;

			if (images.length > 0 && productId) {
				const imageFormData = new FormData();
				imageFormData.append("productId", productId);
				images.forEach((image) => {
					if (image?.file) {
						imageFormData.append("images[]", image.file);
					}
				});
				console.log("insert image in this code: ", images);
				await productImageService.create(imageFormData);
			}

			await Swal.fire({
				icon: "success",
				title: "Thành công!",
				text: "Thêm mới thành công",
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

export default AddNewProduct;

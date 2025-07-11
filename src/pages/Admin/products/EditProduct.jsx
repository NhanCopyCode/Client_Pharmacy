import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { adminPath } from "../../../utils/constants";
import Swal from "sweetalert2";
import ProductForm from "./ProductForm";
import productService from "../../../services/ProductService";
import productImageService from "../../../services/ProductImageService";
import { TailSpin } from "react-loader-spinner"; 


function EditProduct({ model }) {
	const { id } = useParams();
	const navigate = useNavigate();
	const [initialData, setInitialData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [errors, setErrors] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await productService.getById(id);
				setInitialData(response.data.data);
			} catch (error) {
				if (error) {
					setErrors(error.response?.data?.errors || {});
					console.log("Lỗi khi lấy dữ liệu: ", error);
				}
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [id]);

	const handleSubmit = async ({ formData, images }) => {
		try {
			const response = await productService.update(id, formData);
			const productId = response?.data?.data?.id;

			if (productId) {
				const imagesToKeep = images.filter(
					(img) => !img.file && img.data_url
				);
				const imagesToUpload = images.filter((img) => img.file);

				const imageFormData = new FormData();
				imageFormData.append("productId", productId);

				imagesToKeep.forEach((img) => {
					imageFormData.append("existingImages[]", img.data_url);
				});

				imagesToUpload.forEach((img) => {
					imageFormData.append("images[]", img.file);
				});

				await productImageService.updateImagesForProduct(imageFormData);
			}

			await Swal.fire({
				icon: "success",
				title: "Thành công!",
				text: "Sản phẩm đã được cập nhật.",
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

	if (loading)
		return (
			<div className="flex justify-center items-center h-40">
				<TailSpin
					height="40"
					width="40"
					color="#4fa94d"
					ariaLabel="tail-spin-loading"
					radius="1"
					visible={true}
				/>
			</div>
		);

	return (
		<ProductForm
			model={model}
			mode="edit"
			initialData={initialData}
			onSubmit={handleSubmit}
			errors={errors}
		/>
	);
}

export default EditProduct;

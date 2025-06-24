import { useState } from "react";
import brandService from "../../../services/BrandService";
import BrandForm from "./BrandForm";
import { useNavigate } from "react-router-dom";
import { adminPath } from "../../../utils/constants";
import Swal from "sweetalert2";

function AddNewBrand({ model }) {
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();
	const handleSubmit = async (formData) => {
		try {
			await brandService.create(formData);
			await Swal.fire({
				icon: "success",
				title: "Thành công!",
				text: "Hãng đã được thêm mới thành công.",
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

	return <BrandForm model={model} errors={errors} onSubmit={handleSubmit} />;
}

export default AddNewBrand;

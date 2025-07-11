import { useState } from "react";
import { adminPath } from "../../../utils/constants";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import voucherService from "../../../services/VoucherService";
import Form from "./Form";
function AddNew({ model }) {
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();
	const handleSubmit = async (formData) => {
		try {
			await voucherService.create(formData);

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

	return <Form model={model} errors={errors} onSubmit={handleSubmit} />;
}

export default AddNew;

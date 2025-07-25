import { useState } from "react";
import { adminPath } from "../../../utils/constants";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AdsForm from "./AdsForm";
import adsService from "../../../services/AdsService";

function AddNewAds({ model }) {
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();
	const handleSubmit = async (formData) => {
		console.log("get in this handle submit", formData);
		try {
			await adsService.create(formData);
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

	return <AdsForm model={model} errors={errors} onSubmit={handleSubmit} />;
}

export default AddNewAds;

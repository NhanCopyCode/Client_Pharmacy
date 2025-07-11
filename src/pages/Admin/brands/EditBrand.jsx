import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import brandService from "../../../services/BrandService";
import BrandForm from "./BrandForm";
import { adminPath } from "../../../utils/constants";
import Swal from "sweetalert2";
import { TailSpin } from "react-loader-spinner"; 


function EditBrand({ model }) {
	const { id } = useParams();
	const navigate = useNavigate();
	const [initialData, setInitialData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [errors, setErrors] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await brandService.getById(id);
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

	const handleSubmit = async (formData) => {
		try {
			await brandService.update(id, formData);
			await Swal.fire({
				icon: "success",
				title: "Thành công!",
				text: "Cập nhật thành công.",
				showConfirmButton: true,
			});
			navigate(adminPath.list(model));
		} catch (error) {
			console.error("Lỗi khi cập nhật hãng:", error);
			setErrors(error.response?.data?.errors || {});
			if (error.response?.data?.errors) {
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
		<BrandForm
			model={model}
			mode="edit"
			initialData={initialData}
			onSubmit={handleSubmit}
			errors={errors}
		/>
	);
}

export default EditBrand;

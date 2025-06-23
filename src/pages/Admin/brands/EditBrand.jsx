import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import brandService from "../../../services/BrandService";
import BrandForm from "./BrandForm";
import { adminPath } from "../../../utils/constants";

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
				console.error("Không thể tải dữ liệu hãng:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [id]);

	const handleSubmit = async (formData) => {
		try {
			await brandService.update(id, formData);
			navigate(adminPath.list(model));
		} catch (error) {
			console.error("Lỗi khi cập nhật hãng:", error);
			setErrors(error.response?.data?.errors || {});
			alert("Cập nhật hãng thất bại!");	
		}
	};

	if (loading) return <p className="p-4">Đang tải dữ liệu...</p>;

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

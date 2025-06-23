import { useState } from "react";
import brandService from "../../../services/BrandService";
import BrandForm from "./BrandForm";
import { useNavigate } from "react-router-dom";
import { adminPath } from "../../../utils/constants";

function AddNewBrand({ model }) {
	const [errors, setErrors] = useState({});
	const navigate = useNavigate();
	const handleSubmit = async (formData) => {
		try {
			await brandService.create(formData);
			navigate(adminPath.list(model));
		} catch (error) {
			setErrors(error.response?.data?.errors || {});
		}
	};

	return <BrandForm model={model} errors={errors} onSubmit={handleSubmit} />;
}

export default AddNewBrand;

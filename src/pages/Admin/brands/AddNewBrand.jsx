import brandService from "../../../services/BrandService";
import BrandForm from "./BrandForm";

function AddNewBrand({ model }) {
	const handleSubmit = async (formData) => {
		await brandService.create(formData);
	};

	return <BrandForm model={model} onSubmit={handleSubmit} />;
}

export default AddNewBrand;
                                            
import { useParams } from "react-router-dom";
import { TitleHeader } from "../../../components/Admin";
import { FaArrowLeftLong } from "react-icons/fa6";
import { adminPath } from "../../../utils/constants";
import brandService from "../../../services/BrandService";
import { useEffect, useState } from "react";

function DetailBrand({ model }) {
	const [brand, setBrand] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const fetchBrand = async () => {
			try {
				const response = await brandService.getById(id);
				setBrand(response.data.data);
			} catch (error) {
				console.error("Error fetching brand details: ", error);
			}
		};

		fetchBrand();
	}, [id]);

	const { name, description, logo } = brand || {};

	return (
		<>
			<TitleHeader
				to={adminPath.list(model)}
				title={"Chi tiết"}
				buttonIcon={<FaArrowLeftLong />}
				titleButton={"Danh sách"}
			/>

			<div className="grid grid-cols-12 gap-3 p-3">
				<div className="col-span-3">ID:</div>
				<div className="col-span-9">{id}</div>

				<div className="col-span-3">Tên:</div>
				<div className="col-span-9">{name}</div>
				
				<div className="col-span-3">Logo:</div>
				<div className="col-span-9">
					<img src={logo} alt={name} />
				</div>
				<div className="col-span-3">Chi tiết:</div>
				<div
					className="col-span-9 prose max-w-none"
					dangerouslySetInnerHTML={{ __html: description }}
				></div>
			</div>
		</>
	);
}

export default DetailBrand;

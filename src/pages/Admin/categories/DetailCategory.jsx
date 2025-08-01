import { useParams } from "react-router-dom";
import { TitleHeader } from "../../../components/Admin";
import { FaArrowLeftLong } from "react-icons/fa6";
import { adminPath } from "../../../utils/constants";
import { useEffect, useState } from "react";
import categoryService from "../../../services/CategoryService";

function DetailCategory({ model }) {
	const [category, setCategory] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const fetchCategory = async () => {
			try {
				const response = await categoryService.getById(id);
				setCategory(response.data.data);
			} catch (error) {
				console.error("Error fetching category details: ", error);
			}
		};

		fetchCategory();
	}, [id]);

	const { name, parentName, image, outstanding, approved } = category || {};


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

				<div className="col-span-3">Danh mục cha:</div>
				<div className="col-span-9">
					{parentName ? (
						parentName
					) : (
						<p className="italic text-gray">
							Không có danh mục cha
						</p>
					)}
				</div>

				<div className="col-span-3">Hình ảnh:</div>
				<div className="col-span-9">
					{image ? (
						<img src={image} alt={name} />
					) : (
						<p className="italic text-gray">Không có hình ảnh</p>
					)}
				</div>

				<div className="col-span-3">Nổi bật:</div>
				<div className="col-span-9">
					{outstanding ? (
						<span className="text-green-600 font-semibold">
							Nổi bật
						</span>
					) : (
						<span className="text-gray-500 italic">
							Không nổi bật
						</span>
					)}
				</div>

				<div className="col-span-3">Duyệt:</div>
				<div className="col-span-9">
					{approved ? (
						<span className="text-green-600 font-semibold">
							Đã duyệt
						</span>
					) : (
						<span className="text-red-500 font-semibold">
							Chưa duyệt
						</span>
					)}
				</div>
			</div>
		</>
	);
}

export default DetailCategory;

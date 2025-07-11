import { useParams } from "react-router-dom";
import { TitleHeader } from "../../../components/Admin";
import { FaArrowLeftLong } from "react-icons/fa6";
import { adminPath } from "../../../utils/constants";
import { useEffect, useState } from "react";
import bannerPositionService from "../../../services/BannerPositionService";


function Detail({ model }) {
	const [data, setData] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await bannerPositionService.getById(id);
				setData(response.data.data);
			} catch (error) {
				console.error("Error fetching data details: ", error);
			}
		};

		fetchData();
	}, [id]);

	if (!data) return <div className="p-3 overflow-y-scroll">Đang tải...</div>;

	const { name,  approved } = data;

	return (
		<>
			<TitleHeader
				to={adminPath.list(model)}
				title="Chi tiết khuyến mãi"
				buttonIcon={<FaArrowLeftLong />}
				titleButton="Danh sách"
			/>

			<div className="grid grid-cols-12 gap-3 p-3 text-sm">
				<div className="col-span-3 font-semibold">ID:</div>
				<div className="col-span-9">{id}</div>

				<div className="col-span-3 font-semibold">Vị trí:</div>
				<div className="col-span-9">{name || "Không có"}</div>

				

				<div className="col-span-3 font-semibold">Duyệt:</div>
				<div className="col-span-9">
					{approved ? (
						<p className="text-green-600">Đã duyệt</p>
					) : (
						<p className="text-red-500">Chưa duyệt</p>
					)}
				</div>
			</div>
		</>
	);
}

export default Detail;

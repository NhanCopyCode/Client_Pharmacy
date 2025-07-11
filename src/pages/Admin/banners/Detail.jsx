import { useParams } from "react-router-dom";
import { TitleHeader } from "../../../components/Admin";
import { FaArrowLeftLong } from "react-icons/fa6";
import { adminPath } from "../../../utils/constants";
import { useEffect, useState } from "react";
import bannerService from "../../../services/BannerService";

function Detail({ model }) {
	const [data, setData] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await bannerService.getById(id);
				setData(response.data.data);
			} catch (error) {
				console.error("Error fetching data details: ", error);
			}
		};

		fetchData();
	}, [id]);

	if (!data) return <div className="p-3 overflow-y-scroll">Đang tải...</div>;

	const { title, image, position_name, approved } = data;

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

				<div className="col-span-3 font-semibold">Tên banner:</div>
				<div className="col-span-9">{title || "Không có"}</div>

				<div className="col-span-3 font-semibold">Vị trí banner:</div>
				<div className="col-span-9">{position_name || "Không có"}</div>

				<div className="col-span-3 font-semibold">Ảnh banner:</div>
				<div className="col-span-9">
					{image ? (
						<img
							src={image}
							alt="Thumbnail"
							className="w-[300px] rounded"
						/>
					) : (
						<span className="italic text-gray-500">
							Không có ảnh
						</span>
					)}
				</div>

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

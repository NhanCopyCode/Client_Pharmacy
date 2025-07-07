import { useParams } from "react-router-dom";
import { TitleHeader } from "../../../components/Admin";
import { FaArrowLeftLong } from "react-icons/fa6";
import { adminPath } from "../../../utils/constants";
import adsService from "../../../services/AdsService";
import { useEffect, useState } from "react";
import { format } from "date-fns";

function DetailAds({ model }) {
	const [ads, setAds] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const fetchAds = async () => {
			try {
				const response = await adsService.getById(id);
				setAds(response.data.data);
			} catch (error) {
				console.error("Error fetching brand details: ", error);
			}
		};

		fetchAds();
	}, [id]);
	const formatDateTime = (value) =>
		value ? format(new Date(value), "yyyy-MM-dd HH:mm:ss") : "";
	const { title, image, approved, start_date, end_date } = ads || {};

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
				<div className="col-span-9">{title}</div>

				<div className="col-span-3">Logo:</div>
				<div className="col-span-9">
					<img src={image} alt={title} />
				</div>
				<div className="col-span-3">Ngày bắt đầu:</div>
				<div className="col-span-9">{formatDateTime(start_date)}</div>

				<div className="col-span-3">Ngày kết thúc:</div>
				<div className="col-span-9">{formatDateTime(end_date)}</div>
				<div className="col-span-3">Duyệt:</div>
				<div className="col-span-9">
					{approved ? (
						<p className="text-success">Đã duyệt</p>
					) : (
						<p className="text-redColor">Chưa duyệt</p>
					)}
				</div>
			</div>
		</>
	);
}

export default DetailAds;

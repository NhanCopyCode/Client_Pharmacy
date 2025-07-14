import { useParams } from "react-router-dom";
import { TitleHeader } from "../../../components/Admin";
import { FaArrowLeftLong } from "react-icons/fa6";
import { adminPath } from "../../../utils/constants";
import { useEffect, useState } from "react";
import postCategoryService from "../../../services/PostCategoryService";


function Detail({ model }) {
	const [data, setData] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await postCategoryService.getById(id);
				setData(response.data.data);
			} catch (error) {
				console.error("Error fetching post details: ", error);
			}
		};

		fetchData();
	}, [id]);

	if (!data) return <div className="p-3 overflow-y-scroll">Đang tải...</div>;

	

	return (
		<>
			<TitleHeader
				to={adminPath.list(model)}
				title="Chi tiết bài viết"
				buttonIcon={<FaArrowLeftLong />}
				titleButton="Danh sách"
			/>

			<div className="grid grid-cols-12 gap-3 p-3 text-sm">
				<div className="col-span-3 font-semibold">ID:</div>
				<div className="col-span-9">{data.id}</div>

				<div className="col-span-3 font-semibold">Tiêu đề:</div>
				<div className="col-span-9">{data.title}</div>

				<div className="col-span-3">Duyệt:</div>
				<div className="col-span-9">
					{data.approved ? (
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

export default Detail;

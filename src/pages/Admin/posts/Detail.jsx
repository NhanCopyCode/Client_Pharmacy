import { useParams } from "react-router-dom";
import { TitleHeader } from "../../../components/Admin";
import { FaArrowLeftLong } from "react-icons/fa6";
import { adminPath } from "../../../utils/constants";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import postService from "../../../services/PostService";

function Detail({ model }) {
	const [data, setData] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await postService.getById(id);
				setData(response.data.data);
			} catch (error) {
				console.error("Error fetching post details: ", error);
			}
		};

		fetchData();
	}, [id]);

	if (!data) return <div className="p-3">Đang tải...</div>;

	const formatDate = (value) =>
		value ? format(new Date(value), "dd/MM/yyyy HH:mm") : "Không có";

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

				<div className="col-span-3 font-semibold">Mô tả:</div>
				<div
					className="col-span-9"
					dangerouslySetInnerHTML={{ __html: data.description }}
				/>

				<div className="col-span-3 font-semibold">Tên người tạo:</div>
				<div className="col-span-9">{data.userName}</div>

				<div className="col-span-3 font-semibold">Ngày tạo:</div>
				<div className="col-span-9">{formatDate(data.created_at)}</div>

				<div className="col-span-3 font-semibold">Ngày cập nhật:</div>
				<div className="col-span-9">{formatDate(data.updated_at)}</div>

				{"deleted_at" in data && (
					<>
						<div className="col-span-3 font-semibold">
							Đã xóa lúc:
						</div>
						<div className="col-span-9 text-red-500">
							{data.deleted_at
								? formatDate(data.deleted_at)
								: "Chưa bị xóa"}
						</div>
					</>
				)}
			</div>
		</>
	);
}

export default Detail;

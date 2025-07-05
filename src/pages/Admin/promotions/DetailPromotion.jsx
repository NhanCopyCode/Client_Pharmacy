import { useParams } from "react-router-dom";
import { TitleHeader } from "../../../components/Admin";
import { FaArrowLeftLong } from "react-icons/fa6";
import { adminPath } from "../../../utils/constants";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import promotionService from "../../../services/PromotionService";

function DetailPromotion({ model }) {
	const [promotion, setPromotion] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		const fetchPromotion = async () => {
			try {
				const response = await promotionService.getById(id);
				setPromotion(response.data.data);
			} catch (error) {
				console.error("Error fetching promotion details: ", error);
			}
		};

		fetchPromotion();
	}, [id]);

	if (!promotion)
		return <div className="p-3 overflow-y-scroll">Đang tải...</div>;

	const {
		title,
		description,
		discount_type,
		discount_value,
		max_discount_value,
		min_order_value,
		applies_to,
		start_date,
		end_date,
		approved,
	} = promotion;

	const formatCurrency = (value) =>
		value ? `${Number(value).toLocaleString()}₫` : "Không áp dụng";

	const formatDate = (value) =>
		value ? format(new Date(value), "dd/MM/yyyy HH:mm") : "Chưa có";

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

				<div className="col-span-3 font-semibold">Tên khuyến mãi:</div>
				<div className="col-span-9">{title}</div>

				<div className="col-span-3 font-semibold">Mô tả:</div>
				<div
					className="col-span-9"
					dangerouslySetInnerHTML={{ __html: description }}
				/>

				<div className="col-span-3 font-semibold">Loại giảm:</div>
				<div className="col-span-9">
					{discount_type === "percent"
						? "Phần trăm (%)"
						: "Giá cố định"}
				</div>

				<div className="col-span-3 font-semibold">Giá trị giảm:</div>
				<div className="col-span-9">
					{discount_type === "percent"
						? `${discount_value}%`
						: formatCurrency(discount_value)}
				</div>

				<div className="col-span-3 font-semibold">Giảm tối đa:</div>
				<div className="col-span-9">
					{formatCurrency(max_discount_value)}
				</div>

				<div className="col-span-3 font-semibold">
					Giá trị tối thiểu:
				</div>
				<div className="col-span-9">
					{formatCurrency(min_order_value)}
				</div>

				<div className="col-span-3 font-semibold">Áp dụng cho:</div>
				<div className="col-span-9">
					{applies_to === "order"
						? "Đơn hàng"
						: applies_to === "product"
						? "Sản phẩm"
						: applies_to === "category"
						? "Danh mục"
						: "Không xác định"}
				</div>

				<div className="col-span-3 font-semibold">Ngày bắt đầu:</div>
				<div className="col-span-9">{formatDate(start_date)}</div>

				<div className="col-span-3 font-semibold">Ngày kết thúc:</div>
				<div className="col-span-9">{formatDate(end_date)}</div>

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

export default DetailPromotion;

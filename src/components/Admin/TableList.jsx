import PropTypes from "prop-types";
import GroupActionButton from "./GroupActionButton";
import { Button } from "../Client";
import { useState } from "react";
import Swal from "sweetalert2";

function TableList({ columns, tableBody, model, onDeleteSuccess, service }) {
	console.log('service ', service);
	const [ids, setIds] = useState([]);
	const handleDelete = async () => {
		if (ids.length === 0) return;

		const result = await Swal.fire({
			title: "Bạn chắc chắn muốn xóa?",
			text: "Hành động này sẽ xóa tất cả các mục đã chọn và không thể khôi phục!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#d33",
			cancelButtonColor: "#3085d6",
			confirmButtonText: "Xóa",
			cancelButtonText: "Hủy",
		});

		if (!result.isConfirmed) return;

		try {
			await Promise.all(ids.map((id) => service.deleteById(id)));

			Swal.fire({
				icon: "success",
				title: "Xóa thành công",
				text: "Đã xóa tất cả các mục đã chọn.",
				showConfirmButton: true,
			});

			setIds([]);
			onDeleteSuccess();
		} catch (error) {
			console.error("Lỗi khi xóa:", error);
			Swal.fire({
				icon: "error",
				title: "Xóa thất bại",
				text: "Đã xảy ra lỗi khi xóa các mục.",
			});
		}
	};

	return (
		<>
			<table className="border-collapse border border-gray-300 w-full text-sm">
				<thead>
					<tr>
						{columns.map((col) => (
							<th
								key={col.key}
								className="border border-gray-300 p-2"
							>
								{col.label}
							</th>
						))}
						<th className="border border-gray-300 p-2">
							Hành động
						</th>
					</tr>
				</thead>
				<tbody>
					{tableBody?.map((item, rowIndex) => (
						<tr key={rowIndex} className="hover:bg-gray-100">
							{columns.map((col) => (
								<td
									key={col.key}
									className={`border border-gray-300 p-2 ${
										col.style || ""
									}`}
								>
									{renderCell(
										item[col.key],
										col.type,
										item.id,
										setIds,
										ids
									)}
								</td>
							))}
							<td className="border border-gray-300 p-2">
								<GroupActionButton
									id={item.id}
									model={model}
									onDeleteSuccess={onDeleteSuccess}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<div className="flex items-center gap-3 mt-4">
				<Button
					background="bg-redColor"
					hoverEffect="hover:bg-darkRed"
					onClick={handleDelete}
					disabled={ids.length === 0}
				>
					Xóa tất cả
				</Button>
			</div>
		</>
	);
}

function renderCell(value, type, id, setIdsFunction, ids) {
	if (type === "image") {
		return value ? (
			<img src={value} alt="" className="w-full object-cover rounded" />
		) : (
			<span className="text-gray-400 italic">Không có ảnh</span>
		);
	}

	if (type === "currency") {
		return value != null ? `${Number(value).toLocaleString()}₫` : "";
	}

	if (type === "boolean") {
		return value ? (
			<span className="text-green-600 font-semibold">Đã duyệt</span>
		) : (
			<span className="text-red-600 font-semibold">Chưa duyệt</span>
		);
	}

	if (type === "date") {
		return value ? new Date(value).toLocaleDateString("vi-VN") : "";
	}

	if (type === "html") {
		return (
			<div
				className="prose max-w-none line-clamp-5"
				dangerouslySetInnerHTML={{ __html: value }}
			></div>
		);
	}

	if (type === "checkbox") {
		return (
			<input
				type="checkbox"
				checked={value}
				className="w-4 h-4 accent-blue-600 cursor-pointer text-center"
				onChange={(e) => {
					if (e.target.checked) {
						if (!ids.includes(id)) {
							setIdsFunction([...ids, id]);
						}
					} else {
						setIdsFunction(ids.filter((i) => i !== id));
					}
				}}
			/>
		);
	}

	return value != null ? value : "";
}

TableList.propTypes = {
	columns: PropTypes.arrayOf(
		PropTypes.shape({
			key: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			type: PropTypes.string,
			style: PropTypes.string,
		})
	).isRequired,
	tableBody: PropTypes.array.isRequired,
	model: PropTypes.string.isRequired,
	onDeleteSuccess: PropTypes.func,
};

export default TableList;

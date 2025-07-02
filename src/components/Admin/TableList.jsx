import PropTypes from "prop-types";
import GroupActionButton from "./GroupActionButton";
import { Button } from "../Client";
import React, { useState } from "react";
import Swal from "sweetalert2";

function TableList({ columns, tableBody, model, onDeleteSuccess, service }) {
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
					
					{tableBody?.map((parent) => (
						<React.Fragment key={`parent-${parent.id}`}>
							<tr className="bg-gray-50 hover:bg-gray-100">
								{columns.map((col) => (
									<td
										key={col.key}
										className={`border border-gray-300 p-2 text-center ${
											col.style || ""
										}  ${
											parent?.children ? "font-bold" : ""
										}`}
									>
										{renderCell(
											parent[col.key],
											col.type,
											parent.id,
											setIds,
											ids,
											parent,
											col
										)}
									</td>
								))}
								<td className="border border-gray-300 p-2">
									<GroupActionButton
										id={parent.id}
										model={model}
										onDeleteSuccess={onDeleteSuccess}
										service={service}
									/>
								</td>
							</tr>

							{/* Children rows */}
							{parent?.children?.map((child) => (
								<tr
									key={`child-${child.id}`}
									className="hover:bg-gray-50 text-gray-700"
								>
									{columns.map((col) => (
										<td
											key={col.key}
											className={`border border-gray-200 p-2 ${
												col.style || ""
											}`}
										>
											<div className="text-center">
												{renderCell(
													child[col.key],
													col.type,
													child.id,
													setIds,
													ids,
													child,
													col
												)}
											</div>
										</td>
									))}
									<td className="border border-gray-200 p-2">
										<GroupActionButton
											id={child.id}
											model={model}
											onDeleteSuccess={onDeleteSuccess}
											service={service}
										/>
									</td>
								</tr>
							))}
						</React.Fragment>
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

function renderCell(value, type, id, setIdsFunction, ids,rowData = {}, col = {}) {
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
		return value == 1 ? (
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

	if (type === "parent") {
		return value ? (
			value
		) : (
			<p className="italic text-gray">Không có danh mục cha</p>
		);
	}

	if (type === "children") {
		return;
	}

	if (type === "badge") {
		const badgeColors = {
			percent: "bg-green-100 text-green-700",
			fixed: "bg-blue-100 text-blue-700",
			order: "bg-purple-100 text-purple-700",
			product: "bg-yellow-100 text-yellow-800",
			category: "bg-pink-100 text-pink-700",
		};

		const label =
			value === "percent"
				? "Giảm %" // Localized
				: value === "fixed"
				? "Giảm tiền"
				: value === "order"
				? "Đơn hàng"
				: value === "product"
				? "Sản phẩm"
				: value === "category"
				? "Danh mục"
				: value;

		return (
			<span
				className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
					badgeColors[value] || "bg-gray-100 text-gray-700"
				}`}
			>
				{label}
			</span>
		);
	}

	if(typeof col.render === 'function') {
		return col.render(value, rowData);
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

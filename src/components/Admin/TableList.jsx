import PropTypes from "prop-types";
import GroupActionButton from "./GroupActionButton";

function TableList({ columns, tableBody, model }) {
	return (
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
					<th className="border border-gray-300 p-2">Hành động</th>
				</tr>
			</thead>
			<tbody>
				{tableBody.map((item, rowIndex) => (
					<tr key={rowIndex} className="hover:bg-gray-100">
						{columns.map((col) => (
							<td
								key={col.key}
								className={`border border-gray-300 p-2 ${
									col.style || ""
								}`}
							>
								{renderCell(item[col.key], col.type)}
							</td>
						))}
						<td className="border border-gray-300 p-2">
							<GroupActionButton id={item.id} model={model} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

function renderCell(value, type) {
	if (type === "image") {
		return value ? (
			<img
				src={value}
				alt=""
				className="w-full object-cover rounded"
			/>
		) : (
			<span className="text-gray-400 italic">Không có ảnh</span>
		);
	}

	if (type === "currency") {
		return value != null ? `${Number(value).toLocaleString()}₫` : "";
	}

	if (type === "boolean") {
		return value ? (
			<span className="text-green-600 font-semibold">✔</span>
		) : (
			<span className="text-red-600 font-semibold">✖</span>
		);
	}

	if (type === "date") {
		return value ? new Date(value).toLocaleDateString("vi-VN") : "";
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
};

export default TableList;

import PropTypes from 'prop-types';
import GroupActionButton from './GroupActionButton';

function TableList({ tableHead, tableBody, model }) {
	return (
		<table className="border-collapse border border-gray-300 p-[10px] w-full">
			<thead>
				<tr>
					{tableHead.map((item) => (
						<th
							key={item}
							className="border border-gray-300 p-[10px]"
						>
							{item}
						</th>
					))}
				</tr>
			</thead>
			<tbody className="text-sm">
				{tableBody.map((item, index) => (
					<tr key={index} className="hover:bg-gray-200">
						<td className="border border-gray-300 p-[10px]">
							{item.id}
						</td>
						<td className="border border-gray-300 p-[10px]">
							{item.name}
						</td>
						<td className="border border-gray-300 p-[10px]">
							{item.description}
						</td>
						<td className="border border-gray-300 p-[10px]">
							<img
								src={item.logo}
								alt={item.name}
								className="w-10 h-10 object-cover"
							/>
						</td>
						<td className="border border-gray-300 p-[10px]">
							<GroupActionButton id={item.id} model={model} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

TableList.propTypes = {
	tableHead: PropTypes.array,
	tableBody: PropTypes.array,
	model: PropTypes.string.isRequired, 
};




export default TableList;

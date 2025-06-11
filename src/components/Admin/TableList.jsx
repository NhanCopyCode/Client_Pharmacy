import PropTypes from 'prop-types';

function TableList({tableHead, tableBody}) {
	return (
		<table className="border-collapse border border-gray-300 p-[10px] w-full">
			<thead>
				<tr>
					<th className="border border-gray-300 p-[10px]">Song</th>
					<th className="border border-gray-300 p-[10px]">Artist</th>
					<th className="border border-gray-300 p-[10px]">Year</th>
				</tr>
			</thead>
			<tbody className='text-sm'>
				<tr className='hover:bg-gray-200'>
					<td className="border border-gray-300 p-[10px]">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
					<td className="border border-gray-300 p-[10px]">Malcolm Lockyer</td>
					<td className="border border-gray-300 p-[10px]">1961</td>
				</tr>
				<tr className='hover:bg-gray-200'>
					<td className="border border-gray-300 p-[10px]">Witchy Woman</td>
					<td className="border border-gray-300 p-[10px]">The Eagles</td>
					<td className="border border-gray-300 p-[10px]">1972</td>
				</tr>
				<tr className='hover:bg-gray-200'>
					<td className="border border-gray-300 p-[10px]">Shining Star</td>
					<td className="border border-gray-300 p-[10px]">Earth, Wind, and Fire</td>
					<td className="border border-gray-300 p-[10px]">1975</td>
				</tr>
			</tbody>
		</table>
	);
}

TableList.propTypes = {
	tableHead: PropTypes.array,
	tableBody: PropTypes.array,
};

export default TableList;

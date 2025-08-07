function CartInfoAccountDetail() {
	return (
		<div className="flex flex-col">
			<h1 className="text-[19px] uppercase">Đơn hàng của bạn</h1>
			<table className="w-full mt-6">
				<thead className="bg-[#003cbf] text-white text-sm font-bold border-b border-[#dee2e6]">
					<tr>
						<th className="border border-white p-[5px]">
							Đơn hàng
						</th>
						<th className="border border-white p-[5px]">Ngày</th>
						<th className="border border-white p-[5px]">Địa chỉ</th>
						<th className="border border-white p-[5px]">
							Giá trị đơn hàng
						</th>
						<th className="border border-white p-[5px]">
							TT thanh toán
						</th>
						<th className="border border-white p-[5px]">
							TT vận chuyển
						</th>
					</tr>
				</thead>
				<tbody className="border border-[#dee2e6]">
					<tr>
						<td className="text-center p-4 text-sm" colSpan={6}>
							Không có đơn hàng nào
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default CartInfoAccountDetail;

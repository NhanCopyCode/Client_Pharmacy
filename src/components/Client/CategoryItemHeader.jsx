function CategoryItemHeader() {
	return (
		<div className="group rounded-md shadow-xl p-[5px] h-[70px] border border-gray-200 flex items-center hover:cursor-pointer hover:shadow-[0_0px_2px_0_#003cbf,0_0px_6px_0px_#003cbf]">
			<div className="w-[60px] h-[60px] overflow-hidden  flex-shrink-0 ">
				<img
					className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
					src="https://bizweb.dktcdn.net/thumb/large/100/491/197/collections/thuoc-ko-ke-don.png?v=1689578709147"
				/>
			</div>
			<span className="line-clamp-2 text-black text-sm ml-2 font-medium">
				Thuốc không kê đơn Thuốc không kê đơn
			</span>
		</div>
	);
}

export default CategoryItemHeader;

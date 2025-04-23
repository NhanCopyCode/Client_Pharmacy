function CategoryItem() {
	return (
		<div className="flex items-center gap-2 text-sm p-[5px] rounded-md border border-gray-100 cursor-pointer shadow-md hover:shadow-[0_0px_2px_0_#003cbf,0_0px_6px_0px_#003cbf]">
			<div className="w-[60px] h-[60px]">
				<img
					src="https://bizweb.dktcdn.net/thumb/large/100/491/197/collections/2-04thuc-pham-dinh-duong-2-04-nu.png?v=1689578208010"
					className="w-full object-cover"
				/>
			</div>
			<div className="flex flex-col gap-1">
				<h3 className="line-clamp-2 font-bold">Thực phẩm dinh dưỡng</h3>
				<span className="text-darkBlue font-bold">(29 sản phẩm)</span>
			</div>
		</div>
	);
}

export default CategoryItem;

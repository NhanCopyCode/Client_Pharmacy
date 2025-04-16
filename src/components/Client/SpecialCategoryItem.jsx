function SpecialCategoryItem() {
	return (
		<div className="flex flex-col items-center group hover:cursor-pointer transition-all duration-300">
			<img
				className="w-[100px] h-[100px] object-cover transition-transform duration-300 group-hover:scale-90"
				src="https://bizweb.dktcdn.net/100/491/197/themes/917410/assets/danhmuc_1.jpg?1736388760084"
				alt="Khuyến mãi hot"
			/>
			<span className="text-sm font-bold text-black mt-2 group-hover:text-primary">
				Khuyến mãi hot
			</span>
		</div>
	);
}

export default SpecialCategoryItem;

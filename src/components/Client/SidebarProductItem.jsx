function SidebarProductItem() {
	return (
		<div className="flex items-center gap-1 group cursor-pointer">
			<img
				className="max-w-[35%] w-[100%] px-[10px] object-cover"
				src="https://bizweb.dktcdn.net/thumb/large/100/491/197/products/00031920-top-grow-jpanwell-10-ch-3f81b1a4-df3b-41f3-869d-c64cb90506fa.png?v=1709696285150"
			/>
			<div className="flex flex-col gap-2 px-[10px]">
				<h3 className="text-[16px] text-black group-hover:text-primary">
					Demo sản phẩm có thuộc tính
				</h3>
				<div className="flex items-center gap-1">
					<span className="text-success font-bold text-[16px]">
						890.000₫
					</span>
					<span className="line-through text-gray text-sm ">
						1.000.000₫
					</span>
				</div>
			</div>
		</div>
	);
}

export default SidebarProductItem;

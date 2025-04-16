import PropTypes from "prop-types";

function SearchHeaderProduct({ urlImage, title, realPrice, discountPrice }) {
	return (
		<div className="flex items-center justify-start w-full gap-3 cursor-pointer py-2">
			<div className="w-20 h-20 flex-shrink-0">
				<img
					className="w-full h-full object-cover"
					src="https://bizweb.dktcdn.net/thumb/compact/100/491/197/products/00019020-an-ngon-tieu-hoa-khoe-b.png?v=1689754512710"
				/>
			</div>
			<div className="flex items-start flex-col ">
				<h3 className="line-clamp-2 md:line-clamp-1 text-[16px] font-light hover:text-darkBlue cursor-pointer">
					Dung dịch ăn ngon - Giúp bé ăn ngon miệng nhiều hơn nữa với
					kẹo kera Dung dịch ăn ngon - Giúp bé ăn ngon miệng nhiều hơn
					nữa với kẹo kera Dung dịch ăn ngon - Giúp bé ăn ngon miệng
					nhiều hơn nữa với kẹo kera Dung dịch ăn ngon - Giúp bé ăn
					ngon miệng nhiều hơn nữa với kẹo kera
				</h3>
				{/* {!discountPrice && (
					<span className="text-redColor text-sm">80.000đ</span>
				)} */}
				<span className="text-redColor text-sm">80.000đ</span>
			</div>
		</div>
	);
}

export default SearchHeaderProduct;

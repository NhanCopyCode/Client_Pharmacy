import PropTypes from "prop-types";

function SearchHeaderPost({ urlImage, title }) {
	return (
		<div className="flex items-center justify-center gap-3 cursor-pointer py-2">
			<div className="w-20 h-20 flex-shrink-0">
				<img
					className="w-full h-full object-cover"
					src="https://bizweb.dktcdn.net/thumb/compact/100/491/197/products/00019020-an-ngon-tieu-hoa-khoe-b.png?v=1689754512710"
				/>
			</div>
			<h3 className="line-clamp-3 text-[16px] font-light hover:text-darkBlue cursor-pointer">
				Uống sắt đi ngoài màu đen có nguy hiểm không? Cách phòng ngừa
				tình trạng thiếu sắt Uống sắt đi ngoài màu đen có nguy hiểm
				không? Cách phòng ngừa tình trạng thiếu sắt Uống sắt đi ngoài
				màu đen có nguy hiểm không? Cách phòng ngừa tình trạng thiếu sắt
			</h3>
		</div>
	);
}

export default SearchHeaderPost;

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function SearchHeaderProduct({ product, handleOnClick }) {
	const { id, main_image, title, price, discountPrice } = product;
	return (
		<Link
			to={`/san-pham/${id}`}
			onClick={handleOnClick}
			className="flex items-center justify-start w-full gap-3 cursor-pointer py-2"
		>
			<div className="w-20 h-20 flex-shrink-0">
				<img className="w-full h-full object-cover" src={main_image} />
			</div>
			<div className="flex items-start flex-col ">
				<h3 className="line-clamp-2 md:line-clamp-1 text-[16px] font-light hover:text-darkBlue cursor-pointer">
					{title}
				</h3>
				{!!discountPrice && (
					<span className="text-redColor text-sm">80.000đ</span>
				)}
				<span className="text-redColor text-sm">{price}đ</span>
			</div>
		</Link>
	);
}

export default SearchHeaderProduct;

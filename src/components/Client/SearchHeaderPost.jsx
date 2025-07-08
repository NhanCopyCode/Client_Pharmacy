import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SearchHeaderPost({ post, handleOnClick }) {
	const { id, title, image } = post;
	return (
		<Link
			to={"/tin-tuc/" + id}
			onClick={handleOnClick}
			className="flex items-center justify-center gap-3 cursor-pointer py-2"
		>
			<div className="w-20 h-20 flex-shrink-0">
				<img className="w-full h-full object-cover" src={image} />
			</div>
			<h3 className="line-clamp-3 text-[16px] font-light hover:text-darkBlue cursor-pointer">
				{title}
			</h3>
		</Link>
	);
}

export default SearchHeaderPost;

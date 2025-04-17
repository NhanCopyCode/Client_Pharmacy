import PropTypes from "prop-types";
import { FaAngleLeft } from "react-icons/fa6";
function SwiperPrevButton({ prevButton }) {
	return (
		<div
			className={`${prevButton} flex items-center justify-center rounded-r-[100px] rounded-l-none absolute left-0 top-[35%] w-[30px] h-[60px] z-10 cursor-pointer bg-gray-300/70 text-primary p-2`}
		>
			<FaAngleLeft className="w-4 h-4" />
		</div>
	);
}

SwiperPrevButton.propTypes = {
	prevButton: PropTypes.string,
};
export default SwiperPrevButton;

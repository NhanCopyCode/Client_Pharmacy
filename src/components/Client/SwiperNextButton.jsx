import PropTypes from 'prop-types';
import { FaAngleRight } from "react-icons/fa6";
function SwiperNextButton( { nextButton }) {
	return (
		<div className={`${nextButton} flex items-center justify-center rounded-l-[100px] rounded-r-none absolute w-[30px] h-[60px] right-0 top-[35%] z-10 cursor-pointer bg-gray-300/70 text-primary p-2 rounded-full`}>
			<FaAngleRight />
		</div>
	);
}

SwiperNextButton.propTypes = {
	nextButton: PropTypes.string,
}
export default SwiperNextButton;

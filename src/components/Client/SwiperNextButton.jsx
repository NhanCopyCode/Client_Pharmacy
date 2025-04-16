import { FaAngleRight } from "react-icons/fa6";
function SwiperNextButton() {
	return (
		<div className="flex items-center justify-center custom-next rounded-l-[100px] rounded-r-none absolute w-[30px] h-[60px] right-0 top-[35%] z-10 cursor-pointer bg-gray-300/70 text-primary p-2 rounded-full">
			<FaAngleRight />
		</div>
	);
}

export default SwiperNextButton;

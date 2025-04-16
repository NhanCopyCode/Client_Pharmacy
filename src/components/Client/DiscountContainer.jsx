import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperNextButton from "./SwiperNextButton";
import SwiperPrevButton from "./SwiperPrevButton";
import DiscountItem from "./DiscountItem";

function DiscountContainer() {
	return (
		<div className="relative mt-6">
			<SwiperPrevButton />
			<SwiperNextButton />
			<Swiper
				// install Swiper modules
				modules={[Navigation]}
				spaceBetween={20}
				slidesPerView={1}
				navigation={{
					nextEl: ".custom-next",
					prevEl: ".custom-prev",
				}}
				breakpoints={{
					640: {
						slidesPerView: 2,
					},
					850: {
						slidesPerView: 3,
					},
					1024: {
						slidesPerView: 4,
					},
					
				}}
			>
				<SwiperSlide className="w-full">
					<DiscountItem />
				</SwiperSlide>
				<SwiperSlide className="w-full">
					<DiscountItem />
				</SwiperSlide>
				<SwiperSlide className="w-full">
					<DiscountItem />
				</SwiperSlide>
				<SwiperSlide className="w-full">
					<DiscountItem />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default DiscountContainer;

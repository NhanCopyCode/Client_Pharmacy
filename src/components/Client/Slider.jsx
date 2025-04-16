import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css";

function Slider() {
	return (
		<Swiper
			slidesPerView={1}
			effect="fade"
			modules={[Pagination, EffectFade]}
			pagination={{ clickable: true }}
			onSlideChange={() => console.log("slide change")}
			onSwiper={(swiper) => console.log(swiper)}
		>
			<SwiperSlide>
				<img
					src="https://bizweb.dktcdn.net/100/491/197/themes/917410/assets/slider_1.jpg?1736388760084"
					className="w-full object-cover rounded-xl"
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src="https://bizweb.dktcdn.net/100/491/197/themes/917410/assets/slider_2.jpg?1736388760084"
					className="w-full object-cover rounded-xl"
				/>
			</SwiperSlide>
		</Swiper>
	);
}

export default Slider;

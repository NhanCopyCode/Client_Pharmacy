import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-fade";

function BannerPromotion() {
	return (
		<div className="mt-8">
			<Swiper
				className="!pb-8"
				slidesPerView={2}
				spaceBetween={20}
				modules={[Navigation]}
				pagination={{ clickable: true }}
			>
				<SwiperSlide>
					<img
						src="https://bizweb.dktcdn.net/100/491/197/themes/917410/assets/banner_2_banner_1.jpg?1736388760084"
						className="w-full object-cover"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://bizweb.dktcdn.net/100/491/197/themes/917410/assets/banner_2_banner_1.jpg?1736388760084"
						className="w-full object-cover"
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default BannerPromotion;

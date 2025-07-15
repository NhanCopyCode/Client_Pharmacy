import bannerService from "../../services/BannerService";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";

import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css";
import { useEffect, useState } from "react";
function BannerTopHeader() {
	const [bannersTop, setBannersTop] = useState([]);

	useEffect(() => {
		try {
			const fetchData = async () => {
				const response = await bannerService.getBannerTop();

				setBannersTop(response.data);
			};

			fetchData();
		} catch (error) {
			console.log("error at Banner top header component: ", error);
		}
	}, []);
	return (
		<div className="relative">
			<Swiper
				slidesPerView={1}
				effect="fade"
				modules={[Pagination, EffectFade]}
				pagination={{ clickable: true }}
			>
				{bannersTop.length > 0 &&
					bannersTop.map((slide) => {
						return (
							<SwiperSlide>
								<img
									src={slide.image}
									alt={slide.name}
									className="w-full h-full object-cover"
								/>
							</SwiperSlide>
						);
					})}
			</Swiper>
		</div>
	);
}

export default BannerTopHeader;

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css";

import bannerService from "../../services/BannerService";
import { useEffect, useState } from "react";

function Slider() {
	const [homePageSlider, setHomePageSlider] = useState([]);
	useEffect(() => {
		try {
			const fetchData = async() => {
				const res = await bannerService.getBannerHomePage();
				setHomePageSlider(res.data);
			}

			fetchData();
		} catch (error) {
			console.log("Error at Slider component: ", error);
		}
	}, [])
	return (
		<div className="mt-6 relative z-0">
			<Swiper
				slidesPerView={1}
				effect="fade"
				modules={[Pagination, EffectFade]}
				pagination={{ clickable: true }}
			>
				{
					homePageSlider.length > 0 &&
					homePageSlider.map(slide => {
						return (
							<SwiperSlide>
								<img
									src={slide.image}
									alt={slide.name}
									className="w-full object-cover rounded-xl"
								/>
							</SwiperSlide>
						);
					})
				}
				
				
			</Swiper>
		</div>
	);
}

export default Slider;

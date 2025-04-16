import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SpecialCategoryItem from "./SpecialCategoryItem";

import SwiperNextButton from "./SwiperNextButton";
import SwiperPrevButton from "./SwiperPrevButton";

function SpecialCategory() {
	return (
		<div className="mt-8">
			<h2 className="text-[30px] text-black font-bold ">
				Danh mục nổi bật
			</h2>
			<div className="relative">
				<SwiperPrevButton />
				<SwiperNextButton />
				<Swiper
					// install Swiper modules
					modules={[Navigation]}
					spaceBetween={20}
					slidesPerView={9}
					navigation={{
						nextEl: ".custom-next",
						prevEl: ".custom-prev",
					}}
				>
					<SwiperSlide>
						<SpecialCategoryItem />
					</SwiperSlide>
					<SwiperSlide>
						<SpecialCategoryItem />
					</SwiperSlide>
					<SwiperSlide>
						<SpecialCategoryItem />
					</SwiperSlide>
					<SwiperSlide>
						<SpecialCategoryItem />
					</SwiperSlide>
					<SwiperSlide>
						<SpecialCategoryItem />
					</SwiperSlide>
					<SwiperSlide>
						<SpecialCategoryItem />
					</SwiperSlide>
					<SwiperSlide>
						<SpecialCategoryItem />
					</SwiperSlide>
					<SwiperSlide>
						<SpecialCategoryItem />
					</SwiperSlide>
					<SwiperSlide>
						<SpecialCategoryItem />
					</SwiperSlide>
					<SwiperSlide>
						<SpecialCategoryItem />
					</SwiperSlide>
					<SwiperSlide>
						<SpecialCategoryItem />
					</SwiperSlide>
					<SwiperSlide>
						<SpecialCategoryItem />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}

export default SpecialCategory;

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css";
import SwiperPrevButton from "./SwiperPrevButton";
import SwiperNextButton from "./SwiperNextButton";
import CategoryItem from "./CategoryItem";

function CategoryList() {
	return (
		<div className="relative">
			<SwiperPrevButton prevButton={"categoryList-prev"} />
			<SwiperNextButton nextButton={"categoryList-next"} />
			<Swiper
				className="!pb-8 !pt-4"
				slidesPerView={2}
				spaceBetween={10}
				modules={[Navigation]}
				pagination={{ clickable: true }}
				navigation={{
					nextEl: ".categoryList-next",
					prevEl: ".categoryList-prev",
				}}
				breakpoints={{
					640: {
						slidesPerView: 3,
					},
					1024: {
						slidesPerView: 4,
					},
					1200: {
						slidesPerView: 6,
					},
				}}
			>
				<SwiperSlide>
					<CategoryItem />
				</SwiperSlide>
				<SwiperSlide>
					<CategoryItem />
				</SwiperSlide>
				<SwiperSlide>
					<CategoryItem />
				</SwiperSlide>
				<SwiperSlide>
					<CategoryItem />
				</SwiperSlide>
				<SwiperSlide>
					<CategoryItem />
				</SwiperSlide>
				<SwiperSlide>
					<CategoryItem />
				</SwiperSlide>
                
			</Swiper>
		</div>
	);
}

export default CategoryList;

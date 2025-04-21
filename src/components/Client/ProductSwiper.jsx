import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNextButton from "./SwiperNextButton";
import SwiperPrevButton from "./SwiperPrevButton";
import "swiper/css/pagination";
import "swiper/css";
import ProductCard from "./ProductCard";

function ProductSwiper() {
	return (
		<div>
			<h2 className="text-[30px] font-bold text-black mb-4">
				Sản phẩm liên quan
			</h2>
			<div className="relative">
				<SwiperPrevButton prevButton={"productSwiper1-prev"} />
				<SwiperNextButton nextButton={"productSwiper1-next"} />
				<Swiper
					className="!pb-8"
					slidesPerView={1}
					spaceBetween={20}
					modules={[Navigation]}
					pagination={{ clickable: true }}
					navigation={{
						nextEl: ".productSwiper1-next",
						prevEl: ".productSwiper1-prev",
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
						1280: {
							slidesPerView: 5,
						},
					}}
				>
					<SwiperSlide>
						<ProductCard />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCard />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCard />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCard />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCard />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}

export default ProductSwiper;

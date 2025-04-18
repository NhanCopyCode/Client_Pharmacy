import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css";
import Button from "./Button";
import ProductTrendingItem from "./ProductTrendingItem";
import SwiperPrevButton from "./SwiperPrevButton";
import SwiperNextButton from "./SwiperNextButton";

function ProductTrending() {
	return (
		<div className="mt-8 grid grid-cols-12 items-start">
			<div className="xl:col-span-3 col-span-12 flex flex-col">
				<h3 className="text-[20px] font-bold text-black mb-4">
					Sản phẩm xu hướng
				</h3>
				<Button buttonWidth="w-fit" background="bg-darkBlue" hoverEffect="hover:bg-primary">
					Xem thêm
				</Button>
			</div>
			<div className="xl:col-span-9 col-span-12 relative mt-4 xl:mt-0">
				<SwiperPrevButton prevButton={"product-prev"} />
				<SwiperNextButton nextButton={"product-next"} />
				<Swiper
					className="pb-4"
					slidesPerView={3}
					spaceBetween={15}
					modules={[Navigation]}
					navigation={{
						nextEl: ".product-next",
						prevEl: ".product-prev",
					}}
					pagination={{ clickable: true }}
					breakpoints={{
						640: {
							slidesPerView: 4,
						},
						1024: {
							slidesPerView: 6,
						},
						1200: {
							slidesPerView: 7,
						},
					}}
				>
					<SwiperSlide>
						<ProductTrendingItem />
					</SwiperSlide>
					<SwiperSlide>
						<ProductTrendingItem />
					</SwiperSlide>
					<SwiperSlide>
						<ProductTrendingItem />
					</SwiperSlide>
					<SwiperSlide>
						<ProductTrendingItem />
					</SwiperSlide>
					<SwiperSlide>
						<ProductTrendingItem />
					</SwiperSlide>
					<SwiperSlide>
						<ProductTrendingItem />
					</SwiperSlide>
					<SwiperSlide>
						<ProductTrendingItem />
					</SwiperSlide>
					<SwiperSlide>
						<ProductTrendingItem />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}

export default ProductTrending;

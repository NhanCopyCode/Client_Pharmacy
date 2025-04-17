import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css";
import ProductCard from "./ProductCart";
import { Link } from "react-router-dom";
import Button from "./Button";

function NewProductContainer() {
	return (
		<div className="mt-8">
			<h2 className="text-[30px] text-black font-bold ">Sản phẩm mới</h2>

			<div>
				<Swiper
					className="!pb-8"
					slidesPerView={1}
					spaceBetween={20}
					modules={[Navigation]}
					pagination={{ clickable: true }}
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
						1200: {
							slidesPerView: 5,
						},
					}}
				>
					<SwiperSlide>
						<ProductCard
							hoverEffect={
								"group-hover:scale-105 transition-transform duration-300"
							}
						/>
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

export default NewProductContainer;

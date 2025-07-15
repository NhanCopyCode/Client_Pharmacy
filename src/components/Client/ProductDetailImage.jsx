import { useState } from "react";
import { Controller, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNextButton from "./SwiperNextButton";
import SwiperPrevButton from "./SwiperPrevButton";
import "swiper/css";
import "swiper/css/pagination";

function ProductDetailImage({ images = [] }) {
	const [mainSwiper, setMainSwiper] = useState(null);
	const [thumbSwiper, setThumbSwiper] = useState(null);
	const [activeIndex, setActiveIndex] = useState(0);

	if (!images.length) return null;

	return (
		<div className="sticky top-3">
			{/* Main Swiper */}
			<div className="bg-white rounded-md shadow-md">
				<Swiper
					slidesPerView={1}
					spaceBetween={20}
					modules={[Navigation, Controller, Pagination]}
					onSwiper={setMainSwiper}
					controller={{ control: thumbSwiper }}
					pagination={{ clickable: true }}
					onSlideChange={(swiper) =>
						setActiveIndex(swiper.activeIndex)
					}
				>
					{images.map((img, index) => (
						<SwiperSlide key={img.id || index}>
							<img
								className="p-3 w-full object-contain"
								src={img.image}
								alt={`Hình ảnh sản phẩm ${index + 1}`}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			{/* Thumbnail Swiper */}
			<div className="relative mt-6">
				<SwiperPrevButton prevButton="productDetail-prev" />
				<SwiperNextButton nextButton="productDetail-next" />

				<Swiper
					slidesPerView={4}
					spaceBetween={20}
					modules={[Navigation, Controller]}
					onSwiper={setThumbSwiper}
					controller={{ control: mainSwiper }}
					navigation={{
						nextEl: ".productDetail-next",
						prevEl: ".productDetail-prev",
					}}
				>
					{images.map((img, index) => (
						<SwiperSlide
							key={img.id || index}
							className="!h-[80px]"
						>
							<div
								className={`p-1 h-full rounded-md shadow-sm border-2 cursor-pointer flex items-center justify-center ${
									activeIndex === index
										? "border-primary"
										: "border-gray-300"
								} hover:border-primary transition-all`}
								onClick={() => mainSwiper?.slideTo(index)}
							>
								<img
									className="h-full w-auto object-contain max-h-[80px]"
									src={img.image}
									alt={`Ảnh xem trước ${index + 1}`}
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default ProductDetailImage;

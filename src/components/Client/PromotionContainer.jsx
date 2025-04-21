import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css";
import flash from "../../assets/images/flash.svg";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import Button from "./Button";

function PromotionContainer() {
	return (
		<div className="mt-8 rounded-md bg-gradient-to-r from-darkBlue to-primary min-h-40 p-[10px]">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-1">
					<div className="h-[35px] scale-pulse">
						<img
							src={flash}
							className="h-[35px] w-auto object-cover "
						/>
					</div>

					<Link className="text-[26px] font-bold text-white hover:text-primary">
						Khuyến mãi hấp dẫn
					</Link>
				</div>
				<div className="text-sm text-white">
					<span>
						Chương trình đã kết thúc, hẹn gặp lại trong thời gian
						sớm nhất!
					</span>
				</div>
			</div>

			<div className="mt-4">
				<Swiper
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
						<ProductCard displayNumProductSold={true} />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCard displayNumProductSold={true} />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCard displayNumProductSold={true} />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCard displayNumProductSold={true} />
					</SwiperSlide>
					<SwiperSlide>
						<ProductCard displayNumProductSold={true} />
					</SwiperSlide>
				</Swiper>
			</div>
			<div className="flex items-center justify-center mt-6">
				<Button
					fontSize="text-[16px]"
					padding="py-[5px] px-[15px]"
					background="bg-white"
					color="text-black"
					border="border-2 border-primary"
					hoverEffect="hover:bg-primary hover:text-white"
					fontWeight="font-medium"
				>
					Xem tất cả
				</Button>
			</div>
		</div>
	);
}

export default PromotionContainer;

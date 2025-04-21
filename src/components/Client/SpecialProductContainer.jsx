import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css";
import ProductCard from "./ProductCard";
import Button from "./Button";

function SpecialProductContainer() {
	return (
		<div className="mt-8">
			<h2 className="text-[30px] text-black font-bold ">
				Sản phẩm nổi bật
			</h2>
			<div className="grid grid-cols-12 gap-4 mt-4">
				<div className="xxl:col-span-3 col-span-6">
					<Swiper
						slidesPerView={1}
						modules={[Pagination]}
						pagination={{ clickable: true }}
					>
						<SwiperSlide>
							<img
								src="https://bizweb.dktcdn.net/100/491/197/themes/917410/assets/image_noibat2.png?1736388760084"
								className="w-full object-cover"
							/>
						</SwiperSlide>
						<SwiperSlide>
							<img
								src="https://bizweb.dktcdn.net/100/491/197/themes/917410/assets/image_noibat2.png?1736388760084"
								className="w-full object-cover"
							/>
						</SwiperSlide>
					</Swiper>
				</div>
				<div className="xxl:col-span-3 xl:col-span-3 col-span-6">
					<ProductCard />
				</div>
				<div className="xxl:col-span-3 xl:col-span-3 col-span-6">
					<ProductCard />
				</div>
				<div className="xxl:col-span-3 xl:col-span-3 col-span-6">
					<ProductCard />
				</div>
				<div className="xxl:col-span-3 xl:col-span-3 col-span-6">
					<ProductCard />
				</div>
				<div className="xxl:col-span-3 xl:col-span-3 col-span-6">
					<ProductCard />
				</div>
				<div className="xxl:col-span-3 xl:col-span-3 col-span-6">
					<ProductCard />
				</div>
				<div className="xxl:col-span-3 xl:col-span-3 col-span-6">
					<ProductCard />
				</div>
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

export default SpecialProductContainer;

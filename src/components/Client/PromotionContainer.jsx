import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css";

import flash from "../../assets/images/flash.svg";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useEffect, useState } from "react";
import CountdownTimer from "./CountDownTimer";
function PromotionContainer({ promotions }) {
	const [promotionsState, setPromotionsState] = useState([]);

	useEffect(() => {
		setPromotionsState(promotions);
	}, [promotions]);

	return (
		<div className="mt-8 rounded-md bg-gradient-to-r from-darkBlue to-primary min-h-40 p-[10px]">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-1">
					<div className="h-[35px] scale-pulse">
						<img
							src={flash}
							className="h-[35px] w-auto object-cover"
						/>
					</div>
					<Link className="text-[26px] font-bold text-white hover:text-primary">
						Khuyến mãi hấp dẫn
					</Link>
				</div>
				{/* <div className="text-sm text-white">
					<span>
						Chương trình đã kết thúc, hẹn gặp lại trong thời gian
						sớm nhất!
					</span>
				</div> */}
			</div>

			{promotionsState.length > 0 &&
				promotionsState.map((promotion) => (
					<div key={promotion.id} className="mt-8">
						<div className="flex items-center justify-between">
							<h3 className="text-xl font-semibold text-white mb-4">
								{promotion.title}
							</h3>

							<CountdownTimer endDate={promotion.end_date} />
						</div>
						<Swiper
							slidesPerView={1}
							spaceBetween={20}
							modules={[Navigation]}
							pagination={{ clickable: true }}
							breakpoints={{
								640: { slidesPerView: 2 },
								850: { slidesPerView: 3 },
								1024: { slidesPerView: 4 },
								1200: { slidesPerView: 5 },
							}}
						>
							{promotion.products &&
								promotion.products.map((product) => (
									<SwiperSlide key={product.id}>
										<ProductCard
											displayNumProductSold={true}
											product={product}
										/>
									</SwiperSlide>
								))}
						</Swiper>
					</div>
				))}

			<div className="flex items-center justify-center mt-6">
				<Button
					fontSize="text-[16px]"
					padding="py-[5px] px-[15px]"
					background="bg-white"
					color="text-black"
					border="border-2 border-primary"
					hoverEffect="hover:bg-primary hover:text-white"
					fontWeight="font-medium"
					to={"/san-pham-khuyen-mai"}
				>
					Xem tất cả
				</Button>
			</div>
		</div>
	);
}

export default PromotionContainer;

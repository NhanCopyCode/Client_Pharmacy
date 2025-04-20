import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css";
import SwiperNextButton from "./SwiperNextButton";
import SwiperPrevButton from "./SwiperPrevButton";
import PolicyItem from "./PolicyItem";

function PolicyContainer() {
	return (
		<div className="mt-8">
			<div className="mt-4 relative">
				<SwiperPrevButton prevButton={"policy-prev"} />
				<SwiperNextButton nextButton={"policy-next"} />
				<Swiper
					slidesPerView={1}
					spaceBetween={15}
					modules={[Navigation]}
					pagination={{ clickable: true }}
					breakpoints={{
						640: {
							slidesPerView: 2,
						},
						1024: {
							slidesPerView: 3,
						},
						1200: {
							slidesPerView: 4,
						},
					}}
					navigation={{
						nextEl: ".policy-next",
						prevEl: ".policy-prev",
					}}
				>
					<SwiperSlide>
						<PolicyItem
							title={"Miễn phí vẫn chuyển"}
							description="Cho tất cả đơn hàng trong nội thành Hồ Chí Minh"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<PolicyItem
							title={"Miễn phí vẫn chuyển"}
							description="Cho tất cả đơn hàng trong nội thành Hồ Chí Minh"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<PolicyItem
							title={"Miễn phí vẫn chuyển"}
							description="Cho tất cả đơn hàng trong nội thành Hồ Chí Minh"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<PolicyItem
							title={"Miễn phí vẫn chuyển"}
							description="Cho tất cả đơn hàng trong nội thành Hồ Chí Minh"
						/>
					</SwiperSlide>
                    
				</Swiper>
			</div>
		</div>
	);
}

export default PolicyContainer;

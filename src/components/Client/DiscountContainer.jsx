import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperNextButton from "./SwiperNextButton";
import SwiperPrevButton from "./SwiperPrevButton";
import DiscountItem from "./DiscountItem";
import voucherService from '../../services/VoucherService';
import { useEffect, useState } from "react";

function DiscountContainer({ vouchersProps }) {
	const [listVoucher, setListVoucher] = useState([]);

	useEffect(() => {
		setListVoucher(vouchersProps);
	}, [vouchersProps]);
	return (
		<div className="relative mt-6 z-0">
			<SwiperPrevButton prevButton={"discount-prev"} />
			<SwiperNextButton nextButton={"discount-next"} />
			<Swiper
				// install Swiper modules
				modules={[Navigation]}
				spaceBetween={10}
				slidesPerView={1}
				navigation={{
					nextEl: ".discount-next",
					prevEl: ".discount-prev",
				}}
				breakpoints={{
					640: {
						slidesPerView: 2,
					},
					850: {
						slidesPerView: 2,
					},
					1024: {
						slidesPerView: 3,
					},
					1200: {
						slidesPerView: 4
					}
				}}
			>
				{
					listVoucher.map((voucher) => {
						return (
							<SwiperSlide key={voucher.id} className="w-full">
								<DiscountItem voucher={voucher}/>
							</SwiperSlide>
						);
					})
				}
			
			</Swiper>
		</div>
	);
}

export default DiscountContainer;

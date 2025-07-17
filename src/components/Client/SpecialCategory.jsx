import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SpecialCategoryItem from "./SpecialCategoryItem";

import SwiperNextButton from "./SwiperNextButton";
import SwiperPrevButton from "./SwiperPrevButton";

import categoryService from "../../services/CategoryService";
import { useEffect, useState } from "react";

function SpecialCategory() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const fetchOutstandingCategories = async () => {
			try {
				const res = await categoryService.getListOutstanding();
				setCategories(res.data);
				console.log('danh muc noi bat: ', res.data);
			} catch (error) {
				console.error("Lỗi khi load danh mục nổi bật:", error);
			}
		};
		fetchOutstandingCategories();
	}, []);

	return (
		<div className="mt-8">
			<h2 className="text-[30px] text-black font-bold ">
				Danh mục nổi bật
			</h2>
			<div className="relative z-0">
				<SwiperPrevButton prevButton={"special-prev"} />
				<SwiperNextButton nextButton={"special-next"} />
				<Swiper
					// install Swiper modules
					modules={[Navigation]}
					spaceBetween={20}
					slidesPerView={2}
					breakpoints={{
						640: {
							slidesPerView: 3,
						},
						768: {
							slidesPerView: 5,
						},
						1024: {
							slidesPerView: 6,
						},
						1280: {
							slidesPerView: 8,
						},
						1536: {
							slidesPerView: 9,
						},
					}}
					navigation={{
						nextEl: ".special-next",
						prevEl: ".special-prev",
					}}
				>
					{categories.map((category) => (
						<SwiperSlide key={category.id}>
							<SpecialCategoryItem category={category} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default SpecialCategory;

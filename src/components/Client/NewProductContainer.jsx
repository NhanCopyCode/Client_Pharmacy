import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import ProductCard from "./ProductCard";

function NewProductContainer({ newProducts }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(newProducts);
	}, [newProducts]);
	return (
		<div className="mt-8">
			<h2 className="text-[30px] text-black font-bold">Sản phẩm mới</h2>
			<div className="mt-4">
				<Swiper
					className="!pb-8"
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
					{products.map((product) => (
						<SwiperSlide key={product.id}>
							<ProductCard
								product={product}
								hoverEffect="group-hover:scale-105 transition-transform duration-300"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default NewProductContainer;

import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css";
import ProductCard from "./ProductCard";
import Button from "./Button";
import bannerService from "../../services/BannerService";
import productService from "../../services/ProductService";

function SpecialProductContainer({ productsTrending, bannerOutstanding }) {
	const [banners, setBanners] = useState([]);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setBanners(bannerOutstanding);
		setProducts(productsTrending);
	}, [productsTrending, bannerOutstanding]);

	return (
		<div className="mt-8">
			<h2 className="text-[30px] text-black font-bold">
				Sản phẩm nổi bật
			</h2>

			<div className="grid grid-cols-5 gap-4 mt-4">
				{/* Swiper takes 2 columns */}
				<div className="col-span-2">
					<Swiper
						slidesPerView={1}
						modules={[Pagination]}
						pagination={{ clickable: true }}
					>
						{banners.map((banner) => (
							<SwiperSlide key={banner.id}>
								<img
									src={banner.image}
									alt={banner.title}
									className="w-full object-cover rounded-lg"
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				{/* Products take 1 column each */}
				{products.map((product) => (
					<div className="col-span-1" key={product.id}>
						<ProductCard product={product} />
					</div>
				))}
			</div>

			<div className="flex items-center justify-center mt-6">
				<Button
					to={"/san-pham-noi-bat"}
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

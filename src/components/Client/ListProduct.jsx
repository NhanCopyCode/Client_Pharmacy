import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css";
import Button from "./Button";
import ProductCard from "./ProductCard";
function ListProduct() {
	return (
		<div className="mt-12">
			<h2 className="text-[30px] text-black font-bold ">
				Sản phẩm theo đối tượng
			</h2>
			<div className="grid grid-cols-12 gap-4 mt-4">
				<div className="xl:col-span-3 col-span-12">
					<Swiper
						slidesPerView={1}
						spaceBetween={20}
						modules={[Pagination]}
						pagination={{ clickable: true }}
					>
						<SwiperSlide>
							<div className="flex xl:flex-col items-center gap-6">
								<img
									src="https://bizweb.dktcdn.net/100/491/197/themes/917410/assets/banner_tab1_1.jpg?1736388760084"
									className="xl:w-full w-[50%]  object-cover"
								/>
								<img
									src="https://bizweb.dktcdn.net/100/491/197/themes/917410/assets/banner_tab1_1.jpg?1736388760084"
									className="xl:w-full w-[50%] object-cover"
								/>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
				<div className="xl:col-span-9 col-span-12">
					<div className="flex items-center gap-3 w-full whitespace-nowrap flex-wrap">
						<Button
							padding="p-[10px]"
							background="bg-white"
							fontSize="text-sm"
							fontWeight="font-bold"
							subClass="w-[25%]"
							border="border-2 border-darkBlue"
							hoverEffect="hover:bg-darkBlue hover:text-white"
							color="text-black"
						>
							<img
								className="w-[30px] h-[30px] object-cover"
								src="https://bizweb.dktcdn.net/100/491/197/themes/917410/assets/title_image_1_allpro1.png?1736388760084"
								alt=""
							/>
							<span>Trẻ em</span>
						</Button>
						<Button
							padding="p-[10px]"
							background="bg-white"
							fontSize="text-sm"
							fontWeight="font-bold"
							subClass="w-[25%]"
							border="border-2 border-darkBlue"
							hoverEffect="hover:bg-darkBlue hover:text-white"
							color="text-black"
						>
							<img
								className="w-[30px] h-[30px] object-cover"
								src="https://bizweb.dktcdn.net/100/491/197/themes/917410/assets/title_image_1_allpro1.png?1736388760084"
								alt=""
							/>
							<span>Trẻ em</span>
						</Button>
						<Button
							padding="p-[10px]"
							background="bg-white"
							fontSize="text-sm"
							fontWeight="font-bold"
							subClass="w-[25%]"
							border="border-2 border-darkBlue"
							hoverEffect="hover:bg-darkBlue hover:text-white"
							color="text-black"
						>
							<img
								className="w-[30px] h-[30px] object-cover"
								src="https://bizweb.dktcdn.net/100/491/197/themes/917410/assets/title_image_1_allpro1.png?1736388760084"
								alt=""
							/>
							<span>Trẻ em</span>
						</Button>
					</div>
					<div className="grid grid-cols-12 gap-3 mt-4">
						<div className="xl:col-span-3 md:col-span-4 col-span-6">
							<ProductCard />
						</div>
						<div className="xl:col-span-3 md:col-span-4 col-span-6">
							<ProductCard />
						</div>
						<div className="xl:col-span-3 md:col-span-4 col-span-6">
							<ProductCard />
						</div>
						<div className="xl:col-span-3 md:col-span-4 col-span-6">
							<ProductCard />
						</div>
						<div className="xl:col-span-3 md:col-span-4 col-span-6">
							<ProductCard />
						</div>
						<div className="xl:col-span-3 md:col-span-4 col-span-6">
							<ProductCard />
						</div>
						<div className="xl:col-span-3 md:col-span-4 col-span-6">
							<ProductCard />
						</div>

						<div className="col-span-12 mt-6 flex items-center justify-center">
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

						<div className="col-span-12 ">
							<h3 className="text-[16px] font-bold text-black">
								Tìm kiếm nhiều nhất:{" "}
							</h3>
							<div className="flex items-center flex-wrap gap-3 mt-2">
								<Button>Sinh lý</Button>
								<Button>Sinh lý</Button>
								<Button>Sinh lý</Button>
								<Button>Sinh lý</Button>
								<Button>Sinh lý</Button>
								<Button>Sinh lý</Button>
								<Button>Sinh lý</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ListProduct;

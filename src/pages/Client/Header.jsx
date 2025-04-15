import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import {
	Button,
	CategoryItemHeader,
	HeaderCart,
	NavBar,
	OverlayGray,
} from "../../components/Client";
import { IoCallOutline } from "react-icons/io5";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { SearchHeader } from "../../components/Client";
import { IoIosMenu } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";

function Header() {
	const [isShowCategory, setShowCategory] = useState(false);

	const handleShowCategory = () => {
		setShowCategory((prev) => !prev);
	};

	const handleCloseOverlay = () => {
		setShowCategory(false);
	};
	return (
		<>
			<div className=" bg-linear-to-bl from-lightBlue to-darkBlue font-bold text-white ">
				<div className="xxl:w-7xl xl:w-6xl md:w-4xl sm:w-3xl w-xl m-auto relative h-[155px]">
					<div className="flex items-center justify-between h-[41px] py-[5px]">
						<div className="text-sm w-[50%] z-0">
							<Swiper
								modules={[EffectFade, Autoplay]}
								effect="fade"
								fadeEffect={{ crossFade: true }}
								autoplay={{
									delay: 2000,
									disableOnInteraction: false,
								}}
								loop={true}
								slidesPerView={1}
							>
								<SwiperSlide>
									<span className="text-sm">
										Ưu đãi lớn cho thành viên mới
									</span>
								</SwiperSlide>
								<SwiperSlide>
									<span className="text-sm">
										Rất nhiều chương trình và khuyến mãi
										đang chờ bạn
									</span>
								</SwiperSlide>
								<SwiperSlide>
									<span className="text-sm">
										Nhanh tay mua ngay thôi nào!
									</span>
								</SwiperSlide>
							</Swiper>
						</div>
						<div className="flex flex-wrap items-center divide-x divide-white/40 gap-y-2">
							<div className="px-2">
								<Button
									background="bg-none"
									fontWeight="font-bold"
									fontSize="text-sm"
									padding="p-none"
									hoverEffect="hover:text-primary"
								>
									Đăng ký
								</Button>
							</div>
							<div className="px-2">
								<Button
									background="bg-none"
									fontWeight="font-bold"
									fontSize="text-sm"
									padding="p-none"
									hoverEffect="hover:text-primary"
								>
									Đăng nhập
								</Button>
							</div>
							<div className="px-2 flex items-center gap-1">
								<Button
									background="bg-none"
									fontWeight="font-bold"
									fontSize="text-sm"
									padding="p-none"
									hoverEffect=""
								>
									Hotline đặt hàng:
								</Button>

								<Button
									fontSize="text-sm"
									hoverEffect="hover:bg-white hover:text-primary"
									background="bg-primary"
									fontWeight="font-bold"
									rounded="rounded-full"
									leftIcon={<IoCallOutline />}
								>
									1900 6750
								</Button>
							</div>
						</div>
					</div>

					<div className="h-[65px] grid grid-cols-12">
						<div className="col-span-9 flex items-center gap-6 h-[65px] ">
							<Link
								to={"/"}
								className="h-full  w-[20%] flex items-center justify-center"
							>
								<img
									src={Logo}
									className="w-full object-cover"
								/>
							</Link>
							<Button
								subClass={"z-20"}
								hoverEffect="hover:bg-primary hover:text-white"
								rounded="rounded-xl"
								iconSize="w-[20px] h-[20px]"
								padding="p-[10px]"
								leftIcon={
									<IoIosMenu className="w-full h-full" />
								}
								buttonHeight={"h-[44px]"}
								background="bg-white"
								color="text-black"
								fontWeight="font-bold"
								fontSize="text-[16px]"
								buttonWidth="w-[20%]"
								onClick={handleShowCategory}
							>
								Danh mục
							</Button>
							<SearchHeader />
						</div>
						<div className="col-span-3 flex items-center justify-end">
							<HeaderCart />
						</div>
					</div>

					{isShowCategory && (
						<div className="absolute top-[100%] w-full bg-white text-black shadow-md rounded-xl z-20">
							<div className="flex items-start">
								<div className="col-span-3 p-[10px] flex flex-col gap-2">
									<div
										className={`${"flex items-center justify-between bg-darkBlue text-white p-[10px] rounded-xl w-[250px] hover:cursor-pointer"}`}
									>
										<span className="text-[16px] font-bold">
											Dược phẩm
										</span>
										<FaAngleRight className="w-5 h-5" />
									</div>
									<div
										className={`${"flex items-center justify-between bg-darkBlue text-white p-[10px] rounded-xl w-[250px] hover:cursor-pointer"}`}
									>
										<span className="text-[16px] font-bold">
											Dược phẩm
										</span>
										<FaAngleRight className="w-5 h-5" />
									</div>
									<div
										className={`${"flex items-center justify-between bg-darkBlue text-white p-[10px] rounded-xl w-[250px] hover:cursor-pointer"}`}
									>
										<span className="text-[16px] font-bold">
											Dược phẩm
										</span>
										<FaAngleRight className="w-5 h-5" />
									</div>
								</div>
								<div className="col-span-9 flex flex-wrap gap-2 p-[10px]">
									<div className="grid grid-cols-12 gap-3">
										<div className="md:col-span-3 sm:col-span-4 col-span-6">
											<CategoryItemHeader />
										</div>
										<div className="md:col-span-3 sm:col-span-4 col-span-6">
											<CategoryItemHeader />
										</div>
										<div className="md:col-span-3 sm:col-span-4 col-span-6">
											<CategoryItemHeader />
										</div>
										<div className="md:col-span-3 sm:col-span-4 col-span-6">
											<CategoryItemHeader />
										</div>
										<div className="md:col-span-3 sm:col-span-4 col-span-6">
											<CategoryItemHeader />
										</div>
										<div className="md:col-span-3 sm:col-span-4 col-span-6">
											<CategoryItemHeader />
										</div>
									</div>
								</div>
							</div>
						</div>
					)}

					<NavBar />
				</div>
			</div>

			{isShowCategory && <OverlayGray onClick={handleCloseOverlay} />}
		</>
	);
}

export default Header;

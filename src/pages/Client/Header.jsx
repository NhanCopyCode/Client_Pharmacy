import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import {
	Button,
	CategoryItemHeader,
	HeaderCart,
	HeaderSidebar,
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
	const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
	const [isShowHeaderSidebar, setShowHeaderSidebar] = useState(false);
	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 960px)"); // 4xl in Tailwind is 1536px

		const handleMediaChange = (e) => {
			setIsMobileOrTablet(e.matches);
		};

		// Initial check
		setIsMobileOrTablet(mediaQuery.matches);

		// Listen for changes
		mediaQuery.addEventListener("change", handleMediaChange);

		// Cleanup
		return () =>
			mediaQuery.removeEventListener("change", handleMediaChange);
	}, []);

	const handleShowCategory = () => {
		setShowCategory((prev) => !prev);
	};

	const handleCloseOverlay = () => {
		setShowCategory(false);
	};

	const handleCloseHeaderSidebar = () => {
		setIsMobileOrTablet(false);
		setShowHeaderSidebar(false);

	};

	const handleShowHeaderSidebar = () => {
		setIsMobileOrTablet(true);
		setShowHeaderSidebar(true);
	};
	return (
		<>
			<div className=" bg-linear-to-bl from-lightBlue to-darkBlue font-bold text-white ">
				<div className="xxl:w-7xl xl:w-6xl md:w-4xl sm:w-3xl w-xl max-w-[100%] m-auto relative min-h-[155px]">
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
						<div className="hidden flex-wrap items-center divide-x divide-white/40 gap-y-2 md:flex">
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

					<div className="min-h-[65px] grid grid-cols-12 pb-2 md:pb-0">
						<div className="col-span-4 flex items-center gap-6 h-[65px] md:col-span-9">
							<Button
								subClass={"inline-block md:hidden"}
								hoverEffect="hover:bg-white hover:text-primary"
								rounded="rounded-xl"
								onClick={handleShowHeaderSidebar}
							>
								<IoIosMenu className="w-7 h-7" />
							</Button>
							<Link
								to={"/"}
								className="h-full w-[20%] items-center justify-center hidden md:flex"
							>
								<img
									src={Logo}
									className="h-full w-full object-contain"
								/>
							</Link>
							<Button
								subClass={"z-20 hidden md:flex"}
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
							<div className="flex-1 md:flex hidden">
								<SearchHeader />
							</div>
						</div>
						<div className="col-span-4 md:hidden inline-block h-full mb-3">
							<Link
								to={"/"}
								className="h-[65px] items-center justify-center flex md:hidden"
							>
								<img
									src={Logo}
									className="w-full object-cover"
								/>
							</Link>
						</div>
						<div className="col-span-4 flex items-center justify-end md:col-span-3">
							<HeaderCart />
						</div>
						<div className="col-span-12 flex flex-col md:hidden mt-2 gap-2">
							<Button
								subClass={"z-20 w-full"}
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

			<div
				className={`${isShowHeaderSidebar ? "inline-block" : "hidden"}`}
			>
				<HeaderSidebar />
				<OverlayGray onClick={handleCloseHeaderSidebar} />
			</div>

			{isShowCategory && <OverlayGray onClick={handleCloseOverlay} />}
		</>
	);
}

export default Header;

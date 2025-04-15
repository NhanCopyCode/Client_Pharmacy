import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import Tippy from "@tippyjs/react/headless";
import "swiper/css";
import "swiper/css/effect-fade";

import { Button, HeaderCart } from "../../components/Client";
import { IoCallOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { SearchHeader } from "../../components/Client";

function Header() {
	return (
		<div className="h-[155px] bg-linear-to-bl from-lightBlue to-darkBlue font-bold text-white ">
			<div className="xxl:w-7xl xl:w-6xl md:w-4xl sm:w-3xl w-xl m-auto">
				<div className="flex items-center justify-between h-[41px] py-[5px]">
					<div className="tex-sm w-[50%]">
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
									Rất nhiều chương trình và khuyến mãi đang
									chờ bạn
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
							<img src={Logo} className="w-full object-cover" />
						</Link>
						<Button
							hoverEffect="hover:bg-primary hover:text-white"
							rounded="rounded-xl"
							iconSize="w-[20px] h-[20px]"
							padding="p-[10px]"
							leftIcon={<IoIosMenu className="w-full h-full" />}
							buttonHeight={"h-[44px]"}
							background="bg-white"
							color="text-black"
							fontWeight="font-bold"
							fontSize="text-[16px]"
							buttonWidth="w-[20%]"
						>
							Danh mục
						</Button>
						<SearchHeader />
					</div>
					<div className="col-span-3 flex items-center justify-end">
						<HeaderCart />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;

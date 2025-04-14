import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import { Button } from "../../components/Client";
import { IoCallOutline } from "react-icons/io5";
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
								Ưu đãi lớn cho thành viên mới
							</SwiperSlide>
							<SwiperSlide>
								Rất nhiều chương trình và khuyến mãi đang chờ bạn
							</SwiperSlide>
							<SwiperSlide>
								Nhanh tay mua ngay thôi nào!
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
			</div>
		</div>
	);
}

export default Header;

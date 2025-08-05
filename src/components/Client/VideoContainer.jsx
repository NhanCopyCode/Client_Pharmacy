import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css";
import SwiperPrevButton from "./SwiperPrevButton";
import SwiperNextButton from "./SwiperNextButton";
import VideoItem from "./VideoItem";
import Button from "./Button";
import { useEffect, useState } from "react";

function VideoContainer({ videosProps }) {
	const [videos, setVideos] = useState([]);
	useEffect(() => {
		setVideos(videosProps);
	}, [videosProps]);
	return (
		<div className="mt-8">
			<h2 className="text-[30px] text-black font-bold ">
				Góc dinh dưỡng
			</h2>
			<div className="mt-4 relative">
				<SwiperPrevButton prevButton={"video-prev"} />
				<SwiperNextButton nextButton={"video-next"} />
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
						nextEl: ".video-next",
						prevEl: ".video-prev",
					}}
				>
					{videos.length > 0 &&
						videos.map((video) => (
							<SwiperSlide key={video.key}>
								<VideoItem
									title={video.name}
									image={video.image}
									url={video.src}
								/>
							</SwiperSlide>
						))}
				</Swiper>
			</div>

			<div className="flex items-center justify-center mt-4">
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
		</div>
	);
}

export default VideoContainer;

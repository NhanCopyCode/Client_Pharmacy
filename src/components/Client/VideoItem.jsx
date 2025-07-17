import { useEffect, useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import ModalVideo from "./ModalVideo";
import getYouTubeId from "../../utils/getYoutubeId";


function VideoItem({ title, url, image }) {
	const [open, setOpen] = useState(false);
	const [youtubeId, setYoutubeId] = useState(null);
	const handleCloseModal = () => {
		setOpen(false);
	}

	useEffect(() => {
		setYoutubeId(getYouTubeId(url));
	}, [url])

	return (
		<>
			<div
				className="flex flex-col gap-4 hover:cursor-pointer group"
				onClick={() => setOpen(true)}
			>
				<div className="relative w-full rounded-md overflow-hidden">
					<img
						src={image}
						className="ww-full object-cover"
					/>
					<div className="group absolute top-0 bottom-0 left-0 right-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30">
						<FaRegCirclePlay className="w-[30%] h-[30%] text-white group-hover:text-primary transition-colors duration-100" />
					</div>
				</div>
				<h3 className="text-[18px] text-black font-bold group-hover:text-primary">
					{title}
				</h3>
			</div>
			<ModalVideo
				isShow={open}
				onCLoseModal={handleCloseModal}
				url={"https://www.youtube.com/embed/" + youtubeId}
				title={title}
			/>
		</>
	);
}

export default VideoItem;

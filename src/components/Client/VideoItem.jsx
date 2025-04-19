import { useState } from "react";
import { Modal } from "react-responsive-modal";
import { FaRegCirclePlay } from "react-icons/fa6";

function VideoItem() {
	const [open, setOpen] = useState(false);
	return (
		<div className="flex flex-col gap-4 hover:cursor-pointer group">
			<div className="relative w-full rounded-md overflow-hidden">
				<img
					src="https://bizweb.dktcdn.net/100/491/197/articles/21.png?v=1689669656217"
					className="ww-full object-cover"
				/>
				<div className="group absolute top-0 bottom-0 left-0 right-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30">
					<FaRegCirclePlay className="w-[30%] h-[30%] text-white group-hover:text-primary transition-colors duration-100" />
				</div>
			</div>
            <h3 className="text-[18px] text-black font-bold group-hover:text-primary">Mẹo cải thiện tư duy phản biện của bạn</h3>
		</div>
	);
}

export default VideoItem;

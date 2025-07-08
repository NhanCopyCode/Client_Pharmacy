import { Link } from "react-router-dom";
import Button from "./Button";
import formatDateFrontend from "../../utils/formatDateFrontend";

function PostCard({ post }) {
	const { id, title, description, image, created_at } = post;
	return (
		<div className="flex flex-col gap-4 items-start relative group">
			<Link
				to={`/bai-viet/${id}`}
				className="w-[100%] h-[150px] overflow-hidden rounded-md"
			>
				<img
					src={image}
					alt={title}
					className="w-full h-full object-cover  transition-transform duration-300 ease-in-out group-hover:scale-105"
				/>
			</Link>

			<Link
				to={`/bai-viet/${id}`}
				className="text-[18px] font-bold line-clamp-2 h-[54px]"
			>
				{title}
			</Link>
			<p
				className="text-sm font-light line-clamp-3 h-[58px]"
				dangerouslySetInnerHTML={{ __html: description }}
			></p>

			<Button
				to={`/bai-viet/${id}`}
				background="bg-white"
				color="text-blue"
				border="border-2 border-blue"
				rounded="rounded-md"
				hoverEffect="hover:bg-blue hover:text-white"
				fontWeight="font-bold"
			>
				Đọc tiếp
			</Button>

			<span className="absolute top-2 left-2 p-[2px] px-2 rounded-md text-white font-bold text-sm bg-blue">
				{formatDateFrontend(created_at)}
			</span>
		</div>
	);
}

export default PostCard;

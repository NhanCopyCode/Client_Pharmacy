import { Link } from "react-router-dom";
import { formatVietnameseDate } from "../../utils/formatDate";
function NotificationItemHeader({ post }) {
	return (
		<Link
			to={"/bai-viet/" + post.id}
			className="flex items-start gap-2 hover:text-primary text-black cursor-pointer"
		>
			<img
				className="w-[100px] h-[68px] object-cover rounded-md"
				src={post.image}
				alt=""
			/>
			<div className="flex flex-col items-start flex-1">
				<h3
					className="font-bold line-clamp-2 text-[15px]"
					title={post.title}
				>
					{post.title}
				</h3>
				<p className="text-sm font-light text-black">
					{formatVietnameseDate(post.created_at)}
				</p>
			</div>
		</Link>
	);
}

export default NotificationItemHeader;

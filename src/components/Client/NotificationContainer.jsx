import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";

import { IoNotificationsOutline } from "react-icons/io5";
import NotificationItemHeader from "./NotificationItemHeader";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";

function NotificationContainer() {
	const { postsHeader } = useSelector((state) => state.headerData);
	return (
		<Tippy
			interactive
			placement="bottom-end"
			render={(attrs) => (
				<div
					className="bg-white rounded-md shadow-md w-[400px] p-[10px]"
					tabIndex={-1}
					{...attrs}
				>
					<div className="flex flex-col w-full gap-3">
						{postsHeader.length > 0 &&
							postsHeader.map((post) => {
								return  <NotificationItemHeader key={post.id} post={post}/>;
							})}
						
						<Button>Xem tất cả</Button>
					</div>
				</div>
			)}
		>
			<div className="w-[30px] h-[30px] hidden md:inline-block">
				<Link className="w-full h-full relative">
					<IoNotificationsOutline className="w-full h-full" />
					<span className="absolute top-[-2px] right-[-3px] rounded-[50%] text-white w-[15px] h-[15px] text-center flex items-center justify-center bg-success text-[12px]">
						3
					</span>
				</Link>
			</div>
		</Tippy>
	);
}

export default NotificationContainer;

function NotificationItemHeader() {
	return (
		<div className="flex items-start gap-2 hover:text-primary text-black cursor-pointer">
			<img
				className="w-[100px] h-[68px] object-cover rounded-md"
				src="https://bizweb.dktcdn.net/thumb/small/100/491/197/articles/18.png?v=1689668697240"
				alt=""
			/>
			<div className="flex flex-col items-start flex-1">
				<h3 className="font-bold line-clamp-2 text-[15px]" title="Trẻ em sau tiêm vắc xin bao lâu thì sốt?">
					Trẻ em sau tiêm vắc xin bao lâu thì sốt?
				</h3>
                <p className="text-sm font-light text-black">18 tháng 07</p>
			</div>
		</div>
	);
}

export default NotificationItemHeader;

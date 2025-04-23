import Button from "./Button";

function NewsPageItem() {
	return (
		<div className="relative cursor-pointer text-black group overflow-hidden">
			<div className="rounded-md overflow-hidden">
				<img
					src="https://bizweb.dktcdn.net/100/491/197/articles/18.png?v=1689668697240"
					className="w-full object-cover  group-hover:scale-105 transition-all duration-200"
				/>
			</div>
			<h4 className="text-[18px] font-bold line-clamp-2 my-2">
				Trẻ em tiêm vác xin bao lâu sốt?
			</h4>
			<p className="text-sm line-clamp-3 mt-4">
				Khi tiêm vắc xin cho trẻ em, một trong những phản ứng phổ biến
				mà phụ huynh thường gặp phải là cơn sốt, khiến bé khó chịu, quấy
				khóc. Tuy sốt...
			</p>
			<Button
				color="text-darkBlue"
				border="border-2 border-darkBlue"
				hoverEffect="hover:bg-darkBlue hover:text-white"
				background="bg-white"
				subClass="w-fit mt-4"
				padding="py-[5px] px-[15px]"
			>
				Đọc tiếp
			</Button>
			<div className="absolute top-2 left-2 bg-darkBlue rounded-md px-[10px] py-[2px] text-sm font-bold text-white">
				18/07/2023
			</div>
		</div>
	);
}

export default NewsPageItem;

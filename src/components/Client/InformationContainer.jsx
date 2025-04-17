import Button from "./Button";
import InformationItem from "./InformationItem";

function InformationContainer() {
	return (
		<div className="mt-8">
			<div className="grid grid-cols-12 gap-4">
				<div className="xl:col-span-8 col-span-12">
					<h2 className="text-[30px] text-black font-bold ">
						Góc dinh dưỡng
					</h2>
					<div className="grid grid-cols-12 gap-4 mt-2">
						<div className="xl:col-span-6 col-span-12">
							<img
								src="https://bizweb.dktcdn.net/100/491/197/articles/7.png?v=1689667252690"
								className="w-full object-cover rounded-md"
							/>
							<div className="flex flex-col items-start gap-2">
								<h3
									className="text-[20px] text-black font-bold line-clamp-1 mt-2"
									title="Trẻ uống kẽm có bị táo bón không? Cần có những lưu ý gì khi bổ sung kẽm cho bé?"
								>
									Trẻ uống kẽm có bị táo bón không? Cần có
									những lưu ý gì khi bổ sung kẽm cho bé?
								</h3>
								<span className="text-sm text-primary font-medium">
									Ngày đăng: 18/07/2024
								</span>
								<p
									className="text-sm text-black font-medium line-clamp-4"
									title="Tại Việt Nam, tỷ lệ trẻ em bị thiếu kẽm lên đến 40% khiến bé chậm lớn, biếng ăn, thiếu sức đề kháng. Mặc dù vậy, việc bổ sung kẽm cho bé thông qua các loại thực phẩm chức năng, thuốc uống cũng mang đến nhiều băn khoăn. Bài viết này...
		"
								>
									Tại Việt Nam, tỷ lệ trẻ em bị thiếu kẽm lên
									đến 40% khiến bé chậm lớn, biếng ăn, thiếu
									sức đề kháng. Mặc dù vậy, việc bổ sung kẽm
									cho bé thông qua các loại thực phẩm chức
									năng, thuốc uống cũng mang đến nhiều băn
									khoăn. Bài viết này...
								</p>
							</div>
						</div>

						<div className="xl:col-span-6 col-span-12 mt-4 xl:mt-0 flex flex-col gap-4">
							<InformationItem />
							<InformationItem />
							<InformationItem />
							<InformationItem />
						</div>
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

				<div className="xl:col-span-4 col-span-12">
					<h2 className="text-[30px] text-black font-bold ">
						Góc trẻ đẹp
					</h2>
					<div className=" flex flex-col gap-4 mt-2">
						<InformationItem />
						<InformationItem />
						<InformationItem />
						<InformationItem />
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
			</div>
		</div>
	);
}

export default InformationContainer;

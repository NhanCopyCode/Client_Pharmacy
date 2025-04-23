import {
	Button,
	Container,
	NewsPageSidebarItemNewPost,
} from "../../components/Client";
import { CiClock1 } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
function DetailNews() {
	return (
		<Container>
			<div className="grid grid-cols-12 gap-8">
				<div className="sm:col-span-8 col-span-12">
					<h1 className="text-[30px] text-black font-bold">
						Trẻ em sau tiêm vắc xin bao lâu thì sốt?
					</h1>
					<div className="flex items-center gap-2 text-sm text-black mt-4">
						<CiClock1
							color="darkBlue"
							className="w-[15px] h-[15px]"
						/>
						<span>Thứ Ba, 18/07/2023</span>
						<FaUser
							color="darkBlue"
							className="w-[15px] h-[15px]"
						/>
						<span>Trần Tấn Phát</span>
					</div>

					<div className="rounded-md bg-[#f3f8fe] py-[5px] px-[10px] mb-8 mt-4">
						<h3 className="text-2xl font-bold text-darkBlue mb-4">
							Nội dung chính
						</h3>
						<ul className="list-disc pl-5 text-[16px] font-medium flex flex-col gap-2">
							<li>Sốt</li>
							<li>Đau vùng tiêm</li>
						</ul>
					</div>
					<div>Content.....</div>

					<h3 className="text-[30px] font-bold mt-4">
						Viết bình luận của bạn
					</h3>
					<div className="grid grid-cols-12 mt-4">
						<div className="col-span-12 flex items-center gap-6">
							<input
								placeholder="Họ và tên"
								className="py-[5px] px-5 rounded-md border border-gray-200 w-[50%] border-b-2 border-b-darkBlue text-sm outline-0"
							/>
							<input
								placeholder="Email"
								type="email"
								className="py-[5px] px-5 rounded-md border border-gray-200 w-[50%] border-b-2 border-b-darkBlue text-sm outline-0"
							/>
						</div>
						<div className="col-span-12 flex items-center gap-6">
							<textarea
								name=""
								id=""
								placeholder="Nội dung"
								className="px-5 py-[5px] text-sm h-[160px] rounded-md border border-gray-200 w-full mt-4 border-b-2 border-b-darkBlue outline-0"
							></textarea>
						</div>

						<Button
							subClass="w-fit mt-4 whitespace-nowrap"
							padding="px-6"
							buttonHeight="h-10"
                            buttonWidth="min-w-[140px]"
							background="bg-darkBlue"
							hoverEffect="hover:bg-primary"
						>
							Gửi thông tin
						</Button>
					</div>
				</div>

				<div className="sm:col-span-4 col-span-12 flex flex-col gap-8">
					<div className="rounded-md border border-darkBlue overflow-hidden">
						<h3 className="text-white text-[20px] font-bold py-[5px] px-[10px] bg-darkBlue">
							Danh mục tin tức
						</h3>
						<div className=" flex flex-col gap-4 text-[15px] text-black px-[10px] py-[18px]">
							<ul className="flex flex-col gap-4  text-[15px] text-black">
								<li className="flex items-center justify-between">
									<Link className="hover:text-darkBlue">
										Trang chủ
									</Link>
								</li>
								<li className="flex items-center justify-between">
									<Link className="hover:text-darkBlue">
										Sản phẩm
									</Link>
									<FaPlus className="w-4 h-4 cursor-pointer hover:text-darkBlue" />
								</li>
								<li className="flex items-center justify-between">
									<Link className="hover:text-darkBlue">
										Trang chủ
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<NewsPageSidebarItemNewPost />
				</div>
			</div>
		</Container>
	);
}

export default DetailNews;

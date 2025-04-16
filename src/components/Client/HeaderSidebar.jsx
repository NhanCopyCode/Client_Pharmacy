import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { Button } from "../Client";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";

import { LuMinus } from "react-icons/lu";
function HeaderSidebar() {
	const [isShowPost, setShowPost] = useState(false);
	const [isShowProduct, setShowProduct] = useState(false);
	return (
		<div className="fixed z-20 top-0 left-0 h-full w-[70%] bg-white shadow-sm md:hidden inline-block">
			<div className="w-full py-5 border-b border-primary ">
				<img
					src={Logo}
					alt=""
					className="w-[172px] h-[58px] object-cover m-auto"
				/>
			</div>
			<div className="p-[5px] flex items-center justify-between gap-2">
				<Button
					subClass="flex-1"
					background="bg-darkBlue"
					hoverEffect="hover:bg-primary"
					fontSize="text-sm"
				>
					Đăng ký
				</Button>
				<Button
					subClass="flex-1"
					background="bg-darkBlue"
					fontSize="text-sm"
					hoverEffect="hover:bg-primary"
				>
					Đăng nhập
				</Button>
			</div>
			<div className="p-[5px]">
				<Button
					subClass="uppercase"
					fontSize="text-sm"
					background="bg-darkBlue"
					hoverEffect="hover:bg-primary"
					fontWeight="font-bold"
				>
					Menu chính
				</Button>
			</div>
			<div className="flex flex-col items-start gap-3 p-[10px] border-b border-primary">
				<Link className="text-[16px] text-black font-bold">
					Trang chủ
				</Link>
				<Link className="text-[16px] text-black font-bold">
					Giới thiệu
				</Link>
				<div className="flex items-center justify-between w-full">
					<Link className="text-[16px] text-black font-bold">
						Sản phẩm
					</Link>
					{!isShowProduct ? (
						<FiPlus
							className="w-5 h-5 hover:bg-gray-200 rounded-md cursor-pointer"
							onClick={() => setShowProduct(true)}
						/>
					) : (
						<LuMinus
							className="w-5 h-5 hover:bg-gray-200 rounded-md cursor-pointer"
							onClick={() => setShowProduct(false)}
						/>
					)}
				</div>
				{isShowProduct && (
					<div className="pl-[10px] text-black font-bold text-[16px] flex items-start flex-col gap-3 w-[100%]">
						<div className="text-[16px] text-black font-bold flex items-center justify-between w-[100%]">
							Dược phẩm
							<FiPlus
								className="w-5 h-5 hover:bg-gray-200 rounded-md cursor-pointer"
								onClick={() => setShowPost(true)}
							/>
						</div>
						<div className="text-[16px] text-black font-bold flex items-center justify-between w-[100%]">
							Chăm sóc sức khỏe
							<FiPlus
								className="w-5 h-5 hover:bg-gray-200 rounded-md cursor-pointer"
								onClick={() => setShowPost(true)}
							/>
						</div>
						<div className="text-[16px] text-black font-bold flex items-center justify-between w-[100%]">
							Sản phẩm tiện lợi
							<FiPlus
								className="w-5 h-5 hover:bg-gray-200 rounded-md cursor-pointer"
								onClick={() => setShowPost(true)}
							/>
						</div>
						<div className="text-[16px] text-black font-bold flex items-center justify-between w-[100%]">
							Thực phẩm chức năng
							<FiPlus
								className="w-5 h-5 hover:bg-gray-200 rounded-md cursor-pointer"
								onClick={() => setShowPost(true)}
							/>
						</div>
					</div>
				)}
				<Link className="text-[16px] text-black font-bold">
					Sản phẩm khuyến mãi
				</Link>
				<div className="flex items-center justify-between w-full">
					<Link className="text-[16px] text-black font-bold">
						Tin tức
					</Link>
					{!isShowPost ? (
						<FiPlus
							className="w-5 h-5 hover:bg-gray-200 rounded-md cursor-pointer"
							onClick={() => setShowPost(true)}
						/>
					) : (
						<LuMinus
							className="w-5 h-5 hover:bg-gray-200 rounded-md cursor-pointer"
							onClick={() => setShowPost(false)}
						/>
					)}
				</div>
				{isShowPost && (
					<div className="px-[10px] text-black font-bold text-[16px] flex items-start flex-col gap-3">
						<Link className="text-[16px] text-black font-bold">
							Góc dinh dưỡng
						</Link>
						<Link className="text-[16px] text-black font-bold">
							Góc trẻ đẹp
						</Link>
					</div>
				)}
				<Link className="text-[16px] text-black font-bold">Video</Link>
				<Link className="text-[16px] text-black font-bold">
					Câu hỏi thường gặp
				</Link>
				<Link className="text-[16px] text-black font-bold">
					Liên hệ
				</Link>
			</div>
			<div className="flex items-start flex-col gap-3 p-[10px]">
				<Link className="text-[16px] text-black font-bold">
					Hệ thống cửa hàng
				</Link>
				<Link className="text-[16px] text-black font-bold">
					Sản phẩm yêu thích
				</Link>
			</div>
		</div>
	);
}

export default HeaderSidebar;

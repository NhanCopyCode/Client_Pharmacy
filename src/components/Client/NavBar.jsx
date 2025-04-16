import { IoMdArrowDropdown } from "react-icons/io";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import NavbarHeaderItem from "./NavbarHeaderItem";

function NavBar() {
	const [isShowCategory, setShowCategory] = useState(false);
	const [isShowPost, setShowPost] = useState(false);
	return (
		<div className="hidden md:flex items-center gap-1 relative">
			<Button
				background="bg-transparent"
				rounded="rounded-xl"
				padding="p-[10px]"
				color="text-white"
				fontWeight="font-bold"
				fontSize="text-[16px]"
				hoverEffect="hover:text-success hover:bg-white"
			>
				Trang chủ
			</Button>
			<Button
				background="bg-transparent"
				rounded="rounded-xl"
				padding="p-[10px]"
				color="text-white"
				fontWeight="font-bold"
				fontSize="text-[16px]"
				hoverEffect="hover:text-success hover:bg-white"
			>
				Giới thiệu
			</Button>
			<div
				onMouseEnter={() => setShowCategory(true)}
				onMouseLeave={() => setShowCategory(false)}
			>
				<Button
					subClass="relative after:content-[''] after:absolute after:bottom-[-6px] after:left-[-10px] after:h-3 after:w-[120%] after:bg-transparent"
					background="bg-transparent"
					rounded="rounded-xl"
					padding="p-[10px]"
					color="text-white"
					fontWeight="font-bold"
					fontSize="text-[16px]"
					hoverEffect="hover:text-success hover:bg-white"
					rightIcon={<IoMdArrowDropdown />}
				>
					Sản phẩm
				</Button>
				{isShowCategory && (
					<div className="absolute z-20 top-[112%] left-0 bg-white shadow-md rounded-md w-full max-h-[600px] overflow-y-auto">
						<div className="grid grid-cols-12 gap-4 p-[10px]">
							<NavbarHeaderItem />
							<NavbarHeaderItem />
							<NavbarHeaderItem />
							<NavbarHeaderItem />
							<NavbarHeaderItem />
							<NavbarHeaderItem />
							<NavbarHeaderItem />
							<NavbarHeaderItem />
							<NavbarHeaderItem />
							<NavbarHeaderItem />
							<NavbarHeaderItem />
							<NavbarHeaderItem />
							<NavbarHeaderItem />
							<NavbarHeaderItem />
							<NavbarHeaderItem />
							<NavbarHeaderItem />
						</div>
					</div>
				)}
			</div>

			<Button
				background="bg-transparent"
				rounded="rounded-xl"
				padding="p-[10px]"
				color="text-white"
				fontWeight="font-bold"
				fontSize="text-[16px]"
				hoverEffect="hover:text-success hover:bg-white"
			>
				Sản phẩm khuyến mãi
			</Button>
			<div
				className="relative"
				onMouseEnter={() => setShowPost(true)}
				onMouseLeave={() => setShowPost(false)}
			>
				<Button
					subClass="relative after:content-[''] after:absolute after:bottom-[-6px] after:left-[-10px] after:h-3 after:w-[120%] after:bg-transparent"
					background="bg-transparent"
					rounded="rounded-xl"
					padding="p-[10px]"
					color="text-white"
					fontWeight="font-bold"
					fontSize="text-[16px]"
					hoverEffect="hover:text-success hover:bg-white"
					rightIcon={<IoMdArrowDropdown />}
				>
					Tin tức
				</Button>
				{isShowPost && (
					<div className="absolute z-20 top-[112%] left-0 bg-white shadow-md rounded-md w-[220px] ">
						<div className="flex flex-col w-full">
							<Link className="text-sm text-black hover:text-primary px-5 py-[6px] font-light">
								Góc dinh dưỡng
							</Link>
							<Link className="text-sm text-black hover:text-primary px-5 py-[6px] font-light">
								Góc trẻ đẹp
							</Link>
						</div>
					</div>
				)}
			</div>
			<Button
				background="bg-transparent"
				rounded="rounded-xl"
				padding="p-[10px]"
				color="text-white"
				fontWeight="font-bold"
				fontSize="text-[16px]"
				hoverEffect="hover:text-success hover:bg-white"
			>
				Video
			</Button>
			<Button
				background="bg-transparent"
				rounded="rounded-xl"
				padding="p-[10px]"
				color="text-white"
				fontWeight="font-bold"
				fontSize="text-[16px]"
				hoverEffect="hover:text-success hover:bg-white"
			>
				Câu hỏi thường gặp
			</Button>
			<Button
				background="bg-transparent"
				rounded="rounded-xl"
				padding="p-[10px]"
				color="text-white"
				fontWeight="font-bold"
				fontSize="text-[16px]"
				hoverEffect="hover:text-success hover:bg-white"
			>
				Liên hệ
			</Button>
		</div>
	);
}

export default NavBar;

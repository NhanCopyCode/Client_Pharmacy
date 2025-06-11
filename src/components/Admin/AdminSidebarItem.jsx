
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { LiaProductHunt } from "react-icons/lia";
import { FaAngleRight } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

function AdminSidebarItem({ menu, isOpenSidebar }) {
	const location = useLocation();
	const [isOpen, setIsOpen] = useState(false);
	const Icon = menu.icon;
	return (
		<Link to={menu.path ?? location.pathname} className="flex-col  font-bold cursor-pointer flex items-center text-white transition-all duration-200 w-full">
			<div
				className={`flex items-center justify-between  w-full hover:bg-darkBlue/90 ${
					isOpenSidebar ? "py-3 px-[10px]" : ""
				}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className="flex items-center gap-2">
					<Icon className="w-4 h-4" />
					<span className="text-sm">{menu.title}</span>
				</div>
				{menu?.children &&
					menu.children.length > 0 &&
					(isOpen ? <FaAngleDown /> : <FaAngleRight />)}
			</div>
			{menu.children && (
				<div
					className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${
						isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
					}`}
				>
					<ul className="text-white w-full">
						{menu.children.map((item, index) => {
							return (
								<li key={index} className="">
									<Link
										to={item.path}
										className="py-2 pl-8 hover:bg-darkBlue/90 inline-block w-full"
									>
										{item.title}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</Link>
	);
}

export default AdminSidebarItem;

import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { useLocation, Link } from "react-router-dom";

function AdminSidebarItem({ menu, isOpenSidebar }) {
	const location = useLocation();
	const Icon = menu.icon;

	const hasChildren = menu.children && menu.children.length > 0;
	const hasActiveChild =
		hasChildren &&
		menu.children.some((child) => child.path === location.pathname);

	const [isOpen, setIsOpen] = useState(hasActiveChild);

	useEffect(() => {
		if (hasActiveChild) {
			setIsOpen(true);
		}
	}, [location.pathname, hasActiveChild]);

	const renderParent = () => {
		if (hasChildren) {
			return (
				<div
					onClick={() => setIsOpen(!isOpen)}
					className={`${
						menu.path === location.pathname ? "bg-darkBlue/90" : ""
					} flex items-center justify-between w-full hover:bg-darkBlue/90 ${
						isOpenSidebar ? "py-3 px-[10px]" : ""
					}`}
				>
					<div className="flex items-center gap-2">
						<Icon className="w-4 h-4" />
						<span className="text-sm">{menu.title}</span>
					</div>
					{isOpen ? <FaAngleDown /> : <FaAngleRight />}
				</div>
			);
		} else {
			return (
				<Link
					to={menu.path ?? location.pathname}
					className={`${
						menu.path === location.pathname ? "bg-darkBlue/90" : ""
					} flex items-center justify-between w-full hover:bg-darkBlue/90 ${
						isOpenSidebar ? "py-3 px-[10px]" : ""
					}`}
				>
					<div className="flex items-center gap-2">
						<Icon className="w-4 h-4" />
						<span className="text-sm">{menu.title}</span>
					</div>
				</Link>
			);
		}
	};

	return (
		<div className="flex-col font-bold cursor-pointer flex items-center text-white transition-all duration-200 w-full">
			{renderParent()}

			{/* Submenu */}
			{hasChildren && (
				<div
					className={`overflow-hidden transition-all duration-300 ease-in-out w-full ${
						isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
					}`}
				>
					<ul className="text-white w-full">
						{menu.children.map((item, index) => (
							<li key={index}>
								<Link
									to={item.path}
									className={`py-2 pl-8 hover:bg-darkBlue/90 inline-block w-full  ${
										item.path === location.pathname
											? "bg-darkBlue/90"
											: ""
									}`}
								>
									{item.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

export default AdminSidebarItem;

import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { AdminSidebarItem } from "../../components/Admin";
import { menuAdmin } from "../../utils/constants";
import { Outlet } from "react-router-dom";


function AdminPage() {
	const [isOpenSidebar, setIsOpenSidebar] = useState(true);

	console.log('menuadmin: ', menuAdmin);
	return (
		<div className="flex h-screen">
			{/* Sidebar */}
			<div
				className={`${
					isOpenSidebar ? "w-[230px]" : "w-0"
				} transition-all duration-200 bg-primary overflow-hidden`}
			>
				{menuAdmin.map((item, index) => (
					<AdminSidebarItem
						key={index}
						menu={item}
						isOpenSidebar={isOpenSidebar}
					/>
				))}
			</div>

			{/* Main content */}
			<div className="flex flex-col flex-1 h-screen">
				{/* Header */}
				<div className="h-[50px] flex items-center z-10 justify-between bg-white shadow-sm border-b border-gray-200 px-4">
					<div
						className="p-2 cursor-pointer bg-gray-100"
						onClick={() => setIsOpenSidebar(!isOpenSidebar)}
					>
						<IoMenu className="h-full w-5" />
					</div>
					<h1 className="text-lg font-semibold">Admin Panel</h1>
				</div>

				{/* Scrollable content */}
				<div className="flex-1 overflow-y-auto bg-gray-100 p-[15px]">
					<div className="min-h-[100%] rounded-sm shadow-sm border border-gray-200 bg-white p-[5px]">
						{/* Simulate long content */}
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
}

export default AdminPage;

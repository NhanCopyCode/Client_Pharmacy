import { SidebarProductItem } from ".";

function SidebarProductContainer() {
    return (
		<div className="border border-darkBlue rounded-md overflow-hidden">
			<div className="text-xl text-white text-left py-[5px] px-[10px] bg-darkBlue font-bold">
				Cùng phân khúc giá
			</div>
			<div className="flex flex-col gap-4 pt-3">
				<SidebarProductItem />
				<SidebarProductItem />
				<SidebarProductItem />
				<SidebarProductItem />
			</div>
		</div>
	);
}

export default SidebarProductContainer;
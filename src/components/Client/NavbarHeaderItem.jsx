import { Link } from "react-router-dom";

function NavbarHeaderItem() {
	return (
		<div className="col-span-3 p-[10px] flex flex-col">
			<Link className="text-blue text-[18px] font-bold mb-[10px]">
				Dược phẩm
			</Link>
			<div className="flex flex-col gap-1">
				<Link className="text-black font-medium text-[18px] hover:text-blue">
					Thuốc không kê đơn
				</Link>
				<Link className="text-black font-medium text-[18px] hover:text-blue">
					Thuốc không kê đơn
				</Link>
				<Link className="text-black font-medium text-[18px] hover:text-blue">
					Thuốc không kê đơn
				</Link>
				<Link className="text-black font-medium text-[18px] hover:text-blue">
					Thuốc không kê đơn
				</Link>
			</div>
		</div>
	);
}

export default NavbarHeaderItem;

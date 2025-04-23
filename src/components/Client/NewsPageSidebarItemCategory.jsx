import { Link } from "react-router-dom";
import { path } from "../../utils/constants";

function NewsPageSidebarItemCategory() {
    return (
		<div className="rounded-md border border-darkBlue overflow-hidden">
			<h3 className="text-white text-[20px] font-bold py-[5px] px-[10px] bg-darkBlue">
				Danh mục tin tức
			</h3>
			<div className="px-[10px] py-[18px] flex flex-col gap-4 text-[15px] text-black">
				<Link to={path.TIN_TUC}>Góc dinh dưỡng</Link>
				<Link to={path.TIN_TUC}>Góc dinh dưỡng</Link>
			</div>
		</div>
	);
}

export default NewsPageSidebarItemCategory;
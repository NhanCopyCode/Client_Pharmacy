import { Link } from "react-router-dom";
import { slugify } from "../../utils/slugify";

function NavbarHeaderItem({ category }) {
	console.log('category:', category)
	
	return (
		<div className="col-span-3 p-[10px] flex flex-col">
			<Link
				to={"/" + slugify(category.name)}
				className="text-blue text-[18px] mb-[10px]"
			>
				{category.name}
			</Link>
			<div className="flex flex-col gap-1">
				{category?.children?.length > 0 &&
					category?.children?.map((child) => (
						<Link
							key={child.id}
							to={"/" + slugify(child.name)}
							className="text-black font-medium text-[18px] hover:text-blue"
						>
							{child.name}
						</Link>
					))}
			</div>
		</div>
	);
}

export default NavbarHeaderItem;

import { FaSortAlphaDown } from "react-icons/fa";
import Button from "./Button";

function SortContainer() {
    return (
		<div className="flex items-center gap-3">
			<div className="flex items-center gap-1 text-sm font-medium">
				<FaSortAlphaDown className="w-5 h-5 " />
				Xếp theo:
			</div>
			<div className="flex items-center flex-wrap gap-2">
				<Button background="bg-white" border="border border-primary" hoverEffect="hover:bg-primary hover:text-white" fontSize="text-sm" color="text-darkBlue">Tên A-Z</Button>
				<Button background="bg-white" border="border border-primary" hoverEffect="hover:bg-primary hover:text-white" fontSize="text-sm" color="text-darkBlue">Tên A-Z</Button>
				<Button background="bg-white" border="border border-primary" hoverEffect="hover:bg-primary hover:text-white" fontSize="text-sm" color="text-darkBlue">Tên A-Z</Button>
				<Button background="bg-white" border="border border-primary" hoverEffect="hover:bg-primary hover:text-white" fontSize="text-sm" color="text-darkBlue">Tên A-Z</Button>
				<Button background="bg-white" border="border border-primary" hoverEffect="hover:bg-primary hover:text-white" fontSize="text-sm" color="text-darkBlue">Tên A-Z</Button>
			</div>
		</div>
	);
}

export default SortContainer;
import Button from "./Button";
import { FaAnglesRight } from "react-icons/fa6";

function Pagination() {
	return (
		<div className="flex items-center justify-center mt-10 gap-1">
			<Button
				fontSize="text-sm"
				color="text-black"
                background="bg-white"
				border="border"
				rounded="rounded-md"
				buttonHeight="h-[35px]"
				buttonWidth="w-[35px]"
				hoverEffect="hover:text-white hover:font-bold hover:bg-darkBlue hover:border-darkBlue"
			>
				1
			</Button>
			<Button
				fontSize="text-sm"
				color="text-black"
                background="bg-white"
				border="border"
				rounded="rounded-md"
				buttonHeight="h-[35px]"
				buttonWidth="w-[35px]"
				hoverEffect="hover:text-white hover:font-bold hover:bg-darkBlue hover:border-darkBlue"
			>
				2
			</Button>
			<Button
				fontSize="text-sm"
				color="text-black"
                background="bg-white"
				border="border"
				rounded="rounded-md"
				buttonHeight="h-[35px]"
				buttonWidth="w-[35px]"
				hoverEffect="hover:text-white hover:font-bold hover:bg-darkBlue hover:border-darkBlue"
			>
				<FaAnglesRight className="w-3 h-3"/>
			</Button>
		</div>
	);
}

export default Pagination;

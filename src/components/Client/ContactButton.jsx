import Button from "./Button";
import { LuMessageCircleMore } from "react-icons/lu";

function ContactButton() {
	return (
		<Button
			subClass="flex-col"
			buttonHeight="h-12"
			buttonWidth="w-12"
			rounded="rounded-[50%]"
			background="bg-darkBlue"
			hoverEffect="hover:bg-primary"
            padding=""
		>
			<LuMessageCircleMore className="w-5 h-5"/>
			<span className="text-[8px]">Liên hệ</span>
		</Button>
	);
}

export default ContactButton;

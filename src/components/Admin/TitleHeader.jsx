import { Button } from "../Client";

function TitleHeader({ title, buttonIcon, titleButton, to}) {
	return (
		<div className="flex items-center justify-between p-3 border-b border-b-gray-200">
			<h3 className="text-[16px] font-bold">{title}</h3>
			<Button to={to} leftIcon={buttonIcon} fontSize="text-sm">
				{titleButton}
			</Button>
		</div>
	);
}

export default TitleHeader;

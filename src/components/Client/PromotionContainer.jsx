import flash from "../../assets/images/flash.svg";

function PromotionContainer() {
	return (
		<div className="mt-8 rounded-md bg-gradient-to-r from-darkBlue to-primary min-h-40 p-[10px]">
			<div className="flex items-center justify-between">
				<div className="flex">
					<img src={flash} className="h-[35px] w-auto object-cover" />
				</div>
			</div>
		</div>
	);
}

export default PromotionContainer;

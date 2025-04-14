import PropTypes from "prop-types";

function Button({
	fontSize = "font-[14px]",
	fontWeight = "font-medium",
	color = "text-white",
	border,
	background = "bg-primary",
	iconSize = "w-[15px] h-[15px]",
	rounded = "rounded-md",
	hoverEffect = "hover:bg-success",
	cursor = "cursor-pointer",
	padding = "py-[5px] px-[10px]",
	leftIcon,
	rightIcon,
	children,
}) {
	let className = `${fontSize} ${fontWeight} ${color} ${border} ${background} ${rounded} ${hoverEffect} ${cursor} ${padding} flex items-center justify-center  gap-1 transition-all duration-150 ease-linear`;
	let classIcon = `${iconSize}`;
	return (
		<div className={className}>
			{leftIcon && <div className={classIcon}>{leftIcon}</div>}
			{children}
			{rightIcon && <div className={classIcon}>{rightIcon}</div>}
		</div>
	);
}

export default Button;

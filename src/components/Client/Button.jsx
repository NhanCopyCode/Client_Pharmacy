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
    buttonWidth,
    buttonHeight,
	leftIcon,
	rightIcon,
	children,
	onClick
}) {
	let className = `${fontSize} ${fontWeight} ${color} ${border} ${background} ${rounded} ${hoverEffect} ${cursor} ${padding} ${buttonWidth} ${buttonHeight} flex items-center justify-center  gap-1 transition-all duration-150 ease-linear`;
	let classIcon = `${iconSize} flex items-center justify-center`;
	return (
		<div onClick={onClick} className={className}>
			{leftIcon && <div className={classIcon}>{leftIcon}</div>}
			{children}
			{rightIcon && <div className={classIcon}>{rightIcon}</div>}
		</div>
	);
}
Button.propTypes = {
	fontSize: PropTypes.string,
	fontWeight: PropTypes.string,
	color: PropTypes.string,
	border: PropTypes.string,
	background: PropTypes.string,
	iconSize: PropTypes.string,
	rounded: PropTypes.string,
	hoverEffect: PropTypes.string,
	cursor: PropTypes.string,
	padding: PropTypes.string,
	buttonWidth: PropTypes.string,
	buttonHeight: PropTypes.string,
	leftIcon: PropTypes.node,
	rightIcon: PropTypes.node,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
};

export default Button;

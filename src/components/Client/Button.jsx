import PropTypes from "prop-types";

function Button({
	subClass,
	fontSize = "font-[14px]",
	fontWeight = "font-medium",
	color = "text-white",
	border,
	background = "bg-primary",
	iconSize = "w-[15px] h-[15px]",
	buttonSize,
	rounded = "rounded-md",
	hoverEffect = "hover:bg-success",
	cursor = "cursor-pointer",
	padding = "py-[5px] px-[10px]",
	buttonWidth,
	buttonHeight,
	leftIcon,
	rightIcon,
	children,
	onClick,
	onMouseEnter = () => {},
	onMouseLeave = () => {},
}) {
	const className = `${subClass} ${fontSize} ${fontWeight} ${buttonSize} ${color} ${border} ${background} ${rounded} ${hoverEffect} ${cursor} ${padding} ${buttonWidth} ${buttonHeight} flex items-center justify-center gap-1 transition-all duration-150 ease-linear`;
	const classIcon = `${iconSize} flex items-center justify-center`;

	return (
		<div
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			className={className}
		>
			{leftIcon && <div className={classIcon}>{leftIcon}</div>}
			{children}
			{rightIcon && <div className={classIcon}>{rightIcon}</div>}
		</div>
	);
}

Button.propTypes = {
	subClass: PropTypes.string,
	fontSize: PropTypes.string,
	fontWeight: PropTypes.string,
	color: PropTypes.string,
	border: PropTypes.string,
	background: PropTypes.string,
	buttonSize: PropTypes.string,
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
	onMouseEnter: PropTypes.func,
	onMouseLeave: PropTypes.func,
};

export default Button;

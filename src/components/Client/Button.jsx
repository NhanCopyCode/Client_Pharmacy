import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({
	to,
	subClass,
	disabled ,
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
	const className = `${subClass} ${fontSize} ${fontWeight} ${buttonSize} ${color} ${border} ${background} ${rounded} ${hoverEffect} ${cursor} ${padding} ${buttonWidth} ${buttonHeight} flex items-center justify-center gap-1 transition-all duration-150 ease-linear ${
		disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
	}`;
	const classIcon = `${iconSize} flex items-center justify-center`;
	const Element = to ? Link : "div";

	return (
		<Element
			{...(to ? { to } : {})}
			onClick={onClick}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			className={`group ${className}`}
		>
			{leftIcon && <div className={classIcon}>{leftIcon}</div>}
			{children}
			{rightIcon && <div className={classIcon}>{rightIcon}</div>}
		</Element>
	);
}

Button.propTypes = {
	to: PropTypes.string,
	subClass: PropTypes.string,
	disabled: PropTypes.bool,
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

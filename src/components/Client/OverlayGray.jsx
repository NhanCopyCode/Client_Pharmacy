function OverlayGray({ onClick = () => {}, zIndex = 10 }) {
	return (
		<div
			className={`fixed inset-0 bg-black !opacity-50 z-${zIndex}`}
			onClick={onClick}
		/>
	);
}

export default OverlayGray;

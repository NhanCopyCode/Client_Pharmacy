function OverlayGray({ onClick = () => {}, zIndex = 50 }) {
	return (
		<div
			className={`fixed inset-0 bg-black !opacity-40 z-[${zIndex}]`}
			onClick={onClick}
		/>
	);
}

export default OverlayGray;

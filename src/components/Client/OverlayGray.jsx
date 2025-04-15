function OverlayGray({ onClick = () => {}, zIndex = 40 }) {
	return (
		<div
			className={`fixed inset-0 bg-black opacity-50 z-[${zIndex}]`}
			onClick={onClick}
		/>
	);
}

export default OverlayGray;

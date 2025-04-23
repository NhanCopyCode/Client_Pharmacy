export const path = {
    HOME: '/*',
	DANG_NHAP: 'dang-nhap',
	TIN_TUC: 'tin-tuc',
	CHI_TIET_SAN_PHAM: 'san-pham/:id',
	CHI_TIET_TIN_TUC: 'tin-tuc/:id',
	GIO_HANG: 'gio-hang',
}


export const customStylesModal = {
	overlay: {
		backgroundColor: "rgba(0, 0, 0, 0.3)", // làm mờ nền
		zIndex: 1000, // đảm bảo modal nằm trên
	},
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
        padding: "0",
		width: "434px", // hoặc 50%, v.v.
		maxHeight: "90vh",
		borderRadius: "4px",
		border: "none",
		background: "#fff",
		boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
		transform: "translate(-50%, -50%)",
	},
};

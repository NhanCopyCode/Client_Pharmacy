// modelConstant.js

export const TABLE_HEADS = {
	Products: [
		"Mã sản phẩm",
		"Tiêu đề",
		"Mô tả",
		"Tồn kho",
		"Mã ảnh sản phẩm",
		"Mã danh mục",
		"Giá",
		"Đã xóa",
		"Mã thương hiệu",
	],
	ProductImages: ["Mã ảnh", "Mã sản phẩm", "Ảnh"],
	Users: ["Mã người dùng", "Họ", "Tên", "Email", "Số điện thoại", "Mật khẩu"],
	Categories: ["Mã danh mục", "Tên danh mục", "Ảnh", "Mã danh mục cha"],
	Videos: ["Mã video", "Đường dẫn", "Tên video"],
	Discounts: [
		"Mã khuyến mãi",
		"Tên chương trình",
		"Mô tả",
		"Ảnh",
		"Phần trăm giảm giá",
		"Ngày bắt đầu",
		"Ngày kết thúc",
	],
	discount_product: ["Mã", "Mã khuyến mãi", "Mã sản phẩm"],
	Posts: [
		"Mã bài viết",
		"Tiêu đề",
		"Mô tả",
		"Ngày tạo",
		"Ngày cập nhật",
		"Đã xóa",
		"Mã người dùng",
	],
	Orders: [
		"Mã đơn hàng",
		"Mã người dùng",
		"Tổng tiền",
		"Trạng thái",
		"Ngày tạo",
		"Ngày cập nhật",
	],
	OrderItems: [
		"Mã chi tiết đơn",
		"Mã đơn hàng",
		"Mã sản phẩm",
		"Số lượng",
		"Giá",
		"Giảm giá",
		"Giá cuối cùng",
	],
	Payments: [
		"Mã thanh toán",
		"Mã đơn hàng",
		"Cổng thanh toán",
		"Mã giao dịch",
		"Số tiền",
		"Ngày thanh toán",
		"Thời gian thanh toán",
		"Mã phản hồi VNP",
		"Mã ngân hàng",
		"Ghi chú",
		"Ngày tạo",
		"Ngày cập nhật",
	],
	Brands: ["Mã thương hiệu", "Tên thương hiệu", "Mô tả", "Logo"],
};

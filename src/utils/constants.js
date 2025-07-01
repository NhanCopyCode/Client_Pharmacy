import { IoHomeOutline } from "react-icons/io5";
import { MdSettingsSystemDaydream } from "react-icons/md";
import { LiaProductHunt } from "react-icons/lia";

export const path = {
	HOME: "/*",
	ADMIN: "admin",
	ADMIN_LOGIN: "admin/login",
	DANG_NHAP: "dang-nhap",
	TIN_TUC: "tin-tuc",
	CHI_TIET_SAN_PHAM: "san-pham/:id",
	CHI_TIET_TIN_TUC: "tin-tuc/:id",
	GIO_HANG: "gio-hang",
};

// src/utils/roles.js

export const ROLES = {
	ADMIN: 1,
	CLIENT: 2,
};

export const customStylesModal = {
	overlay: {
		backgroundColor: "rgba(0, 0, 0, 0.3)",
		zIndex: 1000,
	},
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		padding: "0",
		width: "434px",
		maxHeight: "90vh",
		borderRadius: "4px",
		border: "none",
		background: "#fff",
		boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
		transform: "translate(-50%, -50%)",
	},
};

export const menuAdmin = [
	{
		icon: IoHomeOutline,
		title: "Trang chủ",
		path: "/admin",
	},
	{
		icon: MdSettingsSystemDaydream,
		title: "Hệ thống",
		children: [
			{
				title: "Cài đặt",
				path: "/admin/settings",
			},
			{
				title: "Vai trò",
				path: "/admin/roles",
			},
			{
				title: "Tài khoản",
				path: "/admin/accounts",
			},
		],
	},
	{
		icon: LiaProductHunt,
		title: "Danh mục",
		path: "/admin/categories",
	},
	{
		icon: LiaProductHunt,
		title: "Hãng",
		path: "/admin/brands",
	},
	{
		icon: LiaProductHunt,
		title: "Sản phẩm",
		path: "/admin/products",
	},
	{
		icon: LiaProductHunt,
		title: "Quảng cáo",
		path: "/admin/ads",
	},
	{
		icon: LiaProductHunt,
		title: "Khuyến mãi",
		path: "/admin/promotions",
	},
];

export const adminPath = {
	PREFIX: "admin",

	LOGIN: "login",
	SETTINGS: "settings",
	PRODUCTS: "products",
	BRANDS: "brands",
	CATEGORIES: "categories",
	PROMOTIONS: "promotions",

	list: (model) => `/admin/${model}`,
	create: (model) => `/admin/${model}/create`,
	edit: (model, id) => `/admin/${model}/${id}/edit`,
	detail: (model, id) => `/admin/${model}/${id}`,
};

export const TABLE_COLUMNS = {
	brands: [
		{ key: "", label: "", type: "checkbox", style: "text-center" },
		{ key: "id", label: "ID" },
		{ key: "name", label: "Tên hãng" },
		{ key: "logo", label: "Logo", type: "image", style: "w-[80px]" },
		{
			key: "description",
			label: "Mô tả",
			type: "html",
			style: "max-w-[300px]",
		},
		{ key: "approved", label: "Duyệt", type: "boolean" },
	],

	products: [
		{ key: "", label: "", type: "checkbox", style: "text-center" },
		{ key: "id", label: "ID" },
		{ key: "title", label: "Tên sản phẩm" },
		{ key: "brandName", label: "Tên hãng" },
		{ key: "categoryName", label: "Tên danh mục" },
		{
			key: "description",
			label: "Mô tả",
			type: "html",
			style: "max-w-[300px]",
		},
		{ key: "inventory", label: "Kho" },
		{
			key: "price",
			label: "Giá",
			type: "currency",
			style: "text-red-600 font-bold",
		},
		{ key: "approved", label: "Duyệt", type: "boolean" },
	],

	categories: [
		{ key: "", label: "", type: "checkbox", style: "text-center" },
		{ key: "id", label: "ID" },
		{ key: "name", label: "Tên danh mục" },
		{
			key: "image",
			label: "Hình ảnh",
			type: "image",
			style: "w-50 object-cover",
		},
		{ key: "parentName", label: "Danh mục cha", type: "parent" },
		{ key: "approved", label: "Duyệt", type: "boolean" },
	],

	users: [
		{ key: "", label: "", type: "checkbox", style: "text-center" },
		{ key: "id", label: "ID" },
		{ key: "surname", label: "Họ" },
		{ key: "name", label: "Tên" },
		{ key: "email", label: "Email", style: "text-blue-600" },
		{ key: "phoneNumber", label: "SĐT" },
		{ key: "address", label: "Địa chỉ" },
	],

	posts: [
		{ key: "", label: "", type: "checkbox", style: "text-center" },
		{ key: "id", label: "ID" },
		{ key: "title", label: "Tiêu đề" },
		{ key: "description", label: "Nội dung" },
		{ key: "createdAt", label: "Ngày tạo", type: "date" },
		{ key: "isDeleted", label: "Đã xóa", type: "boolean" },
	],

	discounts: [
		{ key: "", label: "", type: "checkbox", style: "text-center" },
		{ key: "id", label: "ID" },
		{ key: "name", label: "Tên khuyến mãi" },
		{ key: "description", label: "Mô tả" },
		{
			key: "image",
			label: "Ảnh",
			type: "image",
			style: "w-12 h-12 object-contain",
		},
		{
			key: "discountPercent",
			label: "% giảm",
			style: "text-green-600 font-bold",
		},
		{ key: "start_date", label: "Bắt đầu", type: "date" },
		{ key: "end_date", label: "Kết thúc", type: "date" },
	],

	orders: [
		{ key: "", label: "", type: "checkbox", style: "text-center" },
		{ key: "id", label: "ID" },
		{ key: "userId", label: "Người dùng" },
		{ key: "totalPrice", label: "Tổng tiền", type: "currency" },
		{ key: "status", label: "Trạng thái", type: "boolean" },
		{ key: "createdAt", label: "Ngày tạo", type: "date" },
	],

	payments: [
		{ key: "", label: "", type: "checkbox", style: "text-center" },
		{ key: "id", label: "ID" },
		{ key: "orderId", label: "Mã đơn hàng" },
		{ key: "payment_gateway", label: "Cổng thanh toán" },
		{ key: "transaction_code", label: "Mã giao dịch" },
		{ key: "amount", label: "Số tiền", type: "currency" },
		{ key: "payment_time", label: "Thời gian", type: "date" },
		{ key: "vnp_response_code", label: "Mã phản hồi VNP" },
		{ key: "bank_code", label: "Ngân hàng" },
	],

	ads: [
		{ key: "", label: "", type: "checkbox", style: "text-center" },
		{ key: "id", label: "ID" },
		{ key: "title", label: "Tiêu đề" },
		{
			key: "image",
			label: "Ảnh",
			type: "image",
			style: "w-50 object-contain",
		},
		{ key: "approved", label: "Duyệt", type: "boolean" },
	],
	promotions: [
		{ key: "", label: "", type: "checkbox", style: "text-center" },
		{ key: "id", label: "ID" },
		{ key: "title", label: "Tên khuyến mãi" },
		{
			key: "description",
			label: "Mô tả",
			style: "max-w-[300px] ",
			type: "html",
		},
		{ key: "discount_type", label: "Loại giảm", type: "badge" }, // percent / fixed
		{
			key: "discount_value",
			label: "Giá trị giảm",
			style: "text-green-600 font-bold",
			render: (value, row) => {
				if (row.discount_type === "percent") return `${value}%`;
				if (row.discount_type === "fixed")
					return `${Number(value).toLocaleString()}₫`;
				return value;
			},
		},
		{
			key: "max_discount_value",
			label: "Giảm tối đa",
			type: "currency",
		},
		{
			key: "min_order_value",
			label: "Giá trị tối thiểu",
			type: "currency",
		},
		{ key: "applies_to", label: "Áp dụng cho", type: "badge" }, // 	enum('product', 'category', 'order')
	],
};

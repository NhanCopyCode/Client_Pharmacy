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

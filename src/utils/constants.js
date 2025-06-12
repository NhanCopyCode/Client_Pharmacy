

import { IoHomeOutline } from "react-icons/io5";
import { MdSettingsSystemDaydream } from "react-icons/md";
import { LiaProductHunt } from "react-icons/lia";

export const path = {
	HOME: "/*",
	ADMIN: "admin",
	DANG_NHAP: "dang-nhap",
	TIN_TUC: "tin-tuc",
	CHI_TIET_SAN_PHAM: "san-pham/:id",
	CHI_TIET_TIN_TUC: "tin-tuc/:id",
	GIO_HANG: "gio-hang",
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
	SETTINGS: "settings",
	SETTING_CREATE: "settings/create",
	PRODUCTS: "products",
	PRODUCTS_CREATE: "products/create",
	BRANDS: "brands",
	BRANDS_CREATE: "brands/create",
	CATEGORIES: "categories",
	CATEGORIES_CREATE: "categories/create",
	PROMOTIONS: "promotions",
	PROMOTIONS_CREATE: "promotions/create",
};
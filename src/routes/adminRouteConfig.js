// src/routes/adminRoutesConfig.js

import {
	ShowTableBrand,
	AddNewBrand,
	ShowTableCategory,
	AddNewCategory,
	ShowTableProduct,
	AddNewProduct,
	ShowTablePromotion,
	AddNewPromotion,
	ShowTableSetting,
	AddNewSetting,
} from "../pages/Admin";

export const adminRoutes = [
	{
		model: "brands",
		list: ShowTableBrand,
		create: AddNewBrand,
	},
	{
		model: "settings",
		list: ShowTableSetting,
		create: AddNewSetting,
	},
	{
		model: "products",
		list: ShowTableProduct,
		create: AddNewProduct,
	},
	{
		model: "categories",
		list: ShowTableCategory,
		create: AddNewCategory,
	},
	{
		model: "promotions",
		list: ShowTablePromotion,
		create: AddNewPromotion,
	},
];

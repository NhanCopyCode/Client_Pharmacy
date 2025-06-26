import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { path } from "./utils/constants.js";
import { adminPath } from "./utils/constants.js";
import {
	Homepage,
	Home,
	DetailCategoryPage,
	CartDetail,
	DetailProduct,
	LoginPage,
	NewsPage,
	DetailNews,
	AdminPage,
} from "./pages/Client";
import {
	AddNewBrand,
	AddNewCategory,
	AddNewProduct,
	AddNewPromotion,
	AddNewSetting,
	AdminLoginPage,
	ShowTableBrand,
	ShowTableCategory,
	ShowTableProduct,
	ShowTablePromotion,
	ShowTableSetting,
	DetailBrand,
	EditBrand,
	DetailCategory,
	EditCategory
} from "./pages/Admin/index.js";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import RenderWithProps from "./utils/RenderWithProps.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const adminModels = [
	{
		model: "brands",
		list: ShowTableBrand,
		create: AddNewBrand,
		detail: DetailBrand,
		update: EditBrand
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
		detail: DetailCategory,
		update: EditCategory,
	},
	{
		model: "promotions",
		list: ShowTablePromotion,
		create: AddNewPromotion,
	},
];
const DefaultAdminIndex = adminModels[0].list;
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<AuthProvider>
				<BrowserRouter>
					<Routes>
						<Route path={path.HOME} element={<Homepage />}>
							<Route path="*" element={<Home />} />
							<Route
								path="khuyen-mai-hot"
								element={<DetailCategoryPage />}
							/>
							<Route
								path={path.CHI_TIET_SAN_PHAM}
								element={<DetailProduct />}
							/>
							<Route
								path={path.GIO_HANG}
								element={<CartDetail />}
							/>
							<Route
								path={path.DANG_NHAP}
								element={<LoginPage />}
							/>
							<Route path={path.TIN_TUC} element={<NewsPage />} />
							<Route
								path={path.CHI_TIET_TIN_TUC}
								element={<DetailNews />}
							/>
						</Route>

						<Route
							path={path.ADMIN_LOGIN}
							element={<AdminLoginPage />}
						/>

						<Route
							path={path.ADMIN}
							element={
								<ProtectedRoute role="admin">
									<AdminPage />
								</ProtectedRoute>
							}
						>
							<Route
								index
								element={<DefaultAdminIndex model="brands" />}
							/>

							{adminModels.map(
								({
									model,
									list: ListComponent,
									create: CreateComponent,
									detail: DetailComponent,
									update: UpdateComponent,
								}) => (
									<React.Fragment key={model}>
										<Route
											path={model}
											element={
												<RenderWithProps
													component={ListComponent}
													model={model}
												/>
											}
										/>
										<Route
											path={adminPath.detail(
												model,
												":id"
											)}
											element={
												<RenderWithProps
													component={DetailComponent}
													model={model}
												/>
											}
										/>
										<Route
											path={adminPath.create(model)}
											element={
												<RenderWithProps
													component={CreateComponent}
													model={model}
												/>
											}
										/>

										<Route
											path={adminPath.edit(model, ":id")}
											element={
												<RenderWithProps
													component={UpdateComponent}
													model={model}
												/>
											}
										/>
									</React.Fragment>
								)
							)}
						</Route>
					</Routes>
					<ToastContainer
						position="top-right"
						autoClose={2000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme="light"
					/>
				</BrowserRouter>
			</AuthProvider>
		</Provider>
	</StrictMode>
);

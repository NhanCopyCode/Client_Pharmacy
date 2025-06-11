import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
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
import { AddNew, ShowTable } from "./pages/Admin";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
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
						<Route path={path.GIO_HANG} element={<CartDetail />} />
						<Route path={path.GIO_HANG} element={<CartDetail />} />
						<Route path={path.DANG_NHAP} element={<LoginPage />} />
						<Route path={path.TIN_TUC} element={<NewsPage />} />
						<Route
							path={path.CHI_TIET_TIN_TUC}
							element={<DetailNews />}
						/>
					</Route>
					<Route path={path.ADMIN} element={<AdminPage />}>
						<Route
							path={adminPath.DANH_SACH_SAN_PHAM}
							element={<ShowTable />}
						/>
						<Route
							path={adminPath.THEM_MOI_SAN_PHAM}
							element={<AddNew />}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</StrictMode>
);

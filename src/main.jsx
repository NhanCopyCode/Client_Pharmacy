import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { path } from "./utils/constants.js";
import { Homepage, Home, DetailCategoryPage, CartDetail, DetailProduct, LoginPage, NewsPage } from "./pages/Client";

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
						<Route path={path.DANG_NHAP} element={<LoginPage />} />
						<Route path={path.TIN_TUC} element={<NewsPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</StrictMode>
);

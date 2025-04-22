import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { path } from "./utils/constants.js";
import { Homepage, Home, DetailCategoryPage, CartDetail, DetailProduct, LoginPage } from "./pages/Client";

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
							path="san-pham/:id"
							element={<DetailProduct />}
						/>
						<Route path="gio-hang" element={<CartDetail />} />
						<Route path="dang-nhap" element={<LoginPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</StrictMode>
);

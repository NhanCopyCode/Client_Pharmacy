import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { path } from "./utils/constants.js";
import { Homepage, Home, DetailCategoryPage } from "./pages/Client";
import DetailProduct from "./pages/Client/DetailProduct.jsx";

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
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</StrictMode>
);

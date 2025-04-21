import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { path } from "./utils/constants.js";
import { Homepage, Home, DetailCategoryPage } from "./pages/Client";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path={path.HOME} element={<Homepage />}>
						<Route path="*" element={<Home />} />
						<Route path="khuyen-mai-hot" element={<DetailCategoryPage />} />
 					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</StrictMode>
);

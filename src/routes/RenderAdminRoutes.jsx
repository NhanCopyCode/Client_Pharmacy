import React from "react";
import { Route } from "react-router-dom";

export default function RenderAdminRoutes({ routes }) {
	return (
		<>
			{routes.map(({ path, element }, index) => (
				<Route key={index} path={path} element={element} />
			))}
		</>
	);
}

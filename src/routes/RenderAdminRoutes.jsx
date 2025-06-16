import React from "react";
import { Route } from "react-router-dom";

export default function RenderAdminRoutes({ routes }) {
	return (
		<>
			{routes.map(({ path, element }) => (
				<Route key={path} path={path} element={element} />
			))}
		</>
	);
}

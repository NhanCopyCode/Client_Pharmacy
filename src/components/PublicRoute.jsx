import React from "react";
import { useAuth } from "../hooks";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children, role }) {
	const { user } = useAuth();

	if (user && role === "admin") {
		return <Navigate to="/admin" />;
	}

	if (user && role === "client") {
		return <Navigate to="/" />;
	}

	return children;
}

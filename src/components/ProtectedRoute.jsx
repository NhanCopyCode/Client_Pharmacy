import { ROLES } from "../utils/constants";
import { useAuth } from "../hooks";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
	const { user } = useAuth();

	if (!user) {
		return role === "admin" ? (
			<Navigate to="/admin/login" />
		) : (
			<Navigate to="/login" />
		);
	}

	// if (role) {
	// 	if (role === "admin" && user.role !== ROLES.ADMIN) {
	// 		return <Navigate to="/admin" />;
	// 	}
	// 	if (role === "client" && user.role !== ROLES.CLIENT) {
	// 		return <Navigate to="/" />;
	// 	}
	// }

	return children;
}

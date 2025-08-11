import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../../components/Admin";
import { login } from "../../../services/authService";
import useAuth from "../../../hooks/useAuth";

function LoginPage() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const { loginUser } = useAuth();

	const handleLogin = async (form) => {
		setError("");
		if (!form.email || !form.password) {
			setError("email and Password are required.");
			return;
		}

		setLoading(true);
		try {
			const data = await login({email: form.email, password:form.password});
			loginUser(data);	

			navigate("/admin");
		} catch (err) {
			if (err.response && err.response.status === 401) {
				setError("Email hoặc mặt khẩu không chính xác.");
			} else {
				setError("Có lỗi xảy ra.");
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
				<h2 className="mb-6 text-2xl font-bold text-center text-gray-700">
					Admin Login
				</h2>
				<LoginForm
					onSubmit={handleLogin}
					loading={loading}
					error={error}
				/>
			</div>
		</div>
	);
}

export default LoginPage;

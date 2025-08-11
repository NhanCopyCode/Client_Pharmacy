import React, { useState } from "react";

function LoginForm({ onSubmit, loading, error }) {
	const [form, setForm] = useState({ email: "", password: "" });

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(form);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="mb-4">
				<label className="block mb-1 text-sm font-medium text-gray-600">
					Email
				</label>
				<input
					type="email"
					name="email"
					value={form.email}
					onChange={handleChange}
					className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
				/>
			</div>
			<div className="mb-4">
				<label className="block mb-1 text-sm font-medium text-gray-600">
					Password
				</label>
				<input
					type="password"
					name="password"
					value={form.password}
					onChange={handleChange}
					className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
				/>
			</div>
			{error && <div className="mb-4 text-sm text-red-500">{error}</div>}
			<button
				type="submit"
				className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
				disabled={loading}
			>
				{loading ? "Logging in..." : "Login"}
			</button>
		</form>
	);
}

export default LoginForm;

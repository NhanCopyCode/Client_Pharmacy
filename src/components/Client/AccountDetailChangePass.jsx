import { useState } from "react";

function AccountDetailChangePass() {
	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		// You can handle the password update logic here, e.g., call an API
		if (newPassword !== confirmPassword) {
			alert("Mật khẩu xác nhận không khớp.");
			return;
		}

		const payload = {
			OldPassword: oldPassword,
			Password: newPassword,
			ConfirmPassword: confirmPassword,
		};

		console.log("Submitting password change:", payload);
		// Call API or dispatch Redux action here...
	};

	return (
		<>
			<h1 className="text-[19px] uppercase">Đổi mật khẩu</h1>

			<form
				onSubmit={handleSubmit}
				className="py-4 w-[410px] bg-white rounded"
			>
				<input
					type="hidden"
					name="FormType"
					value="change_customer_password"
				/>
				<input type="hidden" name="utf8" value="true" />

				<p className="text-gray-600 text-sm mb-4">
					Để đảm bảo tính bảo mật bạn vui lòng đặt lại mật khẩu với ít
					nhất 8 kí tự
				</p>

				<div className="space-y-4">
					<div>
						<label
							htmlFor="OldPass"
							className="block text-sm font-medium text-gray-700"
						>
							Mật khẩu cũ <span className="text-red-500">*</span>
						</label>
						<input
							type="password"
							id="OldPass"
							name="OldPassword"
							value={oldPassword}
							onChange={(e) => setOldPassword(e.target.value)}
							required
							className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
						/>
					</div>

					<div>
						<label
							htmlFor="changePass"
							className="block text-sm font-medium text-gray-700"
						>
							Mật khẩu mới <span className="text-red-500">*</span>
						</label>
						<input
							type="password"
							id="changePass"
							name="Password"
							value={newPassword}
							onChange={(e) => setNewPassword(e.target.value)}
							required
							className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
						/>
					</div>

					<div>
						<label
							htmlFor="confirmPass"
							className="block text-sm font-medium text-gray-700"
						>
							Xác nhận lại mật khẩu{" "}
							<span className="text-red-500">*</span>
						</label>
						<input
							type="password"
							id="confirmPass"
							name="ConfirmPassword"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
							className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
						/>
					</div>

					<button
						type="submit"
						className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition uppercase font-bold"
					>
						Đặt lại mật khẩu
					</button>
				</div>
			</form>
		</>
	);
}

export default AccountDetailChangePass;

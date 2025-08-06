import { useEffect, useState } from "react";
import { Button, Container } from "../../components/Client";
import { FaGoogle } from "react-icons/fa";
import { googleLogin, register, login } from "../../services/authService";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function LoginPage() {
	const [showLogin, setShowLogin] = useState(true);
	const [showRegister, setShowRegister] = useState(false);
	const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);
	const [dataRegister, setDataRegister] = useState({
		surname: "",
		name: "",
		email: "",
		phoneNumber: "",
		password: "",
	});
	const [dataLogin, setDataLogin] = useState({
		email: "",
		password: "",
	});

	const [errorsRegister, setErrorsRegister] = useState({});
	const [errorsLogin, setErrorsLogin] = useState({});
	const navigate = useNavigate();
	const { user } = useSelector((state) => state.auth);

	useEffect(() => {
		if (user) {
			navigate('/account');
		}
	}, [user, navigate]);

	const handleShowLoginForm = () => {
		setShowLogin(true);
		setShowRegister(false);
	};

	const handleShowRegisterForm = () => {
		setShowLogin(false);
		setShowRegister(true);
	};

	const handleShowForgotPasswordForm = () => {
		setShowForgotPasswordForm(!showForgotPasswordForm);
	};

	const handleChangeRegister = (e) => {
		const { name, value } = e.target;
		setDataRegister((prev) => ({ ...prev, [name]: value }));
	};

	const handleChangeLogin = (e) => {
		const { name, value } = e.target;
		setDataLogin((prev) => ({ ...prev, [name]: value }));
	};

	const handleRegister = async () => {
		try {
			const res = await register(dataRegister);
			if (res?.errors) {
				setErrorsRegister(res.errors);
			} else {
				setErrorsRegister({});
				console.log("Register success:", res);
			}
		} catch (error) {
			console.error("Register error:", error);
		}
	};

	const handleLogin = async () => {
		try {
			const res = await login(dataLogin);
			if (res?.errors) {
				setErrorsLogin(res.errors);
			} else {
				setErrorsLogin({});
				console.log("Login success:", res);
			}
		} catch (error) {
			console.error("Login error:", error);
		}
	};

	const handleGoogleLogin = async () => {
		try {
			const res = await googleLogin();
			window.location.href = res.url;
		} catch (error) {
			console.error("Google login error: ", error);
		}
	};

	const renderInput = ({
		name,
		type = "text",
		placeholder,
		value,
		onChange,
		error,
	}) => (
		<div className="flex flex-col">
			<input
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				className={`border-b-2 outline-0 bg-white py-[4px] px-[10px] rounded-sm ${
					error ? "border-b-red-500" : "border-b-lightBlue"
				}`}
			/>
			{error && (
				<span className="text-red-500 text-sm mt-1">{error}</span>
			)}
		</div>
	);

	return (
		<Container>
			<div className="w-[50%] border border-gray-100 shadow-md rounded-md py-[10px] px-[24px] mx-auto bg-gray-100">
				<div className="flex items-center uppercase text-[15px] font-bold">
					<div
						className={`flex-1/2 text-center border-b border-b-gray-400 py-2 cursor-pointer hover:bg-gray-100 flex items-center justify-center ${
							showLogin
								? "font-bold text-primary border-b-primary"
								: ""
						}`}
						onClick={handleShowLoginForm}
					>
						Đăng nhập
					</div>
					<div
						className={`flex-1/2 text-center border-b border-b-gray-400 py-2 cursor-pointer hover:bg-gray-100 flex items-center justify-center ${
							showRegister
								? "font-bold text-primary border-b-primary"
								: ""
						}`}
						onClick={handleShowRegisterForm}
					>
						Đăng ký
					</div>
				</div>

				{showRegister && (
					<>
						<div className="text-center text-[26px] uppercase my-3">
							Đăng ký
						</div>
						<div className="flex flex-col gap-3">
							{renderInput({
								name: "surname",
								placeholder: "Họ",
								value: dataRegister.surname,
								onChange: handleChangeRegister,
								error: errorsRegister.surname,
							})}
							{renderInput({
								name: "name",
								placeholder: "Tên",
								value: dataRegister.name,
								onChange: handleChangeRegister,
								error: errorsRegister.name,
							})}
							{renderInput({
								name: "email",
								type: "email",
								placeholder: "Email",
								value: dataRegister.email,
								onChange: handleChangeRegister,
								error: errorsRegister.email,
							})}
							{renderInput({
								name: "phoneNumber",
								placeholder: "Số điện thoại",
								value: dataRegister.phoneNumber,
								onChange: handleChangeRegister,
								error: errorsRegister.phoneNumber,
							})}
							{renderInput({
								name: "password",
								type: "password",
								placeholder: "Mật khẩu",
								value: dataRegister.password,
								onChange: handleChangeRegister,
								error: errorsRegister.password,
							})}
							<Button
								buttonHeight="h-[45px]"
								background="bg-darkBlue"
								hoverEffect="hover:bg-primary"
								onClick={handleRegister}
							>
								Đăng ký
							</Button>
						</div>
						<div className="flex items-center justify-center text-sm text-black my-4">
							Hoặc đăng nhập bằng
						</div>
						<Button
							leftIcon={<FaGoogle />}
							background="bg-lightRed"
							hoverEffect="hover:bg-redColor"
							buttonHeight="h-[45px]"
							onClick={handleGoogleLogin}
						>
							Google
						</Button>
					</>
				)}

				{showLogin && (
					<>
						<div className="text-center text-[26px] uppercase my-3">
							Đăng nhập
						</div>
						<div className="flex flex-col gap-3">
							{renderInput({
								name: "email",
								type: "email",
								placeholder: "Email",
								value: dataLogin.email,
								onChange: handleChangeLogin,
								error: errorsLogin.email,
							})}
							{renderInput({
								name: "password",
								type: "password",
								placeholder: "Mật khẩu",
								value: dataLogin.password,
								onChange: handleChangeLogin,
								error: errorsLogin.password,
							})}
							<Button
								buttonHeight="h-[45px]"
								background="bg-darkBlue"
								hoverEffect="hover:bg-primary"
								onClick={handleLogin}
							>
								Đăng nhập
							</Button>
							<div
								onClick={handleShowForgotPasswordForm}
								className="flex items-center justify-center text-sm hover:text-primary cursor-pointer font-bold mt-4"
							>
								Quên mật khẩu
							</div>

							{showForgotPasswordForm && (
								<div className=" flex flex-col gap-3 mt-4">
									<input
										type="email"
										className="border-b-2 border-b-lightBlue outline-0 bg-white py-[4px] px-[10px] rounded-sm"
										placeholder="Email"
									/>
									<Button
										buttonHeight="h-[45px]"
										background="bg-darkBlue"
										hoverEffect="hover:bg-primary"
									>
										Lấy lại mật khẩu
									</Button>
								</div>
							)}
							<div className="flex items-center justify-center text-sm text-black my-4">
								Hoặc đăng nhập bằng
							</div>
							<Button
								leftIcon={<FaGoogle />}
								background="bg-lightRed"
								hoverEffect="hover:bg-redColor"
								buttonHeight="h-[45px]"
								onClick={handleGoogleLogin}
							>
								Google
							</Button>
						</div>
					</>
				)}
			</div>
		</Container>
	);
}

export default LoginPage;

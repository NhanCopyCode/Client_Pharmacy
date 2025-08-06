import { useState } from "react";
import { Button, Container } from "../../components/Client";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { googleLogin, register } from "../../services/authService";

function LoginPage() {
	const [showLogin, setShowLogin] = useState(true);
	const [showRegister, setShowRegister] = useState(false);
	const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);
	const navigate = useNavigate();

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

	const handleGoogleLogin = async () => {
		try {
			const res = await googleLogin();
			const googleLoginUrl = res.url;
			window.location.href = googleLoginUrl;
		} catch (error) {
			console.log("error: ", error);
		}
	};
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
							<input
								className="border-b-2 border-b-lightBlue outline-0 bg-white py-[4px] px-[10px] rounded-sm"
								placeholder="Họ"
							/>
							<input
								className="border-b-2 border-b-lightBlue outline-0 bg-white py-[4px] px-[10px] rounded-sm"
								placeholder="Tên"
							/>
							<input
								type="email"
								className="border-b-2 border-b-lightBlue outline-0 bg-white py-[4px] px-[10px] rounded-sm"
								placeholder="Email"
							/>
							<input
								className="border-b-2 border-b-lightBlue outline-0 bg-white py-[4px] px-[10px] rounded-sm"
								placeholder="Số điện thoại"
							/>
							<input
								type="password"
								className="border-b-2 border-b-lightBlue outline-0 bg-white py-[4px] px-[10px] rounded-sm"
								placeholder="Mật khẩu"
							/>
							<Button
								buttonHeight="h-[45px]"
								background="bg-darkBlue"
								hoverEffect="hover:bg-primary"
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
							<input
								type="email"
								className="border-b-2 border-b-lightBlue outline-0 bg-white py-[4px] px-[10px] rounded-sm"
								placeholder="Email"
							/>
							<input
								type="password"
								className="border-b-2 border-b-lightBlue outline-0 bg-white py-[4px] px-[10px] rounded-sm"
								placeholder="Mật khẩu"
							/>
							<Button
								buttonHeight="h-[45px]"
								background="bg-darkBlue"
								hoverEffect="hover:bg-primary"
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

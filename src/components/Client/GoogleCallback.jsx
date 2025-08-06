import { useNavigate, useSearchParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginStart, loginFail, loginSuccess } from "../../store/authSlice";

function GoogleCallback() {
	const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
        dispatch(loginStart());
		const accessToken = searchParams.get("access_token");
		const refreshToken = searchParams.get("refresh_token");
		const expiresIn = searchParams.get("expires_in");
		const params = new URLSearchParams(window.location.search);
		const user = JSON.parse(params.get("user"));
		console.log('user:', user)

		if (accessToken && refreshToken && user) {
			console.log("i am going here");
			console.log("user when i am in here: ", user);
			localStorage.setItem("access_token", accessToken);
			localStorage.setItem("refresh_token", refreshToken);
			localStorage.setItem("expires_in", expiresIn);
            dispatch(loginSuccess({
                user,
                accessToken,
                refreshToken
            }))
			navigate("/");
		} else {
			navigate("/dang-nhap");
		}
	}, [navigate, searchParams, dispatch]);

	return (
		<div className="flex flex-col items-center justify-center h-screen gap-4">
			<TailSpin
				height="50"
				width="50"
				color="#2563EB"
				ariaLabel="tail-spin-loading"
				radius="1"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
			<p className="text-lg font-semibold text-gray-700">
				Đang đăng nhập bằng Google...
			</p>
		</div>
	);
}

export default GoogleCallback;

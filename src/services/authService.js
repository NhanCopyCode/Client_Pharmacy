import axios from "./api/axiosInstance";
import publicAxios from "./api/publicAxios";
import { clientAxios } from "./api/publicAxios";

export const login = async (email, password) => {
	const response = await publicAxios.post(`/login`, { email, password });
	return response.data;
};

export const getProfile = async (token) => {
	const response = await axios.get(`/me`, {
		headers: { Authorization: `Bearer ${token}` },
	});
	return response.data;
};

export const register = async (data) => {
	const res = await publicAxios.post("/register", { data });
	return res?.data;
};

export const googleLogin = async () => {
	const res = await clientAxios.get("/auth/google/url");
	return res?.data;
};

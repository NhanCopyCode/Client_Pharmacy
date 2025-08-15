import { Navigate } from "react-router-dom";
import axios from "./api/axiosInstance";
import publicAxios from "./api/publicAxios";
import { clientAxios } from "./api/publicAxios";

export const login = async (data) => {
	try {
		const response = await publicAxios.post(`/login`, { ...data });

		return response.data;
	} catch (error) {
		if (error.response && error.response.status === 442) {
			return { errors: error.response.data.errors };
		}
		throw error;
	}
};

export const getProfile = async (token) => {
	const response = await axios.get(`/me`, {
		headers: { Authorization: `Bearer ${token}` },
	});
	return response.data;
};

export const register = async (data) => {
	try {
		const res = await publicAxios.post("/register", { ...data });
		return res?.data;
	} catch (error) {
		if (error.response && error.response.status === 442) {
			return { error: error.response.data.errors };
		}
		throw error;
	}
};

export const googleLogin = async () => {
	const res = await clientAxios.get("/auth/google/url");
	return res?.data;
};

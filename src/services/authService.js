
import axios from './api/axiosInstance';

export const login = async (email, password) => {
	const response = await axios.post(`/login`, { email, password });
	return response.data;
};

export const getProfile = async (token) => {
	const response = await axios.get(`/me`, {
		headers: { Authorization: `Bearer ${token}` },
	});
	return response.data;
};

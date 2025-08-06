import axios from "axios";

const publicAxios = axios.create({
	baseURL: "http://127.0.0.1:8000/api/",
	timeout: 10000,
	withCredentials: false,
});

export const clientAxios = axios.create({
	baseURL: "http://127.0.0.1:8000/",
	timeout: 10000,
	withCredentials: false,
});

export default publicAxios;

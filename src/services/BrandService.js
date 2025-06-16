import axiosInstance from "./api/axiosInstance";

const ENDPOINT = "brands"; 

export const getAllBrands = () => {
	return axiosInstance.get(ENDPOINT);
};

export const getBrandById = (id) => {
	return axiosInstance.get(`${ENDPOINT}/${id}`);
};

export const createBrand = (data) => {
	return axiosInstance.post(ENDPOINT, data);
};

export const updateBrand = (id, data) => {
	return axiosInstance.put(`${ENDPOINT}/${id}`, data);
};

export const deleteBrand = (id) => {
	return axiosInstance.delete(`${ENDPOINT}/${id}`);
};

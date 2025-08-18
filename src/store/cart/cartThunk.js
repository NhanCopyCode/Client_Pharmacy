// src/store/cartThunks.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	addToCartRedux,
	updateQuantityRedux,
	removeFromCartRedux,
	replaceCartRedux,
} from "./cartSlice";
import axiosInstance from "../../services/api/axiosInstance";

// Lấy giỏ hàng từ server (gọi khi user đăng nhập hoặc reload)
export const fetchCartThunk = createAsyncThunk(
	"cart/fetchCart",
	async (_, { dispatch, rejectWithValue }) => {
		try {
			// const refresh	
			const res = await axiosInstance.get("/cart");
			console.log('res when fetch cart:', res)
			if(res.data.items) {
				const cart_items = res.data.items;
				dispatch(replaceCartRedux(cart_items));
			}
			// Cập nhật Redux + localStorage bằng dữ liệu từ server
			return res.data.items;
		} catch (err) {	
			return rejectWithValue(err.response?.data || err.message);
		}
	}
);

// Thêm sản phẩm vào giỏ (server)
export const addToCartThunk = createAsyncThunk(
	"cart/addToCartThunk",
	async ({ product, quantity = 1 }, { dispatch, rejectWithValue }) => {
		const token = localStorage.getItem("access_token");
		console.log('token in cartThunk:', token)
		const { id } = product;
		console.log('this is id in cartThunk:', id)

		try {
			if(token) {
				await axiosInstance.post("/cart/items", {
					product_id: id,
					quantity: 1
				})
				console.log('i a going here');
			console.log("Go in add to cart thunk");

			}
			dispatch(addToCartRedux({ product, quantity }));
			return true;	
		} catch (err) {
			return rejectWithValue(err.response?.data || err.message);
		}
	}
);

// Cập nhật số lượng (server)
export const updateQuantityThunk = createAsyncThunk(
	"cart/updateQuantity",
	async ({ productId, quantity }, { dispatch, rejectWithValue }) => {
		try {
			const token = JSON.parse(localStorage.getItem('access_token'));
			console.log('token:', token)
			
			if(token) {
				const res = await axiosInstance.put(`/api/cart/${productId}`, { quantity });
				console.log('res when update quantity thunk:', res)

			}
			dispatch(updateQuantityRedux({ productId, quantity }));
			return { productId, quantity };
		} catch (err) {
			return rejectWithValue(err.response?.data || err.message);
		}
	}
);

// Xoá 1 item (server)
export const removeFromCartThunk = createAsyncThunk(
	"cart/removeFromCart",
	async (productId, { dispatch, rejectWithValue }) => {
		try {
			await axios.delete(`/api/cart/${productId}`);	
			dispatch(removeFromCartRedux(productId));
			return productId;
		} catch (err) {
			return rejectWithValue(err.response?.data || err.message);
		}
	}
);

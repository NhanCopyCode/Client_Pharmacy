// src/store/cartThunks.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	addToCartRedux,
	updateQuantityRedux,
	removeFromCartRedux,
	replaceCartRedux,
} from "./cartSlice";
import axios from "axios"; // thay bằng client của bạn nếu có

// Lấy giỏ hàng từ server (gọi khi user đăng nhập hoặc reload)
export const fetchCartThunk = createAsyncThunk(
	"cart/fetchCart",
	async (_, { dispatch, rejectWithValue }) => {
		try {
			const access_token = localStorage.getItem('access_token');
			// const refresh	
			const res = await axios.get("/api/cart");
			const serverItems = res.data || [];
			// Cập nhật Redux + localStorage bằng dữ liệu từ server
			dispatch(replaceCartRedux(serverItems));
			return serverItems;
		} catch (err) {	
			return rejectWithValue(err.response?.data || err.message);
		}
	}
);

// Thêm sản phẩm vào giỏ (server)
export const addToCartThunk = createAsyncThunk(
	"cart/addToCart",
	async ({ product, quantity = 1 }, { dispatch, rejectWithValue }) => {
		try {
			await axios.post("/api/cart", { productId: product.id, quantity });
			// Thành công -> cập nhật Redux + localStorage
			dispatch(addToCartRedux({ product, quantity }));
			return { product, quantity };
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
			await axios.put(`/api/cart/${productId}`, { quantity });
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

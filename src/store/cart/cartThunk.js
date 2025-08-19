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
			const res = await axiosInstance.get("/cart");

			if (res.data.items) {
				// Normalize values before putting into Redux
				const cart_items = res.data.items.map((item) => ({
					...item,
					unit_price: parseFloat(item.unit_price),
					discount_amount: parseFloat(item.discount_amount),
					finalPrice: parseFloat(item.final_price), // normalize naming
					productId: item.product_id,
					price: parseFloat(item.unit_price),
					discount: parseFloat(item.discount_amount),
				}));

				dispatch(replaceCartRedux(cart_items));
			}

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
		const { id } = product;

		try {
			if (token) {
				await axiosInstance.post("/cart/items", {
					product_id: id,
					quantity: 1,
				});
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
	async ({cartId,  quantity }, { dispatch, rejectWithValue }) => {
		try {
			const token = localStorage.getItem("access_token");
			console.log("token:", token);

			if (token) {
				const res = await axiosInstance.post(
					`/cart/items/${cartId}`,
					{
						quantity,
					}
				);
				console.log("res when update quantity thunk:", res);
			}
			dispatch(updateQuantityRedux({ cartId, quantity }));
			return { quantity };
		} catch (err) {
			console.log("oh no error", err.message);
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

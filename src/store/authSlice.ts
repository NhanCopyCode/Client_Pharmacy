import { createSlice } from "@reduxjs/toolkit";
import { clearAuthStorage } from "../utils/storage";
import { addAuthStorage } from "../utils/storage";

const savedUser = JSON.parse(localStorage.getItem("user") || "null");
const savedAccessToken = localStorage.getItem("access_token");
const savedRefreshToken = localStorage.getItem("");

const initialState = {
	user: savedUser,
	accessToken: savedAccessToken,
	refreshToken: null,
	loading: false,
	error: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		loginSuccess: (state, action) => {
			console.log("action: ", action);
			state.loading = false;
			state.user = action.payload.user;
			state.accessToken = action.payload.access_token;
			state.refreshToken = action.payload.refresh_token;
			addAuthStorage(action.payload);
		},
		loginFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
		logout: (state) => {
			state.user = null;
			state.accessToken = null;
			state.refreshToken = null;
			clearAuthStorage();
		},
	},
});

export const { loginStart, loginSuccess, loginFail, logout } =
	authSlice.actions;
export default authSlice.reducer;

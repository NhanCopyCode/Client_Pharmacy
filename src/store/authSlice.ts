import { createSlice } from "@reduxjs/toolkit";

const savedUser = JSON.parse(localStorage.getItem('user') || 'null');
const savedAccessToken = localStorage.getItem('access_token');
const savedRefreshToken = localStorage.getItem('')

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
            state.loading = false;
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
         loginFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            },
        logout: (state) => {
            return initialState;
        },
    }
})

export const { loginStart, loginSuccess, loginFail, logout  } = authSlice.actions;
export default authSlice.reducer;
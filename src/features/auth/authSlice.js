import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLogin: false,
	token: "",
	user: {},
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: () => {

        }
    }

})

export const { login } = authSlice.actions;

export default authSlice.reducer;
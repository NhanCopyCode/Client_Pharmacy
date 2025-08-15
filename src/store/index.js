import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import headerDataReducer from './headerDataSlice';
import cartReducer from './cart/cartSlice';
const store = configureStore({
    reducer: {
        auth: authReducer,
        headerData: headerDataReducer,
        cart: cartReducer
    }
})

export default store;
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import headerDataReducer from './headerDataSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        headerData: headerDataReducer
    }
})

export default store;
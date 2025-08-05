import { createSlice } from "@reduxjs/toolkit";

// Initial state for header/footer data
const initialState = {
	bannersTop: [],
	categories: [],
	postCategory: [],
	postsHeader: [],
	loading: false,
	error: null,
};

const headerDataSlice = createSlice({
	name: "headerData",
	initialState,
	reducers: {
		fetchHeaderDataStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		fetchHeaderDataSuccess: (state, action) => {
			state.loading = false;
			state.bannersTop = action.payload.bannersTop;
			state.categories = action.payload.categories;
			state.postCategory = action.payload.postCategory;
			state.postsHeader = action.payload.postsHeader;
		},
		fetchHeaderDataFail: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	fetchHeaderDataStart,
	fetchHeaderDataSuccess,
	fetchHeaderDataFail,
} = headerDataSlice.actions;

export default headerDataSlice.reducer;

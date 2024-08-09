import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "./store";

interface InitialState {
	showShoppingListDrawer: boolean;
	showSearchPopup: boolean;
	selectedRecipeActiveTab: string;
	searchRawQuery: string;
}

const initialState: InitialState = {
	showShoppingListDrawer: false,
	showSearchPopup: false,
	selectedRecipeActiveTab: "",
	searchRawQuery: ""
};

const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		setShowShoppingListDrawer: (state, action: PayloadAction<boolean>) => {
			state.showShoppingListDrawer = action.payload;
		},
		setShowSearchPopup: (state, action: PayloadAction<boolean>) => {
			state.showSearchPopup = action.payload;
		},
		setSelectedRecipeActiveTab: (state, action: PayloadAction<string>) => {
			state.selectedRecipeActiveTab = action.payload;
		},
		setSearchRawQuery: (state, action: PayloadAction<string>) => {
			state.searchRawQuery = action.payload;
		}
	}
});

export const globalSliceReducer = globalSlice.reducer;

export const globalSliceActions = globalSlice.actions;

export const globalSliceSelectors = {
	showShoppingListDrawer: (state: RootState) => state.global.showShoppingListDrawer,
	showSearchPopup: (state: RootState) => state.global.showSearchPopup,
	selectedRecipeActiveTab: (state: RootState) => state.global.selectedRecipeActiveTab,
	searchRawQuery: (state: RootState) => state.global.searchRawQuery
};

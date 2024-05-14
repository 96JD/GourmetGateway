/* eslint-disable @typescript-eslint/no-invalid-void-type */
import _ from "lodash";

import { createSelector } from "@reduxjs/toolkit";

import { API_URLS, apiSlice } from "../";
import { Good } from "../../../models/Good";

interface AllGoodsResponse {
	allGoods: Good[];
}

interface UpdatedGoodResponse {
	updatedGood: Good;
}

export const goodApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		fetchAllGoods: builder.query<AllGoodsResponse, void>({
			query: () => `${API_URLS.GOOD}/fetch-all-goods`,
			providesTags: (result) =>
				result
					? [
							...result.allGoods.map(({ id }) => ({
								type: "Good" as const,
								id
							})),
							{ type: "Good", id: "LIST" }
						]
					: [{ type: "Good", id: "LIST" }]
		}),

		updateShoppingList: builder.mutation<UpdatedGoodResponse, Good>({
			query: (good: Good) => ({
				url: `${API_URLS.GOOD}/update-shopping-list`,
				method: "PATCH",
				body: good
			}),
			invalidatesTags: (_result, _error, good) => [{ type: "Good", id: good.id }]
		})
	})
});

const selectAllGoodsResult = goodApiSlice.endpoints.fetchAllGoods.select();
const selectAllGoods = createSelector(selectAllGoodsResult, (result) => result.data?.allGoods ?? []);
const selectAllGoodsNotInShoppingList = createSelector(selectAllGoods, (allGoods) =>
	_.filter(allGoods, (good) => good.inShoppingList === 0)
);
const selectAllGoodsInShoppingList = createSelector(selectAllGoods, (allGoods) =>
	_.filter(allGoods, (good) => good.inShoppingList === 1)
);

export const goodApiSliceSelectors = {
	allGoodsNotInShoppingList: selectAllGoodsNotInShoppingList,
	allGoodsInShoppingList: selectAllGoodsInShoppingList,
	allGoodsInShoppingListCount: createSelector(selectAllGoodsInShoppingList, (allGoods) => _.size(allGoods))
};

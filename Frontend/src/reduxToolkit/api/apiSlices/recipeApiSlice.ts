/* eslint-disable @typescript-eslint/no-invalid-void-type */
import _ from "lodash";

import { createSelector } from "@reduxjs/toolkit";

import { API_URLS, apiSlice } from "../";
import { Recipe } from "../../../models/Recipe";
import { RECIPE_CATEGORY_CONSTANTS } from "../../../models/RecipeCategory";

interface AllRecipesResponse {
	allRecipes: Recipe[];
}

export const recipeApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		fetchAllRecipes: builder.query<AllRecipesResponse, void>({
			query: () => `${API_URLS.RECIPE}/fetch-all-recipes`,
			providesTags: (result) =>
				result
					? [
							...result.allRecipes.map(({ id }) => ({
								type: "Recipe" as const,
								id
							})),
							{ type: "Recipe", id: "LIST" }
						]
					: [{ type: "Recipe", id: "LIST" }]
		})
	})
});

const selectAllRecipesResult = recipeApiSlice.endpoints.fetchAllRecipes.select();
const selectAllRecipes = createSelector(selectAllRecipesResult, (result) => result.data?.allRecipes ?? []);

export const recipeApiSliceSelectors = {
	foodRecipes: createSelector(selectAllRecipes, (allRecipes) =>
		_.filter(allRecipes, (recipe) => recipe.recipeCategoryId === _.first(RECIPE_CATEGORY_CONSTANTS.CATEGORIES)?.id)
	),
	dessertRecipes: createSelector(selectAllRecipes, (allRecipes) =>
		_.filter(allRecipes, (recipe) => recipe.recipeCategoryId === _.last(RECIPE_CATEGORY_CONSTANTS.CATEGORIES)?.id)
	)
};

import { expect, test } from "@playwright/test";

import { API_URLS } from "../";
import { Recipe } from "../../src/models/Recipe";

interface AllRecipesResponse {
	allRecipes: Recipe[];
}

test.beforeEach(async ({ page }) => {
	await page.goto("/");
});

test("fetch-all-recipes", async ({ request }) => {
	const allRecipesResponse = await request.get(`${API_URLS.RECIPE}/fetch-all-recipes`);
	expect(allRecipesResponse.status()).toBe(200);
	expect(((await allRecipesResponse.json()) as AllRecipesResponse).allRecipes).toHaveLength(138);
});

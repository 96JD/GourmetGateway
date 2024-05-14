import { expect, test } from "@playwright/test";

import { API_URLS } from "../";
import { Good } from "../../src/models/Good";

interface AllGoodsResponse {
	allGoods: Good[];
}

interface UpdatedGoodResponse {
	updatedGood: Good;
}

test.beforeEach(async ({ page }) => {
	await page.goto("/");
});

test("fetch-all-goods", async ({ request }) => {
	const allGoodsResponse = await request.get(`${API_URLS.GOOD}/fetch-all-goods`);
	expect(allGoodsResponse.status()).toBe(200);
	expect(((await allGoodsResponse.json()) as AllGoodsResponse).allGoods).toHaveLength(223);
});

test("update-shopping-list", async ({ request }) => {
	const updatedGoodResponse = await request.patch(`${API_URLS.GOOD}/update-shopping-list`, {
		data: {
			id: 1,
			name: "Whole Chicken",
			imageUrl: "/assets/images/goods/Whole Chicken.png",
			inShoppingList: 1
		}
	});
	expect(updatedGoodResponse.status()).toBe(200);
	expect(((await updatedGoodResponse.json()) as UpdatedGoodResponse).updatedGood.inShoppingList).toBe(1);
});

import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.goto("/");
});

test("Navbar visible", async ({ page }) => {
	await expect(page.locator("#nav")).toBeVisible();
});

test("Brand visible", async ({ page }) => {
	await expect(page.locator("#brand")).toBeVisible();
});

test("Navigation buttons visible", async ({ page }) => {
	await expect(page.locator("#good-list").locator("visible=true")).toBeVisible();
	await expect(page.locator("#recipe-list").locator("visible=true")).toBeVisible();
});

test("Navigation buttons click", async ({ page }) => {
	await page.locator("#good-list").locator("visible=true").click();
	expect(page.url()).toContain("good-list");

	await page.locator("#recipe-list").locator("visible=true").click();
	expect(page.url()).toContain("recipe-list");
});

test("Search input visible", async ({ page }) => {
	await expect(page.locator("#search-input-div")).toBeVisible();
});

test("Shopping Bag visible", async ({ page }) => {
	await expect(page.locator("#shopping-bag")).toBeVisible();
});

test("Shopping List opens and closes as expected", async ({ page }) => {
	await page.locator("#shopping-bag").click();
	await page.getByRole("button", { name: "Close panel" }).click();
});

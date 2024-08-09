import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.goto("/");
});

test.use({ viewport: { width: 400, height: 1200 } });

test("Navbar visible", async ({ page }) => {
	await expect(page.locator("#nav")).toBeVisible();
});

test("Brand visible", async ({ page }) => {
	await expect(page.locator("#brand")).toBeVisible();
});

test("Search input visible", async ({ page }) => {
	await expect(page.locator("#search-input-div")).toBeVisible();
});

test("Main menu button visible", async ({ page }) => {
	await expect(page.getByRole("button", { name: "Open main menu" })).toBeVisible();
});

test("Main menu button clicked, and have navigation buttons and shopping bag", async ({ page }) => {
	await page.locator("#main-menu-btn").click();
	await expect(page.locator("#good-list").locator("visible=true")).toBeVisible();
	await expect(page.locator("#recipe-list").locator("visible=true")).toBeVisible();
	await expect(page.locator("#shopping-bag").locator("visible=true")).toBeVisible();
});

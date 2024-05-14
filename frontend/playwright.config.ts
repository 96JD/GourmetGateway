import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testDir: "./tests/",
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: "html",
	use: {
		baseURL: "https://localhost:5173",
		ignoreHTTPSErrors: true,
		trace: "on-first-retry",
		video: "on",
		launchOptions: { slowMo: 1000 }
	},
	projects: [
		{
			name: "Google Chrome",
			use: { ...devices["Desktop Chrome"], channel: "chrome" }
		},
		{
			name: "Microsoft Edge",
			use: { ...devices["Desktop Edge"], channel: "msedge" }
		},
		{
			name: "firefox",
			use: { ...devices["Desktop Firefox"] }
		},
		{
			name: "Mobile Chrome",
			use: { ...devices["Pixel 5"] }
		}
	]
});

import { env } from "process";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

import { sentryVitePlugin } from "@sentry/vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
	server: {
		port: 3006
	},
	plugins: [
		react(),
		checker({
			typescript: true
		}),
		sentryVitePlugin({
			org: "jacob-dolorzo",
			project: "gourmet-gateway",
			release: { name: "gourmet-gateway" },
			authToken: env.SENTRY_AUTH_TOKEN
		})
	],
	build: {
		sourcemap: true
	}
});

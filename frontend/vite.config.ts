import child_process from "child_process";
import fs from "fs";
import { fileURLToPath, URL } from "node:url";
import path from "path";
import { env } from "process";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

import { sentryVitePlugin } from "@sentry/vite-plugin";
import react from "@vitejs/plugin-react";

const baseFolder =
	env.APPDATA !== undefined && env.APPDATA !== ""
		? `${env.APPDATA}/ASP.NET/https`
		: `${env.HOME ?? ""}/.aspnet/https`;

const certificateName = "gourmet-gateway";
const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
	if (
		0 !==
		child_process.spawnSync(
			"dotnet",
			["dev-certs", "https", "--export-path", certFilePath, "--format", "Pem", "--no-password"],
			{ stdio: "inherit" }
		).status
	) {
		throw new Error("Could not create certificate.");
	}
}

let target = "https://localhost:7054";

if (env.ASPNETCORE_HTTPS_PORT) {
	target = `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`;
} else if (env.ASPNETCORE_URLS) {
	target = env.ASPNETCORE_URLS.split(";")[0];
}

export default defineConfig({
	plugins: [
		react(),
		checker({
			typescript: true
		}),
		sentryVitePlugin({
			org: "jacob-dolorzo",
			project: "gourmet-gateway",
			release: { name: "gourmet-gateway" }
		})
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url))
		}
	},
	server: {
		proxy: {
			"^/gourmet-gateway": {
				target,
				secure: false
			}
		},
		port: 5173,
		https: {
			key: fs.readFileSync(keyFilePath),
			cert: fs.readFileSync(certFilePath)
		}
	},
	build: {
		sourcemap: true
	}
});

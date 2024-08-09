import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		extend: {}
	},
	plugins: [require("@tailwindcss/aspect-ratio"), require("@tailwindcss/forms")]
};

export default config;

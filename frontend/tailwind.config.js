module.exports = {
	content: ["./src/**/*.{ts,tsx}"],
	theme: {
		extend: {}
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio")]
};

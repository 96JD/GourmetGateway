import { createInstance } from "@optimizely/react-sdk";

export const OPTIMIZELY_FEATURE_TOGGLE = {
	NAVBAR_SEARCH: "navbar-search"
};

export const AppFeatureToggler = {
	optimizely: createInstance({
		sdkKey: import.meta.env.DEV ? "Jrk8yUkfm8SyVqadMWE1w" : "AsvduY1P8UpBDKvRGWUxn",
		datafileOptions: {
			autoUpdate: true
		}
	}),
	user: {
		id: "all"
	}
};

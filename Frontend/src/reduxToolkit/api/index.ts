import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BACKEND_API_URL = import.meta.env.DEV
	? "https://localhost:7054"
	: "https://jacob-dolorzo-gourmet-gateway.onrender.com";

const API_VERSION_1 = "api/v1";

export const API_URLS = {
	GOOD: `${API_VERSION_1}/good`,
	RECIPE: `${API_VERSION_1}/recipe`
};

export const apiSlice = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: BACKEND_API_URL }),
	endpoints: () => ({}),
	tagTypes: ["Good", "Recipe"]
});

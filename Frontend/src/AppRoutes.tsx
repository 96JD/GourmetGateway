import { Navigate, RouteObject } from "react-router-dom";

import AppLayout from "./AppLayout";
import { GoodListPage, RecipeListPage } from "./AppPages";

export const APP_ROUTES = {
	DEFAULT: "/",
	PAGE_NOT_FOUND: "*",
	GOOD_LIST: "good-list",
	RECIPE_LIST: "recipe-list"
};

export const AppRoutes: RouteObject[] = [
	{
		path: APP_ROUTES.DEFAULT,
		element: <AppLayout />,
		children: [
			{
				path: APP_ROUTES.PAGE_NOT_FOUND,
				element: <Navigate to={APP_ROUTES.GOOD_LIST} replace />
			},
			{
				path: APP_ROUTES.DEFAULT,
				element: <Navigate to={APP_ROUTES.GOOD_LIST} replace />
			},
			{
				path: APP_ROUTES.GOOD_LIST,
				element: <GoodListPage />
			},
			{
				path: APP_ROUTES.RECIPE_LIST,
				element: <RecipeListPage />
			}
		]
	}
];

import { lazy } from "react";

import { Loader } from "./shared/components/Loader";

export const GoodListPage = Loader(lazy(() => import("./pages/GoodListPage")));
export const RecipeListPage = Loader(lazy(() => import("./pages/RecipeListPage")));

import { addParamToUrl, getParamFromUrl } from "96jd-url-params-utils";
import _ from "lodash";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import { APP_URL_PARAMS } from "../../AppUrlParams";
import { RECIPE_CATEGORY_CONSTANTS } from "../../models/RecipeCategory";
import { goodApiSlice } from "../../reduxToolkit/api/apiSlices/goodApiSlice";
import { recipeApiSlice } from "../../reduxToolkit/api/apiSlices/recipeApiSlice";
import { globalSliceActions, globalSliceSelectors } from "../../reduxToolkit/globalSlice";
import { useAppDispatch, useAppSelector } from "../../reduxToolkit/store";
import Spinner from "../../shared/components/Loader/components/Spinner";
import RecipeList from "./components/RecipeList";
import RecipeTabs from "./components/RecipeTabs";

export default function RecipeListPage() {
	const dispatch = useAppDispatch();

	const selectedRecipeActiveTab = useAppSelector(globalSliceSelectors.selectedRecipeActiveTab);

	const { isLoading: loadingAllRecipes } = recipeApiSlice.useFetchAllRecipesQuery();
	goodApiSlice.useFetchAllGoodsQuery();

	useEffect(() => {
		const activeTabParam = getParamFromUrl(APP_URL_PARAMS.SELECTED_RECIPE_ACTIVE_TAB);
		const emptyActiveTabParam = _.isNil(activeTabParam);
		const emptySelectedRecipeActiveTabState = _.isEmpty(selectedRecipeActiveTab);
		if (emptyActiveTabParam && emptySelectedRecipeActiveTabState) {
			const firstTab = _.first(RECIPE_CATEGORY_CONSTANTS.CATEGORIES)?.name;
			if (firstTab) {
				dispatch(globalSliceActions.setSelectedRecipeActiveTab(firstTab));
				addParamToUrl(APP_URL_PARAMS.SELECTED_RECIPE_ACTIVE_TAB, firstTab);
			}
		} else if (!emptyActiveTabParam && emptySelectedRecipeActiveTabState) {
			dispatch(globalSliceActions.setSelectedRecipeActiveTab(activeTabParam));
			addParamToUrl(APP_URL_PARAMS.SELECTED_RECIPE_ACTIVE_TAB, activeTabParam);
		} else {
			addParamToUrl(APP_URL_PARAMS.SELECTED_RECIPE_ACTIVE_TAB, selectedRecipeActiveTab);
		}
	}, [dispatch, selectedRecipeActiveTab]);

	return (
		<>
			<Helmet>
				<title>Recipe List</title>
			</Helmet>
			<RecipeTabs />
			{loadingAllRecipes ? <Spinner /> : <RecipeList />}
		</>
	);
}

import { addParamToUrl } from "96jd-url-params-utils";
import { clsx } from "clsx";
import _ from "lodash";
import { useCallback } from "react";

import { APP_URL_PARAMS } from "../../../AppUrlParams";
import { RECIPE_CATEGORY_CONSTANTS } from "../../../models/RecipeCategory";
import { globalSliceActions, globalSliceSelectors } from "../../../reduxToolkit/globalSlice";
import { useAppDispatch, useAppSelector } from "../../../reduxToolkit/store";

export default function RecipeTabs() {
	const dispatch = useAppDispatch();

	const selectedRecipeActiveTab = useAppSelector(globalSliceSelectors.selectedRecipeActiveTab);

	const changeTab = useCallback(
		(selectedRecipeActiveTab: string) => {
			dispatch(globalSliceActions.setSelectedRecipeActiveTab(selectedRecipeActiveTab));
			addParamToUrl(APP_URL_PARAMS.SELECTED_RECIPE_ACTIVE_TAB, selectedRecipeActiveTab);
		},
		[dispatch]
	);

	return (
		<div className="mb-10 border-b border-gray-200">
			<nav className="-mb-px flex" aria-label="Tabs">
				{_.map(RECIPE_CATEGORY_CONSTANTS.CATEGORIES, (tab) => (
					<button
						className={clsx(
							"w-1/2 cursor-pointer border-b-2 px-1 py-4 text-center text-sm font-medium",
							tab.name === selectedRecipeActiveTab
								? "border-indigo-500 text-indigo-600"
								: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
						)}
						key={tab.name}
						onClick={() => {
							changeTab(tab.name);
						}}
					>
						{tab.name}
					</button>
				))}
			</nav>
		</div>
	);
}

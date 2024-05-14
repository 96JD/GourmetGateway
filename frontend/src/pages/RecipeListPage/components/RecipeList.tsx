import _ from "lodash";
import { useMemo } from "react";

import { RECIPE_CATEGORY_CONSTANTS } from "../../../models/RecipeCategory";
import { recipeApiSliceSelectors } from "../../../reduxToolkit/api/apiSlices/recipeApiSlice";
import { globalSliceSelectors } from "../../../reduxToolkit/globalSlice";
import { useAppSelector } from "../../../reduxToolkit/store";
import NoDataFound from "../../../shared/components/NoDataFound";
import RecipeItem from "./RecipeItem";
import RecipeListWrapper from "./RecipeListWrapper";

export default function RecipeList() {
	const selectedRecipeActiveTab = useAppSelector(globalSliceSelectors.selectedRecipeActiveTab);
	const foodRecipes = useAppSelector(recipeApiSliceSelectors.foodRecipes);
	const dessertRecipes = useAppSelector(recipeApiSliceSelectors.dessertRecipes);

	const tabRecipes = useMemo(
		() =>
			selectedRecipeActiveTab === _.first(RECIPE_CATEGORY_CONSTANTS.CATEGORIES)?.name
				? foodRecipes
				: dessertRecipes,
		[dessertRecipes, foodRecipes, selectedRecipeActiveTab]
	);

	return _.isEmpty(tabRecipes) ? (
		<NoDataFound data="Recipes" />
	) : (
		<RecipeListWrapper>
			{_.map(tabRecipes, (recipe) => (
				<RecipeItem key={recipe.id} recipe={recipe} />
			))}
		</RecipeListWrapper>
	);
}

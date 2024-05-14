import _ from "lodash";

import { Good } from "../../../../models/Good";
import { Recipe } from "../../../../models/Recipe";

export function getCurrentTab() {
	return _.replace(location.pathname, "/", "");
}

export function filterSearchedGoods(rawQuery: string, query: string, goods: Good[]) {
	if (rawQuery === "<") {
		return goods;
	} else if (query === "" || _.startsWith(rawQuery, "#")) {
		return [];
	} else {
		return _.filter(goods, (good) => _.includes(good.name.toLowerCase(), query));
	}
}

export function filterSearchedRecipes(rawQuery: string, query: string, recipes: Recipe[]) {
	if (rawQuery === "#") {
		return recipes;
	} else if (query === "" || _.startsWith(rawQuery, "<")) {
		return [];
	} else {
		return _.filter(recipes, (recipe) => _.includes(recipe.name.toLowerCase(), query));
	}
}

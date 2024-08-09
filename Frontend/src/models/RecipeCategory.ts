import { Recipe } from "./Recipe";

export interface RecipeCategory {
	id: number;
	name: string;
	recipes?: Recipe[];
}

export const RECIPE_CATEGORY_CONSTANTS = {
	CATEGORIES: [
		{ id: 1, name: "Food" },
		{ id: 2, name: "Dessert" }
	]
};

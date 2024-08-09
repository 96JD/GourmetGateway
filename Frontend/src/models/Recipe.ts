import { RecipeCategory } from "./RecipeCategory";

export interface Recipe {
	id: number;
	name: string;
	imageUrl: string;
	recipeCategoryId: number;
	recipeCategory?: RecipeCategory;
}

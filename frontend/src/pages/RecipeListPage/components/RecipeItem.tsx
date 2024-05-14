import { Recipe } from "../../../models/Recipe";
import Card from "../../../shared/components/Card";

interface Props {
	recipe: Recipe;
}

export default function RecipeItem({ recipe }: Readonly<Props>) {
	return <Card classNames="h-60" imageUrl={recipe.imageUrl} title={recipe.name} />;
}

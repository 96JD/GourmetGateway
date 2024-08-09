import { useCallback } from "react";

import { Good } from "../../../models/Good";
import { goodApiSlice } from "../../../reduxToolkit/api/apiSlices/goodApiSlice";
import Card from "../../../shared/components/Card";

interface Props {
	good: Good;
}

export default function GoodItem({ good }: Readonly<Props>) {
	const [updateShoppingList, { isLoading: isUpdatingShoppingList }] = goodApiSlice.useUpdateShoppingListMutation();

	const addToBag = useCallback(() => {
		void updateShoppingList({ ...good, inShoppingList: 1 });
	}, [good, updateShoppingList]);

	return (
		<Card
			classNames="h-32"
			imageUrl={good.imageUrl}
			title={good.name}
			mainButtonLabel={isUpdatingShoppingList ? "Adding..." : "Add to bag"}
			onMainButtonCLick={addToBag}
		/>
	);
}

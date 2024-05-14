import _ from "lodash";

import { goodApiSliceSelectors } from "../../../reduxToolkit/api/apiSlices/goodApiSlice";
import { useAppSelector } from "../../../reduxToolkit/store";
import NoDataFound from "../../../shared/components/NoDataFound";
import GoodItem from "./GoodItem";
import GoodListWrapper from "./GoodListWrapper";

export default function GoodList() {
	const allGoodsNotInShoppingList = useAppSelector(goodApiSliceSelectors.allGoodsNotInShoppingList);

	return _.isEmpty(allGoodsNotInShoppingList) ? (
		<NoDataFound data="Goods" />
	) : (
		<GoodListWrapper>
			{_.map(allGoodsNotInShoppingList, (good) => (
				<GoodItem key={good.id} good={good} />
			))}
		</GoodListWrapper>
	);
}

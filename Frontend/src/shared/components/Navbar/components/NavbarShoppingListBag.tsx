import { addParamToUrl, getParamFromUrl } from "96jd-url-params-utils";
import { clsx } from "clsx";
import _ from "lodash";
import { useCallback, useEffect } from "react";

import { ShoppingBagIcon } from "@heroicons/react/24/outline";

import { APP_URL_PARAMS } from "../../../../AppUrlParams";
import { goodApiSliceSelectors } from "../../../../reduxToolkit/api/apiSlices/goodApiSlice";
import { globalSliceActions } from "../../../../reduxToolkit/globalSlice";
import { useAppDispatch, useAppSelector } from "../../../../reduxToolkit/store";

interface Props {
	smallScreenView?: boolean;
}

export default function NavbarShoppingListBag({ smallScreenView }: Readonly<Props>) {
	const dispatch = useAppDispatch();

	const allGoodsInShoppingListCount = useAppSelector(goodApiSliceSelectors.allGoodsInShoppingListCount);

	useEffect(() => {
		const showShoppingListDrawerParam = getParamFromUrl(APP_URL_PARAMS.SHOW_SHOPPING_LIST_DRAWER);
		if (!_.isNil(showShoppingListDrawerParam)) {
			dispatch(globalSliceActions.setShowShoppingListDrawer(Boolean(JSON.parse(showShoppingListDrawerParam))));
		}
	}, [dispatch]);

	const openShoppingListDrawer = useCallback(() => {
		dispatch(globalSliceActions.setShowShoppingListDrawer(true));
		addParamToUrl(APP_URL_PARAMS.SHOW_SHOPPING_LIST_DRAWER, JSON.stringify(true));
	}, [dispatch]);

	return (
		<button
			id="shopping-bag"
			className={clsx(
				"p-2 text-sm font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 focus:ring-indigo-500",
				smallScreenView
					? "flex w-full justify-center border-l-4 pl-3 pr-4"
					: "group flex cursor-pointer items-center focus:outline-none focus:ring-2 focus:ring-inset"
			)}
			onClick={openShoppingListDrawer}
		>
			<ShoppingBagIcon className={clsx("h-6 w-6", allGoodsInShoppingListCount > 0 && "text-red-600")} />
			<span
				className={clsx(
					"ml-2 text-sm font-medium",
					allGoodsInShoppingListCount > 0 && "rounded-full bg-red-500 px-1.5 py-1 text-white"
				)}
			>
				{allGoodsInShoppingListCount}
			</span>
			<span className="sr-only">items in bag, view bag</span>
		</button>
	);
}

import { addParamToUrl, removeParamFromUrl } from "96jd-url-params-utils";
import { clsx } from "clsx";
import _ from "lodash";
import { ChangeEvent, useCallback } from "react";

import { Combobox, ComboboxOptions } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

import { APP_URL_PARAMS } from "../../../../AppUrlParams";
import { goodApiSlice } from "../../../../reduxToolkit/api/apiSlices/goodApiSlice";
import { recipeApiSlice } from "../../../../reduxToolkit/api/apiSlices/recipeApiSlice";
import { globalSliceActions, globalSliceSelectors } from "../../../../reduxToolkit/globalSlice";
import { useAppDispatch, useAppSelector } from "../../../../reduxToolkit/store";
import Popup from "../../Popup";
import SearchInput from "../../SearchInput";
import { NAVBAR_CONSTANTS } from "../constants";
import { filterSearchedGoods, filterSearchedRecipes } from "../functions";
import NavbarSearchPopupResultList from "./NavbarSearchPopupResultList";

export default function NavbarSearchPopup() {
	const dispatch = useAppDispatch();

	const showSearchPopup = useAppSelector(globalSliceSelectors.showSearchPopup);
	const searchRawQuery = useAppSelector(globalSliceSelectors.searchRawQuery);

	const { data: goodResponse } = goodApiSlice.useFetchAllGoodsQuery(undefined, {
		skip: !showSearchPopup
	});

	const { data: recipeResponse } = recipeApiSlice.useFetchAllRecipesQuery(undefined, {
		skip: !showSearchPopup
	});

	const closeSearchPopup = useCallback(() => {
		dispatch(globalSliceActions.setShowSearchPopup(false));
		removeParamFromUrl(APP_URL_PARAMS.SHOW_SEARCH_POPUP);
		removeParamFromUrl(APP_URL_PARAMS.SEARCH_RAW_QUERY);
	}, [dispatch]);

	const query = searchRawQuery.toLowerCase().replace(/^[#<]/, "");

	const onSearchRawQueryChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const updatedSearchRawQuery = e.target.value;
			dispatch(globalSliceActions.setSearchRawQuery(updatedSearchRawQuery));
			addParamToUrl(APP_URL_PARAMS.SEARCH_RAW_QUERY, updatedSearchRawQuery);
		},
		[dispatch]
	);

	const filteredGoods = filterSearchedGoods(searchRawQuery, query, goodResponse?.allGoods ?? []);
	const filteredRecipes = filterSearchedRecipes(searchRawQuery, query, recipeResponse?.allRecipes ?? []);

	return (
		<Popup title="Search" show={showSearchPopup} onClose={closeSearchPopup}>
			<Combobox>
				<SearchInput placeholder="Type here..." value={searchRawQuery} onChange={onSearchRawQueryChange} />
				<ComboboxOptions
					className="mt-2 max-h-80 scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto p-4 pb-2"
					static
				>
					{!_.isEmpty(filteredGoods) && <NavbarSearchPopupResultList title="Goods" list={filteredGoods} />}
					{!_.isEmpty(filteredRecipes) && (
						<NavbarSearchPopupResultList title="Recipes" list={filteredRecipes} />
					)}
				</ComboboxOptions>
				{!_.isEmpty(query) && _.isEmpty(filteredGoods) && _.isEmpty(filteredRecipes) && (
					<div className="px-6 py-14 text-center text-sm sm:px-14">
						<ExclamationTriangleIcon className="mx-auto h-6 w-6 text-gray-400" />
						<p className="mt-4 font-semibold text-gray-900">No results found!</p>
						<p className="mt-2 text-gray-500">
							We could not find anything with that term. Please try again.
						</p>
					</div>
				)}
				{_.map(NAVBAR_CONSTANTS.SEARCH_OPTIONS, (option) => (
					<div
						className="flex flex-wrap items-center bg-gray-50 px-4 py-2.5 text-xs text-gray-700"
						key={option.specialSign}
					>
						{`Type `}
						<kbd
							className={clsx(
								"mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2",
								_.startsWith(searchRawQuery, option.specialSign)
									? "border-indigo-600 text-indigo-600"
									: "border-gray-400 text-gray-900"
							)}
						>
							{option.specialSign}
						</kbd>
						{option.items}
					</div>
				))}
			</Combobox>
		</Popup>
	);
}

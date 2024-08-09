import { isEnterPressed } from "96jd-accessibility-utils";
import { addParamToUrl, getParamFromUrl } from "96jd-url-params-utils";
import _ from "lodash";
import { KeyboardEvent, useCallback, useEffect } from "react";

import { APP_URL_PARAMS } from "../../../../AppUrlParams";
import { globalSliceActions, globalSliceSelectors } from "../../../../reduxToolkit/globalSlice";
import { useAppDispatch, useAppSelector } from "../../../../reduxToolkit/store";
import SearchInput from "../../SearchInput";
import NavbarSearchPopup from "./NavbarSearchPopup";

export default function NavbarSearchInput() {
	const dispatch = useAppDispatch();

	const searchRawQuery = useAppSelector(globalSliceSelectors.searchRawQuery);

	useEffect(() => {
		const showSearchPopupParam = getParamFromUrl(APP_URL_PARAMS.SHOW_SEARCH_POPUP);
		if (!_.isNil(showSearchPopupParam)) {
			dispatch(globalSliceActions.setShowSearchPopup(Boolean(JSON.parse(showSearchPopupParam))));
			const searchRawQueryParam = getParamFromUrl(APP_URL_PARAMS.SEARCH_RAW_QUERY);
			if (!_.isNil(searchRawQueryParam)) {
				dispatch(globalSliceActions.setSearchRawQuery(searchRawQueryParam));
			}
		}
	}, [dispatch]);

	const openSearchPopup = useCallback(() => {
		dispatch(globalSliceActions.setShowSearchPopup(true));
		addParamToUrl(APP_URL_PARAMS.SHOW_SEARCH_POPUP, JSON.stringify(true));
		if (!_.isEmpty(searchRawQuery)) {
			addParamToUrl(APP_URL_PARAMS.SEARCH_RAW_QUERY, searchRawQuery);
		}
	}, [dispatch, searchRawQuery]);

	return (
		<>
			<div id="search-input-div" className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
				<div className="w-full max-w-lg lg:max-w-xs">
					<label htmlFor="search-input-div" className="sr-only">
						Click to open the search
					</label>
					<SearchInput
						placeholder="Click to open the search"
						readOnly
						onClick={openSearchPopup}
						onKeyDown={(e: KeyboardEvent) => {
							if (isEnterPressed(e)) {
								openSearchPopup();
							}
						}}
					/>
				</div>
			</div>
			<NavbarSearchPopup />
		</>
	);
}

import { removeParamFromUrl } from "96jd-url-params-utils";
import { useCallback } from "react";

import { APP_URL_PARAMS } from "../../../../AppUrlParams";
import { globalSliceActions, globalSliceSelectors } from "../../../../reduxToolkit/globalSlice";
import { useAppDispatch, useAppSelector } from "../../../../reduxToolkit/store";
import Drawer from "../../Drawer";
import NavbarShoppingList from "./NavbarShoppingList";

export default function NavbarShoppingListDrawer() {
	const dispatch = useAppDispatch();

	const showShoppingListDrawer = useAppSelector(globalSliceSelectors.showShoppingListDrawer);

	const closeShoppingListDrawer = useCallback(() => {
		dispatch(globalSliceActions.setShowShoppingListDrawer(false));
		removeParamFromUrl(APP_URL_PARAMS.SHOW_SHOPPING_LIST_DRAWER);
	}, [dispatch]);

	return (
		<Drawer title="Shopping list" show={showShoppingListDrawer} onClose={closeShoppingListDrawer}>
			<NavbarShoppingList />
		</Drawer>
	);
}

import { DisclosurePanel } from "@headlessui/react";

import NavbarShoppingListBag from "./NavbarShoppingListBag";
import NavbarTabs from "./NavbarTabs";

export default function NavbarSmallScreenView() {
	return (
		<DisclosurePanel className="lg:hidden">
			<NavbarTabs smallScreenView />
			<NavbarShoppingListBag smallScreenView />
		</DisclosurePanel>
	);
}

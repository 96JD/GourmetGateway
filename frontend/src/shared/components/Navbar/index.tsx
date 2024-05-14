import { Disclosure } from "@headlessui/react";

import NavbarLargeScreenView from "./components/NavbarLargeScreenView";
import NavbarShoppingListDrawer from "./components/NavbarShoppingListDrawer";
import NavbarSmallScreenView from "./components/NavbarSmallScreenView";

export default function Navbar() {
	return (
		<Disclosure className="shadow" as="nav">
			{({ open }) => (
				<>
					<NavbarLargeScreenView open={open} />
					<NavbarSmallScreenView />
					<NavbarShoppingListDrawer />
				</>
			)}
		</Disclosure>
	);
}

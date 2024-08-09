import { clsx } from "clsx";

import { useFeature } from "@optimizely/react-sdk";

import { OPTIMIZELY_FEATURE_TOGGLE } from "../../../../AppFeatureToggler";
import NavbarLogo from "./NavbarLogo";
import NavbarMainMenuButton from "./NavbarMainMenuButton";
import NavbarSearchInput from "./NavbarSearchInput";
import NavbarShoppingListBag from "./NavbarShoppingListBag";
import NavbarTabs from "./NavbarTabs";

interface Props {
	open: boolean;
}

export default function NavbarLargeScreenView({ open }: Readonly<Props>) {
	const [isNavbarSearchFeatureEnabled] = useFeature(OPTIMIZELY_FEATURE_TOGGLE.NAVBAR_SEARCH);
	return (
		<div id="nav" className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
			<div className={clsx("flex h-16", isNavbarSearchFeatureEnabled ? "justify-between" : "justify-start")}>
				<div className="flex items-center">
					<NavbarLogo />
				</div>
				<div
					className={clsx("hidden lg:ml-6 lg:flex lg:space-x-6", !isNavbarSearchFeatureEnabled && "me-auto")}
				>
					<NavbarTabs />
				</div>
				{isNavbarSearchFeatureEnabled && <NavbarSearchInput />}
				<div className="hidden lg:ml-4 lg:flex lg:items-center">
					<NavbarShoppingListBag />
				</div>
				<NavbarMainMenuButton open={open} />
			</div>
		</div>
	);
}

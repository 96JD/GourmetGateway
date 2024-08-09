import { clsx } from "clsx";
import _ from "lodash";
import { ReactNode, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { BookOpenIcon, RectangleGroupIcon } from "@heroicons/react/24/outline";

import { APP_ROUTES } from "../../../../AppRoutes";
import { NAVBAR_CONSTANTS } from "../constants";
import { getCurrentTab } from "../functions";

interface NavbarTab {
	icon: ReactNode;
	name: string;
	path: string;
}

interface Props {
	smallScreenView?: boolean;
}

export default function NavbarTabs({ smallScreenView }: Props) {
	const navigate = useNavigate();

	const NAVBAR_TABS: NavbarTab[] = [
		{
			icon: <RectangleGroupIcon />,
			name: NAVBAR_CONSTANTS.NAVBAR_TABS.GOODS,
			path: APP_ROUTES.GOOD_LIST
		},
		{
			icon: <BookOpenIcon />,
			name: NAVBAR_CONSTANTS.NAVBAR_TABS.RECIPES,
			path: APP_ROUTES.RECIPE_LIST
		}
	];

	const currentTab = getCurrentTab();

	const getTabClassNames = useCallback(
		(path: string) => {
			if (smallScreenView) {
				return clsx(
					"flex w-full justify-center border-l-4 py-2 pl-3 pr-4 text-base font-medium",
					currentTab === path
						? "border-indigo-500 bg-indigo-50 text-indigo-700"
						: "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
				);
			} else {
				return clsx(
					"inline-flex items-center justify-center border-b-2 px-2 my-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
					currentTab === path
						? "border-indigo-500 text-gray-900"
						: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
				);
			}
		},
		[currentTab, smallScreenView]
	);

	const onTabClick = useCallback(
		(path: string) => {
			navigate(path);
		},
		[navigate]
	);

	return _.map(NAVBAR_TABS, (tab) => (
		<button
			id={tab.path}
			key={tab.path}
			className={getTabClassNames(tab.path)}
			onClick={() => {
				onTabClick(tab.path);
			}}
		>
			<div className="mr-2 h-6 w-6">{tab.icon}</div>
			{tab.name}
		</button>
	));
}

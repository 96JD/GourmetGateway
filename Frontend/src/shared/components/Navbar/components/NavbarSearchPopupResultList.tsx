import { disableButton, enableButton } from "96jd-btn-utils";
import { clsx } from "clsx";
import _ from "lodash";
import { MouseEvent, useCallback } from "react";

import { ComboboxOption, Listbox } from "@headlessui/react";

import { Good } from "../../../../models/Good";
import { Recipe } from "../../../../models/Recipe";
import { goodApiSlice } from "../../../../reduxToolkit/api/apiSlices/goodApiSlice";

interface Props {
	title: string;
	list: Good[] | Recipe[];
}

export default function NavbarSearchPopupResultList({ title, list }: Readonly<Props>) {
	const [updateShoppingList] = goodApiSlice.useUpdateShoppingListMutation();

	const onGoodButtonClick = useCallback(
		(e: MouseEvent, good: Good) => {
			const btnRef = e.target as HTMLButtonElement;
			disableButton(btnRef, good.inShoppingList ? "Removing" : "Adding");
			void updateShoppingList({ ...good, inShoppingList: good.inShoppingList ? 0 : 1 });
			enableButton(btnRef);
		},
		[updateShoppingList]
	);

	return (
		<Listbox>
			<h2 className="text-xs font-semibold text-gray-900">{title}</h2>
			<ul className="-mx-4 mt-2 text-sm text-gray-700">
				{_.map(list, (item: Good | Recipe) => (
					<ComboboxOption
						className="flex cursor-default select-none items-center px-4 py-2"
						key={item.id}
						value={item}
					>
						<img className="h-6 w-6 flex-none rounded-full" src={item.imageUrl} alt={item.imageUrl} />
						<span className="ml-3 flex-auto truncate">{item.name}</span>
						{title === "Goods" && (
							<button
								className={clsx(
									"inline-flex items-center rounded-full border border-gray-300 px-4 py-1 text-xs font-medium leading-5 text-white shadow-sm focus:outline-none disabled:opacity-25",
									(item as Good).inShoppingList
										? "bg-red-600 hover:bg-red-400 focus:bg-red-400"
										: "bg-indigo-600 hover:bg-indigo-400 focus:bg-indigo-400"
								)}
								onClick={(e) => {
									onGoodButtonClick(e, item as Good);
								}}
							>
								{(item as Good).inShoppingList ? "Remove from bag" : "Add to bag"}
							</button>
						)}
					</ComboboxOption>
				))}
			</ul>
		</Listbox>
	);
}

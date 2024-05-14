import { disableButton, enableButton } from "96jd-btn-utils";
import _ from "lodash";
import { MouseEvent, useCallback } from "react";

import { TrashIcon } from "@heroicons/react/24/outline";

import { Good } from "../../../../models/Good";
import { goodApiSlice, goodApiSliceSelectors } from "../../../../reduxToolkit/api/apiSlices/goodApiSlice";
import { useAppSelector } from "../../../../reduxToolkit/store";
import Spinner from "../../Loader/components/Spinner";

export default function NavbarShoppingList() {
	const [updateShoppingList] = goodApiSlice.useUpdateShoppingListMutation();

	const { isLoading: loadingAllGoods } = goodApiSlice.useFetchAllGoodsQuery();

	const allGoodsInShoppingList = useAppSelector(goodApiSliceSelectors.allGoodsInShoppingList);

	const removeFromBag = useCallback(
		(e: MouseEvent, good: Good) => {
			disableButton(e.target as HTMLButtonElement, "Removing");
			void updateShoppingList({ ...good, inShoppingList: 0 });
		},
		[updateShoppingList]
	);

	const emptyShoppingList = useCallback(
		(e: MouseEvent) => {
			const btnRef = e.target as HTMLButtonElement;
			disableButton(btnRef, "Emptying shopping list");
			_.map(allGoodsInShoppingList, (good) => void updateShoppingList({ ...good, inShoppingList: 0 }));
			enableButton(btnRef);
		},
		[allGoodsInShoppingList, updateShoppingList]
	);

	return (
		<>
			{loadingAllGoods ? (
				<Spinner />
			) : (
				<>
					{_.isEmpty(allGoodsInShoppingList) ? (
						<div className="mt-10 text-center text-lg font-bold text-red-600">Shopping list is empty!</div>
					) : (
						<div className="mb-8 flex justify-center">
							<button
								className="inline-flex items-center rounded-full border border-gray-300 bg-red-600 px-4 py-1 text-xs font-medium leading-5 text-white shadow-sm focus:bg-red-400 focus:outline-none enabled:hover:bg-red-400 disabled:opacity-25"
								title="Empty Shopping List"
								onClick={emptyShoppingList}
							>
								<span className="sr-only">Empty Shopping List</span>
								Empty Shopping List
								<TrashIcon className="ml-2 h-5 w-5" />
							</button>
						</div>
					)}
					<ul className="-my-6 divide-y divide-gray-200">
						{_.map(allGoodsInShoppingList, (good) => (
							<li className="flex py-6" key={good.id}>
								<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
									<img
										className="h-full w-full object-cover object-center"
										src={good.imageUrl}
										alt={good.imageUrl}
									/>
								</div>
								<div className="ml-4 flex flex-1 flex-col">
									<div>
										<div className="flex justify-between text-base font-medium text-gray-900">
											<h3>{good.name}</h3>
										</div>
									</div>
									<div className="flex flex-1 items-end justify-between text-sm">
										<div className="flex">
											<button
												className="font-medium text-indigo-700 focus:text-indigo-400 focus:outline-none enabled:hover:text-indigo-400 disabled:opacity-25"
												onClick={(e) => {
													removeFromBag(e, good);
												}}
											>
												Remove
											</button>
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				</>
			)}
		</>
	);
}

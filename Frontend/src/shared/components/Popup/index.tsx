import { Fragment, ReactNode } from "react";

import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";

import { globalSliceSelectors } from "../../../reduxToolkit/globalSlice";
import { useAppSelector } from "../../../reduxToolkit/store";

interface Props {
	title?: string;
	show: boolean;
	onClose: () => void;
	children: ReactNode;
}

export default function Popup({ title, show, onClose, children }: Readonly<Props>) {
	const showSearchPopup = useAppSelector(globalSliceSelectors.showSearchPopup);
	return (
		<Transition as={Fragment} appear show={show}>
			<Dialog className="relative z-10" as="div" onClose={onClose}>
				<TransitionChild
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</TransitionChild>
				<div className="fixed inset-0 z-10 overflow-y-auto">
					<div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<TransitionChild
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
								<div className="flex items-start justify-between bg-indigo-50 p-4">
									<DialogTitle className="text-lg font-medium text-indigo-700">{title}</DialogTitle>
									<div className="ml-3 flex h-7 items-center">
										<button
											tabIndex={showSearchPopup ? 2 : 0}
											className="-m-2 p-2 text-gray-400 hover:text-gray-500"
											onClick={onClose}
										>
											<span className="sr-only">Close panel</span>
											<XMarkIcon className="h-6 w-6" />
										</button>
									</div>
								</div>
								<div className="mt-5 p-4">{children}</div>
							</DialogPanel>
						</TransitionChild>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}

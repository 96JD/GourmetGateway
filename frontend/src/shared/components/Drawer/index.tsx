import { Fragment, ReactNode } from "react";

import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";

interface Props {
	title: string;
	show: boolean;
	onClose: () => void;
	children: ReactNode;
}

export default function Drawer({ title, show, onClose, children }: Readonly<Props>) {
	return (
		<Transition as={Fragment} show={show}>
			<Dialog className="relative z-10" as="div" onClose={onClose}>
				<TransitionChild
					as={Fragment}
					enter="ease-in-out duration-500"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in-out duration-500"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</TransitionChild>
				<div className="fixed inset-0 overflow-hidden">
					<div className="absolute inset-0 overflow-hidden">
						<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
							<TransitionChild
								as={Fragment}
								enter="transform transition ease-in-out duration-500 sm:duration-700"
								enterFrom="translate-x-full"
								enterTo="translate-x-0"
								leave="transform transition ease-in-out duration-500 sm:duration-700"
								leaveFrom="translate-x-0"
								leaveTo="translate-x-full"
							>
								<DialogPanel className="pointer-events-auto w-screen max-w-md">
									<div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
										<div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
											<div className="flex items-start justify-between">
												<DialogTitle className="text-lg font-medium text-indigo-700">
													{title}
												</DialogTitle>
												<div className="ml-3 flex h-7 items-center">
													<button
														className="-m-2 p-2 text-gray-400 hover:text-gray-500"
														onClick={onClose}
													>
														<span className="sr-only">Close panel</span>
														<XMarkIcon className="h-6 w-6" />
													</button>
												</div>
											</div>
											<div className="mt-5 p-4">{children}</div>
										</div>
									</div>
								</DialogPanel>
							</TransitionChild>
						</div>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}

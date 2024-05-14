import { DisclosureButton } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface Props {
	open: boolean;
}

export default function NavbarMainMenuButton({ open }: Readonly<Props>) {
	return (
		<div id="main-menu-btn" className="ms-auto flex items-center lg:hidden">
			<DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
				<span className="sr-only">Open main menu</span>
				{open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
			</DisclosureButton>
		</div>
	);
}

import { ChangeEvent, KeyboardEvent } from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import { globalSliceSelectors } from "../../../reduxToolkit/globalSlice";
import { useAppSelector } from "../../../reduxToolkit/store";

interface Props {
	placeholder: string;
	value?: string;
	readOnly?: boolean;
	onClick?: () => void;
	onKeyDown?: (e: KeyboardEvent) => void;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchInput({ placeholder, value, readOnly, onClick, onKeyDown, onChange }: Readonly<Props>) {
	const showSearchPopup = useAppSelector(globalSliceSelectors.showSearchPopup);
	return (
		<div className="relative">
			<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
			</div>
			<input
				id="search-input"
				className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
				placeholder={placeholder}
				value={value}
				readOnly={readOnly}
				tabIndex={showSearchPopup ? 1 : 0}
				onClick={onClick}
				onKeyDown={onKeyDown}
				onChange={onChange}
			/>
		</div>
	);
}

import { MouseEvent } from "react";

interface Props {
	label: string;
	onClick: (e: MouseEvent) => void;
}

export default function MainButton({ label, onClick }: Readonly<Props>) {
	return (
		<button
			className="relative flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-2 text-sm font-medium text-white focus:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-inset enabled:hover:bg-indigo-400 disabled:opacity-25"
			onClick={onClick}
		>
			<span className="sr-only">{label}</span>
			{label}
		</button>
	);
}

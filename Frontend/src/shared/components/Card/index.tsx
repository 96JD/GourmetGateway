import { MouseEvent, ReactNode } from "react";

import MainButton from "../MainButton";

interface Props {
	classNames: string;
	imageUrl: string;
	title: string;
	mainButtonLabel?: string;
	onMainButtonCLick?: (e: MouseEvent) => void;
	children?: ReactNode;
}

export default function Card({
	classNames,
	imageUrl,
	title,
	mainButtonLabel,
	onMainButtonCLick,
	children
}: Readonly<Props>) {
	return (
		<div>
			<div className="rounded-lg border border-gray-200 bg-white p-4 shadow">
				<div className={`${classNames} relative w-full overflow-hidden rounded-lg`}>
					<img className="h-full w-full object-center" src={imageUrl} alt={imageUrl} />
				</div>
				<h3 className="truncate text-center text-sm font-medium text-gray-900" title={title}>
					{title}
				</h3>
				{children}
			</div>
			{mainButtonLabel && onMainButtonCLick && (
				<div className="mt-6">
					<MainButton label={mainButtonLabel} onClick={onMainButtonCLick} />
				</div>
			)}
		</div>
	);
}

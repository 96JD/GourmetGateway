import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function GoodListWrapper({ children }: Readonly<Props>) {
	return (
		<div className="mt-10 grid grid-cols-3 gap-x-4 gap-y-12 max-[480px]:grid-cols-2 max-[320px]:grid-cols-1 sm:grid-cols-4 sm:gap-x-2 md:gap-x-4 lg:grid-cols-5">
			{children}
		</div>
	);
}

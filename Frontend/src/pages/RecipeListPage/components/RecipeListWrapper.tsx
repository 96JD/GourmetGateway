import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function RecipeListWrapper({ children }: Readonly<Props>) {
	return <div className="grid grid-cols-2 gap-x-4 gap-y-12 max-[480px]:grid-cols-1 lg:grid-cols-4">{children}</div>;
}

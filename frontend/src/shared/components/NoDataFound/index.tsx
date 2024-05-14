interface Props {
	data: string;
}

export default function NoDataFound({ data }: Readonly<Props>) {
	return <div className="flex justify-center p-5 font-bold text-red-600">No {data} Found!</div>;
}

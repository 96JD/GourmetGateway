import { Helmet } from "react-helmet-async";

import { goodApiSlice } from "../../reduxToolkit/api/apiSlices/goodApiSlice";
import Spinner from "../../shared/components/Loader/components/Spinner";
import GoodList from "./components/GoodList";

export default function GoodListPage() {
	const { isLoading: loadingAllGoods } = goodApiSlice.useFetchAllGoodsQuery();

	return (
		<>
			<Helmet>
				<title>Good List</title>
			</Helmet>
			{loadingAllGoods ? <Spinner /> : <GoodList />}
		</>
	);
}

import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./shared/components/Navbar";

export default function AppLayout() {
	return (
		<>
			<Navbar />
			<div className="bg-white">
				<div className="mx-auto max-w-2xl p-4 lg:max-w-7xl">
					<ToastContainer />
					<Outlet />
				</div>
			</div>
		</>
	);
}

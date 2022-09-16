import { Outlet } from "react-router-dom"
import Sidebar from "./components/Sidebar";

export default function Layout() {
	return (
		<div className="h-full w-full flex">
			<Sidebar />
			<section className="flex-1 overflow-auto bg-content">
				<Outlet />
			</section>
		</div>
	)
}

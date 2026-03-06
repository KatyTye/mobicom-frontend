import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout() {

	return (
		<div id="phone-screen">
			<Header />
			<main className="main-content">
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}
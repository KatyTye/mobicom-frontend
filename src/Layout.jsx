import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

export default function Layout() {
	const [mode, setMode] = useState(1)

	return (
		<div id="phone-screen">
			<Header />
			<main className="main-content">
				<Outlet context={{ mode, setMode }} />
			</main>
			<Footer />
		</div>
	)
}
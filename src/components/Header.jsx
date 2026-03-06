import { PiDotsThreeVerticalBold, PiList } from "react-icons/pi";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

export default function Header() {
	const [hiddenSidebar, setHiddenSidebar] = useState(true)
	const [pageTitle, setPageTitle] = useState("")
	const location = useLocation()

	useEffect(() => {
		if (location.pathname === "/") {
			setPageTitle("Smart Home")
		} else if (location.pathname === "/temp") {
			setPageTitle("Varme")
		} else if (location.pathname === "/stat") {
			setPageTitle("Statistik")
		} else {
			setPageTitle("404")
		}
	}, [location.pathname]);

	function returnLeftSideIcon() {
		if (location.pathname === "/temp") {
			return (
				<Link to="/">
					<HiOutlineChevronLeft className="top-content__back" />
				</Link>
			);
		} else if (location.pathname === "/") {
			return <PiList className="top-content__sidebar" onClick={() => setHiddenSidebar(false)} />;
		}

		return <div></div>;
	}

	return (
		<>
			<header className="top-content">
				{returnLeftSideIcon()}

				<p className="top-content__title">{pageTitle}</p>

				{location.pathname !== "/" ? (
					<PiDotsThreeVerticalBold className="top-content__settings" />
				) : (
					<div></div>
				)}
			</header>

			<div id="side-bar" className={(hiddenSidebar == true && "hidden")}>
				<div className="side-bar__close" onClick={() => setHiddenSidebar(true)} />
				<p>Sidebar</p>
			</div>
		</>
	);
}
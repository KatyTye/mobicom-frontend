import { useOutletContext, useRouteLoaderData } from "react-router"
import RoomsSection from "../components/RoomsSection"
import UsageSection from "../components/UsageSection"
import ModeSettings from "../components/ModeSettings"

export default function Home() {
	const data = useRouteLoaderData("main")

	return (
		<>
			<UsageSection src={data} />
			<RoomsSection src={data} />
			<ModeSettings />
		</>
	)
}
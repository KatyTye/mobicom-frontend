import { useOutletContext, useRouteLoaderData } from "react-router"
import RoomsSection from "../components/RoomsSection"
import UsageSection from "../components/UsageSection"
import ModeSettings from "../components/ModeSettings"
import SmartSection from "../components/SmartSection"

export default function Home() {
	const data = useRouteLoaderData("main")

	return (
		<>
			<UsageSection src={data} />
			<RoomsSection src={data} />
			<ModeSettings />
			<SmartSection src={data} />
		</>
	)
}
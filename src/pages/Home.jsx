import { useOutletContext, useRouteLoaderData } from "react-router"
import RoomsSection from "../components/RoomsSection"
import UsageSection from "../components/UsageSection"
import ModeSettings from "../components/ModeSettings"

export default function Home() {
	const data = useRouteLoaderData("main")
	const { mode, setMode } = useOutletContext()

	return (
		<>
			<UsageSection src={data} />
			<RoomsSection src={data} />
			<ModeSettings mode={mode} setMode={setMode} />
		</>
	)
}
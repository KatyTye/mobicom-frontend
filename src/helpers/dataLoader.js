import statistics from "../assets/jsons/statistics.json";
import weather from "../assets/jsons/weather.json";
import rooms from "../assets/jsons/rooms.json";

function getHeaderDate(type) {
	const date = new Date();

	if (type === "from") {
		date.setDate(date.getDate() - 1);
	}

	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");

	return `${year}-${month}-${day}`;
}

export default async function dataLoader() {
	let returnData = {}

	try {
		const headers = {
			Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
			"Content-Type": "application/json",
		}

		const from = getHeaderDate("from")
		const to = getHeaderDate("to")

		const API_BASE = "https://exercise.mobicom-pro.com/api"

		const weatherUrl = `${API_BASE}/weather`

		const statisticsUrl = new URL(`${API_BASE}/statistics`)
		statisticsUrl.search = new URLSearchParams({
			device_id: 25,
			from,
			to,
		}).toString()

		const [weatherRes, statisticsRes] = await Promise.all([
			fetch(weatherUrl, { headers }),
			fetch(statisticsUrl, { headers }),
		])

		const [weatherData, statisticsData] = await Promise.all([
			weatherRes.json(),
			statisticsRes.json(),
		])

		returnData.weather = weatherData
		returnData.statistics = statisticsData

	} catch (err) {
		returnData.weather = weather
		returnData.statistics = statistics
	}

	returnData.rooms = rooms

	console.log(returnData)

	return returnData
}
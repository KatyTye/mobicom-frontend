import weather from "../assets/jsons/weather.json";
import statistics from "../assets/jsons/statistics.json";

export default async function dataLoader() {
	let returnData = {}

	// try {
	// 	const weather = await fetch("https://exercise.mobicom-pro.com/api/weather", {
	// 		method: "GET",
	// 		headers: {
	// 			"Authorization": `Bearer ${import.meta.env.VITE_TOKEN}`,
	// 			"Content-Type": "application/json",
	// 		}
	// 	})
	// 	const weatherData = await weather.json();

	// 	const statistics = await fetch("https://exercise.mobicom-pro.com/api/statistics", {
	// 		method: "GET",
	// 		headers: {
	// 			"Authorization": `Bearer ${import.meta.env.VITE_TOKEN}`,
	// 			"Content-Type": "application/json",
	// 		}
	// 	})
	// 	const statisticsData = await statistics.json();

	// 	returnData.weather = weatherData
	// 	returnData.statistics = statisticsData

	// } catch (err) {
	returnData.weather = weather
	returnData.statistics = statistics
	// }

	return returnData
}
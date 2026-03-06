import backup from "../assets/jsons/weather.json";

export default async function dataLoader() {
	// try {
	// 	const response = await fetch("https://exercise.mobicom-pro.com/api/weather", {
	// 		method: "GET",
	// 		headers: {
	// 			"Authorization": `Bearer ${import.meta.env.VITE_TOKEN}`,
	// 			"Content-Type": "application/json",
	// 		},
	// 	});

	// 	if (!response.ok) {
	// 		throw new Error("API request failed");
	// 	}

	// 	const data = await response.json();
	// 	return data.result;

	// } catch (err) {
	// 	console.error("Could not load data, using backup json.", err);
	return backup;
	// }
}
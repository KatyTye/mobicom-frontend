export default async function dataLoader() {
	let fetchedData = {}

	try {
		await fetch("https://exercise.mobicom-pro.com/api/weather")
			.then(response => response.json())
			.then(data => {
				fetchedData = data.result
			})
	} catch (err) {
		console.error(err)
	}

	return fetchedData
}
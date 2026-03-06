export default function PercentDifference(data, number = false) {
	const todayKwh = data.statistics[0].kwh_usage;
	const yesterday = data.statistics[1].kwh_usage;

	const difference = todayKwh - yesterday;
	const percent = yesterday !== 0
		? ((Math.abs(difference) / yesterday) * 100).toFixed(1)
		: 0;

	if (number) {
		return percent
	} else if (todayKwh <= yesterday) {
		return `${percent}% mindre end i går`
	} else {
		return `${percent}% mere end i går`
	}
}
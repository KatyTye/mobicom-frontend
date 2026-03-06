import PercentDifference from "../helpers/utils";
import { CiWavePulse1 } from "react-icons/ci"

export default function UsageSection({ src }) {
	const today = new Date()

	return (
		<section className="main-content__box">
			<h2 className="main-content__box-title">
				Energi Forbrug
			</h2>

			<div className="main-content__box-holder">
				<CiWavePulse1 className="main-content__box-icon" />
				<p className="main-content__box-text large">
					{`${today.getDate()} 
						${Date().split(" ")[1]} 
						${today.getFullYear()}`}
				</p>

				<p className="main-content__box-multi-text">
					<span className="top-text">
						{src.statistics[0].kwh_usage}
						<span className="top-text__small">kWh</span>
					</span>
					<span className="bottom-text">
						{PercentDifference(src)}
					</span>
				</p>
			</div>
		</section>
	)
}
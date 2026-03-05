import { GrCaretDown, GrCaretUp } from "react-icons/gr";
import { CiTempHigh, CiWavePulse1 } from "react-icons/ci";
import { PiSquaresFourLight } from "react-icons/pi";
import { IoBulbOutline } from "react-icons/io5";
import { NavLink } from "react-router";

export default function Footer() {

	return (
		<footer className="bottom-content">
			<NavLink to={"/"} className={"bottom-content__link"}>
				<PiSquaresFourLight className="bottom-content__icon" />
			</NavLink>

			<NavLink to={"/stat"} className={"bottom-content__link"}>
				<CiWavePulse1 className="bottom-content__icon" />
			</NavLink>

			<NavLink to={"/temp"} className={"bottom-content__link"}>
				<CiTempHigh className="bottom-content__icon" />
				<div className="flexed">
					<GrCaretUp className="bottom-content__icon-second" />
					<GrCaretDown className="bottom-content__icon-second" />
				</div>
			</NavLink>

			<NavLink to={"/info"} className={"bottom-content__link"}>
				<IoBulbOutline className="bottom-content__icon" />
			</NavLink>
		</footer>
	)
}
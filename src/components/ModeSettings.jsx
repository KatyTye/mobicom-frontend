import { useState } from "react"
import { BsHouse } from "react-icons/bs"
import { GiNightSleep } from "react-icons/gi"
import { IoLocationOutline } from "react-icons/io5"

export default function ModeSettings({ mode, setMode }) {

	return (
		<section className="main-content__box">
			<h2 className="main-content__box-title-mode">
				Forudindstillet
			</h2>

			<ul className="main-content__box-list-mode">
				<li className={"main-content__box-list-item" + (mode == 1 && " active" || "")}
					onClick={() => setMode(1)}>
					<BsHouse className="item-icon" />

					<p className="item-name">Hjemme</p>
				</li>

				<li className={"main-content__box-list-item" + (mode == 2 && " active" || "")}
					onClick={() => setMode(2)}>
					<IoLocationOutline className="item-icon" />

					<p className="item-name">Ude</p>
				</li>

				<li className={"main-content__box-list-item" + (mode == 3 && " active" || "")}
					onClick={() => setMode(3)}>
					<GiNightSleep className="item-icon" />

					<p className="item-name">Sover</p>
				</li>
			</ul>
		</section>
	)
}
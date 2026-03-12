import { FaAngleDown } from "react-icons/fa"

export default function RoomsSection({ src }) {

	return (
		<section className="main-content__box">
			<h2 className="main-content__box-title with-button">
				<span>
					Rum
				</span>

				<span>
					Vis alle <FaAngleDown />
				</span>
			</h2>

			<ul className="main-content__box-list">
				{src.rooms.map((room, index) => {
					return <li key={room.name + index} className="main-content__box-list-item">
						<img src={location.protocol + "//" + location.host + "/icons/" + room.icon}
							alt="Ikon" className="item-icon" />

						<p className="item-name">{room.name}</p>
					</li>
				})}
			</ul>
		</section>
	)
}
import { GrCaretDown, GrCaretUp } from "react-icons/gr"
import { CiTempHigh } from "react-icons/ci"
import { Link } from "react-router"

export default function SmartSection({ src }) {

	return (
		<section className="main-content__box">
			<h2 className="main-content__box-title">
				Smart indstillinger
			</h2>

			<ul className="main-content__box-list room-list">
				{
					src.rooms.map((room, index) => {
						return (
							<li className="room-list__room" key={`room-item-${index}`}>
								{(room.lights.length >= 1 &&
									<>
										<p className="room-list__room-title" key={`room-light-title-${index}`}>
											Lys i {room.name}
										</p>
										{room.lights.map((lightName, idx) => {
											return <p className="room-list__room-switch"
												key={`room-light-switch-${idx}`}>
												<span className="room-list__room-switch-text">
													{lightName}
												</span>
												<button className="room-list__room-switch-button">
													<div></div></button>
											</p>
										})}
									</>
								)}

								{(room.heat.length >= 1 &&
									<>
										<p className="room-list__room-title" key={`room-temp-title-${index}`}>
											Varme i {room.name}
										</p>
										{room.heat.map((tempName, idx) => {
											return <p className="room-list__room-switch"
												key={`room-temp-switch-${idx}`}>
												<span className="room-list__room-switch-text">
													{tempName}
												</span>
												<button className="room-list__room-switch-button">
													<div></div></button>
											</p>
										})}
									</>
								)}

								{((room.lights.length == 0 && room.heat.length >= 1) &&
									<div className="room-list__room-area">
										<CiTempHigh className="room-list__room-area-icon" />
										<p className="room-list__room-area-text">
											<span>
												{room.temp || 19} {src.weather.unit}
											</span>
											<span>
												{room.mode} - mode
											</span>
										</p>
										<Link to={`temp?room=${room.name.toLowerCase()}`}
											className="room-list__room-area-button">
											<CiTempHigh />
											<div className="flexed">
												<GrCaretUp />
												<GrCaretDown />
											</div>
											<span>
												Indstillinger
											</span>
										</Link>
									</div>
								)}
							</li>
						)
					})
				}
			</ul>
		</section>
	)
}
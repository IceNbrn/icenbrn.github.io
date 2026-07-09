import {Menu} from "lucide-react";
import { Link } from "@tanstack/react-router";
import contacts from "../data/Contacts.ts";

function Navbar() {
	return (
		<header>
			<div className="collapse bg-blue-icen ice-selection" id="aboutMe">
				<div className="container">
					<div className="row">

						<div className="col-sm-4 offset-md-1 py-4">
							<h3 className="text-xl text-white font-bold">Contacts</h3>

							<ul className="list-unstyled">
								{contacts.map((item) => (
									<li key={item.name}>
										<a
										href={item.url}
										target="_blank"
										rel="noreferrer"
										className="flex items-center gap-3 w-fit text-white text-decoration-none"
										>
											<item.Icon size={20} color={item.color ? item.color : 'default'}/>
											<span className="font-medium p-1">{item.name}</span>
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<nav className="navbar navbar-dark bg-blue-icen shadow-sm">
				<div className="container">

					<Link className="navbar-brand d-flex align-items-end" to="/"><strong>Bruno Castanheira</strong></Link>


					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#aboutMe"
					        aria-controls="aboutMe" aria-expanded="false" aria-label="Toggle navigation">
						<Menu/>
					</button>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
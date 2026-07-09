import contacts from "../data/Contacts.ts";

function Footer() {
	return (
		<footer className="text-muted py-5">
			<div className="container">
				<div className="row">
					<div className="col-sm-6 offset-md-1 py-4">
						<h4 className="text-dark">Contact</h4>
						<ul className="list-unstyled">
							{contacts.map((item) => (
								<li key={item.name}>
									<a
										href={item.url}
										target="_blank"
										rel="noreferrer"
										className="flex items-center gap-3 w-fit text-decoration-none"
									>
										<item.Icon size={20} className="text-black"/>
										<span className="font-medium p-1">{item.name}</span>
									</a>
								</li>
							))}
						</ul>

						<p>© Copyright
							2021 - {new Date().getFullYear()}
						</p>
						<p>
							Bruno Castanheira. All rights reserved.
						</p>
					</div>

				</div>
			</div>
		</footer>
	)
}

export default Footer
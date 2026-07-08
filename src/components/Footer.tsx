function Footer() {
	return (
		<footer className="text-muted py-5">
			<div className="container">
				<div className="row">
					<div className="col-sm-6 offset-md-1 py-4">
						<h4 className="text-dark">Contact</h4>
						<ul className="list-unstyled">
							<li><a href="https://twitter.com/IceNbrn" target="_blank"
							       className="text text-decoration-none"><i
								className="fab fa-twitter-square fa-2x nav-text"></i>&nbsp;Twitter</a></li>
							<li><a href="mailto:brunoacastanheira@gmail.com" className="text text-decoration-none"><i
								className="fas fa-envelope-square fa-2x nav-text"></i>&nbsp;Email</a></li>
							<li><a href="https://www.linkedin.com/in/carlos-bruno-castanheira/" target="_blank"
							       className="text text-decoration-none"><i
								className="fab fa-linkedin fa-2x nav-text"></i>&nbsp;LinkedIn</a></li>
							<li><a href="https://github.com/IceNbrn" target="_blank"
							       className="text text-decoration-none"><i
								className="fab fa-github-square fa-2x nav-text"></i>&nbsp;GitHub</a></li>
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
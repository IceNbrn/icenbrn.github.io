import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
	component: () => (
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-8">
					<h1 className="fw-bold">About Me</h1>
					<p className="text-muted">Some intro text here.</p>
					<button className="btn btn-primary">Contact</button>
				</div>
			</div>
		</div>
	),
})
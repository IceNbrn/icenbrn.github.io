import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/')({
	component: ProjectsList,
})

function ProjectsList() {
	return (
		<div className="container">
			<h1>My Projects</h1>
			<div className="row">
				<div className="col-md-4">
					<Link to="/projects/icebox">Icebox</Link>
				</div>
			</div>
		</div>
	)
}
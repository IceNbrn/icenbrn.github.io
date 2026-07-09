
function TechnologyBadge({ name, website }: { name: string; website?: string }) {

	if (website) {
		return (
			<a href={website} target="_blank">
			<span className="badge-ice"> {name}
			</span>
			</a>
		)
	} else {
		return (
			<span className="badge-ice"> {name}
			</span>
		)
	}
}

export default TechnologyBadge;
import TechnologyBadge from "./TechnologyBadge.tsx";
import type {ProjectDetails} from "../types/Project.ts";

function ProjectHeader({ data }: { data: ProjectDetails }) {

	return (
		<section className={`py-2 masthead-${data.name.toLowerCase().replace(/\s+/g, '')} d-flex`}>
			<div className="container text-center">
				<div className="row py-lg-5">
					<div className="col-lg-8 col-md-8 mx-auto">
						<h1 className="fw-light text-white">{data.name.toUpperCase()}</h1>
						<p className="text-white"><b>Duration: {data.duration} months</b></p>
						<p className="text-white">« {data.teamType} Project » </p>
						<div className="text-white">
							<b>Technologies:</b>
							{data.technologies.map((techObject, index) => {
								const name = Object.keys(techObject)[0];
								const website = Object.values(techObject)[0];

								return (
									<TechnologyBadge
										key={index}
										name={name}
										website={website}
									/>
								);
							})}
						</div>
					</div>
					<div className="d-flex justify-content-center align-items-center">
						<a href={data.website.url} target="_blank">
							<button type="button" className="btn btn-sm btn-primary m-1">{data.website.name}</button>
						</a>
						{data.sourceCode && (
							<a href={data.sourceCode} target="_blank">
								<button type="button" className="btn btn-sm btn-secondary m-1">Source Code</button>
							</a>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProjectHeader;
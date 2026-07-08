import type {CompanyProject, ProjectDetails} from "../types/Project.ts";
import {Link} from "@tanstack/react-router";

import TechnologyBadge from "./TechnologyBadge.tsx";
import ReactMarkdown from "react-markdown";
import {toSlugName} from "../utils/FormatName.ts";

function ProjectCard({ data }: { data: ProjectDetails | CompanyProject }) {
	const isCompanyProject = (p: ProjectDetails | CompanyProject): p is CompanyProject =>
		"company" in p;

	console.log(data.name);

	return (
		<>
			<div className="col mb-3">
				<h4 id="f1manager" className={`text-center mb-0 ${data.teamType === "Company" ? "bg-orange-icen" : "bg-blue-icen"}`}>{data.name.toUpperCase()}</h4>
				<div className="card-tech-skill container">
					<div className="card-body">
						<h5><b>Technologies / Skills:</b>
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
						</h5>
						<p className="card-tech-text"><b>Duration:</b> {data.startDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })} - {data.endDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })} ({data.duration} months)</p>
						<p className="card-tech-text">« {data.teamType} Project »</p>
					</div>
				</div>
				<div className="col-md-11 container text-start">
					<table>
						<tbody>
						<tr>
							<td className="col-md-6 container hover-effect">
								<Link to={`/projects/${toSlugName(data.name)}` as any} className="hover-effect">
									<img className="card-img-top" alt="wallpaper" src={data.bannerImages[0]} data-holder-rendered="true"/>
								</Link>

							</td>
							<td className="col-md-6 container">
								<Link to={`/projects/${toSlugName(data.name)}` as any} className="hover-effect">
									<img className="card-img-top" alt="wallpaper" src={data.bannerImages[1]} data-holder-rendered="true"/>
								</Link>
							</td>
						</tr>
						</tbody>
					</table>
				</div>
				<div className="card-icen container">
					<div className="card-body">
						<ReactMarkdown>{data.description}</ReactMarkdown>
						{isCompanyProject(data) ? (
							<div>
								<p className="card-text"><b>Position:</b> {data.position}</p>
								<p className="card-text">
									<b>Company:</b>{" "}
									<a href={data.company.url} target="_blank" rel="noopener noreferrer">
										{data.company.name}
									</a>
								</p>
							</div>
						) : (
							<div>
								<p className="card-text"><b>Features:</b></p>
								<ul>
									{data.features!.map((feature, index) => (
										<li key={index}>{feature}</li>
									))}
								</ul>
							</div>
						)}

						<div className="d-flex justify-content-start align-items-center">

							<Link to={`/projects/${toSlugName(data.name)}` as any}>
								<button type="button" className="btn btn-primary btn-lg">Details</button>
							</Link>
							<a href={data.website.url} target="_blank">
								<button type="button" className="btn btn-sm btn-outline-secondary m-1">{data.website.name}
								</button>
							</a>

							{data.sourceCode && (
								<a href={data.sourceCode} target="_blank">
									<button type="button" className="btn btn-sm btn-outline-secondary m-1">Source Code
									</button>
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProjectCard;
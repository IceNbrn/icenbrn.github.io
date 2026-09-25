import {createFileRoute} from '@tanstack/react-router'
import profilePic from '../assets/images/profile_portfolio_2.png'
import {commercialProjects, personalProjects} from "../data";
import ProjectCard from "../components/ProjectCard.tsx";
import ScrollLink from "../components/ScrollLink.tsx";
import type {ProjectType} from "../types/Project.ts";
import {useMemo, useState} from "react";


export const Route = createFileRoute('/')({
	component: Home,
})

function Home() {

	const filters: { label: string; value: ProjectType | undefined }[] = [
		{ label: "ALL", value: undefined },
		{ label: "GAME DEV", value: "GameDev" },
		{ label: "WEB DEV", value: "WebDev" },
	];

	const [filterType, setFilterType] = useState<ProjectType | undefined>(undefined);

	const personalProjectsFiltered = useMemo(
		() => filterType ? personalProjects.filter(p => p.type === filterType) : personalProjects,
		[personalProjects, filterType]
	);

	const commercialProjectsFiltered = useMemo(
		() => filterType ? commercialProjects.filter(p => p.type === filterType) : commercialProjects,
		[commercialProjects, filterType]
	);
	return (
		<>
			<div className="py-5 text-center container">
				<div className="row py-lg-5">
					<div className="col-lg-10 col-md-9 mx-auto">
						<div className="col-md-3 container">
							<img className="img-thumbnail" data-src="" alt="profile portfolio"
								 src={profilePic} data-holder-rendered="true"
								 style={{maxHeight: '128px', maxWidth: '128px'}}/>
						</div>
						<h2 className="fw-light py-3">About Me</h2>
						<p className="text-muted">
							I'm Bruno Castanheira, a <b>Junior Software Engineer</b> and former <b>Graduate Programmer at Frontier Developments</b>. I have
						background in Digital Games Development Engineering and experience with <b>C++, C#, Java, Unity and Unreal Engine</b>
						</p>

						<div className="container collapse" id="moreAboutMe">
							<p className="text-muted">
								My interest in programming started with games, starting with Java plugins for Minecraft before moving into <b>C# and C++</b> for video games.
								I enjoy building gameplay systems, solving technical problems. I've also been expanding into web development again, having first explored it
								in high school with <b>PHP and ASP</b>. Recently, I built a private community website using <b>React, Next.js, TypeScript and a .NET API.</b>
							</p>
							<p className="text-muted">
								In my free time I enjoy gaming, cycling and sim racing.
							</p>
						</div>
						<div className="m-3">
							<button className="btn btn-outline-secondary" type="button" data-bs-toggle="collapse"
									data-bs-target="#moreAboutMe" aria-controls="moreAboutMe" aria-expanded="false"
									aria-label="Toggle navigation">
								More about me
							</button>

							<ScrollLink to="projects"><a className="m-2 btn btn-primary my-2">Projects</a></ScrollLink>
						</div>
						<h4 className="fw-light py-3">Skills</h4>
						<div>
							<h4>
								<span className="badge-ice">C++</span>
								<span className="badge-ice">C#</span>
								<span className="badge-ice">.NET</span>
								<span className="badge-ice">SQLite</span>
								<span className="badge-ice">PostgreSQL</span>
								<span className="badge-ice">Java</span>
								<span className="badge-ice">PHP</span>
								<span className="badge-ice">HTML</span>
								<span className="badge-ice">CSS</span>
							</h4>
						</div>
						<div>
							<h4>
								<span className="badge-ice">Unreal Engine</span>
								<span className="badge-ice">Unity Engine</span>
								<span className="badge-ice">Perforce</span>
								<span className="badge-ice">Git</span>
								<span className="badge-ice">Jira</span>
								<span className="badge-ice">Helix Swarm</span>
								<span className="badge-ice">Confluence</span>
								<span className="badge-ice">Unigine Engine</span>
								<span className="badge-ice">Visual Studio</span>
								<span className="badge-ice">JetBrains Rider</span>
								<span className="badge-ice">Entity Framework Core</span>
							</h4>
						</div>
					</div>
				</div>
			</div>

			<div id="projects" className="album py-3 bg-icen">
				<div className="container">

					<ScrollLink to="projects">
						<div className="mb-3">
							{filters.map(f => (
								<button
									key={f.label}
									className={`btn btn-outline-blue mx-2 ${filterType === f.value ? "active" : ""}`}
									onClick={() => setFilterType(f.value)}
								>
									{f.label}
								</button>
							))}
						</div>
					</ScrollLink>

					<h2 className="pb-2 border-bottom text-center text-white bg-orange-icen">Commercial
						Projects</h2>

					{commercialProjectsFiltered.map((companyObject, index) => {

						return (
							<ProjectCard
								key={index}
								data={companyObject}
							/>
						);
					})}

					<h2 className="pb-2 border-bottom text-center text-white bg-blue-icen mt-5">Personal
						Projects</h2>

					{personalProjectsFiltered.map((personalObject, index) => {

						return (
							<ProjectCard
								key={index}
								data={personalObject}
							/>
						);
					})}
				</div>
			</div>
		</>
	)
}
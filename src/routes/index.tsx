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
						<p className="text-muted">Hello, I'm Bruno Castanheira, a Junior Software Engineer and a gamer that
							worked at Frontier Developments as a Graduate Programmer.</p>
						<p className="text-muted">I started playing video games as a child since then it's been my hobby.
							After learning the basics of programming I started creating games, now I can combine the two,
							and it is something that I enjoy.
						</p>
						<div className="container collapse" id="moreAboutMe">
							<p className="text-muted">I have a bachelor's degree in Digital Games Development
								Engineering, <b>experience</b> with <b>C++, C#, Java, Unity, Unigine Engine</b>. C# was
								mainly used in Unity, and Mono Game.
							</p>
							<p className="text-muted">
								Java was my first programming language, in that time I was playing Minecraft and I got
								interested in creating plugins for it.
							</p>
							<p className="text-muted">
								C# has been my number one language before working at Frontier Developments, so
								now <b>C++</b> is the one where I have <b>real work experience</b>, I started learning it at
								the University for a 3D Graphics Application. I used C++ with Unigine Engine and <b>Unreal
								Engine</b>.
							</p>
							<p className="text-muted">
								<b>Hobbies:</b> Gaming, Programming, Biking and Sim Racing.
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
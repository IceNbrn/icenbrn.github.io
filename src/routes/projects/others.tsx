import { createFileRoute } from '@tanstack/react-router'
import ProjectHeader from "../../components/ProjectHeader.tsx";
import {personalProjects} from "../../data";
import type {ProjectDetails} from "../../types/Project.ts";
import {otherProjects} from "../../data/OtherProjects.ts";
import ModsOthersCard from "../../components/ModsOthersCard.tsx";

export const Route = createFileRoute('/projects/others')({
	component: Others,
})

function Others() {


	return (
		<>
			<ProjectHeader data={personalProjects.find(c => c.name.includes("Others")) as ProjectDetails}/>

			<div className="album py-5 bg-icen">
				<div className="container text-center">
					<div className="row">
						<div className="col-md-12 container text-start">
							<table className="text-white">
								<tbody>
								{otherProjects.map((otherProjectObject, index) => {

									return (
										<ModsOthersCard
											key={index}
											data={otherProjectObject}
										/>
									);
								})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

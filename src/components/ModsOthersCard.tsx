import type {OthersProject} from "../types/Project.ts";

function ModsOthersCard({ data }: { data: OthersProject }) {

	return (
		<tr className="separator">
			<td className="col-md-3">
				<a target="_blank" href={data.url} rel="noopener noreferrer">
					<img className="card-img-top" data-src="" alt="others p3d image"
					     src={data.image} data-holder-rendered="true"/>
				</a>
			</td>
			<td className="col-md-2 text-center">
				<a target="_blank" href={data.url} rel="noopener noreferrer">
					{data.name}
				</a>
			</td>
			<td className="col-md-7">
				- {data.description}
				{data.downloads && (
					<p className="text-white">- ~{data.downloads} Downloads</p>
				)}
				{data.teamType && (
					<p className="text-white">{data.teamType} Project</p>
				)}
			</td>
		</tr>
	);
}

export default ModsOthersCard;
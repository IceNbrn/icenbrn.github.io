import {createFileRoute} from '@tanstack/react-router'
import ProjectHeader from "../../components/ProjectHeader.tsx";
import {knowthewayImages} from "../../assets/images/knowtheway-images.ts";
import {personalProjects} from "../../data";

export const Route = createFileRoute('/projects/knowtheway')({
	component: KnowTheWay,
})

function KnowTheWay() {

	return (
		<>
			<ProjectHeader data={personalProjects.find(c => c.name.includes("Know The Way"))!}/>
			<div className="album py-5 bg-icen">
				<div className="container text-start">
					<div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 g-1">
						<div className="col">
							<div className="row">
								<div className="col-md-12 card-icen container">
									<div className="card-body">
										<h3>Story</h3>
										<p>KnowTheWay is a co-op where 2 players need to complete puzzles to proceed to
											the next level.
											When they reach the last level, the game is completed.</p>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12 card-icen container">
									<div className="card-body">
										<h3>Features</h3>
										<p><b>Interactions</b></p>
										<p>The player can interact with some objects to complete the puzzles. For
											example, move boxes:</p>
										<div className="col-md-9 container">
											<div className="embed-responsive embed-responsive-16by9">
												<video style={{minHeight: "400px", width: "100%"}} controls loop
												       autoPlay>
													<source src="https://i.imgur.com/9dPmacR.mp4" type="video/mp4"/>
													Your browser does not support playing this Video
												</video>
											</div>
										</div>
										<table className="col-md-10 container">
											<tbody>
											<tr>
												<td className="col-md-5">
													<img className="card-img-top" alt="know they way eletricbox image"
													     src={knowthewayImages.eletricbox}/>
												</td>
												<td className="col-md-5">
													<div className="embed-responsive embed-responsive-16by9">
														<video style={{minHeight: "400px", width: "100%"}} controls loop
														       autoPlay>
															<source src="https://i.imgur.com/IRSHKT1.mp4"
															        type="video/mp4"/>
															Your browser does not support playing this Video
														</video>
													</div>
												</td>
											</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12 card-icen container">
									<div className="card-body">
										<p><b>Turrets</b></p>
										<p>The player needs to disable the turrets to complete the level.</p>
									</div>
									<div className="col-md-6 container">
										<img className="card-img-top" alt="know they way turrets image"
										     src={knowthewayImages.turrets}/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12 card-icen container">
									<div className="card-body">
										<p><b>Exit</b></p>
										<p>To exit this level, the player needs to place 4 boxes on the 4 red
											platforms.</p>
									</div>
									<div className="col-md-6 container">
										<img className="card-img-top" alt="know they way exit image"
										     src={knowthewayImages.exit}/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

import {createFileRoute} from '@tanstack/react-router'
import ProjectHeader from "../../components/ProjectHeader.tsx";
import {ispaceImages} from "../../assets/images/ispace-images.ts";
import {CodeBlock} from "../../components/CodeBlock.tsx";
import {personalProjects} from "../../data";

export const Route = createFileRoute('/projects/ispace')({
	component: ISpace,
})

function ISpace() {

	const scrollViewCode = `// File: ScrollViewContent.cs
public GameObject AddContent(GameObject prefab)
{
  GameObject instantiatedObject = Instantiate(prefab, spawnPosition.transform.parent, false);
  RectTransform rectTransform = instantiatedObject.GetComponent<RectTransform>();
  RectTransform spawnRectTransform = spawnPosition.GetComponent<RectTransform>();
  Rect spawnRect = spawnRectTransform.rect;
  Vector3 positionRectTransfrom = rectTransform.localPosition;
  
  rectTransform.sizeDelta = new Vector2(0.0f, spawnRect.height);
  positionRectTransfrom.y -= spawnRectTransform.sizeDelta.y * listPrefabs.Count;
  
  rectTransform.localPosition = positionRectTransfrom;
  listPrefabs.Add(instantiatedObject);
  
  return instantiatedObject;
}`;

	return (
		<>
		<ProjectHeader data={personalProjects.find(c => c.name.includes("ISpace"))!}/>
		<div className="album py-5 bg-icen">
			<div className="container text-start">
				<div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 g-1">
					<div className="col">
						<div className="row">
							<div className="col-md-12 card-icen container">
								<div className="card-body">
									<h3>Story</h3>
									<p>A game I made to play with my friends.</p>
									<p>The game right now has <b>1 game mode: Deathmatch - Get the maximum kills possible to win.</b><br />
										In the future I want to add a hide and seek mode and a game mode inspired in CS:GO.
									</p>
								</div>
								<div className="col-md-5 container">
									<img className="card-img-top" alt="ispace station image" src={ispaceImages.stationImg} />
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 card-icen container">
								<div className="card-body">
									<h3>Features</h3>
									<p><b>Player Controller</b></p>
									<div className="col-md-9 container">
										<div className="embed-responsive embed-responsive-16by9">
											<iframe className="embed-responsive-item" style={{minHeight: "400px", width: "100%"}} src="https://www.youtube.com/embed/VrFHHxv7L0o" allowFullScreen></iframe>
										</div>
									</div>
									<p>To move/rotate the player I'm using unity's new input system.</p>
									<div className="col-md-9 text-start">
										<table>
											<tbody>
											<tr>
												<td className="col-md-1 text-center"> [W] </td>
												<td className="col-md-8">Forward thrust</td>
											</tr>
											<tr>
												<td className="col-md-1 text-center"> [S] </td>
												<td className="col-md-8">Backward thrust</td>
											</tr>
											<tr>
												<td className="col-md-1 text-center"> [A] </td>
												<td className="col-md-8">Strafe left</td>
											</tr>
											<tr>
												<td className="col-md-1 text-center"> [D] </td>
												<td className="col-md-8">Strafe right</td>
											</tr>
											<tr>
												<td className="col-md-1 text-center"> [SPACE] </td>
												<td className="col-md-8">Strafe up</td>
											</tr>
											<tr>
												<td className="col-md-1 text-center"> [LCTRL] </td>
												<td className="col-md-8">Strafe down</td>
											</tr>
											<tr>
												<td className="col-md-1 text-center"> [E] </td>
												<td className="col-md-8">Roll to the right</td>
											</tr>
											<tr>
												<td className="col-md-1 text-center"> [Q] </td>
												<td className="col-md-8">Roll to the left</td>
											</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-12 card-icen container">
								<div className="card-body">
									<p><b>Weapon</b></p>
									<p>Now the game has 1 automatic rifle. In the future I want to add more weapons (examples: railgun, pistols).</p>
								</div>
								<div className="col-md-9 container">
									<div className="embed-responsive embed-responsive-16by9">
										<iframe className="embed-responsive-item" style={{minHeight: "400px", width: "100%"}} src="https://www.youtube.com/embed/UJqagRt-5Nk" allowFullScreen></iframe>
									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-12 card-icen container">
								<div className="card-body">
									<p><b>Round System</b></p>
									<p>The game has a round system, so when the host joins it starts a timer.</p>
									<p>When the round timer reaches 0, means the round is over, so it shows the round winner's name. After that, all players go to a random spawn point.</p>
								</div>
								<div className="col-md-9 container">
									<img className="card-img-top" alt="ispace round end image" src={ispaceImages.roundEndGif} />
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-12 card-icen container">
								<div className="card-body">
									<p><b>Scoreboard / Kill feed</b></p>
									<p>To make the scoreboard, first I created a script (ScrollViewContent.cs) that instantiates objects inside of a scroll view. After that's done, the ScoreBoardManager uses the first script to instantiate, and manages the score on the table.</p>
									<div className="col-md-9 container">
										<img className="card-img-top" alt="ispace scoreboard killfeed image" src={ispaceImages.scoreboardImg} />
										<br />
										<p><i>[Code] How to instantiate any object inside of a scroll view:</i></p>
										<CodeBlock code={scrollViewCode} />
									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-12 card-icen container">
								<div className="card-body">
									<p><b>Console Commands</b></p>
									<p>The player has access to the console, where it can execute specific commands.</p>
								</div>
								<div className="col-md-9 col-sm-5 container">
									<img className="card-img-top" alt="ispace dev console iamge" src={ispaceImages.consoleImg} />
								</div>
								<p>Commands example:</p>
								<div className="col-md-4 col-sm-5 container">
									<img className="card-img-top" alt="ispace crosshair image" src={ispaceImages.crosshairImg} />
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

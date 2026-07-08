import {createFileRoute} from '@tanstack/react-router'
import ProjectHeader from "../../components/ProjectHeader.tsx";
import {iceboxImages} from "../../assets/images/icebox-images.ts";
import {CodeBlock} from "../../components/CodeBlock.tsx";
import {personalProjects} from "../../data";
import ScrollLink from "../../components/ScrollLink.tsx";

export const Route = createFileRoute('/projects/icebox')({
	component: IceBox,
})

function IceBox() {

	const spawnerCode = `USTRUCT(BlueprintType)
struct FSpaceShipPath
{
  GENERATED_BODY()

  UPROPERTY(EditAnywhere, BlueprintReadOnly)
  FVector Position; // The position to move the space ship.
  UPROPERTY(EditAnywhere, BlueprintReadOnly)
  bool ToMove = true; // Should the spaceship keep moving?
  UPROPERTY(EditAnywhere, BlueprintReadOnly)
  bool IsLoadUnloadArea = false; // If it's a load / unload area it will set the ship lights to green, so the player knows it's safe to load / unload.
};`;

	return (
		<>
			<ProjectHeader data={personalProjects.find(c => c.name.includes("Icebox"))!}/>
			<div className="album py-5 bg-icen">
				<div className="container text-start">
					<div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 g-1">
						<div className="col">
							<div className="row">
								<div className="col-md-12 card-icen container">
									<div className="card-body">
										<h3>Story</h3>
										<p className="card-text">Icebox is a demo project that helped me with learning
											more about C++. At
											first,
											this project used the <a href="https://flaxengine.com/" target="_blank">Flax
												Engine</a>, but after
											some time I decided to switch to Unreal Engine 5.</p>
										<p className="card-text">Right now the player's objective is to accept a mission
											and store the boxes
											in the
											space station receiver as quickly as possible after doing that they receive
											a score.</p>

										<table>
											<tbody>
												<tr>
													<td className="col-md-6">
														<div className="embed-responsive embed-responsive-16by9">
															<img className="card-img-top" data-src="" alt="icebox game gif"
																 src={iceboxImages.gameGif}
																 data-holder-rendered="true"/>
														</div>
													</td>

													<td className="col-md-6">
														<div className="video-wrapper mt-1">
															<iframe
																	src="https://www.youtube.com/embed/lifvUQsSYZQ"
																	allowFullScreen>
															</iframe>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
										<h3>Features:</h3>
										<div className="col-md-5">
											<ul>
												<li><ScrollLink to="dynamicboxspawner">Dynamic Box Spawner</ScrollLink></li>
												<li><ScrollLink to="gravitygun">Gravity Gun</ScrollLink></li>
												<li><ScrollLink to="cargoboxes">Cargo Boxes with different behaviors</ScrollLink></li>
												<li><ScrollLink to="minimissionsystem">Mini Mission System (Different Difficulties)</ScrollLink></li>
												<li><ScrollLink to="ai">AI Follow Vector Path</ScrollLink></li>
												<li><ScrollLink to="movement">Player Movement (0G Added)</ScrollLink></li>
												<li><ScrollLink to="userinterface">User Interface</ScrollLink></li>
											</ul>
										</div>
										<h3>For the Future</h3>
										<p>I'd like to add: </p>
										<div className="col-md-5">
											<ul>
												<li>Sandbox Mode</li>
												<li>Multiplayer CO-OP</li>
												<li>Economy</li>
												<li>Tractor SpaceShip to move heavier containers</li>
												<li>Upgrades for the player and the tractor spaceship</li>
												<li>A new space station</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12 card-icen container">
									<div className="card-body">
										<h3>Features</h3>
										<h5 id="dynamicboxspawner"><b>Dynamic Box Spawner</b></h5> <p>can spawn small
										boxes inside a
										bounding
										box or spawn Containers to be attached to the Cargo Spaceship. Containers are
										used to transport
										boxes,
										each container has a bounding box and a BoxSpawnerComponent.</p>
										<p>To spawn the boxes inside the container, we can divide the bounding box
											width/height/depth with
											the
											box size to get how many boxes can be spawned. To spawn boxes with different
											sizes, bigger boxes
											are
											spawned first, after that when a small box wants to spawn it will check for
											a collision with a
											bigger
											box. If a collision is not detected then it's safe to spawn.</p>
										<p>A small box has a size of 30 units, a container has a size of 90 so it can
											spawn up to 27 small
											boxes.</p>
										<p>In Figure 2 you can see the BoxSpawnerComponent has 2 attributes:
											SpaceBetweenBoxes(int), and
											ObjectsToSpawn(TMap). This example will spawn 1 Fuel Box, 9 Timer Boxes and
											10 Stability Boxes,
											Figure
											1 can prove that.</p>
										<span className="disclaimer">DISCLAIMER: Container mesh visibility is off to show the boxes inside the container!</span>
										<table>
											<tr>
												<td className="col-md-9">
													<figure className="figure">
														<img className="card-img-top" data-src=""
														     alt="icebox dynamic box spawner 1"
														     src={iceboxImages.dynamicBoxSpawners[0]}
														     data-holder-rendered="true"/>
														<figcaption className="figure-caption text-center">Figure 1
														</figcaption>
													</figure>
												</td>

												<td className="col-md-3">
													<figure className="figure">
														<img className="card-img-top" data-src=""
														     alt="icebox dynamic box spawner 2"
														     src={iceboxImages.dynamicBoxSpawners[1]}
														     data-holder-rendered="true"/>
														<figcaption className="figure-caption text-center">Figure 2
														</figcaption>
													</figure>
												</td>
											</tr>
										</table>

										<p>As you can see in Figure 3 the containers are attached to the Cargo
											Spaceship, in this example it
											spawned 10 Fuel Boxes, 95 Stability Boxes and 95 Timer Boxes.</p>
										<p>The Cargo Spaceship has 10 attach points so it can carry up to 270 small
											boxes in total.</p>
										<table>
											<tr>
												<td className="col-md-9">
													<figure className="figure">
														<img className="card-img-top" data-src=""
														     alt="icebox dynamic box spawner 3"
														     src={iceboxImages.dynamicBoxSpawners[2]}
														     data-holder-rendered="true"/>
														<figcaption className="figure-caption text-center">Figure 3
														</figcaption>
													</figure>
												</td>

												<td className="col-md-3">
													<figure className="figure">
														<img className="card-img-top" data-src=""
														     alt="icebox dynamic box spawner 4"
														     src={iceboxImages.dynamicBoxSpawners[3]}
														     data-holder-rendered="true"/>
														<figcaption className="figure-caption text-center">Figure 4
														</figcaption>
													</figure>
												</td>
											</tr>
										</table>

									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12 card-icen container">
									<h5 id="gravitygun"><b>Gravity Gun</b></h5> <p> first prototype was in Flax Engine
									but after some time
									I
									switched to Unreal Engine 5.</p>
									<p>The gravity gun has the ability to <b>move/rotate</b> objects and give them
										an <b>impulse</b>.</p>
									<table>
										<tr>
											<td className="col-md-6">
												<div className="video-wrapper">
													<iframe
													        src="https://www.youtube.com/embed/zOjy3MFXF6c"
													        allowFullScreen></iframe>
												</div>
											</td>

											<td className="col-md-6">
												<div className="video-wrapper">
													<iframe
													        src="https://www.youtube.com/embed/o0heeUqH8eo"
													        allowFullScreen></iframe>
												</div>
											</td>
										</tr>
									</table>
									<p>To help the player the GravGun has a HUD that can display:</p>
									<div className="col-md-12 gravgun-hud">
										<ul>
											<li className="text-white">Box Speed: White = Safe to move | <span
												className="yellow">Yellow = Dangerous Speed</span> | <span
												className="red">Red = Critical Speed, taking damage</span>
											</li>
											<li className="text-white">Box Timer: <span className="green">Green = Timer » 60s</span> | <span
												className="orange">Orange = Timer » 60s
                      </span>
												| <span className="red">Red = Timer » 10s
                    </span>
											</li>
											<li className="text-white">Box Distance</li>
										</ul>
									</div>
									<h6><b>Final Version:</b></h6>
									<div className="col-md-7 container">
										<img className="card-img-top" data-src="" alt="gravity gun gif"
										     src={iceboxImages.gravityGun}
										     data-holder-rendered="true"/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12 card-icen container">
									<div className="card-body">
										<h5 id="cargoboxes"><b>Cargo Boxes Behaviours</b></h5>
									</div>

									<div className="container overflow-hidden px-2 text-center">
										<div className="row gy-5 d-flex justify-content-center">
											<div className="col-3">
												<div className="p-2">Fuel Box</div>
												<img alt="icebox fuel cargo box" src={iceboxImages.fuelBox}
												     className="d-block w-100"/>
												<div className="p-2">Has a bigger explosion radius/damage.</div>
											</div>
											<div className="col-3">
												<div className="p-2">Stability Box</div>
												<img alt="icebox Stability cargo box" src={iceboxImages.stabilityBox}
												     className="d-block w-100"/>
												<div className="p-2">Sensible to higher speeds, when the critical speed
													is reached it receives
													damage
													than can lead to an explosion.
												</div>
											</div>
											<div className="col-3">
												<div className="p-2">Timer Box</div>
												<img alt="icebox timer cargo box" src={iceboxImages.timerBox}
												     className="d-block w-100"/>
												<div className="p-2">After being detached from a container the timer
													starts, when the timer reaches
													0
													it explodes.
												</div>
											</div>
											<div className="col-3">
												<div className="p-2">Container</div>
												<img alt="icebox container box" src={iceboxImages.container}
												     className="d-block w-100"/>
												<div className="p-2">Used to transport other cargo boxes.</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-12 card-icen container">
									<div className="card-body">
										<h5 id="minimissionsystem"><b>Mini Mission System</b></h5>
									</div>

									<p>When the game mode starts depending on the parameters it will generate X missions
										of Y Difficulty. In
										this case, it will create 3 missions for regular, medium, and hard
										difficulty.</p>

									<div className="col-md-9 container">
										<div className="video-wrapper">
											<iframe
											        src="https://www.youtube.com/embed/sG0JQSNYTTc"
											        allowFullScreen></iframe>
										</div>
									</div>
									<p>To achieve this I created a mission row template that can be added to the
										missions scroll box with the
										mission information.</p>
									<p>The player can accept the mission, finish the mission and filter the mission by
										difficulty or by
										completion.</p>
									<div className="col-md-9 container">
										<a href={iceboxImages.missions[0]} target="_blank"><img className="card-img-top"
										                                                        data-src=""
										                                                        alt="gravity gun gif"
										                                                        src={iceboxImages.missions[0]}
										                                                        data-holder-rendered="true"/></a>
									</div>

									<p>The mission content row ui has 2 parameters: MissionData - has all the
										information about the mission;
										MissionScrollBox - Used by the accept/finish button to enable / disable other
										mission rows. </p>
									<p>It can display: mission id, mission from location, mission difficulty, points,
										boxes to move, and if
										the mission is finished.</p>
									<div className="col-md-10 container">
										<a href={iceboxImages.missions[1]} target="_blank"><img className="card-img-top"
										                                                        data-src=""
										                                                        alt="gravity gun gif"
										                                                        src={iceboxImages.missions[1]}
										                                                        data-holder-rendered="true"/></a>
									</div>

								</div>
							</div>

							<div className="row">
								<div className="col-md-12 card-icen container">
									<div className="card-body">
										<h5 id="ai"><b>AI Follow Vector Path</b></h5>
									</div>

									<p>To move the cargo spaceship I created a simple "AI" that contains an array of a
										custom struct
										FSpaceShipPath</p>

									<CodeBlock code={spawnerCode} />

								</div>
							</div>

							<div className="row">
								<div className="col-md-12 card-icen container">
									<div className="card-body">
										<h5 id="movement"><b>Player Movement</b></h5>
									</div>

									<p>The player movement uses the default player character from UE with some
										modifications made by me, for
										example: 0G Movement, Move from Gravity Active to 0G, Grabbed Object Mass can
										change the max player
										speed</p>
									<p>In 0G the player can move <b>forward / backward</b>,
										strafe <b>up/down/right/left</b>,
										roll <b>right/left</b>, and finally <b>look around</b>.</p>
									<div className="col-md-9 container">
										<div className="video-wrapper">
											<iframe
											        src="https://www.youtube.com/embed/i2m85bpNAL8"
											        allowFullScreen></iframe>
										</div>
									</div>

								</div>
							</div>

							<div className="row">
								<div className="col-md-12 card-icen container">
									<div className="card-body">
										<h5 id="userinterface"><b>User Interface</b></h5>
									</div>
									<div className="container px-2 text-center">
										<div className="row gy-5">
											<div className="col-6">
												<a href={iceboxImages.mainMenu} target="_blank"><img
													src={iceboxImages.mainMenu} className="d-block w-100"
													alt="icebox mainmenu ui"/></a>
												<div className="p-2">MAIN MENU</div>
											</div>
											<div className="col-6">
												<a href={iceboxImages.help} target="_blank"><img src={iceboxImages.help}
												                                                 className="d-block w-100"
												                                                 alt="icebox help ui"/></a>
												<div className="p-2">HELP</div>
											</div>
											<div className="col-6">
												<a href={iceboxImages.settings} target="_blank"><img
													src={iceboxImages.settings} className="d-block w-100"
													alt="icebox settings ui"/></a>
												<div className="p-2">SETTINGS</div>
											</div>
											<div className="col-6">
												<a href={iceboxImages.pauseMenu} target="_blank"><img
													src={iceboxImages.pauseMenu} className="d-block w-100"
													alt="icebox pausemenu ui"/></a>
												<div className="p-2">PAUSE MENU</div>
											</div>
											<div className="col-6">
												<a href={iceboxImages.missions[0]} target="_blank"><img
													src={iceboxImages.missions[0]}
													className="d-block w-100"
													alt="icebox missions ui"/></a>
												<div className="p-2">MISSIONS</div>
											</div>
											<div className="col-6">
												<div className="embed-responsive embed-responsive-16by9">
													<a href={iceboxImages.gravityGun} target="_blank"><img
														src={iceboxImages.gravityGun} className="d-block w-80 card-img-top"
														alt="icebox missions ui"/></a>
												</div>
												<div className="p-2">GRAVITY GUN HUD</div>
											</div>
										</div>
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

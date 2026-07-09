import {createFileRoute} from '@tanstack/react-router'
import ProjectHeader from "../../components/ProjectHeader.tsx";
import {explorationImages} from "../../assets/images/exploration-images.ts";
import {CodeBlock} from "../../components/CodeBlock.tsx";
import {personalProjects} from "../../data";

export const Route = createFileRoute('/projects/exploration')({
	component: Exploration,
})

function Exploration() {

	return (
		<>
			<ProjectHeader data={personalProjects.find(c => c.name.includes("Exploration"))!}/>
			<div className="album py-5 bg-icen">
				<div className="container text-start">
					<div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 g-1">
						<div className="col">
							<div className="row">
								<div className="col-md-12 card-icen container">
									<div className="card-body">
										<h3>Story</h3>
										<p>This is a tech demo. Developed as a testing ground for experimental mechanics and systems.</p>
										<p className="card-text"><b>Game Systems: </b></p>
										<div className="col-md-9">
											<ul>
												<li>Spaceship Controller</li>
												<li>Spaceship Landing Assist</li>
												<li>Car Controller</li>
												<li>Asteroids Spawner</li>
												<li>Air Traffic Controller</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12 card-icen container">
									<div className="card-body">
										<h5 id="spaceship-controller"><b>Spaceship Controller</b>
										</h5>
										<div className="col-md-9 container">
											<div className="embed-responsive embed-responsive-16by9">
												<iframe className="embed-responsive-item"
												        style={{minHeight: "400px", width: "100%"}}
												        src="https://www.youtube.com/embed/de_SL4JbZ8I"
												        allowFullScreen></iframe>
											</div>
										</div>
										<p>To move the spaceship the player can use the following keys:</p>
										<div className="col-md-12">
											<table>
												<tbody>
												<tr>
													<td className="col-md-1 text-center">[W]</td>
													<td className="col-md-8">Forward thrust</td>
												</tr>
												<tr>
													<td className="col-md-1 text-center">[S]</td>
													<td className="col-md-8">Backward thrust</td>
												</tr>
												<tr>
													<td className="col-md-1 text-center">[A]</td>
													<td className="col-md-8">Strafe left</td>
												</tr>
												<tr>
													<td className="col-md-1 text-center">[D]</td>
													<td className="col-md-8">Strafe right</td>
												</tr>
												<tr>
													<td className="col-md-1 text-center">[SPACE]</td>
													<td className="col-md-8">Strafe up</td>
												</tr>
												<tr>
													<td className="col-md-1 text-center">[LCTRL]</td>
													<td className="col-md-8">Strafe down</td>
												</tr>
												<tr>
													<td className="col-md-1 text-center">[E]</td>
													<td className="col-md-8">Roll to the right</td>
												</tr>
												<tr>
													<td className="col-md-1 text-center">[Q]</td>
													<td className="col-md-8">Roll to the left</td>
												</tr>
												<tr>
													<td className="col-md-1 text-center">[R]</td>
													<td className="col-md-8">Braking Mode (adds drag to the spaceship,
														making the spaceship slow down if doesn't have other forces
														being applied)
													</td>
												</tr>
												<tr>
													<td className="col-md-1 text-center">[N]</td>
													<td className="col-md-8">Request landing pad to the air traffic
														controller / Enables landing assist HUD
													</td>
												</tr>
												<tr>
													<td className="col-md-1 text-center">[ENTER]</td>
													<td className="col-md-8">Submit position, tells the score</td>
												</tr>
												<tr>
													<td className="col-md-1 text-center">[0]</td>
													<td className="col-md-8">Enable/Disable debug UI</td>
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
										<h5 id="landing-assist"><b>Spaceship Landing Assist</b>
										</h5>
										<p>Helps the player land the spaceship by displaying the distance and rotation
											alignment to the landing pad.</p>
										<div className="col-md-9 container">
											<div className="embed-responsive embed-responsive-16by9">
												<iframe className="embed-responsive-item"
												        style={{minHeight: "400px", width: "100%"}}
												        src="https://www.youtube.com/embed/oUmG-OZlvMI"
												        allowFullScreen></iframe>
											</div>
										</div>
										<p><i>[Code] Score calculation:</i></p>
										<CodeBlock code={`// File: ShipParkingAssist.cpp

float ShipParkingAssist::GetLandingScore() const
{
    float finalScore = 0.0f;

    // Time spent in the game
    const float time = Game::getTime();

    const Math::Mat4 landingTransform = m_LandingZone->getNode()->getTransform();
    const Math::Mat4 shipTransform    = m_ShipBody->getTransform();

    // Calculate the alignment values
    const float dotPitch = Math::dot(shipTransform.getAxisX(), landingTransform.getAxisX());
    const float dotRoll = Math::dot(shipTransform.getAxisY(), landingTransform.getAxisY());
    const float dotYaw = Math::dot(shipTransform.getAxisZ(), landingTransform.getAxisZ());

    const float rotationScore = dotYaw + dotPitch + dotRoll;
    finalScore = rotationScore + distance + time;
        
    // Invert the result so the higher number is the best score
    finalScore = (1.0f / finalScore) * m_ScoreMultiplier;
    
    return finalScore;
}`}/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12 card-icen container">
									<div className="card-body">
										<p><b>Asteroids Spawner</b></p>
										<div className="col-md-9 container">
											<img className="card-img-top" alt="exploration image"
											     src={explorationImages.asteroids}/>
										</div>
										<br/>
										<p>A small system to spawn asteroids in random positions with collision
											prevention</p>
										<p><i>[Code] Parameters to customize the spawn:</i></p>
										<CodeBlock code={`// File: AsteroidsSpawner.h

PROP_PARAM( Float, m_RadiusArea          , 250.0f)
PROP_PARAM(   Int, m_MaxRandomTries      , 10)
PROP_PARAM(   Int, m_AsteroidsToGenerate , 80)
PROP_PARAM( Float, m_MinScale            , 1.0f)
PROP_PARAM( Float, m_MaxScale            , 8.0f)
PROP_PARAM(String, m_AsteroidNode        , "nodes/defaultAsteroid.node")
`}/>
										<p>To spawn the asteroids, first I generate random positions within the max
											radius, then generate random scales within the min and max scale values.</p>
										<p>When I have the position and the scale they are stored inside a list.</p>
										<p>In this case, it's done 80 times (number of asteroids to generate), start
											spawning asteroids in the world. Now they are in the world, so it means time
											to clear the list data (positions and scales).</p>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12 card-icen container">
									<div className="card-body">
										<p><b>Mini Air Traffic Controller</b></p>
										<div className="col-md-5 container">
											<img className="card-img-top" alt="exploration atc image"
											     src={explorationImages.atc}/>
										</div>
										<br/>
										<p>The Air Traffic Controller has a list of landing zones. Every time a
											spaceship wants to land, a landing zone request is detected.</p>
										<p>After that the ATC finds an available landing zone with the correct ship size
											and assigns that landing zone to the spaceship.</p>
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

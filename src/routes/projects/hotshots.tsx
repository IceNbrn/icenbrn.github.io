import {createFileRoute} from '@tanstack/react-router'
import ProjectHeader from "../../components/ProjectHeader.tsx";
import {personalProjects} from "../../data";
import {hotshotsImages} from "../../assets/images/hotshots-images.ts";
import {CodeBlock} from "../../components/CodeBlock.tsx";

export const Route = createFileRoute('/projects/hotshots')({
	component: Hotshots,
})

function Hotshots() {

	const codeAddCarToGarage = `public bool AddCarToGarage(GameObject vehicleObject)
{
  VehicleInfo vehicle = vehicleObject.GetComponent<​VehicleInfo>();
  // Gets an available garage. Checks if it's occupied and the vehicle size.
  Garage garage = _garages.Find(x => !x.IsOccupied && x.VehicleSize == vehicle.SizeType);

  if (garage != null)
  {
	  GameObject newObject = Instantiate(vehicleObject, garage.GetPosition(), garage.GetRotation());
	  garage.AddVehicle(newObject.GetComponent<​VehicleInfo>());
	  VehicleDriverSeats += 1;
	  VehicleSeats += vehicle.Slots; 
	  // Success, we got a garage available
	  return true;
  }
  // Couldn't find an available garage, so return false
  return false;
}`;

	const codeFillAndEmptyTank = `
// File: WaterPump.cs

// Doesn't let the pump work, because it needs 2 water tanks to work.
if (WaterTank1 == null || WaterTank2 == null) 
  return false;

// Gets the amount of water that needs to be transferred 
float waterToEmpty = WaterTank1.WaterLoaded;

// Make sure that the water tank target has enough capacity
if (waterToEmpty >= WaterTank2.FreeCapacity())
{
  // Specific amount that can be filled to the water tank target
  waterToEmpty = WaterTank2.FreeCapacity();
}

WaterTank2.AddWater(waterToEmpty);
WaterTank1.RemoveWater(waterToEmpty);

// -----------------------------------------------------------------------
// File: WaterTank.cs

public void AddWater(float value) => _waterLoaded += value * Time.deltaTime;`;

	return (
		<>
			<ProjectHeader data={personalProjects.find(c => c.name.includes("Hotshots"))!}/>
			<div className="album py-5 bg-icen">
				<div className="container text-start">
					<div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 g-1">
						<div className="col">
							<div className="row">
								<div className="col-md-12">
									<div className="md-6 text-center">
										<div className="video-wrapper">
											<iframe
													src="https://www.youtube.com/embed/oapsEFjP5F8"
													allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
													></iframe>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12 card-icen container">
									<div className="card-body">
										<h3>Story</h3>
										<p>Hotshots is a game where the player is the commander of a firehouse. The
											player can buy new vehicles or recruit firefighters to aid in the mission.
											The city is Open-World, to give the player more freedom.</p>
										<p>This game was made by me and a group of friends.
											To make this game we were inspired by a friend that is a firefighter, so we
											made HotShots.
											The player is the commander of a firehouse. The main features are:</p>

										<div className="col-md-3">
											<ul>
												<li>Firefighting</li>
												<li>Managing</li>
												<li>Buying</li>
											</ul>
										</div>

										<p>The game has 3 vehicles.</p>
									</div>
									<div className="col-md-9 container">
										<img className="card-img-top" data-src="" alt="hotshops shop image"
											 src={hotshotsImages.shop} data-holder-rendered="true"/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12 card-icen container">
									<div className="card-body">
										<p>Each vehicle has a price and depending on its function it can be more
											expensive.</p>
										<p>The main objective of the game is to put out fires. When you complete a
											mission, you will receive an reward.</p>
									</div>
									<div className="col-md-9 container">
										<div className="video-wrapper">
											<video controls loop>
												<source src="https://i.imgur.com/2NGb7vs.mp4" type="video/mp4"/>
													Your browser does not support playing this Video
											</video>
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12 card-icen container">
									<div className="card-body">
										<h3>Features</h3>
										<p>The <b>Shopping / Garage System</b>, is the system to buy a new vehicles and
											spawn them in the correct garage.
												Every garage has an enum, the enum is the size of that garage and
												corresponds to the vehicle's size too. The size goes from small to
												medium and large.
										</p>
										<p>When the player buys a new vehicle, the function <b>AddCarToGarage()</b> is
											called. It tries to find an available garage.</p>
									</div>
									<p><i>[Code] Add a car to a garage:</i></p>
									<CodeBlock code={codeAddCarToGarage} />
								</div>
							</div>
							<div className="row">
								<div className="col-md-12 card-icen container">
									<div className="card-body">
										<p>
											Another feature that I made was the <b>water system</b>. It gives you the
											ability to fill the vehicle's water tank or even transfer to another
											vehicle.
											To use it there's a hose. The player can attach it to vehicle and a water
											source, that can be a hydrant or another vehicle.
										</p>
								</div>
								<div className="col-md-9 container">
									<div className="video-wrapper">
										<video controls loop>
											<source src="https://i.imgur.com/DqbIe2B.mp4" type="video/mp4"/>
												Your browser does not support playing this Video
										</video>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 card-icen container">
								<div className="card-body">
									<p>Every single water tank has a pump, so technically, the water tank gives an
										"order" to the water pump.</p>
								</div>
								<div className="col-md-9 container">
									<img className="card-img-top" data-src="" alt="hotshots watertank image"
										 src={hotshotsImages.waterTank} data-holder-rendered="true"/>
								</div>
								<div className="card-body">
									<p>With this setup, the truck VUCI will start filling up with water. The pump on the
										truck "VALE" is working and the mode selected is empty, so it will empty the
										water to the other water tank (VUCI Water Tank)</p>
								</div>
								<p><i>[Code] Fill / Empty water tank:</i></p>
								<CodeBlock code={codeFillAndEmptyTank} />
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</>
)
}

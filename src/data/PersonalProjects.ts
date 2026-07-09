import type {ProjectDetails} from "../types/Project.ts";

import tmwWebsite from '../assets/images/tmwWebsite.jpg';

import iceboxBanner from '../assets/images/icebox_1.jpg';
import iceboxBannerGif from '../assets/images/icebox_game.gif';

import hotshotsBanner from '../assets/images/wallpaper_hotshots_web.jpg';
import hotshotsBannerGif from '../assets/images/hotshots_truck.gif';

import ispaceBanner from '../assets/images/ispace_logo.jpg';
import ispaceBannerGif from '../assets/images/ispace_roundend.gif';

import explorationBanner from '../assets/images/exploration1.jpg';
import explorationBannerGif from '../assets/images/exploration.gif';

import knowTheWayBanner from '../assets/images/knowtheway.jpg';
import knowTheWayBannerGif from '../assets/images/ktw_pickup.gif';

import modsBanner from '../assets/images/mods.jpg';
import othersBanner from '../assets/images/others.jpg';

export const personalProjects: ProjectDetails[] = [
	{
		name: "TMW Website",
		duration: 4,
		description: "WEBSITE DESCRIPTION",
		teamType: "Solo",
		technologies: [
			{"TypeScript": ""},
			{"C#": ""},
			{"Entity Framework Core": ""},
			{"React": ""},
			{"NextJS": ""},
			{"Tailwindcss": ""},
			{"BetterAuth": ""},
		],
		website: {
			"name": "Website",
			"url": "https://link",
		},
		startDate: new Date("2022-07-01"),
		endDate: new Date("2023-04-01"),
		features: [
			"Features list"
		],
		sourceCode: "https://git",
		bannerImages : [
			tmwWebsite,
			tmwWebsite
		],
		type: "WebDev",
	},
	{
		name: "Icebox",
		duration: 9,
		description: "Icebox is a demo project that helped me with learning more about C++. At first, this project used the Flax Engine, but after some time I decided to switch to Unreal Engine 5.\n" +
			"\n" +
			"Right now the player's objective is to accept a mission and store the boxes in the space station receiver as quickly as possible after doing that they receive a score.",
		teamType: "Solo",
		technologies: [
			{"Unreal Engine 5": "https://www.unrealengine.com/"},
			{"C++": ""},
			{"UE Blueprints": ""},
		],
		website: {
			"name": "Itch.io",
			"url": "https://icen.itch.io/icebox",
		},
		startDate: new Date("2022-07-01"),
		endDate: new Date("2023-04-01"),
		features: [
			"Dynamic Box Spawner", "Gravity Gun", "Cargo Boxes with different behaviors", "Mini Mission System (Different Difficulties)",
			"AI Follow Vector Path", "0G Movement", "User Interface"
		],
		sourceCode: "https://gitlab.com/IceNdev/icebox",
		bannerImages : [
			iceboxBanner,
			iceboxBannerGif
		],
		type: "GameDev"
	},
	{
		name: "Hotshots",
		duration: 3,
		description: "Hotshots is a game where the player is the commander of a firehouse. The player can buy new vehicles or recruit firefighters to aid in the mission.\n" +
			"\n" +
			"The city is Open-World, to give the player more freedom.",
		teamType: "Team",
		technologies: [
			{"Unity": "https://unity.com/"},
			{"C#": ""},
			{"Git": ""},
		],
		website: {
			"name": "Itch.io",
			"url": "https://icen.itch.io/hotshots",
		},
		startDate: new Date("2020-10-01"),
		endDate: new Date("2021-01-01"),
		features: [
			"Vehicle Controller", "Player Controller", "Shop", "Water System", "Firehouse Manager", "Interactions", "Day Night Cycle"
		],
		sourceCode: "https://gitlab.com/IceNdev/hotshots/",
		bannerImages : [
			hotshotsBanner,
			hotshotsBannerGif
		],
		type: "GameDev"
	},
	{
		name: "ISpace",
		duration: 5,
		description: "ISpace is a multiplayer first person sandbox game. It has a Deathmatch mode and I plan to make other game modes.",
		teamType: "Solo",
		technologies: [
			{"Unity": "https://unity.com/"},
			{"Mirror Networking": "https://mirror-networking.com/"},
			{"C#": ""},
			{"Git": ""},
		],
		website: {
			"name": "Itch.io",
			"url": "https://icen.itch.io/ispace",
		},
		startDate: new Date("2021-02-01"),
		endDate: new Date("2021-07-01"),
		features: [
			"Multiplayer", "Player Controller", "Weapon System", "Crosshair Generator", "Kill Feed", "Scoreboard"
		],
		sourceCode: "https://github.com/IceNbrn/ISpace",
		bannerImages : [
			ispaceBanner,
			ispaceBannerGif
		],
		type: "GameDev"
	},
	{
		name: "Exploration",
		duration: 6,
		description: "This is a tech demo. Developed as a testing ground for experimental mechanics and systems.",
		teamType: "Solo",
		technologies: [
			{"Unigine": "https://unigine.com/"},
			{"C++": ""},
			{"Git": ""},
		],
		website: {
			"name": "Itch.io",
			"url": "https://icen.itch.io/exploration",
		},
		startDate: new Date("2021-04-01"),
		endDate: new Date("2021-11-01"),
		features: [
			"Spaceship Controller", "Spaceship Landing Assist", "Mini 'Air Traffic Controller'", "Car Controller", "Asteroids Spawner"
		],
		sourceCode: "https://bitbucket.org/IceNdev/explorationgame/src/master/",
		bannerImages : [
			explorationBanner,
			explorationBannerGif
		],
		type: "GameDev"
	},
	{
		name: "Know The Way",
		duration: 3,
		description: "A co-op game, where 2 players need to find the exit.\n" +
			"\n" +
			"Throughout the game, players need to complete the puzzles to unlock the exit.",
		teamType: "Team",
		technologies: [
			{"Unity": "https://unity.com/"},
			{"Photon PUN": "https://www.photonengine.com/pun"},
			{"C#": ""},
			{"Git": ""},
		],
		website: {
			"name": "Itch.io",
			"url": "https://icen.itch.io/knowtheway",
		},
		startDate: new Date("2021-04-01"),
		endDate: new Date("2021-11-01"),
		features: [
			"Multiplayer", "Player Controller", "Interactions", "Puzzles"
		],
		sourceCode: "https://gitlab.com/IceNdev/knowthewayphoton",
		bannerImages : [
			knowTheWayBanner,
			knowTheWayBannerGif
		],
		type: "GameDev"
	},
	{
		name: "Others",
		duration: 0,
		description: "Mods or others side projects.",
		technologies: [
			{"OpenGL": "https://www.opengl.org/"},
			{"ImGui": "https://github.com/ocornut/imgui"},
			{"Blender": "https://www.blender.org/"},
			{"C#": ""},
			{"C++": ""},
			{"HTML": ""},
			{"CSS": ""},
			{"PHP": ""},
		],
		othersProjects: [
			"3D Graphics Application",
			"OpenYourGame - Website",
			"Farming Simulator Mods",
			"GameJam"
		],
		bannerImages : [
			modsBanner,
			othersBanner
		],
		type: "Other"
	},
];
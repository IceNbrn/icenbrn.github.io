import type {ProjectDetails} from "../types/Project.ts";

import iceboxBanner from '../assets/images/icebox_1.jpg';
import iceboxBannerGif from '../assets/images/icebox_game.gif';

import hotshotsBanner from '../assets/images/wallpaper_hotshots_web.jpg';
import hotshotsBannerGif from '../assets/images/hotshots_truck.gif';

export const personalProjects: ProjectDetails[] = [
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
		]
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
		startDate: new Date("2022-07-01"),
		endDate: new Date("2023-04-01"),
		features: [
			"Vehicle Controller", "Player Controller", "Shop", "Water System", "Firehouse Manager", "Interactions", "Day Night Cycle"
		],
		sourceCode: "https://gitlab.com/IceNdev/hotshots/",
		bannerImages : [
			hotshotsBanner,
			hotshotsBannerGif
		]
	},
];
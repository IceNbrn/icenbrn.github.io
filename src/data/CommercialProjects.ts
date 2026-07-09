import type {CompanyProject} from "../types/Project.ts";

import f1Manager from "../assets/images/f1manager.jpg";

export const commercialProjects: CompanyProject[] = [
	{
		name: "F1 Manager 24",
		duration: 6,
		description: "I've worked with various disciplines like UI and Game Design and been part of a core gameplay feature: **Create A Team**.",
		teamType: "Company",
		technologies: [
			{"Unreal Engine 5": "https://www.unrealengine.com/"},
			{"C++": ""},
			{"UE Blueprints": ""},
			{"Perforce": ""},
			{"Jira": ""},
			{"Confluence": ""},
			{"Helix Swarm": ""},
			{"SQLite": ""},
		],
		website: {
			"name": "Website",
			"url": "https://www.f1manager.com/",
		},
		startDate: new Date("2023-08-01"),
		endDate: new Date("2024-02-01"),
		position: "Graduate Programmer",
		company: {
			name: "Frontier Developments",
			url: "https://www.frontier.co.uk/"
		},
		bannerImages: [
			f1Manager,
			f1Manager
		],
		type: "GameDev"
	},
];
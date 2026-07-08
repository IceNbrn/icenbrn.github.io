import type {OthersProject} from "../types/Project.ts";

import fs19ModGranary from "../assets/images/fs19_mod1.jpg";
import fs22ModGranary from "../assets/images/fs22_mod1.jpg";
import fs25ConcreteSupport from "../assets/images/fs25ConcreteSupport.jpg";
import p3d from "../assets/images/p3d.jpg";
import oyg from "../assets/images/oyg_main.jpg";

export const otherProjects: OthersProject[] = [
	{
		name: "3D Graphics Application",
		description: "OpenGL + IMGUI ",
		teamType: "Team",
		url: "https://github.com/IceNbrn/P3D_IronMan",
		image: p3d
	},
	{
		name: "OpenYourGame - Website",
		description: "HTML + CSS + PHP",
		teamType: "Solo",
		url: "https://github.com/IceNbrn/-Public-OpenYourGame#openyourgame",
		image: oyg
	},
	{
		name: "Farming Simulator 25 Mod ",
		description: "Concrete Wood Support | 3D Prop ",
		teamType: "Solo",
		url: "https://farming-simulator.com/mod.php?mod_id=306177&title=fs2025",
		image: fs25ConcreteSupport,
		downloads: 190000
	},
	{
		name: "Farming Simulator 22 Mod ",
		description: "Granary Portuguese | 3D Prop ",
		teamType: "Solo",
		url: "https://farming-simulator.com/mod.php?lang=en&country=us&mod_id=257826&title=fs2022",
		image: fs22ModGranary,
		downloads: 7000
	},
	{
		name: "Farming Simulator 19 Mod ",
		description: "Granary Portuguese | 3D Prop ",
		teamType: "Solo",
		url: "https://www.farming-simulator.com/mod.php?lang=en&country=us&mod_id=166844&title=fs2019",
		image: fs19ModGranary,
		downloads: 6100
	},
];
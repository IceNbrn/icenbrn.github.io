export type TeamType = "Solo" | "Team" | "Company";
export type ProjectType = "GameDev" | "WebDev" | "Other";

export interface ProjectDetails {
	name: string,
	duration: number,
	description: string,
	teamType?: TeamType,
	technologies: Record<string, string>[],
	website?: Record<string, string>,
	sourceCode?: string,
	startDate?: Date,
	endDate?: Date,
	features?: string[],
	bannerImages: string[],
	othersProjects?: string[],
	type: ProjectType,
}

export interface CompanyProject extends ProjectDetails {
	position: string,
	company: Record<string, string>,
}

export interface OthersProject {
	name: string,
	description: string,
	teamType?: TeamType,
	downloads?: number,
	url?: string,
	image: string,
}
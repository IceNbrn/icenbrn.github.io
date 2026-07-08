export type ProjectType = "Solo" | "Team" | "Company";

export interface ProjectDetails {
	name: string,
	duration: number,
	description: string,
	teamType: ProjectType,
	technologies: Record<string, string>[],
	website: Record<string, string>,
	sourceCode?: string,
	startDate: Date,
	endDate: Date,
	features?: string[],
	bannerImages: string[],
}

export interface CompanyProject extends ProjectDetails {
	position: string,
	company: Record<string, string>,
}
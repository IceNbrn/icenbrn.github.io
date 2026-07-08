export function toSlugName(name: string): string {
	return name.toLowerCase().replace(/\s+/g, "");
}
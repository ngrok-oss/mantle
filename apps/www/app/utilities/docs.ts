export const docModules = import.meta.glob<{
	default: React.ComponentType;
	frontmatter?: Record<string, unknown>;
}>("../docs/**/*.mdx", { eager: true });

function docPathToUrlPath(filePath: string): string {
	return filePath.replace("../docs/", "").replace(/\.mdx$/, "");
}

export const urlToFileMap = new Map<string, string>();
for (const filePath of Object.keys(docModules)) {
	urlToFileMap.set(docPathToUrlPath(filePath), filePath);
}

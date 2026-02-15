import type { ComponentType } from "react";
import rawMdxDocs from "virtual:raw-mdx-docs";

export const docModules = import.meta.glob<{
	default: ComponentType;
	frontmatter?: Record<string, unknown>;
}>("../docs/**/*.mdx", { eager: true });

function docPathToUrlPath(filePath: string): string {
	return filePath.replace("../docs/", "").replace(/\.mdx$/, "");
}

export const urlToFileMap = new Map<string, string>();
for (const filePath of Object.keys(docModules)) {
	urlToFileMap.set(docPathToUrlPath(filePath), filePath);
}

/**
 * Raw MDX source content, keyed by the same file paths as `docModules`.
 * Bundled at build time via the `rawMdxDocs` Vite plugin so it's available
 * in serverless environments without filesystem access.
 */
export const rawDocContent: Record<string, string> = rawMdxDocs;

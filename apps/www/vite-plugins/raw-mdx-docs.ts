import { readFileSync } from "node:fs";
import path from "node:path";
import { globSync } from "tinyglobby";
import type { Plugin } from "vite";

/**
 * Vite plugin that bundles raw MDX source files as a virtual module.
 * This makes raw markdown content available at runtime without filesystem access,
 * which is necessary for serverless environments like Vercel.
 */
function rawMdxDocs(docsDir: string): Plugin {
	const virtualModuleId = "virtual:raw-mdx-docs";
	const resolvedId = "\0" + virtualModuleId;

	return {
		name: "raw-mdx-docs",
		resolveId(id) {
			if (id === virtualModuleId) {
				return resolvedId;
			}
		},
		load(id) {
			if (id !== resolvedId) {
				return;
			}

			const files = globSync("**/*.mdx", { cwd: docsDir });
			const entries: Record<string, string> = {};

			for (const file of files) {
				const content = readFileSync(path.join(docsDir, file), "utf-8");
				// Use the same key format as docModules ("../docs/...")
				entries[`../docs/${file}`] = content;
			}

			return `export default ${JSON.stringify(entries)};`;
		},
		handleHotUpdate({ file, server, modules }) {
			if (file.startsWith(docsDir) && file.endsWith(".mdx")) {
				const mod = server.moduleGraph.getModuleById(resolvedId);
				if (mod) {
					server.moduleGraph.invalidateModule(mod);
					// Append the virtual module to the default update list rather than
					// replacing it — this ensures the MDX module itself still goes
					// through React Refresh so components hot-update in place.
					return [...modules, mod];
				}
			}
		},
	};
}

export { rawMdxDocs };

import * as fs from "node:fs/promises";
import path from "node:path";

import { relativePath } from "./relative-path.js";

/**
 * Get the list of top-level directories in the workspace
 */
async function getWorkspaces() {
	const filepath = relativePath("..", "pnpm-workspace.yaml");
	const yamlContent = await fs.readFile(filepath, "utf8");

	const lines = yamlContent.split("\n");

	// Find the packages section boundaries
	const packagesIndex = lines.findIndex((line) => line.trim() === "packages:");
	if (packagesIndex === -1) {
		return []; // No packages section found!
	}

	const startIndex = packagesIndex + 1;
	let endIndex = startIndex;

	// Find the end of the packages list (last line starting with "  -")
	for (let i = startIndex; i < lines.length; i++) {
		const line = lines[i];
		const trimmedLine = line?.trim() ?? "";

		if (trimmedLine.startsWith("-")) {
			endIndex = i;
		} else {
			// End of packages list
			break;
		}
	}

	// Extract and parse the package directories
	const packageLines = lines.slice(startIndex, endIndex + 1);
	const workspaceDirectories = packageLines
		.map((line) => line.trim())
		.filter((line) => line.startsWith("-"))
		.map((line) => {
			const match = line.match(/^- "?(.+?)\/\*"?.*$/);
			return match ? match[1] : null;
		})
		.filter(Boolean);

	return workspaceDirectories;
}

/**
 * Get all packages in the workspace
 * @param {string[]} workspaces
 * @returns {Promise<string[]>}
 */
async function getAllWorkspacePackages(workspaces) {
	const rootDir = relativePath("..");

	// Get all the node_modules directories in each workspace
	const packagesByWorkspaceDir = await Promise.all(
		workspaces.map(async (workspace) => {
			const absoluteWorkspace = path.resolve(rootDir, workspace);
			const files = await fs.readdir(absoluteWorkspace, { withFileTypes: true });
			return files
				.filter((dirent) => dirent.isDirectory())
				.map((dirent) => path.join(workspace, dirent.name));
		}),
	);

	// Flatten the array of arrays and remove duplicates, then sort
	const allPackages = packagesByWorkspaceDir.flat();
	return Array.from(new Set(allPackages)).sort();
}

export {
	//,
	getWorkspaces,
	getAllWorkspacePackages,
};

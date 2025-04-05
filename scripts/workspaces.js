import * as fs from "node:fs/promises";
import path from "node:path";
import { relativePath } from "./relative-path.js";

/**
 * Get the list of top-level directories in the workspace
 */
async function getWorkspaces() {
	const filepath = relativePath("..", "pnpm-workspace.yaml");
	const data = await fs.readFile(filepath, "utf8");

	// Extract directory names using regex
	const lines = data.split("\n"); // Split the content into lines
	const directories = lines
		.map((line) => line.trim()) // Remove leading/trailing whitespace
		.filter((line) => line.startsWith("-")) // Only keep lines that start with `-`
		.map((line) => line.replace(/^- "?(.+?)\/\*"?.*$/, "$1"));

	return directories;
}

/**
 * Get all packages in the workspace
 * @param {string[]} workspaces
 * @returns {Promise<string[]>}
 */
async function getAllWorkspacePackages(workspaces) {
	// Get all the node_modules directories in each workspace
	const packagesByWorkspaceDir = await Promise.all(
		workspaces.map(async (workspace) => {
			const files = await fs.readdir(workspace, { withFileTypes: true });
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

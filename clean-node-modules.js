import * as fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "url";

/**
 * Walk all of the workspace directories and `rm -rf` the top-level
 * `node_modules` directories.
 */
async function cleanNodeModules() {
	const workspaces = await getWorkspaces();

	// Get all the node_modules directories in each workspace
	const nodeModulesByWorkspace = await Promise.all(
		workspaces.map(async (workspace) => {
			const files = await fs.readdir(workspace, { withFileTypes: true });
			return files
				.filter((dirent) => dirent.isDirectory())
				.map((dirent) => path.join(workspace, dirent.name, "node_modules"));
		}),
	);

	// Flatten the array of arrays of node_modules directories
	const allNodeModulePaths = nodeModulesByWorkspace.flat();

	// Remove each node_modules directory
	await Promise.all(
		allNodeModulePaths.map(async (nodeModulePath) => {
			try {
				await fs.rm(nodeModulePath, { recursive: true, force: true });
				console.log(`Removed ${nodeModulePath}`);
			} catch (error) {
				console.error(`Error removing ${nodeModulePath}:`, error);
			}
		}),
	);
}

await void cleanNodeModules();

/**
 * Get the list of top-level directories in the workspace
 */
async function getWorkspaces() {
	const filepath = relativePath("pnpm-workspace.yaml");
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
 * @param  {...string} parts
 */
function relativePath(...parts) {
	const __dirname = fileURLToPath(new URL(".", import.meta.url));
	return path.resolve(__dirname, ...parts);
}

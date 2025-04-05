import * as fs from "node:fs/promises";
import path from "node:path";
import { relativePath } from "./relative-path.js";
import { getAllWorkspacePackages, getWorkspaces } from "./workspaces.js";

/**
 * Walk all of the workspace directories and `rm -rf` the top-level
 * `node_modules` directories.
 */
async function cleanNodeModules() {
	const workspaces = await getWorkspaces();

	const allPackages = await getAllWorkspacePackages(workspaces);
	const allPackageNodeModulePaths = allPackages.map((packagePath) =>
		path.join(packagePath, "node_modules"),
	);

	const allNodeModulePaths = ["node_modules"].concat(allPackageNodeModulePaths);

	// Remove each node_modules directory
	await Promise.all(
		allNodeModulePaths.map(async (nodeModulePath) => {
			try {
				await fs.rm(relativePath("..", nodeModulePath), {
					recursive: true,
					force: true,
				});
				console.log(`Removed ${nodeModulePath}`);
			} catch (error) {
				console.error(`Error removing ${nodeModulePath}:`, error);
			}
		}),
	);
}

await void cleanNodeModules();

import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Get the absolute path relative to the current file in /scripts
 *
 * @param  {...string} parts
 */
function relativePath(...parts) {
	const __dirname = fileURLToPath(new URL(".", import.meta.url));
	return path.resolve(__dirname, ...parts);
}

export {
	//,
	relativePath,
};

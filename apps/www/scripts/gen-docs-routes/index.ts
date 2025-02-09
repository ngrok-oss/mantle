import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Command } from "@commander-js/extra-typings";
import { generateTypeScriptTemplate, processRoutes } from "./script";

async function main() {
	const program = new Command()
		.option("--dryRun", "Preview changes to standard out for debugging.")
		.parse(process.argv);

	const options = program.opts();

	console.log("Generating routes… 👷");

	const __dirname = path.dirname(fileURLToPath(import.meta.url));
	const remixAppPath = path.resolve(__dirname, "..", "..", "app");
	const inputPath = path.resolve(remixAppPath, "routes");
	const destination = path.resolve(remixAppPath, "types", "routes.ts");

	const [routePaths, routePatterns] = await processRoutes(inputPath);
	const output = generateTypeScriptTemplate(routePaths, routePatterns);

	if (options.dryRun) {
		console.log("Dry run. Showing output to standard out…");
		console.log(`Showing "${destination}" content:`);
		console.log(output);
		return;
	}

	console.log("Writing files…");
	console.log(`Writing ${destination}…`);
	await fs.writeFile(destination, output, "utf-8");
	console.log("Done generating routes! 💃");
}

main();

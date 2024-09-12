import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Command } from "@commander-js/extra-typings";
import prettier from "prettier";
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
	const tsTemplate = generateTypeScriptTemplate(routePaths, routePatterns);
	const output = await fmt(tsTemplate);

	if (options.dryRun) {
		console.log(`Dry run. Showing output to standard out…`);
		console.log(`Showing "${destination}" content:`);
		console.log(output);
		return;
	} else {
		console.log(`Writing files…`);
		console.log(`Writing ${destination}…`);
		await fs.writeFile(destination, output, "utf-8");
	}

	console.log(`Done generating routes! 💃`);
}

main();

async function fmt(data: string) {
	const __dirname = path.dirname(fileURLToPath(import.meta.url));
	const configFilePath = path.resolve(__dirname, "..", "..", ".prettierrc.json");
	const options = await prettier.resolveConfig(configFilePath);
	return prettier.format(data, { ...options, parser: "typescript" });
}

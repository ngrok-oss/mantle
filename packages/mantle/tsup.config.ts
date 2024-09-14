import fs from "fs";
import { defineConfig } from "tsup";
import type { Options } from "tsup";

/**
 * A set of package names that should not be published to npm
 */
const doNotPublish = new Set(["portal"]);

/**
 * A set of package names that shouldn't be released yet
 */
const unreleasedPackages = new Set(["data-table"]);

const componentPath = (name: string) => `./src/components/${name}/index.ts` as const;
const utilPath = (name: string) => `./src/utils/${name}/index.ts` as const;

const allComponents = fs
	.readdirSync("src/components", { withFileTypes: true })
	.filter((dirent) => dirent.isDirectory())
	.map((dirent) => dirent.name);

const allUtils = fs
	.readdirSync("src/utils", { withFileTypes: true })
	.filter((dirent) => dirent.isDirectory())
	.map((dirent) => dirent.name);

const componentPackages = allComponents
	// filter only the publishable component packages then map them to the tsup config entries object
	.filter((packageName) => !doNotPublish.has(packageName) && !unreleasedPackages.has(packageName))
	.reduce<Record<string, string>>((acc, name) => {
		acc[name] = componentPath(name);
		return acc;
	}, {});

const utilPackages = allUtils.reduce<Record<string, string>>((acc, name) => {
	acc[name] = utilPath(name);
	return acc;
}, {});

const commonOptions = {
	dts: true,
	external: ["@phosphor-icons/react", "react", "react-dom", "tailwindcss", "zod"],
	minify: true,
	sourcemap: true,
	splitting: true,
	target: "es2022",
	tsconfig: "tsconfig.build.json",
} satisfies Options;

export default defineConfig((options) => [
	{
		...commonOptions,
		format: "esm",
		entry: componentPackages,
		...options,
	},
	{
		...commonOptions,
		format: "esm",
		entry: utilPackages,
		...options,
	},
	{
		...commonOptions,
		format: ["esm", "cjs"], // we need to dual publish the tailwind preset for now because postcss expects cjs
		entry: {
			"tailwind-preset": "./src/tailwind-preset/index.ts",
		},
		...options,
	},
]);

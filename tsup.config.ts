import fs from "fs";
import { defineConfig } from "tsup";
import type { Options } from "tsup";

/**
 * A set of package names that should not be published to npm
 */
const doNotPublish = new Set(["back-to-top-button", "portal"]);

/**
 * Check if a package name is the tailwind preset
 */
const isTailwindPreset = (name: string) => /tailwind-preset/i.test(name);

const packagePath = (name: string) => `./packages/${name}/index.ts` as const;

// read all of the directories in the packages directory
const allPackageDirectories = fs
	.readdirSync("packages", { withFileTypes: true })
	.filter((dirent) => dirent.isDirectory())
	.map((dirent) => dirent.name);

// filter only the publishable component packages then map them to the tsup config entries object
const componentPackages = allPackageDirectories
	.filter((name) => !doNotPublish.has(name) && !isTailwindPreset(name))
	.reduce<Record<string, string>>((acc, name) => {
		acc[name] = packagePath(name);
		return acc;
	}, {});

const commonOptions = {
	dts: true,
	external: ["@phosphor-icons/react", "react", "react-dom", "tailwindcss", "zod"],
	minify: true,
	sourcemap: true,
	splitting: true,
	target: "es2022",
	tsconfig: "tsconfig.publish.json",
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
		format: ["esm", "cjs"], // we need to dual publish the tailwind preset for now because postcss expects cjs
		entry: {
			"tailwind-preset": packagePath("tailwind-preset"),
		},
		...options,
	},
]);

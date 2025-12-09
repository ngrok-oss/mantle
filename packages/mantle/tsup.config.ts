import fs from "node:fs";
import { defineConfig } from "tsup";

const MANTLE_CSS_SRC = new URL("./src/mantle.css", import.meta.url);

/**
 * A set of package names that should not be published to npm
 */
const doNotPublish = new Set<string>(["portal"]);

/**
 * A set of package names that shouldn't be released yet
 */
const unreleasedPackages = new Set<string>([]);

const componentPath = (name: string) =>
	`./src/components/${name}/index.ts` as const;
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
	.filter(
		(packageName) =>
			!doNotPublish.has(packageName) && !unreleasedPackages.has(packageName),
	)
	.reduce<Record<string, string>>((acc, name) => {
		acc[name] = componentPath(name);
		return acc;
	}, {});

const utilPackages = allUtils.reduce<Record<string, string>>((acc, name) => {
	acc[name] = utilPath(name);
	return acc;
}, {});

export default defineConfig((options) => [
	{
		dts: true,
		// if we set this to true, it will "race" between the two builds and wipe away type declarations
		// for one of the builds. rm -rf dist is run as a "prebuild" script to avoid this issue
		clean: false,
		external: ["@phosphor-icons/react", "react", "react-dom", "tailwindcss"],
		minify: true,
		sourcemap: true,
		target: "es2022",
		tsconfig: "tsconfig.build.json",
		injectStyle: false,
		format: "esm",
		entry: {
			...componentPackages,
			...utilPackages,
			hooks: "./src/hooks/index.ts",
			types: "./src/types/index.ts",
		},
		onSuccess: async () => {
			try {
				await fs.promises.copyFile(MANTLE_CSS_SRC, "./dist/mantle.css");
				await fs.promises.copyFile(
					"./tailwind.config.js",
					"./dist/tailwind.config.js",
				);
			} catch (error) {
				console.error("Failed to copy files to dist:", error);
				throw error;
			}
		},
		...options,
	},
]);

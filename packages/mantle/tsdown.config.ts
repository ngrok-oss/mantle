import fs from "node:fs";
import { defineConfig } from "tsdown";

const MANTLE_CSS_SRC = new URL("./src/mantle.css", import.meta.url);
const MANTLE_DARK_CSS_SRC = new URL("./src/mantle-dark.css", import.meta.url);
const MANTLE_LIGHT_HC_CSS_SRC = new URL("./src/mantle-light-high-contrast.css", import.meta.url);
const MANTLE_DARK_HC_CSS_SRC = new URL("./src/mantle-dark-high-contrast.css", import.meta.url);
const SOURCE_ALL_CSS_SRC = new URL("./src/source-all.css", import.meta.url);

/**
 * A set of package names that should not be published to npm
 */
const doNotPublish = new Set<string>(["portal"]);

/**
 * A set of package names that shouldn't be released yet
 */
const unreleasedPackages = new Set<string>([]);

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
	// filter only the publishable component packages then map them to the build entry object
	.filter((packageName) => !doNotPublish.has(packageName) && !unreleasedPackages.has(packageName))
	.reduce<Record<string, string>>((acc, name) => {
		acc[name] = componentPath(name);
		return acc;
	}, {});

/**
 * Util directories that are consolidated into the `./utils` export and
 * should not be built as individual entry points.
 */
const consolidatedIntoUtils = new Set<string>(["compose-refs", "sorting"]);

const utilPackages = allUtils
	.filter((name) => !consolidatedIntoUtils.has(name))
	.reduce<Record<string, string>>((acc, name) => {
		acc[name] = utilPath(name);
		return acc;
	}, {});

export default defineConfig((options) => [
	{
		dts: true,
		// if we set this to true, it will "race" between the two builds and wipe away type declarations
		// for one of the builds. rm -rf dist is run as a "prebuild" script to avoid this issue
		clean: false,
		minify: true,
		sourcemap: true,
		target: "ES2023",
		tsconfig: "tsconfig.build.json",
		fixedExtension: false,
		format: "esm",
		entry: {
			...componentPackages,
			...utilPackages,
			"code-block_highlight-utils": "./src/components/code-block/highlight-utils.ts",
			hooks: "./src/hooks/index.ts",
			types: "./src/types/index.ts",
			utils: "./src/utils/index.ts",
		},
		onSuccess: async () => {
			try {
				await Promise.all([
					fs.promises.copyFile(MANTLE_CSS_SRC, "./dist/mantle.css"),
					fs.promises.copyFile(MANTLE_DARK_CSS_SRC, "./dist/mantle-dark.css"),
					fs.promises.copyFile(MANTLE_LIGHT_HC_CSS_SRC, "./dist/mantle-light-high-contrast.css"),
					fs.promises.copyFile(MANTLE_DARK_HC_CSS_SRC, "./dist/mantle-dark-high-contrast.css"),
					fs.promises.copyFile(SOURCE_ALL_CSS_SRC, "./dist/source-all.css"),
				]);
			} catch (error) {
				console.error("Failed to copy CSS files to dist:", error);
				throw error;
			}
		},
		...options,
	},
]);

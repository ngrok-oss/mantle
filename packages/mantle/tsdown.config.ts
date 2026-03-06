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
		external: [
			"magic-string",
			"oxc-parser",
			"shiki",
			"vite",
		],
		minify: true,
		sourcemap: true,
		target: "ES2023",
		tsconfig: "tsconfig.build.json",
		fixedExtension: false,
		format: "esm",
		// Bundle prismjs into the dist output rather than leaving it as an external import.
		// prismjs component files are plain IIFEs with no module.exports/require — bundlers
		// (Rollup/Vite 8) don't see the implicit dependency on the prismjs main module and
		// can evaluate component files before window.Prism is set, causing
		// "ReferenceError: Prism is not defined". Bundling prismjs here gives rolldown
		// full visibility into the dependency graph and lets it order evaluation correctly,
		// so consuming apps never need to configure anything special for prismjs.
		alwaysBundle: ["prismjs"],
		onlyBundle: ["prismjs"],
		plugins: [
			{
				name: "prismjs-explicit-dep",
				transform(code, id) {
					// prismjs component files are plain IIFEs that reference Prism as a
					// global — rolldown doesn't see the implicit dependency on prismjs main.
					// Prepending `import "prismjs"` creates the explicit edge so rolldown
					// evaluates prismjs (which sets window.Prism) before any component.
					if (/\/prismjs\/components\/prism-/.test(id)) {
						return { code: `import "prismjs";\n${code}` };
					}
				},
			},
		],
		entry: {
			...componentPackages,
			...utilPackages,
			hooks: "./src/hooks/index.ts",
			"server-highlighter": "./src/server-highlighter/index.ts",
			types: "./src/types/index.ts",
			utils: "./src/utils/index.ts",
			"vite-plugin": "./src/vite-plugins/index.ts",
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

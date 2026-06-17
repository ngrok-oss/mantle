import fs from "node:fs";
import { defineConfig } from "tsdown";
import packageJson from "./package.json" with { type: "json" };
import type { ComponentPropsArtifact } from "./src/types/component-prop-schema.js";

const MANTLE_CSS_SRC = new URL("./src/mantle.css", import.meta.url);
const MANTLE_DARK_CSS_SRC = new URL("./src/mantle-dark.css", import.meta.url);
const MANTLE_LIGHT_HC_CSS_SRC = new URL("./src/mantle-light-high-contrast.css", import.meta.url);
const MANTLE_DARK_HC_CSS_SRC = new URL("./src/mantle-dark-high-contrast.css", import.meta.url);
const SOURCE_ALL_CSS_SRC = new URL("./src/source-all.css", import.meta.url);

const COMPONENT_PROPS_SRC = new URL("./src/__generated__/component-props.json", import.meta.url);

const DOCS_ORIGIN = "https://mantle.ngrok.com";

/**
 * Soft cap (bytes) on the prop metadata embedded inline in `dist/agent.json`.
 * The compact slice is a convenience for no-network agents; the authoritative
 * full data always ships verbatim in `dist/component-props.json` and online at
 * `endpoints.componentProps`. If the slice exceeds this budget we fall back to
 * pointer-only so the offline fallback file stays small.
 */
const EMBEDDED_PROPS_BYTE_BUDGET = 40 * 1024;

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

/**
 * Sorted list of importable `@ngrok/mantle/*` specifiers, derived from
 * `package.json#exports`. Skips CSS bundles, the `./package.json`
 * passthrough, and the `./agent.json`/`./component-props.json`/`./llms.txt`
 * agent artifacts (those are the artifacts we're describing — listing them in
 * their own subpath inventory would be circular).
 */
function importableSubpaths(): string[] {
	const exports = packageJson.exports;
	const skip = new Set(["./package.json", "./agent.json", "./component-props.json", "./llms.txt"]);
	return Object.keys(exports)
		.filter((key) => key.startsWith("./") && !skip.has(key) && !key.endsWith(".css"))
		.map((key) => `@ngrok/mantle/${key.slice(2)}`)
		.toSorted((a, b) => a.localeCompare(b));
}

/**
 * A single prop in the compact slice embedded inline in `dist/agent.json`.
 * Trimmed to just the fields a no-network agent needs to call a component
 * correctly; the full per-prop metadata lives in `dist/component-props.json`.
 */
type CompactProp = {
	name: string;
	type: string;
	required: boolean;
	default?: string;
};

/**
 * A single component in the compact slice embedded inline in `dist/agent.json`.
 * `status`/`jsdoc` are carried through only when the source artifact provides
 * them; today's artifact omits both, so they are absent.
 */
type CompactComponent = {
	name: string;
	importPath: string;
	status?: string;
	jsdoc?: string;
	props: CompactProp[];
};

/**
 * Project the full prop artifact down to the compact slice embedded inline in
 * `dist/agent.json`. Pure and deterministic: the artifact is already
 * name-sorted (components and props), so the slice inherits that ordering and
 * a re-run produces byte-identical output.
 *
 * @example
 * compactComponentsSlice({
 *   version: "0.76.2",
 *   generatedFrom: "packages/mantle/src/components",
 *   components: [{ name: "Button", importPath: "@ngrok/mantle/button", props: [
 *     { name: "appearance", required: false, type: '"filled" | "ghost"', typeKind: "union", default: '"outlined"', source: "own" },
 *   ] }],
 * });
 * // => [{ name: "Button", importPath: "@ngrok/mantle/button", props: [
 * //      { name: "appearance", type: '"filled" | "ghost"', required: false, default: '"outlined"' },
 * //    ] }]
 */
function compactComponentsSlice(artifact: ComponentPropsArtifact): CompactComponent[] {
	return artifact.components.map((component) => {
		const compact: CompactComponent = {
			name: component.name,
			importPath: component.importPath,
			props: component.props.map((prop) => {
				const compactProp: CompactProp = {
					name: prop.name,
					type: prop.type,
					required: prop.required,
				};
				if (prop.default != null) {
					compactProp.default = prop.default;
				}
				return compactProp;
			}),
		};
		return compact;
	});
}

/**
 * Narrow a parsed JSON value to the slice of {@link ComponentPropsArtifact}
 * this config depends on (a `components` array of `{ name, importPath, props[] }`).
 * A malformed artifact means the codegen is broken, so callers fail loudly.
 */
function isComponentPropsArtifact(value: unknown): value is ComponentPropsArtifact {
	if (value == null || typeof value !== "object" || !("components" in value)) {
		return false;
	}
	const { components } = value;
	return Array.isArray(components);
}

/**
 * Read the committed prop artifact emitted by the `codegen` step (run in
 * `prebuild`, before this `onSuccess` hook). The artifact is the single source
 * of truth for structured prop data; a missing or malformed one means the
 * build is broken, so fail loudly rather than silently shipping an empty slice.
 */
async function readComponentPropsArtifact(): Promise<{
	raw: string;
	artifact: ComponentPropsArtifact;
}> {
	let raw: string;
	try {
		raw = await fs.promises.readFile(COMPONENT_PROPS_SRC, "utf8");
	} catch (cause) {
		throw new Error(
			`Missing prop artifact at ${COMPONENT_PROPS_SRC.pathname}. Run \`pnpm run codegen\` (it runs automatically in \`prebuild\`) before building.`,
			{ cause },
		);
	}
	const parsed: unknown = JSON.parse(raw);
	if (!isComponentPropsArtifact(parsed)) {
		throw new Error(
			`Malformed prop artifact at ${COMPONENT_PROPS_SRC.pathname}: expected a { components: [...] } object. Re-run \`pnpm run codegen\`.`,
		);
	}
	return { raw, artifact: parsed };
}

/**
 * Generate the offline agent-discovery artifacts (`dist/agent.json`,
 * `dist/llms.txt`, `dist/component-props.json`) that ship with the published
 * package as a fallback for agents working without network access. The live
 * source of truth for component/hook/utility metadata is the docs site at
 * `DOCS_ORIGIN` — `agent.json` carries pointers, the package's subpath
 * inventory, and a compact prop slice (under a byte budget; pointer-only
 * fallback when exceeded). The full prop data ships verbatim in
 * `dist/component-props.json`.
 */
async function writeAgentArtifacts(): Promise<void> {
	const subpaths = importableSubpaths();
	const endpoints = {
		docs: `${DOCS_ORIGIN}/`,
		forAiAgents: `${DOCS_ORIGIN}/for-ai-agents`,
		llmsTxt: `${DOCS_ORIGIN}/llms.txt`,
		llmsFullTxt: `${DOCS_ORIGIN}/llms-full.txt`,
		components: `${DOCS_ORIGIN}/api/components.json`,
		// Structured prop data ships embedded under each component's `props` in
		// the components manifest; there is no standalone `/api/component-props.json`
		// route, so point offline agents at the surface that actually serves it.
		componentProps: `${DOCS_ORIGIN}/api/components.json`,
		hooks: `${DOCS_ORIGIN}/api/hooks.json`,
		utilities: `${DOCS_ORIGIN}/api/utils.json`,
		tokens: `${DOCS_ORIGIN}/api/tokens.json`,
		package: `${DOCS_ORIGIN}/api/package.json`,
		changelog: `${DOCS_ORIGIN}/api/changelog.json`,
		searchIndex: `${DOCS_ORIGIN}/api/search-index.json`,
		schema: `${DOCS_ORIGIN}/api/schema.json`,
	};

	const { raw: artifactJson, artifact } = await readComponentPropsArtifact();

	const components = compactComponentsSlice(artifact);
	const embeddedBytes = Buffer.byteLength(JSON.stringify(components), "utf8");
	const withinBudget = embeddedBytes <= EMBEDDED_PROPS_BYTE_BUDGET;
	console.info(
		`[agent.json] compact prop slice: ${components.length} components, ${embeddedBytes} bytes ` +
			`(budget ${EMBEDDED_PROPS_BYTE_BUDGET} bytes) — ${withinBudget ? "embedding" : "pointer-only fallback"}.`,
	);

	const agentJson = {
		name: packageJson.name,
		version: packageJson.version,
		origin: DOCS_ORIGIN,
		endpoints,
		subpaths,
		// Embed the compact slice only when it fits the budget; otherwise agents
		// fall back to `endpoints.componentProps` / `dist/component-props.json`.
		...(withinBudget ? { components } : {}),
	};

	const llmsTxt = [
		`# @ngrok/mantle (${packageJson.version})`,
		"",
		`> Offline discovery hint shipped inside the @ngrok/mantle npm package. Authoritative metadata lives at ${endpoints.forAiAgents}.`,
		"",
		`Docs: ${endpoints.docs}`,
		`Agent guide: ${endpoints.forAiAgents}`,
		`Index: ${endpoints.llmsTxt}`,
		`Full text: ${endpoints.llmsFullTxt}`,
		"",
		"## Endpoints",
		"",
		`- Components: ${endpoints.components}`,
		`- Component props (embedded under each component's \`props\`): ${endpoints.componentProps}`,
		`- Hooks: ${endpoints.hooks}`,
		`- Utilities: ${endpoints.utilities}`,
		`- Tokens: ${endpoints.tokens}`,
		`- Package info: ${endpoints.package}`,
		`- Changelog: ${endpoints.changelog}`,
		`- Search index: ${endpoints.searchIndex}`,
		`- Schemas: ${endpoints.schema}`,
		"",
		"## Importable subpaths",
		"",
		...subpaths.map((subpath) => `- \`${subpath}\``),
		"",
	].join("\n");

	await Promise.all([
		fs.promises.writeFile("./dist/agent.json", `${JSON.stringify(agentJson, null, "\t")}\n`),
		fs.promises.writeFile("./dist/llms.txt", llmsTxt),
		// Copy the full artifact verbatim so the offline fallback carries the
		// complete prop data, not just the compact slice.
		fs.promises.writeFile("./dist/component-props.json", artifactJson),
	]);
}

export default defineConfig((options) => [
	{
		dts: true,
		// if we set this to true, it will "race" between the two builds and wipe away type declarations
		// for one of the builds. rm -rf dist is run as a "prebuild" script to avoid this issue
		clean: false,
		minify: true,
		sourcemap: true,
		target: "ES2025",
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
					writeAgentArtifacts(),
				]);
			} catch (error) {
				console.error("Failed to populate dist:", error);
				throw error;
			}
		},
		...options,
	},
]);

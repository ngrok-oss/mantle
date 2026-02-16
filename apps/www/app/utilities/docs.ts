import type { ComponentType } from "react";
import rawMdxDocs from "virtual:raw-mdx-docs";

type MdxComponent = ComponentType & {
	frontmatter?: Record<string, unknown>;
};

type MdxModule = {
	default: MdxComponent;
};

/**
 * Eager glob imports for production builds. All MDX modules are resolved at
 * build time so they can be rendered synchronously during prerendering.
 */
const eagerDocModules: Record<string, MdxModule> = import.meta.env.PROD
	? import.meta.glob<MdxModule>("../docs/**/*.mdx", { eager: true })
	: {};

/**
 * Lazy glob importers for dev builds. Using lazy imports (no `eager`) allows
 * Vite HMR to hot-update individual MDX modules without a full page reload.
 */
const lazyDocImporters: Record<string, () => Promise<MdxModule>> = import.meta.env.DEV
	? import.meta.glob<MdxModule>("../docs/**/*.mdx")
	: {};

const allDocPaths = Object.keys(import.meta.env.PROD ? eagerDocModules : lazyDocImporters);

function docPathToUrlPath(filePath: string): string {
	return filePath.replace("../docs/", "").replace(/\.mdx$/, "");
}

export const urlToFileMap = new Map<string, string>();
for (const filePath of allDocPaths) {
	urlToFileMap.set(docPathToUrlPath(filePath), filePath);
}

/**
 * Load and validate an MDX module by file path (lazy, for dev).
 */
async function getDocMdxModule(filePath: string): Promise<MdxModule | null> {
	const importer = lazyDocImporters[filePath];
	if (!importer) {
		return null;
	}
	const mod = await importer();
	return mod;
}

// Cache promises by filePath so use() sees the same promise across renders.
// In dev, we clear the cache each time this module re-executes (which Vite
// triggers when an MDX file changes) so the next render re-imports the
// updated module.
const componentPromiseCache = new Map<string, Promise<ComponentType>>();

/**
 * Resolve the React component for a doc MDX module asynchronously.
 * Used in dev with `use()` + Suspense for granular HMR.
 *
 * Caches promises so `use()` sees the same promise reference across renders,
 * preventing Suspense from re-suspending.
 *
 * @param filePath - A key from the MDX glob (e.g. "../docs/button.mdx").
 * @returns A promise that resolves to the MDX component.
 */
export function resolveDocComponent(filePath: string): Promise<ComponentType> {
	if (!componentPromiseCache.has(filePath)) {
		const promise = (async () => {
			const mod = await getDocMdxModule(filePath);
			if (!mod) {
				throw Response.json({ message: "Not Found" }, { status: 404 });
			}
			return mod.default;
		})();
		componentPromiseCache.set(filePath, promise);
	}

	const componentPromise = componentPromiseCache.get(filePath);
	if (!componentPromise) {
		throw Response.json({ message: "Not Found" }, { status: 404 });
	}
	return componentPromise;
}

/**
 * Get the React component for a doc MDX module synchronously.
 * Used in production builds where all modules are eagerly imported
 * at build time for prerendering.
 *
 * @param filePath - A key from the MDX glob (e.g. "../docs/button.mdx").
 * @returns The MDX component, or null if not found.
 */
export function getDocComponent(filePath: string): ComponentType | null {
	const mod = eagerDocModules[filePath];
	return mod?.default ?? null;
}

/**
 * Load the frontmatter for a given doc file path.
 *
 * Frontmatter is attached to the default export component as a property
 * (via `remark-mdx-frontmatter` with `export: "namespace"`).
 */
export async function loadFrontmatter(
	filePath: string,
): Promise<Record<string, unknown> | undefined> {
	if (import.meta.env.PROD) {
		const mod = eagerDocModules[filePath];
		return mod?.default.frontmatter;
	}
	const mod = await getDocMdxModule(filePath);
	return mod?.default.frontmatter;
}

/**
 * Raw MDX source content, keyed by the same file paths as the doc importers.
 * Bundled at build time via the `rawMdxDocs` Vite plugin so it's available
 * in serverless environments without filesystem access.
 */
export const rawDocContent: Record<string, string> = rawMdxDocs;

import mantlePackageJson from "@ngrok/mantle/package.json" with { type: "json" };
import {
	componentImportPathOverrides,
	previewComponentsRouteLookup,
	prodReadyComponentRouteLookup,
} from "~/components/navigation-data";
import { canonicalHref, canonicalOrigin } from "~/utilities/canonical-origin";
import { loadFrontmatter, urlToFileMap } from "~/utilities/docs";
import { extractFirstSentenceForName } from "~/utilities/hooks-manifest.server";
import { componentsSrcDir, sourceBasePath } from "~/utilities/mantle-source.server";

/**
 * One entry in the public component manifest. Designed for ingestion by
 * LLMs, code-generation agents, and external tooling — fields are stable
 * and self-describing.
 */
export type ManifestComponent = {
	/** Display name as used in the docs sidebar (e.g. "Data Table"). */
	name: string;
	/** URL slug under the docs site (e.g. "components/data-table"). */
	slug: string;
	/** Lifecycle status. `preview` components have unstable APIs. */
	status: "stable" | "preview";
	/** ESM import path for the component (e.g. "@ngrok/mantle/data-table"). */
	importPath: string;
	/** Absolute docs URL (HTML rendering). */
	docsUrl: string;
	/** Absolute docs URL serving plain markdown — agent-friendly. */
	markdownUrl: string;
	/** One-line summary pulled from the docs page frontmatter, if available. */
	summary?: string;
	/**
	 * First sentence of the JSDoc block on the component's primary
	 * exported identifier (read from the package source). Surfaces the
	 * in-IDE/in-source guidance — useful when an agent wants the exact
	 * text that hovering the import would show.
	 */
	jsdoc?: string;
};

/** Top-level shape returned by `/api/components.json`. */
export type Manifest = {
	/** Currently published `@ngrok/mantle` version. */
	version: string;
	/** Canonical docs origin. */
	origin: string;
	/** Stable + preview components, sorted by display name. */
	components: ManifestComponent[];
};

/**
 * Map a docs slug like `components/button` or `components/preview/calendar`
 * to the package import path consumers should use, or `null` if the page
 * doesn't correspond to an importable module (e.g. `base/colors`).
 *
 * Consults `componentImportPathOverrides` first so components whose docs
 * URL slug differs from their `@ngrok/mantle/*` import subpath (e.g. Icon
 * Button → `@ngrok/mantle/button`) emit the correct `importPath`.
 */
function importPathForSlug(slug: string): string | null {
	const overrides: Record<string, string> = componentImportPathOverrides;
	const override = overrides[`/${slug}`];
	if (override) {
		return override;
	}
	if (slug.startsWith("components/preview/")) {
		const name = slug.slice("components/preview/".length);
		return `@ngrok/mantle/${name}`;
	}
	if (slug.startsWith("components/")) {
		const name = slug.slice("components/".length);
		return `@ngrok/mantle/${name}`;
	}
	return null;
}

/**
 * Convert a kebab-case docs slug leaf (e.g. `data-table`) into the
 * PascalCase identifier the component is most commonly exported as
 * (e.g. `DataTable`). Used as a candidate name when looking up the
 * component's JSDoc by declaration. Falls back to other casings at the
 * call site if the canonical form doesn't match.
 */
function leafToPascal(leaf: string): string {
	return leaf
		.split("-")
		.map((part) => {
			const first = part.charAt(0);
			if (first === "") {
				return part;
			}
			return first.toUpperCase() + part.slice(1);
		})
		.join("");
}

/**
 * Locate source files that may describe a component's primary export. For
 * most slugs the dir matches the leaf (`components/button` →
 * `button/button.tsx`). The override map handles components that live
 * alongside a sibling (`icon-button` lives in the `button/` dir,
 * `password-input` in `input/`, etc.). The index fallback covers
 * barrel-style pages like `Theme`, `Icons`, and `Pagination`.
 *
 * Returns package-source-relative paths *without* extensions so callers
 * can hand it to {@link extractFirstSentenceForName}.
 */
function sourceBasesForSlug(slug: string): { basePaths: string[]; leaf: string } | null {
	let leaf: string;
	let dir: string;

	if (slug.startsWith("components/preview/")) {
		leaf = slug.slice("components/preview/".length);
		dir = leaf;
	} else if (slug.startsWith("components/")) {
		leaf = slug.slice("components/".length);
		const overrides: Record<string, string> = componentImportPathOverrides;
		const override = overrides[`/${slug}`];
		dir = override ? override.replace(/^@ngrok\/mantle\//, "") : leaf;
	} else {
		return null;
	}

	return {
		leaf,
		basePaths: [
			sourceBasePath(componentsSrcDir, dir, leaf),
			sourceBasePath(componentsSrcDir, dir, "index"),
		],
	};
}

/**
 * Best-effort JSDoc lookup for a component. Tries the canonical
 * PascalCase derived from the kebab-case file name first
 * (`data-table` → `DataTable`), then the display-name with whitespace
 * stripped (`OTP Input` → `OTPInput`). Returns `undefined` when nothing
 * matches — callers fall back to the docs frontmatter summary.
 */
async function jsdocForComponent(slug: string, displayName: string): Promise<string | undefined> {
	const source = sourceBasesForSlug(slug);
	if (!source) {
		return undefined;
	}
	const candidates = new Set<string>([leafToPascal(source.leaf), displayName.replace(/\s+/g, "")]);
	for (const basePath of source.basePaths) {
		for (const name of candidates) {
			const sentence = await extractFirstSentenceForName(basePath, name);
			if (sentence) {
				return sentence;
			}
		}
	}
	return undefined;
}

/**
 * Build the public component manifest. Combines the docs navigation as the
 * source of truth for which components exist with each page's frontmatter
 * description for the summary field.
 *
 * Cached after first build because the underlying inputs (navigation data
 * and frontmatter) are static for the lifetime of the server process.
 */
let cachedManifest: Manifest | null = null;
export async function buildManifest(): Promise<Manifest> {
	if (cachedManifest) {
		return cachedManifest;
	}

	const stableEntries = Object.entries(prodReadyComponentRouteLookup).map(([name, route]) => ({
		name,
		route,
		status: "stable" as const,
	}));
	const previewEntries = Object.entries(previewComponentsRouteLookup).map(([name, route]) => ({
		name,
		route,
		status: "preview" as const,
	}));

	const all = [...stableEntries, ...previewEntries];
	const components = (
		await Promise.all(
			all.map(async ({ name, route, status }): Promise<ManifestComponent | null> => {
				const slug = route.startsWith("/") ? route.slice(1) : route;
				const importPath = importPathForSlug(slug);
				if (!importPath) {
					return null;
				}
				const filePath = urlToFileMap.get(slug);
				const [frontmatter, jsdoc] = await Promise.all([
					filePath ? loadFrontmatter(filePath) : Promise.resolve(undefined),
					jsdocForComponent(slug, name),
				]);
				const description =
					typeof frontmatter?.description === "string" ? frontmatter.description : undefined;
				return {
					name,
					slug,
					status,
					importPath,
					docsUrl: canonicalHref(`/${slug}`),
					markdownUrl: canonicalHref(`/${slug}.md`),
					summary: description,
					jsdoc,
				};
			}),
		)
	).filter((entry): entry is ManifestComponent => entry != null);

	components.sort((a, b) => a.name.localeCompare(b.name));

	cachedManifest = {
		version: mantlePackageJson.version,
		origin: canonicalOrigin,
		components,
	};
	return cachedManifest;
}

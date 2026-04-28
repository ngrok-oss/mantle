import mantlePackageJson from "@ngrok/mantle/package.json" with { type: "json" };
import {
	componentImportPathOverrides,
	previewComponentsRouteLookup,
	prodReadyComponentRouteLookup,
} from "~/components/navigation-data";
import { canonicalHref } from "~/utilities/canonical-origin";
import { loadFrontmatter, urlToFileMap } from "~/utilities/docs";

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

	const components: ManifestComponent[] = [];
	for (const { name, route, status } of [...stableEntries, ...previewEntries]) {
		const slug = route.startsWith("/") ? route.slice(1) : route;
		const importPath = importPathForSlug(slug);
		if (!importPath) {
			continue;
		}

		const filePath = urlToFileMap.get(slug);
		const frontmatter = filePath ? await loadFrontmatter(filePath) : undefined;
		const description =
			typeof frontmatter?.description === "string" ? frontmatter.description : undefined;

		components.push({
			name,
			slug,
			status,
			importPath,
			docsUrl: canonicalHref(`/${slug}`),
			markdownUrl: canonicalHref(`/${slug}.md`),
			summary: description,
		});
	}

	components.sort((a, b) => a.name.localeCompare(b.name));

	cachedManifest = {
		version: mantlePackageJson.version,
		origin: canonicalHref("/").replace(/\/$/, ""),
		components,
	};
	return cachedManifest;
}

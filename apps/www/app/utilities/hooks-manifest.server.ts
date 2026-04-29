import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import mantlePackageJson from "@ngrok/mantle/package.json" with { type: "json" };
import { canonicalHref, canonicalOrigin } from "~/utilities/canonical-origin";

/**
 * One entry in the public hooks manifest. Designed for ingestion by
 * LLMs, code-generation agents, and external tooling — fields are stable
 * and self-describing.
 */
export type ManifestHook = {
	/** Exported identifier, e.g. "useBreakpoint". */
	name: string;
	/** ESM import path. Always "@ngrok/mantle/hooks". */
	importPath: string;
	/** Absolute docs URL for the hooks page. */
	docsUrl: string;
	/** Absolute markdown URL for the hooks page. */
	markdownUrl: string;
	/** One-line summary from the hook's JSDoc, if available. */
	summary?: string;
};

/** Top-level shape returned by `/api/hooks.json`. */
export type HooksManifest = {
	/** Currently published `@ngrok/mantle` version. */
	version: string;
	/** Canonical docs origin. */
	origin: string;
	/** Public hooks, sorted by name. */
	hooks: ManifestHook[];
};

/**
 * Absolute path to `packages/mantle/src/hooks` resolved relative to this
 * file. Climbs out of `apps/www/app/utilities` up to the repo root, then
 * back down into the package source. Resilient to working-directory drift.
 */
const hooksSrcDir = path.resolve(
	path.dirname(fileURLToPath(import.meta.url)),
	"../../../../packages/mantle/src/hooks",
);

/**
 * Absolute path to `packages/mantle/src/utils` resolved the same way as
 * {@link hooksSrcDir}. Used for `useComposedRefs`, which lives outside the
 * `hooks/` directory but is re-exported from the hooks barrel, and for the
 * utilities manifest.
 */
const utilsSrcDir = path.resolve(
	path.dirname(fileURLToPath(import.meta.url)),
	"../../../../packages/mantle/src/utils",
);

/**
 * Match `export { ... } from "..."` blocks in a barrel file, skipping
 * `export type { ... }`. Capture group 1 is the comma-separated names,
 * capture group 2 is the relative source path.
 *
 * The leading `(?<!type\s)` lookbehind would be ideal but is unsupported
 * in older runtimes — instead, we strip any `export type {...} from "..."`
 * matches first via {@link removeExportTypeBlocks}.
 */
const exportFromRegex = /export\s*\{([\s\S]*?)\}\s*from\s*"([^"]+)"/g;

/**
 * Strip every `export type { ... } from "..."` block from `source` so the
 * lighter-weight {@link exportFromRegex} can be applied without lookbehinds.
 */
function removeExportTypeBlocks(source: string): string {
	return source.replace(/export\s+type\s*\{[\s\S]*?\}\s*from\s*"[^"]+"\s*;?/g, "");
}

/**
 * Parse a barrel file's text and return one entry per exported value
 * (excluding `export type` declarations). The returned `sourcePath` is
 * resolved against `dir`, with no extension — callers add `.ts`/`.tsx`.
 */
function extractValueExports(
	barrelSource: string,
	dir: string,
): { name: string; sourcePath: string }[] {
	const stripped = removeExportTypeBlocks(barrelSource);
	const entries: { name: string; sourcePath: string }[] = [];

	for (const match of stripped.matchAll(exportFromRegex)) {
		const namesBlob = match[1] ?? "";
		const fromPath = match[2] ?? "";

		const names = namesBlob
			.split(",")
			.map((piece) => piece.replace(/\/\/.*$/g, "").trim())
			.filter((piece) => piece.length > 0 && !piece.startsWith("//"));

		const resolved = path.resolve(dir, fromPath.replace(/\.js$/, ""));
		for (const name of names) {
			entries.push({ name, sourcePath: resolved });
		}
	}
	return entries;
}

/**
 * Read a TypeScript source file from disk. Tries `.tsx`, then `.ts`, then
 * the bare path. Returns `undefined` when the file is missing — callers
 * fall back to omitting the summary rather than throwing.
 *
 * Results are memoized by `basePath` for the lifetime of the process.
 * Callers like `extractFirstSentenceForName` probe a file with multiple
 * candidate identifiers; without memoization each candidate would re-read
 * the same file from disk.
 */
const sourceFileCache = new Map<string, Promise<string | undefined>>();
async function readSourceFile(basePath: string): Promise<string | undefined> {
	const cached = sourceFileCache.get(basePath);
	if (cached) {
		return cached;
	}
	const promise = (async () => {
		const candidates = [`${basePath}.tsx`, `${basePath}.ts`, basePath];
		for (const candidate of candidates) {
			try {
				return await readFile(candidate, "utf8");
			} catch {
				// Try the next candidate.
			}
		}
		return undefined;
	})();
	sourceFileCache.set(basePath, promise);
	return promise;
}

/**
 * Locate a JSDoc block (`/** ... *\/`) immediately preceding the given
 * declaration index. Tolerates whitespace between the JSDoc close and the
 * declaration, but bails out if any non-whitespace, non-comment content
 * intervenes (so we don't accidentally lift a JSDoc from an unrelated
 * earlier declaration).
 */
function findPrecedingJsDoc(source: string, declarationIndex: number): string | undefined {
	const before = source.slice(0, declarationIndex).trimEnd();
	if (!before.endsWith("*/")) {
		return undefined;
	}
	const closeIndex = before.lastIndexOf("*/");
	const openIndex = before.lastIndexOf("/**", closeIndex);
	if (openIndex < 0 || openIndex >= closeIndex) {
		return undefined;
	}
	return before.slice(openIndex, closeIndex + 2);
}

/**
 * Extract the first sentence of a JSDoc block's description, ignoring
 * `@tag` lines.
 *
 * "First sentence" means the text up to the first `.` followed by
 * whitespace and an uppercase letter (the start of the next sentence),
 * or up to the first `@<tag>` line — whichever comes first. The
 * uppercase-letter requirement avoids prematurely splitting on common
 * Latin abbreviations like "e.g." or "i.e." that are followed by inline
 * code or quoted text. Returns `undefined` when no description text is
 * present.
 */
function firstSentenceFromJsDoc(jsdoc: string): string | undefined {
	const stripped = jsdoc
		.replace(/^\/\*\*/, "")
		.replace(/\*\/$/, "")
		.split("\n")
		.map((line) => line.replace(/^\s*\*\s?/, ""))
		.join("\n")
		.trim();

	if (!stripped) {
		return undefined;
	}

	const tagMatch = stripped.match(/^[ \t]*@\w+/m);
	const description = (tagMatch ? stripped.slice(0, tagMatch.index ?? 0) : stripped).trim();
	if (!description) {
		return undefined;
	}

	const flattened = description.replace(/\s+/g, " ").trim();
	const sentenceEnd = flattened.search(/\.\s+(?=[A-Z])|\.$/);
	if (sentenceEnd === -1) {
		return flattened;
	}
	return flattened.slice(0, sentenceEnd + 1);
}

/**
 * Escape a string for safe use inside a `RegExp`.
 */
function escapeRegex(value: string): string {
	return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Walk a source file and return the first sentence of the JSDoc block
 * immediately preceding the named declaration (`function <name>` or
 * `const <name>`, with or without `export`). When no matching declaration
 * is found — for example, when `name` is re-exported from a barrel file
 * via `export { name } from "..."` — falls back to the file-level JSDoc
 * at the top of the source. Returns `undefined` when neither is found.
 */
async function extractFirstSentenceForName(
	sourcePath: string,
	name: string,
): Promise<string | undefined> {
	const source = await readSourceFile(sourcePath);
	if (source == null) {
		return undefined;
	}

	const declarations = [
		new RegExp(`(?:export\\s+)?function\\s+${escapeRegex(name)}\\b`),
		new RegExp(`(?:export\\s+)?const\\s+${escapeRegex(name)}\\b`),
	];

	for (const declRegex of declarations) {
		const match = declRegex.exec(source);
		if (!match) {
			continue;
		}
		const jsdoc = findPrecedingJsDoc(source, match.index);
		if (jsdoc == null) {
			continue;
		}
		const sentence = firstSentenceFromJsDoc(jsdoc);
		if (sentence) {
			return sentence;
		}
	}

	// Fallback: if the file opens with a `/** ... */` block before any
	// declarations, treat that as the module-level summary. Useful for
	// barrel files like `highlight-utils.ts` whose primary identifier
	// is a re-export rather than a local declaration.
	const leadingMatch = source.match(/^\s*\/\*\*[\s\S]*?\*\//);
	if (leadingMatch) {
		const sentence = firstSentenceFromJsDoc(leadingMatch[0]);
		if (sentence) {
			return sentence;
		}
	}

	return undefined;
}

/**
 * Build the public hooks manifest. Parses `packages/mantle/src/hooks/index.ts`
 * for the canonical list of exported identifiers, then reads each hook's
 * source file to extract a one-line summary from its JSDoc.
 *
 * Cached after first build because the inputs are static for the lifetime
 * of the server process.
 */
let cachedManifest: HooksManifest | null = null;
export async function buildHooksManifest(): Promise<HooksManifest> {
	if (cachedManifest) {
		return cachedManifest;
	}

	const barrelPath = path.join(hooksSrcDir, "index.ts");
	const barrelSource = (await readSourceFile(barrelPath)) ?? "";
	const entries = extractValueExports(barrelSource, hooksSrcDir);

	const docsUrl = canonicalHref("/hooks");
	const markdownUrl = canonicalHref("/hooks.md");

	const hooks: ManifestHook[] = [];
	const seen = new Set<string>();

	for (const { name, sourcePath } of entries) {
		if (seen.has(name)) {
			continue;
		}
		seen.add(name);

		// Filter to hook-like exports only. Excludes plain constants like
		// `breakpoints` re-exported from the hooks barrel for proximity.
		// Includes React hooks (`use*`) and imperative reads that mirror a
		// hook (`get*`, e.g. `getPrefersReducedMotion`).
		if (!/^use[A-Z]/.test(name) && !/^get[A-Z]/.test(name)) {
			continue;
		}

		const summary = await extractFirstSentenceForName(sourcePath, name);

		hooks.push({
			name,
			importPath: "@ngrok/mantle/hooks",
			docsUrl,
			markdownUrl,
			summary,
		});
	}

	hooks.sort((a, b) => a.name.localeCompare(b.name));

	cachedManifest = {
		version: mantlePackageJson.version,
		origin: canonicalOrigin,
		hooks,
	};
	return cachedManifest;
}

// Re-exported for use by the utilities manifest, which shares the same
// JSDoc-extraction helpers and source layout.
export { utilsSrcDir, extractFirstSentenceForName, readSourceFile };

import fs from "node:fs";
import path from "node:path";

/**
 * Resolves the `dist/` directory of the installed `@ngrok/mantle` package
 * by walking up the directory tree from `root` and looking for
 * `node_modules/@ngrok/mantle` — without following symlinks.
 *
 * Avoiding symlink resolution is important in pnpm workspaces: using
 * `require.resolve` would return the content-addressed path deep inside
 * `.pnpm/`, producing unreadable relative paths in the generated CSS. By
 * using the symlinked `node_modules/@ngrok/mantle` path directly we get
 * clean, stable paths.
 *
 * @param root - Absolute path to the Vite project root (used as the starting
 *   point for the upward search).
 * @returns The absolute path to `@ngrok/mantle`'s `dist/` directory, or
 *   `null` if the package cannot be found (e.g. it is not installed).
 */
export function resolveMantleDistDir(root: string): string | null {
	let dir = root;
	while (true) {
		const candidate = path.join(dir, "node_modules/@ngrok/mantle");
		if (fs.existsSync(path.join(candidate, "package.json"))) {
			return path.join(candidate, "dist");
		}
		const parent = path.dirname(dir);
		if (parent === dir) {
			return null;
		}
		dir = parent;
	}
}

/** Marker inserted before the auto-generated `@source` block. */
export const MARKER_START = "/* @ngrok/mantle-vite-plugins:source:start */";

/** Marker inserted after the auto-generated `@source` block. */
export const MARKER_END = "/* @ngrok/mantle-vite-plugins:source:end */";

/**
 * Scans the given source files for `@ngrok/mantle/<name>` import specifiers
 * and returns the set of subpath names found (e.g. `"button"`, `"badge"`).
 *
 * Each file is read synchronously. Files that cannot be read (e.g. due to
 * permissions or concurrent deletion) are silently skipped.
 *
 * Only non-CSS subpath imports are collected — entries ending in `.css` are
 * excluded because they do not correspond to compiled JS component files in
 * the mantle `dist/` directory.
 *
 * @param files - Absolute paths to source files to scan.
 * @returns A `Set` of mantle subpath names found across all files (e.g.
 *   `Set { "button", "badge", "table" }`).
 */
export function scanMantleImports(files: string[]): Set<string> {
	const components = new Set<string>();
	const importRe = /from\s+["']@ngrok\/mantle\/([^"'/]+)["']/g;
	for (const file of files) {
		let content: string;
		try {
			content = fs.readFileSync(file, "utf8");
		} catch {
			continue;
		}
		for (const match of content.matchAll(importRe)) {
			const name = match[1];
			if (name && !name.endsWith(".css")) {
				components.add(name);
			}
		}
	}
	return components;
}

/**
 * Recursively collects files matching the given extensions under `dir`,
 * writing their absolute paths into `results`.
 *
 * `node_modules` and `.git` directories are always skipped. Directories that
 * cannot be read (e.g. due to permissions) are silently skipped rather than
 * throwing.
 *
 * @param dir - Absolute path to the directory to walk.
 * @param results - Array to push matching absolute file paths into. Mutated
 *   in place.
 * @param extensions - File extensions to include, each including the leading
 *   dot (e.g. `[".ts", ".tsx"]`).
 */
export function collectFiles(dir: string, results: string[], extensions: string[]): void {
	let entries: fs.Dirent[];
	try {
		entries = fs.readdirSync(dir, { withFileTypes: true });
	} catch {
		return;
	}
	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			if (entry.name === "node_modules" || entry.name === ".git") {
				continue;
			}
			collectFiles(fullPath, results, extensions);
		} else if (entry.isFile() && extensions.some((ext) => entry.name.endsWith(ext))) {
			results.push(fullPath);
		}
	}
}

/**
 * Writes or removes the auto-generated `@source` block in `cssFile`.
 *
 * Reads the current file content, strips any existing marker block, then
 * appends a fresh block if `components` is non-empty. The file is only
 * written to disk when the resulting content differs from what is already
 * there, avoiding unnecessary writes that would trigger Tailwind's watcher.
 *
 * The generated block is delimited by {@link MARKER_START} and
 * {@link MARKER_END} comments so it can be found and replaced on subsequent
 * calls. The block is safe to commit — it is deterministic and human-readable.
 *
 * @param cssFile - Absolute path to the CSS file to update.
 * @param components - Set of mantle subpath names to generate `@source`
 *   directives for. Pass an empty set to remove any existing block.
 * @param mantleDistDir - Absolute path to the `dist/` directory of the
 *   installed `@ngrok/mantle` package.
 */
export function writeSourcesToCssFile(
	cssFile: string,
	components: Set<string>,
	mantleDistDir: string,
): void {
	let current: string;
	try {
		current = fs.readFileSync(cssFile, "utf8");
	} catch {
		return;
	}

	// Strip any existing generated block (with surrounding blank lines).
	const blockRe = new RegExp(
		`\n?[ \t]*${escapeRegex(MARKER_START)}[\\s\\S]*?${escapeRegex(MARKER_END)}[ \t]*\n?`,
		"g",
	);
	const withoutBlock = current.replace(blockRe, "").trimEnd();

	let next: string;
	if (components.size === 0) {
		next = withoutBlock + "\n";
	} else {
		const cssDir = path.dirname(cssFile);
		const sources = [...components].sort().map((name) => {
			const rel = path.relative(cssDir, path.join(mantleDistDir, `${name}.js`));
			// Always use forward slashes in CSS paths, even on Windows.
			const posix = rel.split(path.sep).join("/");
			return `@source "${posix.startsWith(".") ? posix : `./${posix}`}";`;
		});
		const block = `${MARKER_START}\n${sources.join("\n")}\n${MARKER_END}`;

		// Insert the block immediately after the last @import line so Tailwind
		// sees the @source directives right alongside the other imports.
		const lastImportMatch = [...withoutBlock.matchAll(/^@import\s+[^;]+;/gm)].at(-1);
		if (lastImportMatch?.index !== undefined) {
			const insertAt = lastImportMatch.index + lastImportMatch[0].length;
			const before = withoutBlock.slice(0, insertAt);
			const after = withoutBlock.slice(insertAt).trimStart();
			next = `${before}\n\n${block}${after.length > 0 ? `\n\n${after}` : ""}\n`;
		} else {
			next = `${block}\n\n${withoutBlock}\n`;
		}
	}

	if (next !== current) {
		fs.writeFileSync(cssFile, next, "utf8");
	}
}

/**
 * Escapes a string for use in a `RegExp` constructor.
 *
 * @param s - The string to escape.
 * @returns The escaped string.
 */
function escapeRegex(s: string): string {
	return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Resolves the first existing file path from a list of candidates relative to
 * `root`. Returns `null` if none of the candidates exist.
 *
 * @param root - Absolute path to resolve candidates relative to.
 * @param candidates - Relative file paths to check, in priority order.
 * @returns The absolute path of the first existing file, or `null`.
 */
export function findFirstExisting(root: string, candidates: string[]): string | null {
	for (const rel of candidates) {
		const abs = path.isAbsolute(rel) ? rel : path.join(root, rel);
		if (fs.existsSync(abs)) {
			return abs;
		}
	}
	return null;
}

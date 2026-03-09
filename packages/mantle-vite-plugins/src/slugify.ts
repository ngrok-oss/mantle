/**
 * Create a URL-friendly slug from arbitrary text.
 *
 * Process:
 * 1) Unicode-normalize with NFKD to split base letters and diacritics.
 * 2) Strip combining marks (\p{M}) so "é" → "e".
 * 3) Lowercase and trim.
 * 4) Remove everything except letters, numbers, spaces, underscores, and hyphens.
 * 5) Collapse spaces/underscores/multi-hyphens to a single hyphen.
 * 6) Trim leading/trailing hyphens.
 *
 * @example
 * slugify("Crème brûlée — 100%!") // "creme-brulee-100"
 * @example
 * slugify("  Hello_world---Again  ") // "hello-world-again"
 * @example
 * slugify("東京 Rust 勉強会 #3") // "東京-rust-勉強会-3" (keeps non-Latin scripts)
 */
export function slugify(text: string): string {
	return text
		.normalize("NFKD")
		.replace(/\p{M}/gu, "")
		.toLowerCase()
		.trim()
		.replace(/[^\p{L}\p{N}\s_-]/gu, "")
		.replace(/[\s_-]+/g, "-")
		.replace(/^-+|-+$/g, "");
}

/**
 * Converts a mantle component name to a URL-friendly slug used as the mantle
 * subpath name in `@source` directives (e.g. `"alert-dialog"`).
 *
 * Accepts both PascalCase (`"AlertDialog"`) and kebab-case
 * (`"alert-dialog"`) inputs. PascalCase is first split at word boundaries
 * before slugification.
 *
 * @param name - Component name in PascalCase or kebab-case.
 * @returns The slugified kebab-case subpath name.
 *
 * @example
 * slugifyComponentName("AlertDialog") // "alert-dialog"
 * @example
 * slugifyComponentName("alert-dialog") // "alert-dialog"
 * @example
 * slugifyComponentName("Button") // "button"
 */
export function slugifyComponentName(name: string): string {
	// Split PascalCase into words before slugifying so "CommandDialog" → "command-dialog".
	return slugify(name.replace(/([a-z\d])([A-Z])/g, "$1 $2"));
}

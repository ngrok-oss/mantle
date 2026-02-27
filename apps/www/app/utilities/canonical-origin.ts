/**
 * Public domain used for links, meta tags, and canonical references.
 * Keep this single source of truth to avoid drift across the app.
 *
 * @see {@link canonicalOrigin}
 * @example
 * // "mantle.ngrok.com"
 * console.log(canonicalDomain);
 */
const canonicalDomain = "mantle.ngrok.com";

/**
 * Canonical site origin (scheme + host) for constructing absolute URLs.
 * Locked to HTTPS. Prefer {@link canonicalHref} for path-joining.
 *
 * @example
 * // "https://mantle.ngrok.com"
 * console.log(canonicalOrigin);
 */
const canonicalOrigin = `https://${canonicalDomain}`;

/**
 * Build an absolute URL on the canonical origin.
 * Expects an absolute path (i.e. starts with "/"). The return value
 * is `as const`, preserving literal types in TS where helpful.
 *
 * @param path - Absolute path beginning with "/". Prefer to use {@link href} from `react-router`
 * @returns Absolute URL on the canonical origin.
 *
 * @example
 * canonicalHref(href("/base/typography")); // "https://mantle.ngrok.com/base/typography"
 *
 * @example
 * // With typed routes:
 * const path = "/docs" as const;
 * const url = canonicalHref(path); // typed as the exact string literal
 */
function canonicalHref(input: `/${string}` | (string & {})): string {
	const path = input.startsWith("/") ? input : `/${input}`;
	if (path === "/") {
		return `${canonicalOrigin}/`;
	}
	return trimTrailingSlashes(`${canonicalOrigin}${path}`);
}

export {
	//,
	canonicalDomain,
	canonicalOrigin,
	canonicalHref,
};

/**
 * Removes all trailing slashes from a string.
 *
 * O(n) time complexity (where n is the length of the input string).
 *
 * @example given "/foo/bar/" returns "/foo/bar"
 * @example given "/foo/bar/////" returns "/foo/bar"
 */
function trimTrailingSlashes(input: string | undefined | null): string {
	const value = input || "";

	let end = value.length;
	while (end > 0 && value.at(end - 1) === "/") {
		end--;
	}
	return value.slice(0, end);
}

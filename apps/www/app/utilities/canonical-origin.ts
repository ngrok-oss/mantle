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
 * Locked to HTTPS. Prefer {@link makeCanonicalUrl} for path-joining.
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
 * makeCanonicalUrl(href("/base/typography")); // "https://mantle.ngrok.com/base/typography"
 *
 * @example
 * // With typed routes:
 * const path = "/docs" as const;
 * const url = makeCanonicalUrl(path); // typed as the exact string literal
 */
const makeCanonicalUrl = (path: `/${string}` | (string & {})) =>
	`${canonicalOrigin}${path}` as const;

export {
	//,
	canonicalDomain,
	canonicalOrigin,
	makeCanonicalUrl,
};

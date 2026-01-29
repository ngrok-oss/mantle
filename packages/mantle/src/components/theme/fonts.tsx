/**
 * @fileoverview Helpers for preloading ngrok brand fonts from the CDN.
 * All font URLs resolve to `${assetsCdnOrigin}/fonts`.
 */

/**
 * The origin for the assets CDN where custom ngrok fonts and assets are hosted.
 *
 * Keep this stable across the app so we can preconnect/DNS-prefetch consistently.
 * @public
 */
const assetsCdnOrigin = "https://assets.ngrok.com";

/**
 * Base path for font assets on the CDN.
 * @internal
 */
const cdnBase = `${assetsCdnOrigin}/fonts`;

/**
 * Canonical list of core font paths (relative to the CDN fonts base).
 */
const coreFonts = [
	"/roobert/roobert-proportional-vf.woff2",
	"/jetbrains/jetbrainsmono-wght.woff2",
	"/jetbrains/jetbrainsmono-italic-wght.woff2",
	"/family/family-regular.woff2",
	"/family/family-italic.woff2",
] as const;

type FontPath = `/${string}` | (string & {});

/**
 * Builds an absolute CDN URL for a given font.
 *
 * @returns {`https://assets.ngrok.com/fonts${T}`} An absolute, literal-typed CDN URL.
 *
 * @example
 * const href = fontHref("/roobert/roobert-proportional-vf.woff2");
 * // -> "https://assets.ngrok.com/fonts/roobert/roobert-proportional-vf.woff2"
 */
function fontHref<T extends FontPath = FontPath>(font: T) {
	const path = font.startsWith("/") ? font : `/${font}`;
	return `${cdnBase}${path}` as const;
}

/**
 * Preload core fonts used in the mantle theme.
 *
 * Include this as early as possible in the document `<head>` so text renders
 * with the intended face without layout shifts. Uses `crossOrigin="anonymous"`
 * so the browser can cache and reuse the font across origins.
 *
 * @remarks
 * For best performance, pair this with preconnect/dns-prefetch hints to the CDN.
 *
 * This is automatically included in `<MantleThemeHeadContent />`.
 *
 * @example
 * ```tsx
 * <head>
 *   <meta charSet="utf-8" />
 *   <meta name="viewport" content="width=device-width, initial-scale=1" />
 *
 *   // Preconnect and DNS-prefetch to the assets CDN
 *   // either here or in app root headers
 *   <link rel="preconnect" href={assetsCdnOrigin} crossOrigin="anonymous" />
 *   <link rel="dns-prefetch" href={assetsCdnOrigin} />
 *
 *   <PreventWrongThemeFlashScript />
 *   <PreloadCoreFonts />
 *   // ... other head elements ...
 * </head>
 * ```
 */
const PreloadCoreFonts = () => (
	<>
		{coreFonts.map((font) => (
			<link
				key={font}
				rel="preload"
				href={fontHref(font)}
				as="font"
				type="font/woff2"
				crossOrigin="anonymous"
			/>
		))}
	</>
);
PreloadCoreFonts.displayName = "PreloadCoreFonts";

export {
	//,
	assetsCdnOrigin,
	fontHref,
	PreloadCoreFonts,
};

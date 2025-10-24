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
 * Canonical list of font paths (relative to the CDN fonts base).
 *
 * These are string literal types via `as const`, so consumers get autocompletion and
 * type safety when constructing URLs.
 * @internal
 */
const fonts = [
	"/euclid-square/EuclidSquare-Regular-WebS.woff",
	"/euclid-square/EuclidSquare-RegularItalic-WebS.woff",
	"/euclid-square/EuclidSquare-Medium-WebS.woff",
	"/euclid-square/EuclidSquare-MediumItalic-WebS.woff",
	"/ibm-plex-mono/IBMPlexMono-Text.woff",
	"/ibm-plex-mono/IBMPlexMono-TextItalic.woff",
	"/ibm-plex-mono/IBMPlexMono-SemiBold.woff",
	"/ibm-plex-mono/IBMPlexMono-SemiBoldItalic.woff",
] as const;

type FontPath = `/${string}` | (string & {});

/**
 * Builds an absolute CDN URL for a given font.
 *
 * @returns {`https://assets.ngrok.com/fonts${T}`} An absolute, literal-typed CDN URL.
 *
 * @example
 * const href = fontHref("/euclid-square/EuclidSquare-Regular-WebS.woff");
 * // -> "https://assets.ngrok.com/fonts/euclid-square/EuclidSquare-Regular-WebS.woff"
 */
function fontHref<T extends FontPath = FontPath>(font: T) {
	const path = font.startsWith("/") ? font : `/${font}`;
	return `${cdnBase}/${path}` as const;
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
		{fonts.map((font) => (
			<link
				key={font}
				rel="preload"
				href={fontHref(font)}
				as="font"
				type="font/woff"
				crossOrigin="anonymous"
			/>
		))}
	</>
);
PreloadCoreFonts.displayName = "PreloadCoreFonts";

export {
	//,
	PreloadCoreFonts,
	assetsCdnOrigin,
};

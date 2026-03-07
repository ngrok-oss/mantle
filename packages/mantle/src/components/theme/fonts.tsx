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

const coreFontNames = [
	"roobert",
	"jetbrains-mono",
	"jetbrains-mono-italic",
	"family-regular",
	"family-italic",
] as const;
/**
 * Named keys identifying each individual core font.
 * @public
 */
type CoreFontName = (typeof coreFontNames)[number];

/**
 * Maps each {@link CoreFontName} to its CDN font path (relative to the fonts base).
 * @internal
 */
const coreFontPathByName = {
	roobert: "/roobert/roobert-proportional-vf.woff2",
	"jetbrains-mono": "/jetbrains/jetbrainsmono-wght.woff2",
	"jetbrains-mono-italic": "/jetbrains/jetbrainsmono-italic-wght.woff2",
	"family-regular": "/family/family-regular.woff2",
	"family-italic": "/family/family-italic.woff2",
} as const satisfies Record<CoreFontName, `/${string}`>;

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
		{coreFontNames.map((fontName) => (
			<PreloadFont key={fontName} name={fontName} />
		))}
	</>
);
PreloadCoreFonts.displayName = "PreloadCoreFonts";

/**
 * Props for {@link PreloadFont}.
 * @public
 */
type PreloadFontProps = {
	/**
	 * The name of the individual core font to preload.
	 *
	 * - `"roobert"` — Roobert proportional variable font
	 * - `"jetbrains-mono"` — JetBrains Mono variable weight
	 * - `"jetbrains-mono-italic"` — JetBrains Mono italic variable weight
	 * - `"family-regular"` — Family regular
	 * - `"family-italic"` — Family italic
	 */
	name: CoreFontName;
};

/**
 * Preloads a single core font by name.
 *
 * Use this when you only need one or two specific fonts rather than all core
 * fonts. Include it as early as possible in the document `<head>`.
 *
 * @remarks
 * For best performance, pair this with preconnect/dns-prefetch hints to the CDN.
 *
 * @example
 * ```tsx
 * <head>
 *   <link rel="preconnect" href={assetsCdnOrigin} crossOrigin="anonymous" />
 *   <link rel="dns-prefetch" href={assetsCdnOrigin} />
 *   <PreloadFont name="roobert" />
 *   <PreloadFont name="jetbrains-mono" />
 * </head>
 * ```
 */
const PreloadFont = ({ name }: PreloadFontProps) => (
	<link
		rel="preload"
		href={fontHref(coreFontPathByName[name])}
		as="font"
		type="font/woff2"
		crossOrigin="anonymous"
	/>
);
PreloadFont.displayName = "PreloadFont";

export type { CoreFontName };

export {
	//,
	assetsCdnOrigin,
	fontHref,
	PreloadFont,
	PreloadCoreFonts,
};

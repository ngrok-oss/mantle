const cdnBase = "https://cdn.ngrok.com/static/fonts";

const fonts = [
	"euclid-square/EuclidSquare-Regular-WebS.woff",
	"euclid-square/EuclidSquare-RegularItalic-WebS.woff",
	"euclid-square/EuclidSquare-Medium-WebS.woff",
	"euclid-square/EuclidSquare-Semibold-WebS.woff",
	"euclid-square/EuclidSquare-MediumItalic-WebS.woff",
	"ibm-plex-mono/IBMPlexMono-Text.woff",
	"ibm-plex-mono/IBMPlexMono-TextItalic.woff",
	"ibm-plex-mono/IBMPlexMono-SemiBold.woff",
	"ibm-plex-mono/IBMPlexMono-SemiBoldItalic.woff",
] as const;

type Font = (typeof fonts)[number];

const fontHref = <T extends Font>(font: T) => [cdnBase, font].join("/");

/**
 * Preload custom fonts used in the theme. This should be added to the head of the document in your application, preferably as high as possible.
 * Normally you won't use this directly, but instead use the `MantleThemeHeadContent` component which includes this.
 */
const PreloadFonts = () => (
	<>
		{fonts.map((font) => (
			<link key={font} rel="preload" href={fontHref(font)} as="font" type="font/woff" crossOrigin="anonymous" />
		))}
	</>
);

export { PreloadFonts };

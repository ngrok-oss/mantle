/**
 * Preload fonts used in the theme.
 */
const PreloadFonts = () => {
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

	const href = (font: (typeof fonts)[number]) => [cdnBase, font].join("/");

	return (
		<>
			{fonts.map((font) => (
				<link key={font} rel="preload" href={href(font)} as="font" type="font/woff" crossOrigin="anonymous" />
			))}
		</>
	);
};

export { PreloadFonts };

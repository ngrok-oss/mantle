const cdnOrigin = "https://cdn.ngrok.com";
const cdnBase = `${cdnOrigin}/static/fonts`;

const fonts = [
	"/euclid-square/EuclidSquare-Regular-WebS.woff",
	"/euclid-square/EuclidSquare-RegularItalic-WebS.woff",
	"/euclid-square/EuclidSquare-Medium-WebS.woff",
	"/euclid-square/EuclidSquare-Semibold-WebS.woff",
	"/euclid-square/EuclidSquare-MediumItalic-WebS.woff",
	"/ibm-plex-mono/IBMPlexMono-Text.woff",
	"/ibm-plex-mono/IBMPlexMono-TextItalic.woff",
	"/ibm-plex-mono/IBMPlexMono-SemiBold.woff",
	"/ibm-plex-mono/IBMPlexMono-SemiBoldItalic.woff",
] as const;

type Font = (typeof fonts)[number];

const fontHref = <T extends Font = Font>(font: T) => `${cdnBase}${font}` as const;

type Props = {
	/**
	 * If set, will also preload and include the optional Nunito Sans font from Google Fonts.
	 * @default false
	 */
	includeNunitoSans?: boolean;
};

/**
 * Preload custom fonts used in the theme. This should be added to the head of the document in your application, preferably as high as possible.
 * Normally you won't use this directly, but instead use the `MantleThemeHeadContent` component which includes this.
 */
const PreloadFonts = ({ includeNunitoSans = false }: Props) => (
	<>
		<link rel="preconnect" href={cdnOrigin} />
		{fonts.map((font) => (
			<link key={font} rel="preload" href={fontHref(font)} as="font" type="font/woff" crossOrigin="anonymous" />
		))}
		{includeNunitoSans && <NunitoSans />}
	</>
);

export {
	//,
	PreloadFonts,
};

function NunitoSans() {
	return (
		<>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
			<link
				href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
				rel="stylesheet"
			/>
		</>
	);
}

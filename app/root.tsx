import { PreventWrongThemeFlash, ThemeProvider } from "@/theme-provider";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import tailwind from "tailwindcss/tailwind.css";
import mantleCss from "../assets/mantle.css";
import { Layout } from "./components/layout";

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
	{ rel: "stylesheet", href: mantleCss },
	{ rel: "stylesheet", href: tailwind },
];

export default function App() {
	return (
		<html className="h-full" lang="en-US" dir="ltr">
			<head>
				<PreventWrongThemeFlash />
				<PreloadFonts />
				<meta charSet="utf-8" />
				<meta name="author" content="ngrok" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="h-full min-h-full overflow-y-scroll bg-body">
				<ThemeProvider>
					<Layout>
						<Outlet />
					</Layout>
				</ThemeProvider>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

// TODO(cody): consider making this a component in mantle, perhaps part of the theme provider
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

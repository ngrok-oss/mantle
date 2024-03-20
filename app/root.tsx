import { PreventWrongThemeFlash, ThemeProvider } from "@/theme-provider";
import { TooltipProvider } from "@/tooltip";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import { json, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";
import tailwind from "tailwindcss/tailwind.css";
import mantleCss from "../assets/mantle.css";
import { AutoScrollToHash } from "./components/auto-scroll-to-hash";
import { Layout } from "./components/layout";

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
	{ rel: "stylesheet", href: mantleCss },
	{ rel: "stylesheet", href: tailwind },
];

export const loader = async () => {
	const packageJson = await import("../package.json");
	return json({ currentVersion: packageJson.version });
};

const commitSha = process.env.VERCEL_GIT_COMMIT_SHA;
const deploymentId = process.env.VERCEL_DEPLOYMENT_ID;

export default function App() {
	const { currentVersion } = useLoaderData<typeof loader>();

	return (
		<html id="ngrok" className="h-full" lang="en-US" dir="ltr">
			<head>
				<PreventWrongThemeFlash />
				<PreloadFonts />
				<meta charSet="utf-8" />
				<meta name="author" content="ngrok" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="commit-sha" content={commitSha} />
				<meta name="deployment-id" content={deploymentId} />
				<Meta />
				<Links />
			</head>
			<body className="h-full min-h-full overflow-y-scroll bg-base">
				<ThemeProvider>
					<AutoScrollToHash />
					<TooltipProvider>
						<Layout currentVersion={currentVersion}>
							<Outlet />
						</Layout>
					</TooltipProvider>
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

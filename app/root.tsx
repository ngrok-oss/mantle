import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import { json, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "@remix-run/react";
import { MantleThemeHeadContent, ThemeProvider, useInitialHtmlThemeProps } from "packages/theme-provider";
import { TooltipProvider } from "packages/tooltip";
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
	const commitSha = process.env.VERCEL_GIT_COMMIT_SHA;
	const deploymentId = process.env.VERCEL_DEPLOYMENT_ID;
	return json({ currentVersion: packageJson.version, commitSha, deploymentId });
};

export default function App() {
	const { currentVersion, commitSha, deploymentId } = useLoaderData<typeof loader>();
	const initialHtmlThemeProps = useInitialHtmlThemeProps({ className: "h-full" });

	return (
		<html id="ngrok" {...initialHtmlThemeProps} lang="en-US" dir="ltr">
			<head>
				<MantleThemeHeadContent />
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

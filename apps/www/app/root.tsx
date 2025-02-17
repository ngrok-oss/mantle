import "@ngrok/mantle/mantle.css";
import {
	MantleThemeHeadContent,
	ThemeProvider,
	useInitialHtmlThemeProps,
} from "@ngrok/mantle/theme-provider";
import { Toaster } from "@ngrok/mantle/toast";
import { TooltipProvider } from "@ngrok/mantle/tooltip";
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from "react-router";
import { AutoScrollToHash } from "./components/auto-scroll-to-hash";
import { Layout } from "./components/layout";
import { NavigationProvider } from "./components/navigation-context";

export const loader = async () => {
	const packageJson = await import("@ngrok/mantle/package.json");
	const commitSha = process.env.VERCEL_GIT_COMMIT_SHA;
	const deploymentId = process.env.VERCEL_DEPLOYMENT_ID;
	return {
		currentVersion: packageJson.default.version,
		commitSha,
		deploymentId,
	};
};

export default function App() {
	const { currentVersion, commitSha, deploymentId } =
		useLoaderData<typeof loader>();
	const initialHtmlThemeProps = useInitialHtmlThemeProps({
		className: "h-full",
	});

	return (
		<html id="ngrok" {...initialHtmlThemeProps} lang="en-US" dir="ltr">
			<head>
				<meta charSet="utf-8" />
				<MantleThemeHeadContent includeNunitoSans />
				<meta name="author" content="ngrok" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="commit-sha" content={commitSha} />
				<meta name="deployment-id" content={deploymentId} />
				<Meta />
				<Links />
			</head>
			<body className="bg-base h-full min-h-full overflow-y-scroll">
				<ThemeProvider>
					<AutoScrollToHash />
					<TooltipProvider>
						<NavigationProvider>
							<Layout currentVersion={currentVersion}>
								<Outlet />
							</Layout>
						</NavigationProvider>
					</TooltipProvider>
					<Toaster />
				</ThemeProvider>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

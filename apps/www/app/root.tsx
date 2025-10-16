import { cx } from "@ngrok/mantle/cx";
import { useScrollBehavior } from "@ngrok/mantle/hooks";
import "@ngrok/mantle/mantle.css";
import {
	MantleThemeHeadContent,
	ThemeProvider,
	useInitialHtmlThemeProps,
} from "@ngrok/mantle/theme";
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
import { Layout } from "./components/layout";
import { NavigationProvider } from "./components/navigation-context";

export const loader = async ({ request }: { request: Request }) => {
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
	const scrollBehavior = useScrollBehavior();

	return (
		<html {...initialHtmlThemeProps} lang="en-US" dir="ltr">
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
			<body
				className={cx(
					"bg-base h-full min-h-full overflow-y-scroll",
					scrollBehavior === "smooth" && "scroll-smooth",
				)}
			>
				<ThemeProvider>
					<TooltipProvider>
						<Toaster />
						<NavigationProvider>
							<Layout currentVersion={currentVersion}>
								<Outlet />
							</Layout>
						</NavigationProvider>
					</TooltipProvider>
				</ThemeProvider>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

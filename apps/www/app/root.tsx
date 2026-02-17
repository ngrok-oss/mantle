import { cx } from "@ngrok/mantle/cx";
import { useScrollBehavior } from "@ngrok/mantle/hooks";
import {
	MantleThemeHeadContent,
	ThemeProvider,
	useInitialHtmlThemeProps,
} from "@ngrok/mantle/theme";
import { Toaster } from "@ngrok/mantle/toast";
import { TooltipProvider } from "@ngrok/mantle/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";
import { lazy, Suspense, useEffect, useState } from "react";
import {
	href,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	type ShouldRevalidateFunctionArgs,
	useRouteLoaderData,
} from "react-router";
import type { Route } from "./+types/root";
import { Layout as WwwLayout } from "./components/layout";
import { NavigationProvider } from "./components/navigation-context";
import { useNonce } from "./components/nonce";
import "./global.css";
import { canonicalDomain, makeCanonicalUrl } from "./utilities/canonical-origin";

const title = "@ngrok/mantle";
const description = "mantle is ngrok's UI library and design system";

export const meta: Route.MetaFunction = () => {
	const canonicalUrl = makeCanonicalUrl(href("/"));

	return [
		{
			//,
			tagName: "link",
			rel: "canonical",
			href: canonicalUrl,
		},
		{
			//,
			name: "og:url",
			property: "og:url",
			content: canonicalUrl,
		},
		{
			name: "twitter:url",
			content: canonicalUrl,
		},
		{
			//,
			title,
		},
		{
			name: "og:title",
			property: "og:title",
			content: title,
		},
		{
			name: "twitter:title",
			property: "twitter:title",
			content: title,
		},
		{
			//,
			name: "description",
			content: description,
		},
		{
			name: "og:description",
			property: "og:description",
			content: description,
		},
		{
			name: "twitter:description",
			content: description,
		},
	];
};

export const loader = async (_: Route.LoaderArgs) => {
	const packageJson = await import("@ngrok/mantle/package.json");
	const commitSha = process.env.VERCEL_GIT_COMMIT_SHA;
	const deploymentId = process.env.VERCEL_DEPLOYMENT_ID;
	const nodeEnv = process.env.NODE_ENV ?? "development";

	return {
		currentVersion: packageJson.default.version,
		commitSha,
		deploymentId,
		renderReactQueryDevtools: nodeEnv !== "production",
	};
};

export function shouldRevalidate(_: ShouldRevalidateFunctionArgs) {
	/**
	 * never revalidate root loader
	 * env variables and meta are static per deployment
	 */
	return false;
}

const ReactQueryDevtoolsLazy = lazy(() =>
	import("@tanstack/react-query-devtools/production").then((module) => ({
		default: module.ReactQueryDevtools,
	})),
);

declare global {
	interface Window {
		toggleReactQueryDevtools: () => void;
	}
}

export function Layout({ children }: PropsWithChildren) {
	const loaderData = useRouteLoaderData<typeof loader>("root");
	const initialHtmlThemeProps = useInitialHtmlThemeProps({
		className: "h-full",
	});
	const scrollBehavior = useScrollBehavior();
	const nonce = useNonce();
	const [showReactQueryDevtools, setShowReactQueryDevtools] = useState(
		Boolean(loaderData?.renderReactQueryDevtools),
	);
	const [queryClient] = useState(() => new QueryClient());

	useEffect(() => {
		window.toggleReactQueryDevtools = () => setShowReactQueryDevtools((previous) => !previous);
	}, []);

	return (
		<html {...initialHtmlThemeProps} lang="en-US" dir="ltr" suppressHydrationWarning>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="@ngrok/mantle" />
				<meta name="twitter:domain" content={canonicalDomain} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="og:image" property="og:image" content="/og-image.png" />
				<meta name="twitter:image" property="twitter:image" content="/og-image.png" />
				<MantleThemeHeadContent nonce={nonce} />
				<meta name="author" content="ngrok" />
				<meta name="commit-sha" content={loaderData?.commitSha} />
				<meta name="deployment-id" content={loaderData?.deploymentId} />
				<Meta />
				<Links nonce={nonce} />
			</head>
			<body
				className={cx(
					"bg-base h-full min-h-full overflow-y-scroll scrollbar isolate relative",
					scrollBehavior === "smooth" && "scroll-smooth",
				)}
			>
				<ThemeProvider>
					<TooltipProvider>
						<Toaster />
						<QueryClientProvider client={queryClient}>
							{showReactQueryDevtools && (
								<Suspense fallback={null}>
									<ReactQueryDevtoolsLazy />
								</Suspense>
							)}
							<NavigationProvider>
								<WwwLayout currentVersion={loaderData?.currentVersion}>{children}</WwwLayout>
							</NavigationProvider>
						</QueryClientProvider>
					</TooltipProvider>
				</ThemeProvider>
				<ScrollRestoration nonce={nonce} />
				<Scripts nonce={nonce} />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

import { cx } from "@ngrok/mantle/cx";
import { useScrollBehavior } from "@ngrok/mantle/hooks";
import {
	MantleThemeHeadContent,
	PreloadInterFonts,
	ThemeProvider,
	useInitialHtmlThemeProps,
} from "@ngrok/mantle/theme";
import { Toaster } from "@ngrok/mantle/toast";
import { TooltipProvider } from "@ngrok/mantle/tooltip";
import type { PropsWithChildren } from "react";
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useRouteLoaderData,
} from "react-router";
import invariant from "tiny-invariant";
import type { Route } from "./+types/root";
import { Layout as WwwLayout } from "./components/layout";
import { NavigationProvider } from "./components/navigation-context";
import { useNonce } from "./components/nonce";
import "./global.css";
import { canonicalDomain } from "./utilities/canonical-origin";

const title = "@ngrok/mantle";
const description = "mantle is ngrok's UI library and design system";

export const meta: Route.MetaFunction = () => {
	return [
		{ title },
		{
			//,
			name: "description",
			content: description,
		},
		{
			//,
			property: "og:locale",
			content: "en_US",
		},
		{
			//,
			property: "og:type",
			content: "website",
		},
		{
			//,
			property: "og:site_name",
			content: "ngrok blog",
		},
		{
			name: "og:title",
			property: "og:title",
			content: title,
		},
		{
			name: "og:description",
			property: "og:description",
			content: description,
		},
		{
			name: "twitter:card",
			content: "summary_large_image",
		},
		{
			name: "twitter:domain",
			content: canonicalDomain,
		},
		{
			name: "twitter:title",
			property: "twitter:title",
			content: title,
		},
		{
			name: "twitter:description",
			content: description,
		},
		{
			name: "og:image",
			property: "og:image",
			content: "/og-image.png",
		},
		{
			name: "twitter:image",
			property: "twitter:image",
			content: "/og-image.png",
		},
	];
};

type PreconnectTarget = Readonly<{
	href: string;
	crossOrigin?: boolean;
}>;

export const PRIORITY_PRECONNECTS: PreconnectTarget[] = [
	import.meta.env.BASE_URL !== "/" && { href: import.meta.env.BASE_URL },
	{ href: "https://assets.ngrok.com", crossOrigin: true },
].filter(Boolean); // keep <=4 for optimal performance

invariant(PRIORITY_PRECONNECTS.length <= 4, "Keep ≤4 priority preconnects");

export function headers({ parentHeaders }: Route.HeadersArgs) {
	const headers = new Headers(parentHeaders);

	// If some platform/middleware already set a Link header, append to it.
	const existing = headers.get("Link");
	const linkValue = PRIORITY_PRECONNECTS.map(
		(item) =>
			`<${item.href}>; rel=preconnect${item.crossOrigin ? "; crossorigin" : ""}`,
	).join(", ");
	headers.set("Link", existing ? `${existing}, ${linkValue}` : linkValue);
	headers.set("Cache-Control", "max-age=300, stale-while-revalidate=604800");

	return headers;
}

export const loader = async (_: Route.LoaderArgs) => {
	const packageJson = await import("@ngrok/mantle/package.json");
	const commitSha = process.env.VERCEL_GIT_COMMIT_SHA;
	const deploymentId = process.env.VERCEL_DEPLOYMENT_ID;

	return {
		currentVersion: packageJson.default.version,
		commitSha,
		deploymentId,
	};
};

export function Layout({ children }: PropsWithChildren) {
	const loaderData = useRouteLoaderData<typeof loader>("root");
	const initialHtmlThemeProps = useInitialHtmlThemeProps({
		className: "h-full",
	});
	const scrollBehavior = useScrollBehavior();
	const nonce = useNonce();

	return (
		<html {...initialHtmlThemeProps} lang="en-US" dir="ltr">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<MantleThemeHeadContent nonce={nonce} />
				<PreloadInterFonts />
				<meta name="author" content="ngrok" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
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
						<NavigationProvider>
							<WwwLayout currentVersion={loaderData?.currentVersion}>
								{children}
							</WwwLayout>
						</NavigationProvider>
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

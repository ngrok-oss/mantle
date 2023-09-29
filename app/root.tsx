import { cssBundleHref } from "@remix-run/css-bundle";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { Analytics } from "@vercel/analytics/react";
import type { LinksFunction } from "@vercel/remix";
import mantleCss from "../src/mantle.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Layout } from "./components/layout";

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
	{ rel: "stylesheet", href: mantleCss },
];

export default function App() {
	return (
		<html className="h-full" lang="en-US" dir="ltr" id="ngrok">
			<head>
				<meta charSet="utf-8" />
				<meta name="author" content="ngrok" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="h-full min-h-full bg-background">
				<ThemeProvider>
					<Layout>
						<Outlet />
					</Layout>
				</ThemeProvider>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
				<Analytics />
			</body>
		</html>
	);
}

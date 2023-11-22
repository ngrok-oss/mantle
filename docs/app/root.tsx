import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import "@ngrok/mantle/core/mantle.css";
import { PreventWrongThemeFlash, ThemeProvider } from "@ngrok/mantle/theme-provider";
import { Layout } from "./components/layout";

export default function App() {
	return (
		<html className="h-full" lang="en-US" dir="ltr">
			<head>
				<PreventWrongThemeFlash />
				<meta charSet="utf-8" />
				<meta name="author" content="ngrok" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="bg-background h-full min-h-full">
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

// This file was generated by `gen-remix-routes`. DO NOT EDIT.

export const routePatterns = [
	"/",
	"/base/colors",
	"/base/typography",
	"/components/alert",
	"/components/anchor",
	"/components/button",
	"/components/card",
	"/components/checkbox",
	"/components/code-block",
	"/components/dialog",
	"/components/dropdown-menu",
	"/components/icon",
	"/components/inline-code",
	"/components/input",
	"/components/media-object",
	"/components/password-input",
	"/components/popover",
	"/components/select",
	"/components/separator",
	"/components/sheet",
	"/components/skeleton",
	"/components/table",
	"/components/text-area",
	"/components/theme-provider",
	"/components/tooltip",
] as const;

export type RoutePattern = (typeof routePatterns)[number];

export const routePattern = <T extends RoutePattern>(value: T) => value;

export const isRoutePattern = (value: unknown): value is RoutePattern =>
	typeof value === "string" && routePatterns.includes(value as RoutePattern);

export const routes = [
	"/",
	"/base/colors",
	"/base/typography",
	"/components/alert",
	"/components/anchor",
	"/components/button",
	"/components/card",
	"/components/checkbox",
	"/components/code-block",
	"/components/dialog",
	"/components/dropdown-menu",
	"/components/icon",
	"/components/inline-code",
	"/components/input",
	"/components/media-object",
	"/components/password-input",
	"/components/popover",
	"/components/select",
	"/components/separator",
	"/components/sheet",
	"/components/skeleton",
	"/components/table",
	"/components/text-area",
	"/components/theme-provider",
	"/components/tooltip",
] as const;

export type Route = (typeof routes)[number];

export const route = <T extends Route>(value: T) => value;

export const isRoute = (value: unknown): value is Route => typeof value === "string" && routes.includes(value as Route);

export const topLevelNavItems = ["/", "/base", "/components"] as const;

export type TopLevelNav = (typeof topLevelNavItems)[number];

export const topLevelNav = <T extends TopLevelNav>(value: T) => value;

export const isTopLevelNav = (value: unknown): value is TopLevelNav =>
	typeof value === "string" && topLevelNavItems.includes(value as TopLevelNav);

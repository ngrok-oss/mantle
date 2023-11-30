export const routes = [
	"/",
	"/base/colors",
	"/base/typography",
	"/components/anchor",
	"/components/card",
	"/components/code-block",
	"/components/input",
	"/components/media-object",
] as const;

export type Route = (typeof routes)[number];

export const route = <T extends Route>(value: T) => value;

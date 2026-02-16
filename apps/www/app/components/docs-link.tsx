import type { ComponentProps } from "react";

type DocsHref = `https://ngrok.com/docs/${string}`;

type Props = Omit<ComponentProps<"a">, "href"> & {
	href: DocsHref;
};

/**
 * Typesafe anchor that always points to https://ngrok.com/docs/*
 */
export function DocsLink(props: Props) {
	return <a {...props} />;
}

/**
 * Typesafe helper to form a url that points to https://ngrok.com/docs/*
 */
export function docsHref<T extends DocsHref = DocsHref>(href: T) {
	return href;
}

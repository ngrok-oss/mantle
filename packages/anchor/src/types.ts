import type { HTMLAttributeAnchorTarget } from "react";

/**
 * The rel attribute defines the relationship between a linked resource and the current document. Valid on <link>, <a>, <area>, and <form>, the supported values depend on the element on which the attribute is found.
 * Every keyword within a space-separated value should be unique within that value.
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel
 */
export type Rel =
	| "alternate"
	| "author"
	| "bookmark"
	| "canonical"
	| "dns-prefetch"
	| "external"
	| "help"
	| "icon"
	| "license"
	| "manifest"
	| "me"
	| "modulepreload"
	| "next"
	| "nofollow"
	| "noopener"
	| "noreferrer"
	| "opener"
	| "pingback"
	| "preconnect"
	| "prefetch"
	| "preload"
	| "prerender"
	| "prev"
	| "privacy-policy"
	| "search"
	| "stylesheet"
	| "tag"
	| "terms-of-service";

/**
 * Where to display the linked URL, as the name for a browsing context (a tab, window, or <iframe>).
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target
 * @default "_self"
 */
export type Target = (HTMLAttributeAnchorTarget & "_self") | "_blank" | "_parent" | "_top" | "_unfencedTop";

import type { Root, RootContent } from "mdast";
import { createElement, Fragment, type ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import { unified } from "unified";
import componentsByFile from "virtual:mdx-doc-component-imports";

type ComponentMap = Record<string, unknown>;

/**
 * Transform a raw MDX source string into markdown-only output for `.md`
 * requests. JSX elements are routed through a small handler registry so
 * that each component produces sensible markdown (or is dropped) rather
 * than being blindly rendered to a wall of HTML. Content inside fenced
 * code blocks is always preserved because it parses as `code` nodes.
 */
export function renderMdxToMarkdown(rawMdx: string, mdxFilePath: string): string {
	const components = (componentsByFile[mdxFilePath] ?? {}) as ComponentMap;

	const tree = unified()
		.use(remarkParse)
		.use(remarkFrontmatter, ["yaml", "toml"])
		.use(remarkGfm)
		.use(remarkMdx)
		.parse(rawMdx) as Root;

	transform(tree, components);

	const output = unified()
		.use(remarkStringify, {
			bullet: "-",
			fences: true,
			listItemIndent: "one",
			rule: "-",
		})
		.use(remarkFrontmatter, ["yaml", "toml"])
		.use(remarkGfm)
		.stringify(tree);

	return String(output);
}

type MdxJsxAttribute = {
	type: "mdxJsxAttribute";
	name: string;
	value: string | null | { type: "mdxJsxAttributeValueExpression"; value: string };
};

type MdxJsxAttributeLike = MdxJsxAttribute | { type: "mdxJsxExpressionAttribute" };

type MdxJsxElement = {
	type: "mdxJsxFlowElement" | "mdxJsxTextElement";
	name: string | null;
	attributes: MdxJsxAttributeLike[];
	children: RootContent[];
};

type HandlerResult =
	| { kind: "drop" }
	| { kind: "unwrap" }
	| { kind: "replace"; nodes: RootContent[] }
	| { kind: "html"; html: string };

type Handler = (node: MdxJsxElement, components: ComponentMap) => HandlerResult;

/**
 * Per-component handlers. Each handler decides how a JSX element should be
 * represented in the plain markdown output. Anything not listed here falls
 * through to {@link defaultHandler}.
 */
const handlers: Record<string, Handler> = {
	// `<Example>` wraps a live preview of a component, and is always followed
	// by a fenced code block that contains the same code in textual form.
	// Dropping it removes a wall of rendered DOM without losing information.
	Example: () => ({ kind: "drop" }),
};

/**
 * Fallback for JSX tags without a registered handler. We drop the element
 * silently but leave a trail comment so readers (especially LLMs) know
 * something was intentionally omitted rather than missing.
 */
function defaultHandler(node: MdxJsxElement): HandlerResult {
	const name = node.name ?? "Fragment";
	return {
		kind: "replace",
		nodes: [{ type: "html", value: `<!-- <${name} /> omitted in markdown output -->` }],
	};
}

function isMdxJsxElement(node: unknown): node is MdxJsxElement {
	if (!node || typeof node !== "object") {
		return false;
	}
	const type = (node as { type?: unknown }).type;
	return type === "mdxJsxFlowElement" || type === "mdxJsxTextElement";
}

function transform(root: Root, components: ComponentMap): void {
	walk(root, components);
}

function walk(parent: { children?: unknown }, components: ComponentMap): void {
	const children = parent.children;
	if (!Array.isArray(children)) {
		return;
	}

	for (let i = 0; i < children.length; i++) {
		const node = children[i];
		if (!node || typeof node !== "object") {
			continue;
		}

		const type = (node as { type?: string }).type;

		if (type === "mdxjsEsm") {
			children.splice(i, 1);
			i--;
			continue;
		}

		if (isMdxJsxElement(node)) {
			const handler = (node.name && handlers[node.name.split(".")[0] ?? ""]) || defaultHandler;
			const result = handler(node, components);

			switch (result.kind) {
				case "drop": {
					children.splice(i, 1);
					i--;
					continue;
				}
				case "unwrap": {
					children.splice(i, 1, ...node.children);
					i--;
					continue;
				}
				case "replace": {
					children.splice(i, 1, ...result.nodes);
					i += result.nodes.length - 1;
					continue;
				}
				case "html": {
					children.splice(i, 1, { type: "html", value: result.html });
					continue;
				}
			}
		}

		walk(node as { children?: unknown }, components);
	}
}

/**
 * Render a JSX element to static HTML using its resolved React component.
 * Exposed for use by future handlers that opt specific components into
 * HTML embedding (e.g. live demos with no textual equivalent).
 */
export function renderJsxElementToHtml(node: MdxJsxElement, components: ComponentMap): string {
	const element = jsxToReact(node, components);
	return renderToStaticMarkup(createElement(Fragment, null, element));
}

function jsxToReact(element: MdxJsxElement, components: ComponentMap): ReactNode {
	const name = element.name;
	const props = attributesToProps(element.attributes);
	const children = element.children.map((child, idx) => childToReact(child, components, idx));

	if (!name) {
		return createElement(Fragment, null, ...children);
	}

	const isIntrinsic = /^[a-z]/.test(name);
	const Component = isIntrinsic ? name : resolveComponent(name, components);

	if (!Component) {
		return `<!-- missing component: ${name} -->`;
	}

	return createElement(Component, props, ...children);
}

function childToReact(child: RootContent, components: ComponentMap, key: number): ReactNode {
	const typed = child as { type: string; value?: string; children?: RootContent[]; url?: string };
	const mapChildren = () =>
		(typed.children ?? []).map((grandchild, idx) => childToReact(grandchild, components, idx));

	switch (typed.type) {
		case "text":
			return typed.value ?? "";
		case "inlineCode":
			return createElement("code", { key }, typed.value);
		case "strong":
			return createElement("strong", { key }, ...mapChildren());
		case "emphasis":
			return createElement("em", { key }, ...mapChildren());
		case "delete":
			return createElement("del", { key }, ...mapChildren());
		case "link":
			return createElement("a", { key, href: typed.url }, ...mapChildren());
		case "break":
			return createElement("br", { key });
		case "paragraph":
			return createElement(Fragment, { key }, ...mapChildren());
		case "mdxJsxFlowElement":
		case "mdxJsxTextElement":
			return isMdxJsxElement(child)
				? createElement(Fragment, { key }, jsxToReact(child, components))
				: null;
		default:
			return null;
	}
}

function resolveComponent(name: string, components: ComponentMap): React.ElementType | undefined {
	const segments = name.split(".");
	const root = segments[0];
	if (!root) {
		return undefined;
	}
	let current: unknown = components[root];
	for (const segment of segments.slice(1)) {
		if (current && typeof current === "object") {
			current = (current as Record<string, unknown>)[segment];
		} else {
			return undefined;
		}
	}
	if (typeof current === "function" || (typeof current === "object" && current !== null)) {
		return current as React.ElementType;
	}
	return undefined;
}

function attributesToProps(attrs: MdxJsxAttributeLike[]): Record<string, unknown> {
	const props: Record<string, unknown> = {};
	for (const attr of attrs) {
		if (attr.type !== "mdxJsxAttribute") {
			continue;
		}
		if (attr.value === null || attr.value === undefined) {
			props[attr.name] = true;
			continue;
		}
		if (typeof attr.value === "string") {
			props[attr.name] = attr.value;
		}
	}
	return props;
}

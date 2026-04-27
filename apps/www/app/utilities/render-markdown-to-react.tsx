import type { Nodes, Root } from "mdast";
import { Fragment, type ReactNode } from "react";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";

/**
 * Render a markdown source string as React JSX, supporting just the subset
 * of CommonMark + GFM features the mantle docs site actually uses on
 * markdown-only pages (e.g. the published `CHANGELOG.md`).
 *
 * Intentionally avoids `remark-rehype` / `rehype-stringify` so we don't
 * pull in extra runtime dependencies; the existing remark pipeline is
 * sufficient to walk the mdast tree and emit React directly.
 *
 * Output uses bare intrinsic HTML tags. To match the docs site's MDX
 * styling, render the result inside an MDX provider and rely on CSS — or
 * wrap with a styled container that targets `:where(...)` descendants.
 *
 * Unsupported node types fall through to plain text or are dropped.
 */
export function renderMarkdownToReact(source: string): ReactNode {
	const tree = unified().use(remarkParse).use(remarkGfm).parse(source) as Root;
	return renderChildren(tree.children);
}

type AnyMdastNode = Nodes;

function renderChildren(children: readonly AnyMdastNode[] | undefined): ReactNode {
	if (!children) {
		return null;
	}
	return children.map((child, index) => <Fragment key={index}>{renderNode(child)}</Fragment>);
}

function renderNode(node: AnyMdastNode): ReactNode {
	switch (node.type) {
		case "heading": {
			const id = slugifyHeading(node.children);
			const inner = renderChildren(node.children);
			switch (node.depth) {
				case 1:
					return <h1 id={id}>{inner}</h1>;
				case 2:
					return <h2 id={id}>{inner}</h2>;
				case 3:
					return <h3 id={id}>{inner}</h3>;
				case 4:
					return <h4 id={id}>{inner}</h4>;
				case 5:
					return <h5 id={id}>{inner}</h5>;
				case 6:
					return <h6 id={id}>{inner}</h6>;
				default:
					return <h6 id={id}>{inner}</h6>;
			}
		}
		case "paragraph": {
			return <p>{renderChildren(node.children)}</p>;
		}
		case "text": {
			return node.value;
		}
		case "strong": {
			return <strong>{renderChildren(node.children)}</strong>;
		}
		case "emphasis": {
			return <em>{renderChildren(node.children)}</em>;
		}
		case "delete": {
			return <del>{renderChildren(node.children)}</del>;
		}
		case "inlineCode": {
			return <code>{node.value}</code>;
		}
		case "code": {
			return (
				<pre>
					<code className={node.lang ? `language-${node.lang}` : undefined}>{node.value}</code>
				</pre>
			);
		}
		case "link": {
			const isExternal = /^https?:\/\//.test(node.url);
			return (
				<a
					href={node.url}
					title={node.title ?? undefined}
					{...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
				>
					{renderChildren(node.children)}
				</a>
			);
		}
		case "list": {
			if (node.ordered) {
				return <ol start={node.start ?? undefined}>{renderChildren(node.children)}</ol>;
			}
			return <ul>{renderChildren(node.children)}</ul>;
		}
		case "listItem": {
			return <li>{renderChildren(node.children)}</li>;
		}
		case "blockquote": {
			return <blockquote>{renderChildren(node.children)}</blockquote>;
		}
		case "thematicBreak": {
			return <hr />;
		}
		case "break": {
			return <br />;
		}
		case "image": {
			return <img src={node.url} alt={node.alt ?? ""} title={node.title ?? undefined} />;
		}
		case "table": {
			const [headRow, ...bodyRows] = node.children;
			return (
				<table>
					{headRow ? (
						<thead>
							<tr>
								{headRow.children.map((cell, index) => (
									<th key={index}>{renderChildren(cell.children)}</th>
								))}
							</tr>
						</thead>
					) : null}
					<tbody>
						{bodyRows.map((row, rowIndex) => (
							<tr key={rowIndex}>
								{row.children.map((cell, cellIndex) => (
									<td key={cellIndex}>{renderChildren(cell.children)}</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			);
		}
		default: {
			// Drop unsupported node types (html, mdx, footnotes, yaml frontmatter) silently.
			return null;
		}
	}
}

function nodeToString(node: AnyMdastNode): string {
	if ("value" in node && typeof node.value === "string") {
		return node.value;
	}
	if ("children" in node && Array.isArray(node.children)) {
		return node.children.map((child) => nodeToString(child)).join("");
	}
	return "";
}

/**
 * Generate a stable, anchor-friendly slug for a heading so deep-links to
 * specific changelog versions work the same way they do in the rest of
 * the docs site.
 */
function slugifyHeading(children: readonly AnyMdastNode[]): string {
	const text = children.map((child) => nodeToString(child)).join("");
	return text
		.toLowerCase()
		.replace(/[^a-z0-9\s-]/g, "")
		.trim()
		.replace(/\s+/g, "-");
}

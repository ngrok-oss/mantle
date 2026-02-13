import type { Node, Paragraph, Parent, Root } from "mdast";
import type { MdxJsxFlowElement, MdxJsxTextElement } from "mdast-util-mdx-jsx";
import { visit } from "unist-util-visit";

/**
 * Remark plugin that automatically unwraps `<p>` (paragraph) nodes from
 * inside MDX JSX elements.
 *
 * MDX automatically wraps multiline text content in paragraph nodes. This
 * is usually desirable for prose, but causes invalid/unexpected nesting
 * inside custom components like `<PageHeader>` where you don't want
 * paragraph wrapping.
 *
 * This plugin processes ALL MDX JSX elements automatically — no sentinel
 * attribute is required in the MDX source.
 *
 * Explicit `<p>` tags written in JSX (e.g., `<p className="custom">`) are
 * not affected — they are parsed as `mdxJsxFlowElement`/`mdxJsxTextElement`
 * nodes, not mdast `paragraph` nodes, so they pass through untouched.
 */
export function remarkMdxNoParagraphWrap() {
	return (tree: Root) => {
		visit(tree, (node) => {
			if (isMdxJsxElement(node)) {
				unwrapParagraphs(node);
			}
		});
	};
}

/**
 * Recursively replace paragraph children with their own children
 * throughout the subtree of a node.
 */
function unwrapParagraphs(node: Parent) {
	let i = 0;
	while (i < node.children.length) {
		const child = node.children[i];
		if (child == null) {
			i++;
			continue;
		}

		if (isParagraph(child)) {
			// Replace the paragraph with its children
			node.children.splice(i, 1, ...child.children);
			// Don't increment i — re-check the spliced-in nodes
			continue;
		}

		// Recurse into non-paragraph children that have their own children
		if (hasChildren(child)) {
			unwrapParagraphs(child);
		}

		i++;
	}
}

/**
 * Type guard that checks if a node is an mdast `paragraph` node.
 * These are the auto-generated paragraph wrappers that MDX creates
 * around bare text content — not explicit `<p>` JSX elements.
 */
function isParagraph(node: { type: string }): node is Paragraph {
	return node.type === "paragraph";
}

/**
 * Type guard that checks if a node has a `children` array,
 * indicating it can be recursed into for further paragraph unwrapping.
 */
function hasChildren(node: { type: string; children?: unknown }): node is Parent {
	return Array.isArray(node.children);
}

type MdxJsxElement = MdxJsxFlowElement | MdxJsxTextElement;

/**
 * Type guard that checks if a node is an MDX JSX element (flow or text).
 */
function isMdxJsxElement(node: Node): node is MdxJsxElement {
	return node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement";
}

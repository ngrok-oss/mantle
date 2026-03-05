import { isSupportedLanguage } from "../components/code-block/supported-languages.js";
import { highlightWithMantleShiki } from "../server-highlighter/engine.js";
import type { LineRange } from "../components/code-block/line-numbers.js";

type HastNode = {
	type?: string;
	tagName?: string;
	value?: string;
	properties?: Record<string, unknown>;
	children?: HastNode[];
};

function walk(node: HastNode, visit: (current: HastNode) => void) {
	visit(node);
	if (Array.isArray(node.children)) {
		for (const child of node.children) {
			walk(child, visit);
		}
	}
}

function findCodeChild(node: HastNode): HastNode | undefined {
	return node.children?.find((child) => child.type === "element" && child.tagName === "code");
}

function getClassNameList(node: HastNode): string[] {
	const className = node.properties?.className;
	if (typeof className === "string") {
		return className.split(/\s+/).filter(Boolean);
	}
	if (Array.isArray(className)) {
		return className.filter((item): item is string => typeof item === "string");
	}
	return [];
}

function getLanguageFromCodeNode(codeNode: HastNode): string | undefined {
	const classNames = getClassNameList(codeNode);
	for (const className of classNames) {
		const match = className.match(/^language-([a-z0-9_-]+)$/i);
		if (match?.[1]) {
			return match[1].toLowerCase();
		}
	}
	return undefined;
}

function extractText(node: HastNode): string {
	if (node.type === "text") {
		return node.value ?? "";
	}
	if (!Array.isArray(node.children)) {
		return "";
	}
	return node.children.map((child) => extractText(child)).join("");
}

function parseShowLineNumbers(value: unknown): boolean | undefined {
	if (typeof value === "boolean") {
		return value;
	}
	if (typeof value === "string") {
		if (value === "true") {
			return true;
		}
		if (value === "false") {
			return false;
		}
	}
	return undefined;
}

function parseLineNumberStart(value: unknown): number | undefined {
	if (typeof value === "number" && Number.isFinite(value) && value > 0) {
		return Math.floor(value);
	}
	if (typeof value === "string" && /^\d+$/.test(value)) {
		return Number.parseInt(value, 10);
	}
	return undefined;
}

function parseHighlightLines(value: unknown): (LineRange | number)[] | undefined {
	const parseSingle = (item: unknown): LineRange | number | undefined => {
		if (typeof item === "number") {
			return Number.isFinite(item) && item > 0 ? item : undefined;
		}
		if (typeof item === "string") {
			const trimmed = item.trim();
			if (/^\d+$/.test(trimmed)) {
				return Number.parseInt(trimmed, 10);
			}
			if (/^\d+-\d+$/.test(trimmed)) {
				return trimmed as LineRange;
			}
		}
		return undefined;
	};

	if (typeof value === "string") {
		const parsed = value
			.split(",")
			.map((segment) => parseSingle(segment))
			.filter((item): item is LineRange | number => item != null);
		return parsed.length > 0 ? parsed : undefined;
	}

	if (!Array.isArray(value)) {
		return undefined;
	}
	const parsed = value
		.map((item) => parseSingle(item))
		.filter((item): item is LineRange | number => item != null);
	return parsed.length > 0 ? parsed : undefined;
}

/**
 * Rehype plugin that pre-renders MDX code fences with Shiki and attaches the
 * resulting HTML to `<pre>` props as `shikiPreHtml`.
 *
 * Use directly in your MDX `rehypePlugins` array, or via `mantleCodeBlockPlugins()`
 * and spread `result.rehypePlugins`.
 */
function mantleCodeRehypePlugin() {
	return async (tree: HastNode) => {
		const preNodes: HastNode[] = [];
		walk(tree, (node) => {
			if (node.type === "element" && node.tagName === "pre") {
				preNodes.push(node);
			}
		});

		for (const preNode of preNodes) {
			const codeNode = findCodeChild(preNode);
			if (!codeNode) {
				continue;
			}

			const language = getLanguageFromCodeNode(codeNode) ?? "text";
			if (!isSupportedLanguage(language)) {
				continue;
			}

			const rawCode = extractText(codeNode);
			const showLineNumbers = parseShowLineNumbers(preNode.properties?.showLineNumbers) ?? true;
			const lineNumberStart = parseLineNumberStart(preNode.properties?.lineNumberStart);
			const highlightLines = parseHighlightLines(preNode.properties?.highlightLines);
			const highlighted = await highlightWithMantleShiki({
				code: rawCode,
				highlightLines,
				language,
				lineNumberStart,
				showLineNumbers,
			});

			preNode.properties = {
				...(preNode.properties ?? {}),
				shikiCode: highlighted.code,
				shikiHighlightLines: highlighted.highlightLines,
				shikiLanguage: highlighted.language,
				shikiLineNumberStart: highlighted.lineNumberStart,
				shikiPreHtml: highlighted.html,
				shikiShowLineNumbers: highlighted.showLineNumbers,
			};
		}
	};
}

export { mantleCodeRehypePlugin };

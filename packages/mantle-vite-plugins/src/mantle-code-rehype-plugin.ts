import {
	isSupportedLanguage,
	normalizeValue,
	parseCodeBlockHighlightLines,
	parseCodeBlockLineNumberStart,
	parseCodeBlockShowLineNumbers,
	tokenizeMetastring,
} from "@ngrok/mantle/code-block";
import { parseBooleanish } from "@ngrok/mantle/types";
import { highlightWithMantleShiki } from "./server-highlighter/engine.js";

type HastNode = {
	data?: Record<string, unknown>;
	type?: string;
	tagName?: string;
	value?: string;
	properties?: Record<string, unknown>;
	children?: HastNode[];
};
const excludedRehypeCodeFenceLanguages = new Set(["mermaid"]);

function parseCodeBlockMode(value: unknown): "cli" | "file" | "traffic-policy" | undefined {
	if (value === "cli" || value === "file" || value === "traffic-policy") {
		return value;
	}
	return undefined;
}

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

function getCodeFenceMeta(codeNode: HastNode): string | undefined {
	const fromData = codeNode.data?.meta;
	if (typeof fromData === "string") {
		return fromData;
	}
	const fromProps = codeNode.properties?.meta;
	if (typeof fromProps === "string") {
		return fromProps;
	}
	return undefined;
}

function getMetaValue(meta: string | undefined, key: string): string | undefined {
	if (!meta) {
		return undefined;
	}
	const tokens = tokenizeMetastring(meta);
	for (const token of tokens) {
		const separatorIndex = token.indexOf("=");
		if (separatorIndex === -1) {
			continue;
		}
		const tokenKey = token.slice(0, separatorIndex);
		if (tokenKey !== key) {
			continue;
		}
		return normalizeValue(token.slice(separatorIndex + 1));
	}
	return undefined;
}

function hasMetaFlag(meta: string | undefined, key: string): boolean {
	if (!meta) {
		return false;
	}
	const tokens = tokenizeMetastring(meta);
	return tokens.includes(key);
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

/**
 * Rehype plugin that pre-renders MDX code fences with Shiki and attaches the
 * resulting HTML to `<pre>` props as `mantlePreHtml`.
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

		await Promise.all(
			preNodes.map(async (preNode) => {
				const codeNode = findCodeChild(preNode);
				if (!codeNode) {
					return;
				}

				const language = getLanguageFromCodeNode(codeNode) ?? "text";
				if (excludedRehypeCodeFenceLanguages.has(language)) {
					return;
				}
				if (!isSupportedLanguage(language)) {
					return;
				}

				const rawCode = extractText(codeNode);
				const meta = getCodeFenceMeta(codeNode);
				const showLineNumbers =
					parseCodeBlockShowLineNumbers(preNode.properties?.showLineNumbers) ??
					parseCodeBlockShowLineNumbers(getMetaValue(meta, "showLineNumbers")) ??
					true;
				const lineNumberStart =
					parseCodeBlockLineNumberStart(preNode.properties?.lineNumberStart) ??
					parseCodeBlockLineNumberStart(getMetaValue(meta, "lineNumberStart"));
				const highlightLines =
					parseCodeBlockHighlightLines(preNode.properties?.highlightLines) ??
					parseCodeBlockHighlightLines(preNode.properties?.highlight) ??
					parseCodeBlockHighlightLines(getMetaValue(meta, "highlightLines")) ??
					parseCodeBlockHighlightLines(getMetaValue(meta, "highlight"));
				const collapsible =
					preNode.properties?.collapsible ?? (hasMetaFlag(meta, "collapsible") ? true : undefined);
				const disableCopy =
					typeof preNode.properties?.disableCopy === "string" ||
					typeof preNode.properties?.disableCopy === "boolean"
						? parseBooleanish(preNode.properties.disableCopy)
						: hasMetaFlag(meta, "disableCopy")
							? true
							: (parseBooleanish(getMetaValue(meta, "disableCopy")) ?? undefined);
				const mode =
					parseCodeBlockMode(preNode.properties?.mode) ??
					parseCodeBlockMode(getMetaValue(meta, "mode"));
				const title =
					typeof preNode.properties?.title === "string"
						? preNode.properties.title
						: getMetaValue(meta, "title");
				const highlighted = await highlightWithMantleShiki({
					code: rawCode,
					highlightLines,
					language,
					lineNumberStart,
					showLineNumbers,
				});

				preNode.properties = {
					...(preNode.properties ?? {}),
					collapsible,
					disableCopy,
					mode,
					title,
					mantleCode: highlighted.code,
					mantleCollapsible: collapsible,
					mantleDisableCopy: disableCopy,
					mantleHighlightLines: highlighted.highlightLines,
					mantleLanguage: highlighted.language,
					mantleLineNumberStart: highlighted.lineNumberStart,
					mantleMode: mode,
					mantlePreHtml: highlighted.html,
					mantleShowLineNumbers: highlighted.showLineNumbers,
					mantleTitle: title,
				};
			}),
		);
	};
}

export { mantleCodeRehypePlugin };

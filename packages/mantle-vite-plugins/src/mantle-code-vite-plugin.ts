import MagicString from "magic-string";
import {
	inferIndentation,
	isIndentation,
	isSupportedLanguage,
	type Indentation,
} from "@ngrok/mantle/highlight-utils";
import { parseSync } from "oxc-parser";
import type { Plugin } from "vite";
import { highlightWithMantleShiki } from "@ngrok/mantle-server-syntax-highlighter";

type ParsedMantleCodeOptions = {
	highlightLines: (number | `${number}-${number}`)[] | undefined;
	indentation: Indentation | undefined;
	lineNumberStart: number | undefined;
	showLineNumbers: boolean | undefined;
};

type Range = {
	start: number;
	end: number;
};

type ParsedJsxCodePropsResult = ParsedMantleCodeOptions & {
	attributeRemovalRanges: Range[];
};

type OxcNode = {
	type: string;
	start: number;
	end: number;
	[key: string]: unknown;
};

type OxcExpression = OxcNode;

type OxcLiteral = OxcNode & {
	type: "Literal";
	raw?: string;
	value: unknown;
};

type OxcIdentifier = OxcNode & {
	type: "Identifier";
	name: string;
};

type OxcArrayExpression = OxcNode & {
	type: "ArrayExpression";
	elements: Array<OxcExpression | null>;
};

type OxcObjectProperty = OxcNode & {
	type: "Property";
	computed: boolean;
	key: OxcExpression;
	kind: string;
	shorthand: boolean;
	value: OxcExpression;
};

type OxcObjectExpression = OxcNode & {
	type: "ObjectExpression";
	properties: OxcNode[];
};

type OxcCallExpression = OxcNode & {
	type: "CallExpression";
	arguments: OxcExpression[];
	callee: OxcExpression;
};

type OxcTemplateElement = OxcNode & {
	type: "TemplateElement";
	value: {
		cooked: string | null;
		raw: string;
	};
};

type OxcTemplateLiteral = OxcNode & {
	type: "TemplateLiteral";
	expressions: OxcExpression[];
	quasis: OxcTemplateElement[];
};

type OxcTaggedTemplateExpression = OxcNode & {
	type: "TaggedTemplateExpression";
	tag: OxcExpression;
	quasi: OxcTemplateLiteral;
};

type MantleCodeTaggedTemplateExpression = OxcTaggedTemplateExpression & {
	tag: OxcCallExpression;
};

type OxcJSXIdentifier = OxcNode & {
	type: "JSXIdentifier";
	name: string;
};

type OxcJSXMemberExpression = OxcNode & {
	type: "JSXMemberExpression";
	object: OxcJSXIdentifier | OxcJSXMemberExpression;
	property: OxcJSXIdentifier;
};

type OxcJSXExpressionContainer = OxcNode & {
	type: "JSXExpressionContainer";
	expression: OxcExpression;
};

type OxcJSXAttribute = OxcNode & {
	type: "JSXAttribute";
	name: OxcJSXIdentifier;
	value: OxcLiteral | OxcJSXExpressionContainer | null;
};

type OxcJSXOpeningElement = OxcNode & {
	type: "JSXOpeningElement";
	attributes: OxcNode[];
	name: OxcJSXIdentifier | OxcJSXMemberExpression;
};

function escapeForTemplateLiteral(str: string): string {
	return str.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function isNode(value: unknown): value is OxcNode {
	return (
		typeof value === "object" &&
		value != null &&
		"type" in value &&
		typeof (value as { type?: unknown }).type === "string" &&
		"start" in value &&
		typeof (value as { start?: unknown }).start === "number" &&
		"end" in value &&
		typeof (value as { end?: unknown }).end === "number"
	);
}

function isLiteral(node: OxcNode | null | undefined): node is OxcLiteral {
	return node?.type === "Literal";
}

function isIdentifier(node: OxcNode | null | undefined): node is OxcIdentifier {
	return node?.type === "Identifier";
}

function isArrayExpression(node: OxcNode | null | undefined): node is OxcArrayExpression {
	return node?.type === "ArrayExpression";
}

function isObjectExpression(node: OxcNode | null | undefined): node is OxcObjectExpression {
	return node?.type === "ObjectExpression";
}

function isProperty(node: OxcNode | null | undefined): node is OxcObjectProperty {
	return node?.type === "Property";
}

function isCallExpression(node: OxcNode | null | undefined): node is OxcCallExpression {
	return node?.type === "CallExpression";
}

function isTaggedTemplateExpression(
	node: OxcNode | null | undefined,
): node is OxcTaggedTemplateExpression {
	return node?.type === "TaggedTemplateExpression";
}

function isJSXOpeningElement(node: OxcNode | null | undefined): node is OxcJSXOpeningElement {
	return node?.type === "JSXOpeningElement";
}

function isJSXAttribute(node: OxcNode | null | undefined): node is OxcJSXAttribute {
	return node?.type === "JSXAttribute";
}

function isJSXExpressionContainer(
	node: OxcNode | null | undefined,
): node is OxcJSXExpressionContainer {
	return node?.type === "JSXExpressionContainer";
}

function walk(node: unknown, visit: (node: OxcNode) => void) {
	if (Array.isArray(node)) {
		for (const item of node) {
			walk(item, visit);
		}
		return;
	}

	if (!isNode(node)) {
		return;
	}

	visit(node);
	for (const value of Object.values(node)) {
		if (Array.isArray(value)) {
			for (const item of value) {
				walk(item, visit);
			}
			continue;
		}

		if (isNode(value)) {
			walk(value, visit);
		}
	}
}

function getCalleeName(node: OxcExpression): string | undefined {
	return isIdentifier(node) ? node.name : undefined;
}

function isMantleCodeTag(node: OxcExpression): node is OxcCallExpression {
	return isCallExpression(node) && getCalleeName(node.callee) === "mantleCode";
}

function isMantleCodeTaggedTemplateExpression(
	node: OxcNode | null | undefined,
): node is MantleCodeTaggedTemplateExpression {
	return isTaggedTemplateExpression(node) && isMantleCodeTag(node.tag);
}

function isStringLiteral(node: OxcNode | null | undefined): node is OxcLiteral {
	return isLiteral(node) && typeof node.value === "string";
}

function readStaticBoolean(node: OxcNode | null | undefined): boolean | undefined {
	return isLiteral(node) && typeof node.value === "boolean" ? node.value : undefined;
}

function readStaticPositiveInt(node: OxcNode | null | undefined): number | undefined {
	if (!isLiteral(node) || typeof node.value !== "number") {
		return undefined;
	}
	if (!Number.isFinite(node.value) || node.value <= 0) {
		return undefined;
	}
	return Math.floor(node.value);
}

function readStaticIndentation(node: OxcNode | null | undefined): Indentation | undefined {
	if (!isStringLiteral(node) || !isIndentation(node.value)) {
		return undefined;
	}
	return node.value;
}

function parseHighlightLinesArray(
	input: OxcNode | null | undefined,
): (number | `${number}-${number}`)[] | undefined {
	if (!isArrayExpression(input)) {
		return undefined;
	}

	const parsed = input.elements
		.map((item) => {
			if (item == null || !isLiteral(item)) {
				return undefined;
			}
			if (typeof item.value === "number") {
				return Number.isFinite(item.value) && item.value > 0 ? item.value : undefined;
			}
			if (typeof item.value === "string" && /^\d+-\d+$/.test(item.value)) {
				return item.value as `${number}-${number}`;
			}
			return undefined;
		})
		.filter((item): item is number | `${number}-${number}` => item != null);

	return parsed.length > 0 ? parsed : [];
}

function getObjectPropertyName(property: OxcObjectProperty): string | undefined {
	if (property.computed) {
		return undefined;
	}
	if (isIdentifier(property.key)) {
		return property.key.name;
	}
	return isStringLiteral(property.key) ? (property.key.value as string) : undefined;
}

function parseMantleCodeOptions(node: OxcNode | null | undefined): ParsedMantleCodeOptions {
	if (!isObjectExpression(node)) {
		return {
			highlightLines: undefined,
			indentation: undefined,
			lineNumberStart: undefined,
			showLineNumbers: undefined,
		};
	}

	let highlightLines: ParsedMantleCodeOptions["highlightLines"];
	let indentation: ParsedMantleCodeOptions["indentation"];
	let lineNumberStart: ParsedMantleCodeOptions["lineNumberStart"];
	let showLineNumbers: ParsedMantleCodeOptions["showLineNumbers"];

	for (const property of node.properties) {
		if (!isProperty(property) || property.kind !== "init") {
			continue;
		}
		const propertyName = getObjectPropertyName(property);
		if (propertyName == null) {
			continue;
		}

		switch (propertyName) {
			case "highlightLines":
				highlightLines = parseHighlightLinesArray(property.value);
				break;
			case "indentation":
				indentation = readStaticIndentation(property.value);
				break;
			case "lineNumberStart":
				lineNumberStart = readStaticPositiveInt(property.value);
				break;
			case "showLineNumbers":
				showLineNumbers = readStaticBoolean(property.value);
				break;
		}
	}

	return {
		highlightLines:
			highlightLines != null && highlightLines.length > 0 ? highlightLines : undefined,
		indentation,
		lineNumberStart,
		showLineNumbers,
	};
}

function getJsxElementName(name: OxcJSXIdentifier | OxcJSXMemberExpression): string | undefined {
	if (name.type === "JSXIdentifier") {
		return name.name;
	}
	const objectName = getJsxElementName(name.object);
	return objectName != null ? `${objectName}.${name.property.name}` : undefined;
}

function getJsxAttributeName(attribute: OxcJSXAttribute): string {
	return attribute.name.name;
}

function readJsxAttributeExpression(attribute: OxcJSXAttribute): OxcNode | undefined {
	if (attribute.value == null) {
		return undefined;
	}
	if (attribute.value.type === "Literal") {
		return attribute.value;
	}
	if (isJSXExpressionContainer(attribute.value)) {
		return attribute.value.expression;
	}
	return undefined;
}

function getAttributeRemovalRange(
	attribute: OxcJSXAttribute,
	source: string,
	openingElement: OxcJSXOpeningElement,
): Range {
	let start = attribute.start;
	while (start > openingElement.name.end && /\s/.test(source[start - 1] ?? "")) {
		start -= 1;
	}
	return { end: attribute.end, start };
}

function parseJsxCodeProps(
	openingElement: OxcJSXOpeningElement,
	source: string,
): { taggedTemplateStart: number; props: ParsedJsxCodePropsResult } | undefined {
	if (getJsxElementName(openingElement.name) !== "CodeBlock.Code") {
		return undefined;
	}

	let highlightLines: ParsedMantleCodeOptions["highlightLines"];
	let indentation: ParsedMantleCodeOptions["indentation"];
	let lineNumberStart: ParsedMantleCodeOptions["lineNumberStart"];
	let showLineNumbers: ParsedMantleCodeOptions["showLineNumbers"];
	let taggedTemplateStart: number | undefined;
	const attributeRemovalRanges: Range[] = [];

	for (const attributeNode of openingElement.attributes) {
		if (!isJSXAttribute(attributeNode)) {
			continue;
		}
		const attributeName = getJsxAttributeName(attributeNode);
		const expression = readJsxAttributeExpression(attributeNode);

		if (attributeName === "value" && isMantleCodeTaggedTemplateExpression(expression)) {
			taggedTemplateStart = expression.start;
			continue;
		}

		switch (attributeName) {
			case "highlightLines": {
				const parsed = parseHighlightLinesArray(expression);
				if (parsed == null) {
					break;
				}
				highlightLines = parsed.length > 0 ? parsed : undefined;
				attributeRemovalRanges.push(
					getAttributeRemovalRange(attributeNode, source, openingElement),
				);
				break;
			}
			case "indentation": {
				const parsed = readStaticIndentation(expression);
				if (parsed == null) {
					break;
				}
				indentation = parsed;
				attributeRemovalRanges.push(
					getAttributeRemovalRange(attributeNode, source, openingElement),
				);
				break;
			}
			case "lineNumberStart": {
				const parsed = readStaticPositiveInt(expression);
				if (parsed == null) {
					break;
				}
				lineNumberStart = parsed;
				attributeRemovalRanges.push(
					getAttributeRemovalRange(attributeNode, source, openingElement),
				);
				break;
			}
			case "showLineNumbers": {
				const parsed = attributeNode.value == null ? true : readStaticBoolean(expression);
				if (parsed == null) {
					break;
				}
				showLineNumbers = parsed;
				attributeRemovalRanges.push(
					getAttributeRemovalRange(attributeNode, source, openingElement),
				);
				break;
			}
		}
	}

	if (taggedTemplateStart == null) {
		return undefined;
	}

	return {
		taggedTemplateStart,
		props: {
			attributeRemovalRanges,
			highlightLines,
			indentation,
			lineNumberStart,
			showLineNumbers,
		},
	};
}

function mergeMantleCodeOptions({
	componentProps,
	mantleCodeOptions,
}: {
	componentProps: ParsedMantleCodeOptions;
	mantleCodeOptions: ParsedMantleCodeOptions;
}): ParsedMantleCodeOptions {
	return {
		highlightLines: componentProps.highlightLines ?? mantleCodeOptions.highlightLines,
		indentation: componentProps.indentation ?? mantleCodeOptions.indentation,
		lineNumberStart: componentProps.lineNumberStart ?? mantleCodeOptions.lineNumberStart,
		showLineNumbers: componentProps.showLineNumbers ?? mantleCodeOptions.showLineNumbers,
	};
}

function mantleCodeVitePlugin(): Plugin {
	return {
		name: "vite-plugin-mantle-code-block",

		async transform(code, id) {
			if (!/\.[jt]sx?$/.test(id)) {
				return;
			}
			if (!code.includes("mantleCode")) {
				return;
			}

			const parseResult = parseSync(id, code);
			if (parseResult.errors.length > 0) {
				this.warn(
					`mantleCodeVitePlugin: failed to parse ${id}; skipping transform (${parseResult.errors.length} parser error${parseResult.errors.length === 1 ? "" : "s"})`,
				);
				return;
			}

			const ms = new MagicString(code);
			let didTransform = false;
			const taggedTemplates: MantleCodeTaggedTemplateExpression[] = [];
			const jsxPropsByTaggedTemplateStart = new Map<number, ParsedJsxCodePropsResult>();

			walk(parseResult.program, (node) => {
				if (isJSXOpeningElement(node)) {
					const parsed = parseJsxCodeProps(node, code);
					if (parsed != null) {
						jsxPropsByTaggedTemplateStart.set(parsed.taggedTemplateStart, parsed.props);
					}
					return;
				}

				if (isMantleCodeTaggedTemplateExpression(node)) {
					taggedTemplates.push(node);
				}
			});

			for (const node of taggedTemplates) {
				const languageArg = node.tag.arguments[0];
				if (!isStringLiteral(languageArg)) {
					this.warn(
						`mantleCodeVitePlugin: mantleCode language must be a static string literal in ${id} at offset ${node.start} - skipping`,
					);
					continue;
				}

				const language = languageArg.value;
				if (!isSupportedLanguage(language)) {
					this.warn(`mantleCodeVitePlugin: unsupported language "${language}" in ${id} - skipping`);
					continue;
				}

				const parsedOptions = parseMantleCodeOptions(node.tag.arguments[1]);
				const componentProps = jsxPropsByTaggedTemplateStart.get(node.start) ?? {
					attributeRemovalRanges: [],
					highlightLines: undefined,
					indentation: undefined,
					lineNumberStart: undefined,
					showLineNumbers: undefined,
				};
				const effectiveOptions = mergeMantleCodeOptions({
					componentProps,
					mantleCodeOptions: parsedOptions,
				});

				let placeholderCode =
					node.quasi.quasis[0]?.value.cooked ?? node.quasi.quasis[0]?.value.raw ?? "";
				for (let index = 0; index < node.quasi.expressions.length; index += 1) {
					const nextQuasi = node.quasi.quasis[index + 1];
					placeholderCode += `SHIKI_VAL_${index}`;
					placeholderCode += nextQuasi?.value.cooked ?? nextQuasi?.value.raw ?? "";
				}

				let normalizedPlaceholder: string;
				let shikiHtml: string;
				try {
					const highlighted = await highlightWithMantleShiki({
						code: placeholderCode,
						highlightLines: effectiveOptions.highlightLines,
						indentation: inferIndentation(language, effectiveOptions.indentation),
						language,
						lineNumberStart: effectiveOptions.lineNumberStart,
						showLineNumbers: effectiveOptions.showLineNumbers,
					});
					normalizedPlaceholder = highlighted.code;
					shikiHtml = highlighted.html;
				} catch (error) {
					this.warn(
						`mantleCodeVitePlugin: Shiki failed for language "${language}" in ${id}: ${error}`,
					);
					continue;
				}

				for (const range of [...componentProps.attributeRemovalRanges].sort(
					(a, b) => b.start - a.start,
				)) {
					ms.remove(range.start, range.end);
				}

				const escapedHtml = escapeForTemplateLiteral(shikiHtml);
				const escapedCode = escapeForTemplateLiteral(normalizedPlaceholder);
				const preValsArray =
					node.quasi.expressions.length === 0
						? "undefined"
						: `[${node.quasi.expressions.map((expression) => code.slice(expression.start, expression.end)).join(",")}]`;
				const replacement = `{language:${JSON.stringify(language)},code:\`${escapedCode}\`,"~preHtml":\`${escapedHtml}\`,"~preVals":${preValsArray},"~showLineNumbers":${JSON.stringify(effectiveOptions.showLineNumbers)},"~highlightLines":${JSON.stringify(effectiveOptions.highlightLines)},"~lineNumberStart":${JSON.stringify(effectiveOptions.lineNumberStart)}}`;

				ms.overwrite(node.start, node.end, replacement);
				didTransform = true;
			}

			if (!didTransform) {
				return;
			}

			return {
				code: ms.toString(),
				map: ms.generateMap({ hires: true }),
			};
		},
	};
}

export { mantleCodeVitePlugin };

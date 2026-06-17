import type { ComponentPropSchema, PropEntry } from "@ngrok/mantle/types";
import type { PhrasingContent, Root, RootContent, Table, TableRow } from "mdast";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import { unified } from "unified";
import {
	formatPropDefault,
	formatPropDescription,
	getComponentPropSchema,
	propLabel,
	splitInlineCode,
} from "./component-props";

/**
 * Transform a raw MDX source string into markdown-only output for `.md`
 * requests. JSX elements are routed through a small handler registry so
 * that each component produces sensible markdown (or is dropped) rather
 * than being blindly rendered to a wall of HTML. Content inside fenced
 * code blocks is always preserved because it parses as `code` nodes.
 *
 * Handlers that need to render a component to HTML can lazily import the
 * `virtual:mdx-doc-component-imports` module on demand — we intentionally
 * do not import it here so the server bundle does not pull in the entire
 * set of doc-only React components for every `.md` request.
 */
export function renderMdxToMarkdown(rawMdx: string): string {
	const tree = unified()
		.use(remarkParse)
		.use(remarkFrontmatter, ["yaml", "toml"])
		.use(remarkGfm)
		.use(remarkMdx)
		.parse(rawMdx) as Root;

	transform(tree);

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

type Handler = (node: MdxJsxElement) => HandlerResult;

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
	// `<AutoPropsTable component="X" />` renders an HTML prop table from the
	// build-time artifact. Serialize it to a real GFM markdown table so the
	// agent-facing `.md` twin keeps the same prop reference the page shows.
	AutoPropsTable: (node) => autoPropsTableHandler(node),
};

/**
 * Read a string-valued JSX attribute, e.g. the `"Button"` in
 * `<AutoPropsTable component="Button" />`. Returns `undefined` for missing
 * attributes or expression-valued ones (`component={x}`), which the artifact
 * lookup cannot resolve at markdown-render time.
 */
function readStringAttribute(node: MdxJsxElement, name: string): string | undefined {
	for (const attribute of node.attributes) {
		if (attribute.type === "mdxJsxAttribute" && attribute.name === name) {
			return typeof attribute.value === "string" ? attribute.value : undefined;
		}
	}
	return undefined;
}

/**
 * Build the phrasing children for a description cell, turning backtick-delimited
 * runs into `inlineCode` nodes (so the `.md` twin shows real inline code, not
 * escaped backticks) and the rest into `text`. remark-stringify escapes any
 * `|` inside these nodes so the table stays well-formed.
 */
function descriptionPhrasing(description: string): PhrasingContent[] {
	const segments = splitInlineCode(description);
	return segments.map(
		(segment): PhrasingContent =>
			segment.code
				? { type: "inlineCode", value: segment.value }
				: { type: "text", value: segment.value },
	);
}

/** Build one body row of the prop table for a single prop entry. */
function propTableRow(prop: PropEntry): TableRow {
	const defaultText = formatPropDefault(prop);
	const description = formatPropDescription(prop);
	return {
		type: "tableRow",
		children: [
			{ type: "tableCell", children: [{ type: "inlineCode", value: propLabel(prop) }] },
			{ type: "tableCell", children: [{ type: "inlineCode", value: prop.type }] },
			{
				type: "tableCell",
				children: defaultText !== "" ? [{ type: "inlineCode", value: defaultText }] : [],
			},
			{ type: "tableCell", children: descriptionPhrasing(description) },
		],
	};
}

/** Build the GFM `table` node (header + one row per prop) for a schema. */
function propTable(schema: ComponentPropSchema): Table {
	const headerRow: TableRow = {
		type: "tableRow",
		children: ["Prop", "Type", "Default", "Description"].map((label) => ({
			type: "tableCell",
			children: [{ type: "text", value: label }],
		})),
	};
	return {
		type: "table",
		align: [null, null, null, null],
		children: [headerRow, ...schema.props.map(propTableRow)],
	};
}

/**
 * The inheritance label and prose-line suffix for a schema, or `undefined` when
 * the component inherits nothing. `extends` (a named type like
 * `"Radix Dialog.Content"`) wins over `hostElement` (an intrinsic element like
 * `"div"`); they are mutually exclusive by generator design. The suffix is
 * ", plus:" when the component adds its own props (a table follows) or "."
 * when it is a passthrough that adds none — mirroring the HTML `ExtendsNote` /
 * `HostElementNote` wording exactly so the two renderings stay in sync.
 */
function inheritanceNote(
	schema: ComponentPropSchema,
): { label: string; suffix: string } | undefined {
	const label = schema.extends ?? schema.hostElement;
	if (label == null) {
		return undefined;
	}
	return { label, suffix: schema.props.length > 0 ? ", plus:" : "." };
}

/**
 * Serialize `<AutoPropsTable component="X" />` to a markdown prop table plus an
 * optional "All props from `<label>`, plus:" prose line (or just "All props
 * from `<label>`." for a passthrough that adds no own props). Degrades to the
 * default "omitted" comment when the component name is missing/unresolvable or
 * the artifact has no entry — mirroring the HTML component's graceful fallback
 * so the `.md` twin never crashes or emits a half-built table.
 */
function autoPropsTableHandler(node: MdxJsxElement): HandlerResult {
	const component = readStringAttribute(node, "component");
	const schema = component != null ? getComponentPropSchema(component) : undefined;
	if (
		!schema ||
		(schema.props.length === 0 && schema.extends == null && schema.hostElement == null)
	) {
		return defaultHandler(node);
	}

	const nodes: RootContent[] = [];
	const note = inheritanceNote(schema);
	if (note != null) {
		nodes.push({
			type: "paragraph",
			children: [
				{ type: "text", value: "All props from " },
				{ type: "inlineCode", value: note.label },
				{ type: "text", value: note.suffix },
			],
		});
	}
	if (schema.props.length > 0) {
		nodes.push(propTable(schema));
	}

	return { kind: "replace", nodes };
}

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

function transform(root: Root): void {
	walk(root);
}

function walk(parent: { children?: unknown }): void {
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
			const result = handler(node);

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

		walk(node as { children?: unknown });
	}
}

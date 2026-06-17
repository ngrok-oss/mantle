import { Anchor } from "@ngrok/mantle/anchor";
import { Code } from "@ngrok/mantle/code";
import { Table } from "@ngrok/mantle/table";
import type { ComponentPropSchema } from "@ngrok/mantle/types";
import type { ReactNode } from "react";
import {
	formatPropDefault,
	formatPropDescription,
	getComponentPropSchema,
	propLabel,
	splitInlineCode,
} from "~/utilities/component-props";

type AutoPropsTableProps = {
	/**
	 * The component's export name — the key under which the build-time
	 * prop-extraction artifact stores its schema. For a single component this is
	 * its PascalCase name (e.g. `"Button"`); for a compound sub-component it is
	 * the dotted member path (e.g. `"AlertDialog.Content"`).
	 */
	component: string;
};

/**
 * Render a component's API reference table from the build-time prop-extraction
 * artifact (`packages/mantle/src/__generated__/component-props.json`) instead
 * of a hand-authored markdown table. The same artifact backs the
 * `/api/components.json` manifest and the `.md` twin serialization, so the
 * HTML table, the agent-facing markdown, and the JSON manifest cannot drift.
 *
 * Renders Prop / Type / Default / Description columns and, when the component
 * spreads onto a host element, an "All props from `<el>`, plus:" prose line.
 * Degrades to a short notice (no crash, no prerender failure) when the artifact
 * has no entry for `component`.
 *
 * @example
 * // In an MDX docs page (AutoPropsTable is globally injected by MdxProvider):
 * <AutoPropsTable component="Button" />
 */
export function AutoPropsTable({ component }: AutoPropsTableProps) {
	const schema = getComponentPropSchema(component);

	// Passthrough sub-components (e.g. `AlertDialog.Trigger`) carry no own props
	// but still describe an inherited surface via `extends`/`hostElement`, so
	// only fall back when there is nothing at all to render.
	if (
		!schema ||
		(schema.props.length === 0 && schema.extends == null && schema.hostElement == null)
	) {
		return (
			<p className="mb-4 text-body">
				No prop reference is available for <Code className="text-strong">{component}</Code> yet.
			</p>
		);
	}

	const hasOwnProps = schema.props.length > 0;

	return (
		<>
			{renderInheritanceNote(schema)}
			{hasOwnProps && (
				<Table.Root className="my-8">
					<Table.Element>
						<Table.Head>
							<Table.Row>
								<Table.Header>Prop</Table.Header>
								<Table.Header>Type</Table.Header>
								<Table.Header>Default</Table.Header>
								<Table.Header>Description</Table.Header>
							</Table.Row>
						</Table.Head>
						<Table.Body>
							{schema.props.map((prop) => {
								const defaultText = formatPropDefault(prop);
								const description = formatPropDescription(prop);
								return (
									<Table.Row key={prop.name}>
										<Table.Cell className="px-4 py-3 align-top font-sans text-sm">
											<Code className="whitespace-nowrap text-strong">{propLabel(prop)}</Code>
										</Table.Cell>
										<Table.Cell className="px-4 py-3 align-top font-sans text-sm">
											<Code className="text-strong">{prop.type}</Code>
										</Table.Cell>
										<Table.Cell className="px-4 py-3 align-top font-sans text-sm">
											{defaultText !== "" ? (
												<Code className="whitespace-nowrap text-strong">{defaultText}</Code>
											) : null}
										</Table.Cell>
										<Table.Cell className="px-4 py-3 align-top font-sans text-sm">
											{renderInlineMarkdown(description)}
										</Table.Cell>
									</Table.Row>
								);
							})}
						</Table.Body>
					</Table.Element>
				</Table.Root>
			)}
		</>
	);
}

/**
 * Render the single inheritance prose line shown above a prop table, or `null`
 * when the component inherits nothing. A schema's `extends` and `hostElement`
 * are mutually exclusive by generator design; `extends` wins defensively if
 * both are somehow present. Kept as a flat helper (rather than a nested ternary
 * in JSX) so the render body stays readable.
 *
 * @example
 * renderInheritanceNote({ extends: "Radix Dialog.Content", props: [{ name: "preferredWidth" }] });
 * // <ExtendsNote extendsLabel="Radix Dialog.Content" hasOwnProps />
 */
function renderInheritanceNote(schema: ComponentPropSchema): ReactNode {
	const hasOwnProps = schema.props.length > 0;
	if (schema.extends != null) {
		return <ExtendsNote extendsLabel={schema.extends} hasOwnProps={hasOwnProps} />;
	}
	if (schema.hostElement != null) {
		return <HostElementNote hostElement={schema.hostElement} hasOwnProps={hasOwnProps} />;
	}
	return null;
}

/**
 * Known intrinsic host elements get a deep link to their MDN attributes
 * reference; anything else renders as plain inline code. Keeps the
 * "All props from `<el>`, plus:" prose informative without hardcoding a URL
 * for every element.
 */
const mdnElementAttributesUrl: Record<string, string> = {
	a: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes",
	button: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes",
	input: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes",
	textarea: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes",
};

type HostElementNoteProps = {
	/** The intrinsic element a component spreads its props onto (e.g. `"button"`). */
	hostElement: string;
	/**
	 * Whether the component adds its own props on top of the inherited ones. When
	 * `true` the line ends with ", plus:" (a table follows); when `false` it is a
	 * standalone sentence ending in a period (a passthrough, no table).
	 */
	hasOwnProps: boolean;
};

/**
 * The "All props from `<el>`, plus:" prose line shown above a prop table when
 * the component forwards its remaining props to an intrinsic host element.
 * Reads as a standalone sentence ("All props from `<el>`.") for passthroughs
 * that add no own props.
 *
 * @example
 * <HostElementNote hostElement="div" hasOwnProps />
 * // → "All props from `div`, plus:"
 */
function HostElementNote({ hostElement, hasOwnProps }: HostElementNoteProps) {
	const href = mdnElementAttributesUrl[hostElement];
	return (
		<p className="mb-4 leading-relaxed text-body">
			All props from{" "}
			{href != null ? (
				<Anchor href={href}>
					<Code className="text-strong">{hostElement}</Code>
				</Anchor>
			) : (
				<Code className="text-strong">{hostElement}</Code>
			)}
			{hasOwnProps ? ", plus:" : "."}
		</p>
	);
}

type ExtendsNoteProps = {
	/**
	 * The named type the component extends, e.g. `"Radix Dialog.Content"` or
	 * `"Button"`, as derived by the codegen and stored on the schema's `extends`.
	 */
	extendsLabel: string;
	/**
	 * Whether the component adds its own props on top of the inherited ones. When
	 * `true` the line ends with ", plus:" (a table follows); when `false` it is a
	 * standalone sentence ending in a period (a passthrough, no table).
	 */
	hasOwnProps: boolean;
};

/**
 * The "All props from `<label>`, plus:" prose line shown above a prop table when
 * a compound sub-component extends another primitive (a Radix member like
 * `Radix Dialog.Content`, or a mantle component like `Button`). Reads as a
 * standalone sentence ("All props from `<label>`.") for passthroughs that add
 * no own props (e.g. `AlertDialog.Trigger`).
 *
 * @example
 * <ExtendsNote extendsLabel="Radix Dialog.Trigger" hasOwnProps={false} />
 * // → "All props from `Radix Dialog.Trigger`."
 */
function ExtendsNote({ extendsLabel, hasOwnProps }: ExtendsNoteProps) {
	return (
		<p className="mb-4 leading-relaxed text-body">
			All props from <Code className="text-strong">{extendsLabel}</Code>
			{hasOwnProps ? ", plus:" : "."}
		</p>
	);
}

/**
 * Render a description string that may contain backtick-delimited inline code
 * (e.g. ``"Setting `isLoading` will…"``) as a sequence of text and
 * {@link Code} spans, using the same {@link splitInlineCode} segmentation the
 * `.md`-twin serializer uses so the two renderings stay in sync.
 */
function renderInlineMarkdown(text: string): ReactNode {
	const segments = splitInlineCode(text);
	if (segments.length === 1 && !segments[0]?.code) {
		return text;
	}
	return segments.map((segment, index) => {
		// Segments come from a deterministic split of a fixed string and are never
		// reordered, but include the value so the key stays unique across repeated
		// runs (and satisfies the no-array-index-key lint).
		const key = `${index}-${segment.value}`;
		if (segment.code) {
			return (
				<Code key={key} className="whitespace-normal text-strong">
					{segment.value}
				</Code>
			);
		}
		return <span key={key}>{segment.value}</span>;
	});
}

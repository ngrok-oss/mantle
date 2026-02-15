import { isValidElement, type ComponentProps, type PropsWithChildren } from "react";

import { MDXProvider as MdxProviderPrimitive } from "@mdx-js/react";
import { Anchor } from "@ngrok/mantle/anchor";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock } from "@ngrok/mantle/code-block";
import { cx } from "@ngrok/mantle/cx";
import { Icon } from "@ngrok/mantle/icon";
import { Table } from "@ngrok/mantle/table";
import { LinkIcon } from "@phosphor-icons/react";

// import { FigCaption, Figure } from "./figure";
// import { Img } from "./img";

type Props = PropsWithChildren;

type MDXComponents = Parameters<typeof MdxProviderPrimitive>[0]["components"];

const components = {
	a: (props) => {
		const { /* node: _node, */ className, ...rest } = props;
		return <Anchor className={cx("hyphens-auto", className)} {...rest} />;
	},
	blockquote: (props) => {
		const { /* node: _node, */ className, ...rest } = props;
		return (
			<blockquote
				className={cx(
					"border-l-4 border-accent-500 text-strong p-4 italic mb-6 [&_p]:mb-0",
					className,
				)}
				{...rest}
			/>
		);
	},
	caption: (props) => {
		const { /* node: _node, */ className, ...rest } = props;
		return (
			<Table.Caption className={cx("px-4 py-2 text-sm text-muted italic", className)} {...rest} />
		);
	},
	code: (props) => {
		const { /* node: _node, */ className, ...rest } = props;
		return <Code className={cx("text-[0.7em]", className)} {...rest} />;
	},
	hr: (props) => {
		const { /* node: _node, */ className, ...rest } = props;
		return <hr className={cx("my-12 border-t border-gray-300", className)} {...rest} />;
	},
	h1: (props) => <HeadingWithLink as="h1" {...props} />,
	h2: (props) => <HeadingWithLink as="h2" {...props} />,
	h3: (props) => <HeadingWithLink as="h3" {...props} />,
	h4: (props) => <HeadingWithLink as="h4" {...props} />,
	h5: (props) => <HeadingWithLink as="h5" {...props} />,
	h6: (props) => <HeadingWithLink as="h6" {...props} />,
	// img: (props) => {
	// 	const { /* node: _node, */ ...rest } = props;
	// 	return <Img {...rest} />;
	// },
	li: (props) => {
		const { /* node: _node, */ className, ...rest } = props;
		return <li className={cx("mb-4", className)} {...rest} />;
	},
	ol: (props) => {
		const { /* node: _node, */ className, ...rest } = props;
		return <ol className={cx("mb-6 list-decimal pl-6", className)} {...rest} />;
	},
	p: (props) => {
		const { /* node: _node, */ className, ...rest } = props;
		return (
			<p
				className={cx("mb-4 leading-8 wrap-break-word text-pretty md:text-wrap", className)}
				{...rest}
			/>
		);
	},
	pre: (props) => {
		const { children, className } = props;
		if (!isValidElement(children)) {
			return null;
		}
		const language = children.props.className?.replace(/language-/, "") || "text";
		const rawCode = children.props.children ?? "";
		const code =
			typeof rawCode === "string"
				? rawCode
				: Array.isArray(rawCode)
					? rawCode.join("")
					: String(rawCode);

		return (
			<CodeBlock.Root className={cx("mb-6", className)}>
				<CodeBlock.Body>
					<CodeBlock.CopyButton />
					<CodeBlock.Code language={language} value={code} />
				</CodeBlock.Body>
			</CodeBlock.Root>
		);
	},
	table: (props) => {
		const { /* node: _node, */ className, children, ...rest } = props;
		return (
			<Table.Root className="my-8">
				<Table.Element className={className} {...rest}>
					{children}
				</Table.Element>
			</Table.Root>
		);
	},
	tbody: (props) => {
		const { /* node: _node, */ ...rest } = props;
		return <Table.Body {...rest} />;
	},
	td: (props) => {
		const { /* node: _node, */ className, ...rest } = props;
		return (
			<Table.Cell className={cx("px-4 py-3 align-top font-sans text-base", className)} {...rest} />
		);
	},
	tfoot: (props) => {
		const { /* node: _node, */ ...rest } = props;
		return <Table.Foot {...rest} />;
	},
	th: (props) => {
		const { /* node: _node, */ className, ...rest } = props;
		return (
			<Table.Header
				className={cx("px-4 py-3 text-xs uppercase tracking-wide text-muted", className)}
				{...rest}
			/>
		);
	},
	thead: (props) => {
		const { /* node: _node, */ ...rest } = props;
		return <Table.Head {...rest} />;
	},
	tr: (props) => {
		const { /* node: _node, */ ...rest } = props;
		return <Table.Row {...rest} />;
	},
	ul: (props) => {
		const { /* node: _node, */ className, ...rest } = props;
		return <ul className={cx("mb-8 not-first:mt-8 list-disc pl-8", className)} {...rest} />;
	},

	// Custom components, these are globally available in MDX files
	// Figure: (props) => <Figure {...props} />,
	// FigCaption: (props) => <FigCaption {...props} />,
} as const satisfies MDXComponents;

/**
 * MDX provider that maps common Markdown elements to Mantle UI components.
 *
 * @example
 * <MdxProvider>
 *   <PostContent /> // MDX-compiled React content
 * </MdxProvider>
 */
function MdxProvider({ children }: Props) {
	return <MdxProviderPrimitive components={components}>{children}</MdxProviderPrimitive>;
}

export {
	//,
	MdxProvider,
};

const headingTags = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
type HeadingTag = (typeof headingTags)[number];

type HeadlineWithLinkProps = ComponentProps<"h1"> & {
	/**
	 * MDX passes the AST node as a prop, but we don't use it
	 */
	node?: unknown;
	/**
	 * The HTML heading tag to render {@link HeadingTag}
	 */
	as: HeadingTag;
};

/**
 * HeadingWithLink component that renders a heading with an anchor link icon.
 * The link icon appears on hover and copies the heading's anchor URL to the clipboard when clicked.
 *
 * @param props - The heading element props including className, children, etc.
 * @param Tag - The HTML heading tag (h1, h2, h3, h4, h5, or h6)
 * @param className - The Tailwind classes for text size and any additional classes
 * @returns A heading element with an interactive link icon
 */
function HeadingWithLink({
	as: Component,
	children,
	className,
	id,
	/* node: _node, */ ...props
}: HeadlineWithLinkProps) {
	return (
		<Component
			id={id}
			className={cx(
				"group relative font-medium text-strong mt-16 mb-6 font-family scroll-mt-24 [@media(hover:hover)]:pl-5 [@media(hover:hover)]:-ml-5 [:is(h1,h2,h3,h4,h5,h6)+&]:mt-6",
				Component === "h1" && "text-4xl",
				Component === "h2" && "text-3xl",
				Component === "h3" && "text-2xl",
				Component === "h4" && "text-xl",
				Component === "h5" && "text-lg",
				Component === "h6" && "text-base",
				className,
			)}
			{...props}
		>
			<a
				href={id ? `#${id}` : undefined}
				aria-label="Jump to section"
				className={cx(
					"p-2 hidden [@media(hover:hover)]:inline-flex [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:translate-x-5 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-hover:translate-x-0 hover:scale-103 active:scale-94 focus:inline-flex focus:opacity-100 focus:translate-x-0 focus-visible:inline-flex focus-visible:opacity-100 focus-visible:translate-x-0 transition-all duration-200 ease-out focus-visible:ring-3 ring-focus-accent focus:outline-0 rounded text-muted hover:text-strong shrink-0 -ml-9",
				)}
			>
				<Icon svg={<LinkIcon weight="bold" />} />
			</a>
			{children}
		</Component>
	);
}

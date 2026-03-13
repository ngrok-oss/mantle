import { isValidElement, type ComponentProps, type PropsWithChildren } from "react";

import { MDXProvider as MdxProviderPrimitive } from "@mdx-js/react";
import { Alert } from "@ngrok/mantle/alert";
import { Anchor } from "@ngrok/mantle/anchor";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, parseLanguage, type MetaInput } from "@ngrok/mantle/code-block";
import { parseBooleanish } from "@ngrok/mantle/types";
import { cx } from "@ngrok/mantle/cx";
import { Table } from "@ngrok/mantle/table";
import { HashLinkHeading } from "./hash-link-heading";

// import { FigCaption, Figure } from "./figure";
// import { Img } from "./img";

type Props = PropsWithChildren;

type MDXComponents = Parameters<typeof MdxProviderPrimitive>[0]["components"];

const components = {
	a: (props) => {
		const { node: _node, className, ...rest } = props;
		return <Anchor className={cx("hyphens-auto", className)} {...rest} />;
	},
	blockquote: (props) => {
		const { node: _node, className, ...rest } = props;
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
		const { node: _node, className, ...rest } = props;
		return (
			<Table.Caption className={cx("px-4 py-2 text-sm text-muted italic", className)} {...rest} />
		);
	},
	code: (props) => {
		const { node: _node, className, ...rest } = props;
		return <Code className={cx("whitespace-nowrap text-strong", className)} {...rest} />;
	},
	hr: (props) => {
		const { node: _node, className, ...rest } = props;
		return <hr className={cx("my-12 border-t border-gray-300", className)} {...rest} />;
	},
	h1: (props) => <MdxHeading as="h1" {...props} />,
	h2: (props) => <MdxHeading as="h2" {...props} />,
	h3: (props) => <MdxHeading as="h3" {...props} />,
	h4: (props) => <MdxHeading as="h4" {...props} />,
	h5: (props) => <MdxHeading as="h5" {...props} />,
	h6: (props) => <MdxHeading as="h6" {...props} />,
	// img: (props) => {
	// 	const { node: _node, ...rest } = props;
	// 	return <Img {...rest} />;
	// },
	li: (props) => {
		const { node: _node, className, ...rest } = props;
		return <li className={cx("text-body", className)} {...rest} />;
	},
	ol: (props) => {
		const { node: _node, className, ...rest } = props;
		return <ol className={cx("mb-4 list-decimal pl-6 text-body", className)} {...rest} />;
	},
	p: (props) => {
		const { node: _node, className, ...rest } = props;
		return (
			<p
				className={cx(
					"mb-4 leading-relaxed wrap-break-word text-pretty md:text-wrap text-body",
					className,
				)}
				{...rest}
			/>
		);
	},
	pre: (props: ComponentProps<"pre"> & MetaInput) => {
		const { children, className, collapsible: collapsibleProp } = props;
		if (!isValidElement<{ className?: string; children?: unknown }>(children)) {
			return null;
		}
		const language = parseLanguage(children.props.className);
		const code = String(children.props.children ?? "");
		// Short-circuit: skip the split("\n") allocation for small blocks (400 chars ≈ 10 chars/line × 40 lines)
		const isLong = collapsibleProp == null && code.length > 400 && code.split("\n").length > 40;
		const collapsible = collapsibleProp != null ? parseBooleanish(collapsibleProp) : isLong;

		return (
			<CodeBlock.Root className={cx("mb-6", className)}>
				<CodeBlock.Body>
					<CodeBlock.CopyButton />
					<CodeBlock.Code language={language} value={code} />
				</CodeBlock.Body>
				{collapsible && <CodeBlock.ExpanderButton />}
			</CodeBlock.Root>
		);
	},
	table: (props) => {
		const { node: _node, className, children, ...rest } = props;
		return (
			<Table.Root className="my-8">
				<Table.Element className={className} {...rest}>
					{children}
				</Table.Element>
			</Table.Root>
		);
	},
	tbody: (props) => {
		const { node: _node, ...rest } = props;
		return <Table.Body {...rest} />;
	},
	td: (props) => {
		const { node: _node, className, ...rest } = props;
		return (
			<Table.Cell className={cx("px-4 py-3 align-top font-sans text-base", className)} {...rest} />
		);
	},
	tfoot: (props) => {
		const { node: _node, ...rest } = props;
		return <Table.Foot {...rest} />;
	},
	th: (props) => {
		const { node: _node, className, ...rest } = props;
		return (
			<Table.Header
				className={cx("px-4 py-3 text-xs uppercase tracking-wide text-muted", className)}
				{...rest}
			/>
		);
	},
	thead: (props) => {
		const { node: _node, ...rest } = props;
		return <Table.Head {...rest} />;
	},
	tr: (props) => {
		const { node: _node, ...rest } = props;
		return <Table.Row {...rest} />;
	},
	ul: (props) => {
		const { node: _node, className, ...rest } = props;
		return <ul className={cx("mb-4 not-first:mt-4 list-disc pl-6", className)} {...rest} />;
	},

	// Custom components, these are globally available in MDX files
	GithubAlert,
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

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type MdxHeadingProps = ComponentProps<"h1"> & {
	/**
	 * MDX passes the AST node as a prop, but we don't use it.
	 */
	node?: unknown;
	/**
	 * The HTML heading tag to render.
	 */
	as: HeadingTag;
};

/**
 * MDX heading component that delegates to {@link HashLinkHeading} for the
 * copy-to-clipboard anchor link behavior, applying MDX-specific sizing and
 * spacing classes.
 */
function MdxHeading({ as: Component, children, className, id, ...props }: MdxHeadingProps) {
	if (!id) {
		return (
			<Component className={className} {...props}>
				{children}
			</Component>
		);
	}

	return (
		<HashLinkHeading id={id}>
			<Component
				className={cx(
					"font-medium text-strong mt-12 mb-4 [:is(h1,h2,h3,h4,h5,h6)+&]:mt-6",
					Component === "h1" && "text-5xl mt-0",
					Component === "h2" && "text-3xl",
					Component === "h3" && "text-2xl",
					Component === "h4" && "text-xl",
					Component === "h5" && "text-base",
					Component === "h6" && "text-xs",
					className,
				)}
				{...props}
			>
				{children}
			</Component>
		</HashLinkHeading>
	);
}

type GitHubAlertTypes = "note" | "tip" | "important" | "warning" | "caution";

type AlertPriority = "danger" | "important" | "info" | "success" | "warning";

const alertTypePriorities: Record<GitHubAlertTypes | (string & {}), AlertPriority> = {
	note: "info",
	tip: "success",
	important: "important",
	warning: "warning",
	caution: "danger",
};

type GithubAlertProps = ComponentProps<"div"> & {
	type: GitHubAlertTypes | (string & {});
};

/**
 * Renders a GitHub-style alert blockquote (e.g. `> [!NOTE]`).
 * Used as a custom MDX component mapped from the `remarkGithubAlerts` remark plugin.
 */
function GithubAlert({ className, type, children, ...props }: GithubAlertProps) {
	const priority = alertTypePriorities[type] ?? "info";

	return (
		<Alert.Root priority={priority} className={cx("mb-6", className)} {...props}>
			<Alert.Icon />
			<Alert.Content>
				<Alert.Title asChild>
					<p className="first-letter:uppercase">{type}</p>
				</Alert.Title>
				<Alert.Description className="[&>p:last-child]:mb-0">{children}</Alert.Description>
			</Alert.Content>
		</Alert.Root>
	);
}

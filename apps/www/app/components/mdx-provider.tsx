import { isValidElement, type ComponentProps, type PropsWithChildren, type ReactNode } from "react";

import { MDXProvider as MdxProviderPrimitive } from "@mdx-js/react";
import { Anchor } from "@ngrok/mantle/anchor";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock } from "@ngrok/mantle/code-block";
import { cx } from "@ngrok/mantle/cx";
import { Icon } from "@ngrok/mantle/icon";
import { Table } from "@ngrok/mantle/table";
import { InfoIcon } from "@phosphor-icons/react/Info";
import { LightbulbIcon } from "@phosphor-icons/react/Lightbulb";
import { MegaphoneIcon } from "@phosphor-icons/react/Megaphone";
import { WarningIcon } from "@phosphor-icons/react/Warning";
import { WarningCircleIcon } from "@phosphor-icons/react/WarningCircle";
import { HashLinkHeading } from "./hash-link-heading";

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
	h1: (props) => <MdxHeading as="h1" {...props} />,
	h2: (props) => <MdxHeading as="h2" {...props} />,
	h3: (props) => <MdxHeading as="h3" {...props} />,
	h4: (props) => <MdxHeading as="h4" {...props} />,
	h5: (props) => <MdxHeading as="h5" {...props} />,
	h6: (props) => <MdxHeading as="h6" {...props} />,
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
					"font-medium text-strong mt-16 mb-6 [:is(h1,h2,h3,h4,h5,h6)+&]:mt-6",
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
				{children}
			</Component>
		</HashLinkHeading>
	);
}

type GitHubAlertTypes = "note" | "tip" | "important" | "warning" | "caution";

const alertTypeColors: Record<GitHubAlertTypes | (string & {}), `var(--color-${string}-600)`> = {
	note: "var(--color-info-600)",
	tip: "var(--color-success-600)",
	important: "var(--color-purple-600)",
	warning: "var(--color-warning-600)",
	caution: "var(--color-danger-600)",
};

const alertTypeIcons: Record<GitHubAlertTypes | (string & {}), ReactNode> = {
	note: <InfoIcon weight="bold" />,
	tip: <LightbulbIcon weight="bold" />,
	important: <MegaphoneIcon weight="bold" />,
	warning: <WarningIcon weight="bold" />,
	caution: <WarningCircleIcon weight="bold" />,
};

type GithubAlertProps = ComponentProps<"div"> & {
	icon?: ReactNode;
	type: GitHubAlertTypes | (string & {});
};

/**
 * Renders a GitHub-style alert blockquote (e.g. `> [!NOTE]`).
 * Used as a custom MDX component mapped from the `remarkGithubAlerts` remark plugin.
 */
function GithubAlert({ className, icon, type, children, style, ...props }: GithubAlertProps) {
	const color = alertTypeColors[type] ?? alertTypeColors.note;

	return (
		<div
			className={cx("mb-6 border-l-4 pl-4 py-2 text-sm", className)}
			style={{ borderColor: color, ...style }}
			{...props}
		>
			<p className="flex items-center gap-1.5 font-semibold mb-1" style={{ color }}>
				<Icon className="size-4" svg={icon ?? alertTypeIcons[type as GitHubAlertTypes]} />
				<span className="first-letter:uppercase">{type}</span>
			</p>
			{children}
		</div>
	);
}

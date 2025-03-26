import { cx } from "@ngrok/mantle/cx";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@ngrok/mantle/table";
import { Tooltip, TooltipContent, TooltipTrigger } from "@ngrok/mantle/tooltip";
import type { WithStyleProps } from "@ngrok/mantle/types";
import Prism from "prismjs";
import { type PropsWithChildren, useEffect, useState } from "react";
import assert from "tiny-invariant";
import "prismjs/components/prism-typescript.js";

type PropsTableProps = WithStyleProps & PropsWithChildren;
export const PropsTable = ({ children, className, style }: PropsTableProps) => (
	<div
		className={cx(
			"scrollbar overflow-x-scroll rounded-lg border border-gray-300",
			className,
		)}
		style={style}
	>
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Prop</TableHead>
					<TableHead>Type</TableHead>
					<TableHead>Default</TableHead>
					<TableHead>Description</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody className="font-body text-body text-xs">{children}</TableBody>
		</Table>
	</div>
);

type PropRowProps = PropsWithChildren & WithStyleProps;
export const PropRow = ({ children, className, style }: PropRowProps) => (
	<TableRow className={className} style={style}>
		{children}
	</TableRow>
);

type PropNameCellProps = WithStyleProps & {
	name: string;
	optional?: boolean;
};

export const PropNameCell = ({
	className,
	name,
	optional,
	style,
}: PropNameCellProps) => (
	<TableCell className={cx("align-top font-mono", className)} style={style}>
		<p className="flex items-center">
			<span className="token attr-name">{name}</span>
			{optional && (
				<Tooltip>
					<TooltipTrigger>?</TooltipTrigger>
					<TooltipContent>This prop is optional.</TooltipContent>
				</Tooltip>
			)}
		</p>
	</TableCell>
);

type PropTypeCellProps = WithStyleProps & PropsWithChildren;
export const PropTypeCell = ({
	children,
	className,
	style,
}: PropTypeCellProps) => (
	<TableCell className={cx("align-top font-mono", className)} style={style}>
		{children}
	</TableCell>
);

type PropDefaultValueCellProps = WithStyleProps & PropsWithChildren;
export const PropDefaultValueCell = ({
	children = <>&mdash;</>,
	className,
	style,
}: PropDefaultValueCellProps) => (
	<TableCell className={cx("align-top font-mono", className)} style={style}>
		{children}
	</TableCell>
);

type PropDescriptionCellProps = WithStyleProps & PropsWithChildren;
export const PropDescriptionCell = ({
	children,
	className,
	style,
}: PropDescriptionCellProps) => (
	<TableCell className={cx("align-top", className)} style={style}>
		{children}
	</TableCell>
);

export const ObjectPropType = ({ name }: { name: string }) => (
	<span className="text-red-600">{name}</span>
);
export const ReactNodePropType = () => (
	<span className="text-red-600">ReactNode</span>
);
export const BooleanPropType = ({
	value,
}: { value?: true | false | undefined }) => (
	<span className="text-purple-600">
		{typeof value === "undefined" ? "boolean" : String(value)}
	</span>
);
export const StringPropType = ({ value }: { value?: string }) => (
	<span className="token attr-value">{value ?? "string"}</span>
);

export const NumberPropType = ({ value }: { value?: number }) => (
	<span className="token number">{value ?? "number"}</span>
);

export const FuncPropType = ({ value }: { value: string }) => {
	// trim any leading and trailing whitespace/empty lines
	const trimmedCode = value?.trim() ?? "";
	const [highlightedCodeInnerHtml, setHighlightedCodeInnerHtml] =
		useState(trimmedCode);

	useEffect(() => {
		const grammar = Prism.languages.typescript;
		assert(grammar, "Couldn't load Prism grammar for typescript!");
		const newHighlightedCodeInnerHtml = Prism.highlight(
			trimmedCode,
			grammar,
			"typescript",
		);
		setHighlightedCodeInnerHtml(newHighlightedCodeInnerHtml);
	}, [trimmedCode]);

	return (
		<pre className="language-typescript">
			<code dangerouslySetInnerHTML={{ __html: highlightedCodeInnerHtml }} />
		</pre>
	);
};
export const UndefinedPropType = () => (
	<span className="italic text-amber-600">undefined</span>
);

export const NullPropType = () => (
	<span className="italic text-amber-600">null</span>
);

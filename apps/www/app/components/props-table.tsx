import { cx } from "@ngrok/mantle/cx";
import { Table } from "@ngrok/mantle/table";
import { Tooltip } from "@ngrok/mantle/tooltip";
import type { WithStyleProps } from "@ngrok/mantle/types";
import { type PropsWithChildren } from "react";
import { normalizeIndentation } from "@ngrok/mantle/code-block";

type PropsTableProps = WithStyleProps & PropsWithChildren;
export const PropsTable = ({ children, className, style }: PropsTableProps) => (
	<Table.Root className={className} style={style}>
		<Table.Element>
			<Table.Head>
				<Table.Row>
					<Table.Header>Prop</Table.Header>
					<Table.Header>Type</Table.Header>
					<Table.Header>Default</Table.Header>
					<Table.Header>Description</Table.Header>
				</Table.Row>
			</Table.Head>
			<Table.Body>{children}</Table.Body>
		</Table.Element>
	</Table.Root>
);

type PropRowProps = PropsWithChildren & WithStyleProps;
export const PropRow = ({ children, className, style }: PropRowProps) => (
	<Table.Row className={className} style={style}>
		{children}
	</Table.Row>
);

type PropNameCellProps = WithStyleProps & {
	name: string;
	optional?: boolean;
};

export const PropNameCell = ({ className, name, optional, style }: PropNameCellProps) => (
	<Table.Cell className={cx("align-top", className)} style={style}>
		<div className="flex items-start">
			<span className="token attr-name">{name}</span>
			{optional && (
				<Tooltip.Root>
					<Tooltip.Trigger className="h-[1lh]">?</Tooltip.Trigger>
					<Tooltip.Content>
						<p>This prop is optional.</p>
					</Tooltip.Content>
				</Tooltip.Root>
			)}
		</div>
	</Table.Cell>
);

type PropTypeCellProps = WithStyleProps & PropsWithChildren;
export const PropTypeCell = ({ children, className, style }: PropTypeCellProps) => (
	<Table.Cell className={cx("align-top", className)} style={style}>
		{children}
	</Table.Cell>
);

type PropDefaultValueCellProps = WithStyleProps & PropsWithChildren;
export const PropDefaultValueCell = ({
	children = <>&mdash;</>,
	className,
	style,
}: PropDefaultValueCellProps) => (
	<Table.Cell className={cx("align-top", className)} style={style}>
		{children}
	</Table.Cell>
);

type PropDescriptionCellProps = WithStyleProps & PropsWithChildren;
export const PropDescriptionCell = ({ children, className, style }: PropDescriptionCellProps) => (
	<Table.Cell className={cx("align-top", className)} style={style}>
		{children}
	</Table.Cell>
);

export const ObjectPropType = ({ name }: { name: string }) => (
	<span className="text-red-600">{name}</span>
);
export const ReactNodePropType = () => <span className="text-red-600">ReactNode</span>;
export const BooleanPropType = ({ value }: { value?: true | false | undefined }) => (
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
	const normalizedCode = normalizeIndentation(value);

	return (
		<pre className="text-mono font-mono" tabIndex={-1}>
			<code>{normalizedCode}</code>
		</pre>
	);
};
export const UndefinedPropType = () => <span className="italic text-amber-600">undefined</span>;

export const NullPropType = () => <span className="italic text-amber-600">null</span>;

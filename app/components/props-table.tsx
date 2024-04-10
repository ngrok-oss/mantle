import { cx } from "@/cx";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/table";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/tooltip";
import { WithStyleProps } from "@/types";
import { PropsWithChildren } from "react";

type PropsTableProps = WithStyleProps & PropsWithChildren;
export const PropsTable = ({ children, className, style }: PropsTableProps) => (
	<div className={cx("overflow-hidden rounded-lg border border-gray-300", className)} style={style}>
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Prop</TableHead>
					<TableHead>Type</TableHead>
					<TableHead>Default</TableHead>
					<TableHead>Description</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody className="text-xs text-body">{children}</TableBody>
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

export const PropNameCell = ({ className, name, optional, style }: PropNameCellProps) => (
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
export const PropTypeCell = ({ children, className, style }: PropTypeCellProps) => (
	<TableCell className={cx("align-top font-mono", className)} style={style}>
		{children}
	</TableCell>
);

type PropDefaultValueCellProps = WithStyleProps & PropsWithChildren;
export const PropDefaultValueCell = ({ children = <>&mdash;</>, className, style }: PropDefaultValueCellProps) => (
	<TableCell className={cx("align-top font-mono", className)} style={style}>
		{children}
	</TableCell>
);

type PropDescriptionCellProps = WithStyleProps & PropsWithChildren;
export const PropDescriptionCell = ({ children, className, style }: PropDescriptionCellProps) => (
	<TableCell className={cx("align-top", className)} style={style}>
		{children}
	</TableCell>
);

export const ObjectPropType = ({ name }: { name: string }) => <span className="text-red-600">{name}</span>;
export const ReactNodePropType = () => <span className="text-red-600">ReactNode</span>;
export const BooleanPropType = ({ value }: { value?: true | false | undefined }) => (
	<span className="text-purple-600">{typeof value === "undefined" ? "boolean" : String(value)}</span>
);
export const StringPropType = ({ value }: { value?: string }) => (
	<span className="token attr-value">{value ?? "string"}</span>
);
export const UndefinedPropType = () => <span className="italic text-amber-600">undefined</span>;

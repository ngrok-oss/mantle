import {
	type Column,
	type HeaderContext,
	type Row,
	type Table as TableInstance,
	flexRender,
} from "@tanstack/react-table";
import {
	type ComponentProps,
	Fragment,
	type ReactNode,
	createContext,
	useContext,
	useMemo,
} from "react";
import invariant from "tiny-invariant";
import { cx } from "../../utils/cx/cx.js";
import { createNamespacedComponent } from "../../utils/create-namespaced-component.js";
import {
	$timeSortingDirection,
	type SortingMode,
} from "../../utils/sorting/direction.js";
import { Button } from "../button/button.js";
import type { SvgAttributes } from "../icon/types.js";
import { SortIcon } from "../icons/sort.js";
import { Table } from "../table/table.js";
import { getNextSortDirection } from "./helpers.js";
import type { SortDirection } from "./types.js";

type DataTableContextShape<TData = unknown> = {
	table: TableInstance<TData>;
};

const DataTableContext = createContext<DataTableContextShape<any> | null>(null);

/**
 * @private
 */
function useDataTableContext<TData>() {
	const context = useContext(DataTableContext);

	invariant(
		context,
		"useDataTableContext should only be used within a DataTable child component",
	);

	return context as DataTableContextShape<TData>;
}

type DataTableProps<TData> = ComponentProps<typeof Table.Root> & {
	table: TableInstance<TData>;
};

function DataTableRoot<TData>({
	children,
	table,
	...props
}: DataTableProps<TData>) {
	const context: DataTableContextShape<TData> = useMemo(
		() => ({ table }),
		[table],
	);

	return (
		<DataTableContext.Provider value={context}>
			<Table.Root {...props}>
				<Table>{children}</Table>
			</Table.Root>
		</DataTableContext.Provider>
	);
}

type DataTableHeaderSortButtonProps<TData, TValue> = Omit<
	ComponentProps<typeof Button>,
	"icon"
> &
	Pick<HeaderContext<TData, TValue>, "column"> &
	(
		| {
				/**
				 * Disable sorting for this column.
				 * It will prevent the sorting direction from being toggled and any icon
				 * from being shown.
				 */
				disableSorting: true;
				/**
				 * Use this to render a custom sort icon for the column if it is sortable
				 * and you want to override the default sort icon
				 */
				sortIcon?: undefined;
				/**
				 * The sorting mode of the column, whether it is alphanumeric or time based.
				 */
				sortingMode?: undefined;
		  }
		| {
				disableSorting?: false;
				/**
				 * Use this to render a custom sort icon for the column if it is sortable
				 * and you want to override the default sort icon
				 */
				sortIcon?: (sortDirection: SortDirection) => ReactNode;
				/**
				 * The sorting mode of the column, whether it is alphanumeric or time based.
				 */
				sortingMode: SortingMode;
		  }
	);

/**
 * A sortable button toggle for a column header in a data table.
 * If the column is sortable, clicking the button will toggle the sorting
 * direction.
 *
 * @example
 * ```md
 * Each click cycles through...
 *
 * For alphanumeric sorting:
 *   unsorted ➡️ ascending ➡️ descending ➡️ unsorted ➡️ ...
 *
 * For time sorting:
 *   unsorted ➡️ newest-to-oldest ➡️ oldest-to-newest ➡️ unsorted ➡️ ...
 *
 *   this is equivalent to the inverse of alphanumeric sorting, or
 *   unsorted ➡️ descending ➡️ ascending ➡️ unsorted ➡️ ...
 * ```
 */
function DataTableHeaderSortButton<TData, TValue>({
	children,
	className,
	column,
	disableSorting = false,
	iconPlacement = "end",
	sortingMode,
	sortIcon: propSortIcon,
	onClick,
	...props
}: DataTableHeaderSortButtonProps<TData, TValue>) {
	const _sortDirection = column.getIsSorted();
	const canSort = !disableSorting && column.getCanSort();

	const sortDirection: SortDirection =
		canSort && typeof _sortDirection === "string" ? _sortDirection : "unsorted";

	const sortIcon = propSortIcon?.(sortDirection) ?? (
		<DefaultSortIcon mode={sortingMode} direction={sortDirection} />
	);

	return (
		<Button
			appearance="ghost"
			className={cx("flex justify-start w-full h-full rounded-none", className)}
			data-sort-direction={sortDirection}
			data-table-header-action
			icon={sortIcon}
			iconPlacement={iconPlacement}
			onClick={(event) => {
				onClick?.(event);
				if (event.defaultPrevented) {
					return;
				}
				if (!canSort || disableSorting || typeof sortingMode === "undefined") {
					return;
				}
				toggleNextSortingDirection(column, sortingMode);
			}}
			priority="neutral"
			type="button"
			{...props}
		>
			{canSort && sortDirection !== "unsorted" && (
				<span className="sr-only">
					Column sorted in{" "}
					{sortingMode === "alphanumeric"
						? sortDirection === "asc"
							? "ascending"
							: "descending"
						: $timeSortingDirection(sortDirection)}{" "}
					order
				</span>
			)}
			{children}
		</Button>
	);
}

type DataTableHeaderProps = ComponentProps<typeof Table.Header>;

/**
 * A header for a data table.
 * This is typically used to wrap the `DataTableHeaderSortButton` component.
 */
function DataTableHeader<TData, TValue>({
	children,
	className,
	...props
}: DataTableHeaderProps) {
	return (
		<Table.Header
			className={cx("has-[[data-table-header-action]]:px-0", className)}
			{...props}
		>
			{children}
		</Table.Header>
	);
}

const DataTableBody = Table.Body;
DataTableBody.displayName = "DataTableBody";

type DataTableHeadProps = Omit<ComponentProps<typeof Table.Head>, "children">;

function DataTableHead<TData>(props: DataTableHeadProps) {
	const { table } = useDataTableContext<TData>();

	return (
		<Table.Head {...props}>
			{table.getHeaderGroups().map((headerGroup) => (
				<Table.Row key={headerGroup.id}>
					{headerGroup.headers.map((header) => (
						<Fragment key={header.id}>
							{header.isPlaceholder ? (
								<Table.Header key={header.id} />
							) : (
								flexRender(header.column.columnDef.header, header.getContext())
							)}
						</Fragment>
					))}
				</Table.Row>
			))}
		</Table.Head>
	);
}

function DataTableRows<TData>() {
	const { table } = useDataTableContext<TData>();
	const rows = table.getRowModel().rows;

	return (
		<>
			{rows.map((row) => (
				<DataTableRow key={row.id} row={row} />
			))}
		</>
	);
}

type DataTableRowProps<TData> = Omit<
	ComponentProps<typeof Table.Row>,
	"children"
> & {
	row: Row<TData>;
};

function DataTableRow<TData>({ row, ...props }: DataTableRowProps<TData>) {
	return (
		<Table.Row {...props}>
			{row.getVisibleCells().map((cell) => (
				<Fragment key={cell.id}>
					{flexRender(cell.column.columnDef.cell, cell.getContext())}
				</Fragment>
			))}
		</Table.Row>
	);
}

type DataTableEmptyRowProps = ComponentProps<typeof Table.Row>;

function DataTableEmptyRow<TData>({
	children,
	...props
}: DataTableEmptyRowProps) {
	const { table } = useDataTableContext<TData>();
	const numberOfColumns = table.getAllColumns().length;

	return (
		<Table.Row {...props}>
			<Table.Cell colSpan={numberOfColumns}>{children}</Table.Cell>
		</Table.Row>
	);
}

type DataTableActionCellProps = ComponentProps<typeof Table.Cell>;

function DataTableActionCell({
	children,
	className,
	...props
}: DataTableActionCellProps) {
	return (
		<Table.Cell
			className={cx(
				"sticky z-10 right-0 top-px -bottom-px group-data-[sticky-active]/table:[box-shadow:inset_10px_0_8px_-8px_hsl(0deg_0%_0%_/_15%)]",
				className,
			)}
			{...props}
		>
			<div className="flex justify-end">{children}</div>
		</Table.Cell>
	);
}

const DataTable = createNamespacedComponent(
	DataTableRoot,
	{
		ActionCell: DataTableActionCell,
		Body: DataTableBody,
		EmptyRow: DataTableEmptyRow,
		Head: DataTableHead,
		Header: DataTableHeader,
		HeaderSortButton: DataTableHeaderSortButton,
		Row: DataTableRow,
		Rows: DataTableRows,
	},
	"DataTable",
);

export {
	//,
	DataTable,
};

type DefaultSortIconProps = SvgAttributes & {
	direction: SortDirection | undefined;
	mode: SortingMode | undefined;
};

function DefaultSortIcon({ direction, mode, ...props }: DefaultSortIconProps) {
	if (direction === "unsorted" || !mode || !direction) {
		return <svg aria-hidden {...props} />;
	}

	return <SortIcon mode={mode} direction={direction} {...props} />;
}

/**
 * Toggle the sorting direction of a column.
 * This ordering is typically toggled by clicking the column header.
 *
 * @example
 * ```md
 * Each click cycles through...
 *
 * For alphanumeric sorting:
 *   unsorted ➡️ ascending ➡️ descending ➡️ unsorted ➡️ ...
 *
 * For time sorting:
 *   unsorted ➡️ newest-to-oldest ➡️ oldest-to-newest ➡️ unsorted ➡️ ...
 *
 *   this is equivalent to the inverse of alphanumeric sorting, or
 *   unsorted ➡️ descending ➡️ ascending ➡️ unsorted ➡️ ...
 * ```
 */
function toggleNextSortingDirection<TData, TValue>(
	column: Column<TData, TValue>,
	sortingMode: SortingMode,
) {
	if (!column.getCanSort()) {
		return;
	}

	const sortDirection = column.getIsSorted();
	const currentSortDirection: SortDirection =
		typeof sortDirection === "string" ? sortDirection : "unsorted";

	const nextSortDirection = getNextSortDirection(
		currentSortDirection,
		sortingMode,
	);

	switch (nextSortDirection) {
		case "unsorted":
			column.clearSorting();
			return;
		case "asc":
			column.toggleSorting(false);
			return;
		case "desc":
			column.toggleSorting(true);
			return;
		default:
			return;
	}
}

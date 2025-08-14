import {
	type Column,
	type HeaderContext,
	type Table as TableInstance,
	type Row as TableRow,
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

/**
 * A data table component that provides sorting and other data table functionality.
 * Built on top of TanStack Table for advanced table features.
 *
 * @see https://mantle.ngrok.com/components/data-table#api-data-table
 *
 * @example
 * ```tsx
 * <DataTable table={table}>
 *   <DataTable.Head />
 *   <DataTable.Body>
 *     <DataTable.Rows />
 *   </DataTable.Body>
 * </DataTable>
 * ```
 */
function Root<TData>({ children, table, ...props }: DataTableProps<TData>) {
	const context: DataTableContextShape<TData> = useMemo(
		() => ({ table }),
		[table],
	);

	return (
		<DataTableContext.Provider value={context}>
			<Table.Root {...props}>
				<Table.Element>{children}</Table.Element>
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
 * @see https://mantle.ngrok.com/components/data-table#api-data-table-header-sort-button
 *
 * @example
 * ```tsx
 * <DataTable.HeaderSortButton
 *   column={column}
 *   sortingMode="alphanumeric"
 * >
 *   Column Title
 * </DataTable.HeaderSortButton>
 * ```
 *
 * Each click cycles through:
 * - For alphanumeric sorting: unsorted ➡️ ascending ➡️ descending ➡️ unsorted
 * - For time sorting: unsorted ➡️ newest-to-oldest ➡️ oldest-to-newest ➡️ unsorted
 */
function HeaderSortButton<TData, TValue>({
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
 * This is typically used to wrap the `DataTable.HeaderSortButton` component.
 *
 * @see https://mantle.ngrok.com/components/data-table#api-data-table-header
 *
 * @example
 * ```tsx
 * <DataTable.Header>
 *   <DataTable.HeaderSortButton column={column} sortingMode="alphanumeric">
 *     Column Title
 *   </DataTable.HeaderSortButton>
 * </DataTable.Header>
 * ```
 */
function Header<TData, TValue>({
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

const Body = Table.Body;
Body.displayName = "DataTableBody";

type DataTableHeadProps = Omit<ComponentProps<typeof Table.Head>, "children">;

function Head<TData>(props: DataTableHeadProps) {
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

type RowsProps<TData> = {
	children?: (row: TableRow<TData>) => ReactNode;
};

function Rows<TData>({ children }: RowsProps<TData>) {
	const { table } = useDataTableContext<TData>();
	const rows = table.getRowModel().rows;

	if (typeof children === "function") {
		return rows.map((row) => children(row));
	}

	return rows.map((row) => <Row key={row.id} row={row} />);
}

type DataTableRowProps<TData> = Omit<
	ComponentProps<typeof Table.Row>,
	"children"
> & {
	row: TableRow<TData>;
};

function Row<TData>({ row, ...props }: DataTableRowProps<TData>) {
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

function EmptyRow<TData>({ children, ...props }: DataTableEmptyRowProps) {
	const { table } = useDataTableContext<TData>();
	const numberOfColumns = table.getAllColumns().length;

	return (
		<Table.Row {...props}>
			<Table.Cell colSpan={numberOfColumns}>{children}</Table.Cell>
		</Table.Row>
	);
}

type DataTableActionCellProps = ComponentProps<typeof Table.Cell>;

function ActionCell({
	children,
	className,
	...props
}: DataTableActionCellProps) {
	return (
		<Table.Cell
			className={cx(
				"sticky z-10 right-0 top-px -bottom-px group-data-[sticky-active]/table:[box-shadow:inset_10px_0_8px_-8px_oklch(0_0_0_/_15%)]",
				className,
			)}
			{...props}
		>
			<div className="flex justify-end">{children}</div>
		</Table.Cell>
	);
}

// Set display names to preserve original component names for debugging
Root.displayName = "DataTable";
ActionCell.displayName = "DataTableActionCell";
Body.displayName = "DataTableBody";
EmptyRow.displayName = "DataTableEmptyRow";
Head.displayName = "DataTableHead";
Header.displayName = "DataTableHeader";
HeaderSortButton.displayName = "DataTableHeaderSortButton";
Row.displayName = "DataTableRow";
Rows.displayName = "DataTableRows";

/**
 * A data table component that provides sorting and other data table functionality.
 * Built on top of TanStack Table for advanced table features.
 *
 * @see https://mantle.ngrok.com/components/data-table
 *
 * @example
 * ```tsx
 * <DataTable table={table}>
 *   <DataTable.Head />
 *   <DataTable.Body>
 *     <DataTable.Rows />
 *   </DataTable.Body>
 * </DataTable>
 * ```
 */
const DataTable = {
	/**
	 * The root container of the data table component.
	 *
	 * @see https://mantle.ngrok.com/components/data-table#api-data-table
	 *
	 * @example
	 * ```tsx
	 * <DataTable.Root table={table}>
	 *   <DataTable.Head />
	 *   <DataTable.Body>
	 *     <DataTable.Rows />
	 *   </DataTable.Body>
	 * </DataTable.Root>
	 * ```
	 */
	Root,
	/**
	 * A sticky action cell positioned at the end of each row for action buttons.
	 *
	 * @see https://mantle.ngrok.com/components/data-table#api-data-table-action-cell
	 *
	 * @example
	 * ```tsx
	 * <DataTable.ActionCell>
	 *   <Button size="sm">Edit</Button>
	 *   <Button size="sm">Delete</Button>
	 * </DataTable.ActionCell>
	 * ```
	 */
	ActionCell,
	/**
	 * A table cell component for rendering individual data cells.
	 *
	 * @see https://mantle.ngrok.com/components/data-table#api-data-table-cell
	 *
	 * @example
	 * ```tsx
	 * <DataTable.Cell>
	 *   Cell content
	 * </DataTable.Cell>
	 * ```
	 */
	Cell: Table.Cell,
	/**
	 * The table body container for rows of data.
	 *
	 * @see https://mantle.ngrok.com/components/data-table#api-data-table-body
	 *
	 * @example
	 * ```tsx
	 * <DataTable.Body>
	 *   <DataTable.Rows />
	 * </DataTable.Body>
	 * ```
	 */
	Body,
	/**
	 * An empty state row that spans all columns when there's no data to display.
	 *
	 * @see https://mantle.ngrok.com/components/data-table#api-data-table-empty-row
	 *
	 * @example
	 * ```tsx
	 * <DataTable.EmptyRow>
	 *   No data available
	 * </DataTable.EmptyRow>
	 * ```
	 */
	EmptyRow,
	/**
	 * The table header container that renders column headers automatically.
	 *
	 * @see https://mantle.ngrok.com/components/data-table#api-data-table-head
	 *
	 * @example
	 * ```tsx
	 * <DataTable.Head />
	 * ```
	 */
	Head,
	/**
	 * A header cell component optimized for data table header actions.
	 *
	 * @see https://mantle.ngrok.com/components/data-table#api-data-table-header
	 *
	 * @example
	 * ```tsx
	 * <DataTable.Header>
	 *   <DataTable.HeaderSortButton column={column} sortingMode="alphanumeric">
	 *     Column Title
	 *   </DataTable.HeaderSortButton>
	 * </DataTable.Header>
	 * ```
	 */
	Header,
	/**
	 * A sortable button toggle for column headers with sorting functionality.
	 *
	 * @see https://mantle.ngrok.com/components/data-table#api-data-table-header-sort-button
	 *
	 * @example
	 * ```tsx
	 * <DataTable.HeaderSortButton
	 *   column={column}
	 *   sortingMode="alphanumeric"
	 * >
	 *   Column Title
	 * </DataTable.HeaderSortButton>
	 * ```
	 */
	HeaderSortButton,
	/**
	 * A single data table row component for rendering custom row layouts.
	 *
	 * @see https://mantle.ngrok.com/components/data-table#api-data-table-row
	 *
	 * @example
	 * ```tsx
	 * <DataTable.Row row={row} />
	 * ```
	 */
	Row,
	/**
	 * Container that renders all table rows automatically from the table data.
	 *
	 * @see https://mantle.ngrok.com/components/data-table#api-data-table-rows
	 *
	 * @example
	 * ```tsx
	 * <DataTable.Rows />
	 * ```
	 *
	 * If you want to customize the rendering of each row, you can pass a function as children:
	 * ```tsx
	 * <DataTable.Rows>
	 *   {(row) => (
	 *     <DataTable.Row key={row.id} row={row} onClick={() => onClickRow(row)} />
	 *   )}
	 * </DataTable.Rows>
	 */
	Rows,
} as const;

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

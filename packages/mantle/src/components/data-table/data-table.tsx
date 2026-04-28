import {
	type Column,
	type HeaderContext,
	type Table as TableInstance,
	type Row as TableRow,
	flexRender,
} from "@tanstack/react-table";
import {
	type ComponentProps,
	type ComponentPropsWithoutRef,
	type ComponentRef,
	Fragment,
	type ReactNode,
	createContext,
	forwardRef,
	useContext,
	useMemo,
} from "react";
import invariant from "tiny-invariant";
import { cx } from "../../utils/cx/cx.js";
import { $timeSortingDirection, type SortingMode } from "../../utils/sorting/direction.js";
import { Button } from "../button/button.js";
import type { SvgAttributes } from "../icon/types.js";
import { SortIcon } from "../icons/sort.js";
import { Table } from "../table/table.js";
import { getNextSortDirection } from "./helpers.js";
import type { SortDirection } from "./types.js";

type DataTableContextShape<TData = unknown> = {
	table: TableInstance<TData>;
};

// oxlint-disable-next-line typescript/no-explicit-any - known limitation of react context when using generics 😭
const DataTableContext = createContext<DataTableContextShape<any> | null>(null);

/**
 * @private
 */
function useDataTableContext<TData>() {
	const context = useContext(DataTableContext);

	invariant(context, "useDataTableContext should only be used within a DataTable child component");

	return context as DataTableContextShape<TData>;
}

type DataTableProps<TData> = ComponentProps<typeof Table.Root> & {
	table: TableInstance<TData>;
};

/**
 * The root container for a data table. Wraps all other `DataTable`
 * sub-components and provides the table context to its descendants.
 *
 * REQUIRED: Construct a TanStack Table instance via `useReactTable` (from
 * `@tanstack/react-table`, also re-exported from `@ngrok/mantle/data-table`)
 * and pass it through the `table` prop. The instance owns columns, data, and
 * any sorting / filtering / pagination state — the wrapper components read
 * from it.
 *
 * @see https://mantle.ngrok.com/components/data-table#datatableroot
 *
 * @example
 * ```tsx
 * import {
 *   DataTable,
 *   createColumnHelper,
 *   getCoreRowModel,
 *   useReactTable,
 * } from "@ngrok/mantle/data-table";
 *
 * type Row = { id: string; name: string };
 * const columnHelper = createColumnHelper<Row>();
 * const columns = [
 *   columnHelper.accessor("name", {
 *     id: "name",
 *     header: () => <DataTable.Header>Name</DataTable.Header>,
 *     cell: (props) => <DataTable.Cell>{props.getValue()}</DataTable.Cell>,
 *   }),
 * ];
 *
 * function MyTable({ data }: { data: Row[] }) {
 *   const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });
 *   const rows = table.getRowModel().rows;
 *
 *   return (
 *     <DataTable.Root table={table}>
 *       <DataTable.Head />
 *       <DataTable.Body>
 *         {rows.length > 0
 *           ? rows.map((row) => <DataTable.Row key={row.id} row={row} />)
 *           : <DataTable.EmptyRow>No results.</DataTable.EmptyRow>}
 *       </DataTable.Body>
 *     </DataTable.Root>
 *   );
 * }
 * ```
 */
function Root<TData>({ children, table, ...props }: DataTableProps<TData>) {
	const context: DataTableContextShape<TData> = useMemo(() => ({ table }), [table]);

	return (
		<DataTableContext.Provider value={context}>
			<Table.Root data-slot="data-table" {...props}>
				<Table.Element>{children}</Table.Element>
			</Table.Root>
		</DataTableContext.Provider>
	);
}

type DataTableHeaderSortButtonProps<TData, TValue> = Omit<ComponentProps<typeof Button>, "icon"> &
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
 * A sortable button toggle for a column header in a data table. Renders a sort
 * icon that reflects the current direction, handles ARIA announcements, and
 * cycles through sort states on click.
 *
 * Each click cycles through:
 * - For `"alphanumeric"` sorting: `unsorted → ascending → descending → unsorted`
 * - For `"time"` sorting: `unsorted → newest-first → oldest-first → unsorted`
 *
 * For right-aligned numeric columns, pass `className="justify-end"` and
 * `iconPlacement="start"` so the sort icon stays paired with the label.
 *
 * @see https://mantle.ngrok.com/components/data-table#datatableheadersortbutton
 *
 * @example
 * ```tsx
 * columnHelper.accessor("email", {
 *   id: "email",
 *   header: (props) => (
 *     <DataTable.Header>
 *       <DataTable.HeaderSortButton column={props.column} sortingMode="alphanumeric">
 *         Email
 *       </DataTable.HeaderSortButton>
 *     </DataTable.Header>
 *   ),
 *   cell: (props) => <DataTable.Cell>{props.getValue()}</DataTable.Cell>,
 * });
 * ```
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
	const rawSortDirection = column.getIsSorted();
	const canSort = !disableSorting && column.getCanSort();

	const sortDirection: SortDirection =
		canSort && typeof rawSortDirection === "string" ? rawSortDirection : "unsorted";

	const sortIcon = propSortIcon?.(sortDirection) ?? (
		<DefaultSortIcon mode={sortingMode} direction={sortDirection} />
	);

	return (
		<Button
			appearance="ghost"
			data-slot="data-table-header-sort-button"
			className={cx(
				"flex justify-start w-full h-full rounded-none not-disabled:active:scale-none text-muted",
				className,
			)}
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
 * A `<th>` optimized for header actions. Wrap each column's header content in
 * this; for sortable columns, nest a `DataTable.HeaderSortButton` inside.
 * Non-sortable columns can render plain text.
 *
 * @see https://mantle.ngrok.com/components/data-table#datatableheader
 *
 * @example
 * ```tsx
 * columnHelper.accessor("name", {
 *   id: "name",
 *   header: (props) => (
 *     <DataTable.Header>
 *       <DataTable.HeaderSortButton column={props.column} sortingMode="alphanumeric">
 *         Name
 *       </DataTable.HeaderSortButton>
 *     </DataTable.Header>
 *   ),
 *   cell: (props) => <DataTable.Cell>{props.getValue()}</DataTable.Cell>,
 * });
 * ```
 */
function Header({ children, className, ...props }: DataTableHeaderProps) {
	return (
		<Table.Header
			data-slot="data-table-header"
			className={cx("has-data-table-header-action:px-0", className)}
			{...props}
		>
			{children}
		</Table.Header>
	);
}

/**
 * The `<tbody>` container for rows of data. Typically wraps a map of
 * `DataTable.Row`, with a `DataTable.EmptyRow` fallback when there is no data.
 *
 * @see https://mantle.ngrok.com/components/data-table#datatablebody
 *
 * @example
 * ```tsx
 * const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });
 * const rows = table.getRowModel().rows;
 *
 * <DataTable.Root table={table}>
 *   <DataTable.Head />
 *   <DataTable.Body>
 *     {rows.length > 0
 *       ? rows.map((row) => <DataTable.Row key={row.id} row={row} />)
 *       : <DataTable.EmptyRow>No results.</DataTable.EmptyRow>}
 *   </DataTable.Body>
 * </DataTable.Root>
 * ```
 */
const Body = forwardRef<
	ComponentRef<typeof Table.Body>,
	ComponentPropsWithoutRef<typeof Table.Body>
>((props, ref) => <Table.Body ref={ref} data-slot="data-table-body" {...props} />);
Body.displayName = "DataTableBody";

type DataTableHeadProps = Omit<ComponentProps<typeof Table.Head>, "children">;

/**
 * The `<thead>` container that renders column headers automatically from
 * `table.getHeaderGroups()`. Does not accept children — headers come from each
 * column's `header` definition on the TanStack Table column config.
 *
 * @see https://mantle.ngrok.com/components/data-table#datatablehead
 *
 * @example
 * ```tsx
 * const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });
 * const rows = table.getRowModel().rows;
 *
 * <DataTable.Root table={table}>
 *   <DataTable.Head />
 *   <DataTable.Body>
 *     {rows.length > 0
 *       ? rows.map((row) => <DataTable.Row key={row.id} row={row} />)
 *       : <DataTable.EmptyRow>No results.</DataTable.EmptyRow>}
 *   </DataTable.Body>
 * </DataTable.Root>
 * ```
 */
function Head<TData>(props: DataTableHeadProps) {
	const { table } = useDataTableContext<TData>();

	return (
		<Table.Head data-slot="data-table-head" {...props}>
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

type DataTableRowProps<TData> = Omit<ComponentProps<typeof Table.Row>, "children"> & {
	row: TableRow<TData>;
};

/**
 * A single data table body row rendered from a TanStack Table row instance.
 * Does not accept children — cells come from each column's `cell` definition.
 *
 * When `onClick` is provided, the row automatically receives `cursor-pointer`.
 * Pass a different `cursor-*` class via `className` (e.g. `cursor-default`,
 * `cursor-wait`) to override. For keyboard and screen-reader access, also
 * render a `<Link>` inside the primary cell — a `<tr>` is not focusable.
 *
 * @see https://mantle.ngrok.com/components/data-table#datatablerow
 *
 * @example
 * ```tsx
 * const navigate = useNavigate();
 *
 * {rows.map((row) => (
 *   <DataTable.Row
 *     key={row.id}
 *     row={row}
 *     onClick={() => navigate(href("/payments/:id", { id: row.original.id }))}
 *   />
 * ))}
 * ```
 */
function Row<TData>({ className, row, ...props }: DataTableRowProps<TData>) {
	return (
		<Table.Row
			data-slot="data-table-row"
			className={cx(props.onClick && "cursor-pointer", className)}
			{...props}
		>
			{row.getVisibleCells().map((cell) => (
				<Fragment key={cell.id}>
					{flexRender(cell.column.columnDef.cell, cell.getContext())}
				</Fragment>
			))}
		</Table.Row>
	);
}

type DataTableEmptyRowProps = ComponentProps<typeof Table.Row>;

/**
 * An empty-state row that spans every column. Render this as the `else` branch
 * when `rows.length === 0` to keep the table's frame intact instead of
 * collapsing to an empty `<tbody>`. The cell `colSpan` is computed from the
 * TanStack Table instance via context, so no manual column count is needed.
 *
 * @see https://mantle.ngrok.com/components/data-table#datatableemptyrow
 *
 * @example
 * ```tsx
 * const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });
 * const rows = table.getRowModel().rows;
 *
 * <DataTable.Root table={table}>
 *   <DataTable.Head />
 *   <DataTable.Body>
 *     {rows.length > 0
 *       ? rows.map((row) => <DataTable.Row key={row.id} row={row} />)
 *       : <DataTable.EmptyRow>No results.</DataTable.EmptyRow>}
 *   </DataTable.Body>
 * </DataTable.Root>
 * ```
 */
function EmptyRow<TData>({ children, ...props }: DataTableEmptyRowProps) {
	const { table } = useDataTableContext<TData>();
	const numberOfColumns = table.getAllColumns().length;

	return (
		<Table.Row data-slot="data-table-empty-row" {...props}>
			<Table.Cell colSpan={numberOfColumns}>{children}</Table.Cell>
		</Table.Row>
	);
}

/**
 * Internal: renders the visual indicator on the left edge of the sticky action
 * column — a 1px divider plus a soft shadow gradient that reads as content
 * sliding under the pinned column. Positioned as a 6px strip sitting
 * immediately to the left of its sticky parent cell; `-inset-y-px` lets
 * adjacent rows' strips overlap at row dividers so the effect reads as one
 * continuous column instead of per-row blobs.
 *
 * Rendered as a child `<span>` because box-shadow on `<td>`/`<th>` is
 * unreliable across table layout modes.
 */
function StickyColIndicator() {
	return (
		<span
			aria-hidden
			className={cx(
				"pointer-events-none absolute -inset-y-px -left-1.5 w-1.5",
				"opacity-0 transition-opacity group-data-sticky-active/table:opacity-100",
				// 1px divider painted at the strip's right edge (= the pinned
				// cell's left edge).
				"shadow-[1px_0_0_0_var(--border-color-card-muted)]",
				// Soft shadow gradient fading leftward. Uses mantle's shadow
				// tokens so the alpha adapts to light/dark themes.
				"bg-linear-to-l to-transparent",
				"from-[color-mix(in_oklab,var(--shadow-color)_var(--shadow-second-opacity),transparent)]",
			)}
		/>
	);
}

type DataTableActionCellProps = ComponentProps<typeof Table.Cell>;

/**
 * A sticky-right `<td>` for per-row action buttons (typically an `IconButton`
 * that opens a `DropdownMenu`). Pair with `DataTable.ActionHeader`.
 *
 * If the row has `onClick`, pass `onClick={(event) => event.stopPropagation()}`
 * on this cell so clicks on action controls don't bubble and fire the row
 * handler.
 *
 * @see https://mantle.ngrok.com/components/data-table#datatableactioncell
 *
 * @example
 * ```tsx
 * columnHelper.display({
 *   id: "actions",
 *   header: () => <DataTable.ActionHeader />,
 *   cell: () => (
 *     <DataTable.ActionCell onClick={(event) => event.stopPropagation()}>
 *       <DropdownMenu.Root>...</DropdownMenu.Root>
 *     </DataTable.ActionCell>
 *   ),
 * });
 * ```
 */
function ActionCell({ children, className, ...props }: DataTableActionCellProps) {
	return (
		<Table.Cell
			// Marks this cell as a sticky right-edge column so Table.Root can suppress
			// its container-level right-side scroll fade (keeping this cell opaque).
			data-mantle-table-sticky-right
			data-slot="data-table-action-cell"
			className={cx(
				// `bg-inherit` keeps the sticky cell opaque with the row's current bg
				// (including hover state) so scrolling cells don't show through.
				// Avoid `display: flex` here — it overrides `display: table-cell`,
				// preventing the cell from stretching to the full row height in
				// `border-separate` mode.
				"sticky z-10 right-0 text-end align-middle bg-inherit p-2",
				className,
			)}
			{...props}
		>
			<StickyColIndicator />
			{children}
		</Table.Cell>
	);
}

type DataTableActionHeaderProps = ComponentProps<typeof Table.Header>;

/**
 * A sticky header cell that pairs with `DataTable.ActionCell`. Use this as the
 * header for the action column so the pinned column visually aligns across the
 * header and every body row when the table scrolls horizontally.
 *
 * @see https://mantle.ngrok.com/components/data-table#datatableactionheader
 *
 * @example
 * ```tsx
 * columnHelper.display({
 *   id: "actions",
 *   header: () => <DataTable.ActionHeader />,
 *   cell: () => <DataTable.ActionCell>{...}</DataTable.ActionCell>,
 * })
 * ```
 */
function ActionHeader({ children, className, ...props }: DataTableActionHeaderProps) {
	const { table } = useDataTableContext();
	const hasRows = table.getRowModel().rows.length > 0;

	return (
		<Table.Header
			// Only mark as sticky-right when body rows exist so the empty state
			// doesn't suppress the container's right-side scroll fade.
			{...(hasRows ? { "data-mantle-table-sticky-right": true } : {})}
			data-slot="data-table-action-header"
			className={cx(
				// `bg-inherit` keeps the sticky header opaque with the thead's current bg.
				hasRows && "sticky z-10 right-0 bg-inherit",
				className,
			)}
			{...props}
		>
			{hasRows && <StickyColIndicator />}
			{children}
		</Table.Header>
	);
}

// Set display names to preserve original component names for debugging
Root.displayName = "DataTable";
ActionCell.displayName = "DataTableActionCell";
ActionHeader.displayName = "DataTableActionHeader";
Body.displayName = "DataTableBody";
EmptyRow.displayName = "DataTableEmptyRow";
Head.displayName = "DataTableHead";
Header.displayName = "DataTableHeader";
HeaderSortButton.displayName = "DataTableHeaderSortButton";
Row.displayName = "DataTableRow";

/**
 * Use `DataTable` for INTERACTIVE tabular data — sorting, filtering, pagination,
 * row selection, and server-side or client-side data. Built on TanStack Table;
 * the consumer MUST construct a `useReactTable` instance from
 * `@tanstack/react-table` and pass it to `DataTable.Root` via the `table` prop.
 * Every TanStack utility (`createColumnHelper`, `getCoreRowModel`,
 * `getSortedRowModel`, `getPaginationRowModel`, `getFilteredRowModel`,
 * `useReactTable`, …) is re-exported from `@ngrok/mantle/data-table` so a single
 * import covers both the wrapper components and the TanStack helpers.
 *
 * For STATIC, layout-driven tables (read-only data dumps, simple key/value
 * displays, plain markup tables with no interactivity), use `Table` instead.
 *
 * @see https://mantle.ngrok.com/components/data-table
 *
 * @example
 * Composition:
 * ```
 * DataTable.Root
 * ├── DataTable.Head
 * │   └── DataTable.Row
 * │       ├── DataTable.Header
 * │       │   └── DataTable.HeaderSortButton
 * │       └── DataTable.ActionHeader
 * └── DataTable.Body
 *     ├── DataTable.Row
 *     │   ├── DataTable.Cell
 *     │   └── DataTable.ActionCell
 *     └── DataTable.EmptyRow
 * ```
 *
 * @example
 * Minimal — read-only table with a single sortable column:
 * ```tsx
 * import {
 *   DataTable,
 *   createColumnHelper,
 *   getCoreRowModel,
 *   useReactTable,
 * } from "@ngrok/mantle/data-table";
 *
 * type Row = { id: string; name: string };
 *
 * const columnHelper = createColumnHelper<Row>();
 * const columns = [
 *   columnHelper.accessor("name", {
 *     id: "name",
 *     header: (props) => (
 *       <DataTable.Header>
 *         <DataTable.HeaderSortButton column={props.column} sortingMode="alphanumeric">
 *           Name
 *         </DataTable.HeaderSortButton>
 *       </DataTable.Header>
 *     ),
 *     cell: (props) => <DataTable.Cell>{props.getValue()}</DataTable.Cell>,
 *   }),
 * ];
 *
 * function MyTable({ data }: { data: Row[] }) {
 *   const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });
 *   const rows = table.getRowModel().rows;
 *
 *   return (
 *     <DataTable.Root table={table}>
 *       <DataTable.Head />
 *       <DataTable.Body>
 *         {rows.length > 0
 *           ? rows.map((row) => <DataTable.Row key={row.id} row={row} />)
 *           : <DataTable.EmptyRow>No results.</DataTable.EmptyRow>}
 *       </DataTable.Body>
 *     </DataTable.Root>
 *   );
 * }
 * ```
 *
 * @example
 * Sortable + filterable + paginated — with a global text filter and page controls:
 * ```tsx
 * import {
 *   DataTable,
 *   createColumnHelper,
 *   getCoreRowModel,
 *   getFilteredRowModel,
 *   getPaginationRowModel,
 *   getSortedRowModel,
 *   useReactTable,
 * } from "@ngrok/mantle/data-table";
 * import { Button } from "@ngrok/mantle/button";
 * import { Input } from "@ngrok/mantle/input";
 * import { useState } from "react";
 *
 * type Payment = { id: string; amount: number; status: "pending" | "succeeded" | "failed"; email: string };
 *
 * const columnHelper = createColumnHelper<Payment>();
 * const columns = [
 *   columnHelper.accessor("status", {
 *     id: "status",
 *     header: (props) => (
 *       <DataTable.Header>
 *         <DataTable.HeaderSortButton column={props.column} sortingMode="alphanumeric">
 *           Status
 *         </DataTable.HeaderSortButton>
 *       </DataTable.Header>
 *     ),
 *     cell: (props) => <DataTable.Cell>{props.getValue()}</DataTable.Cell>,
 *   }),
 *   columnHelper.accessor("email", {
 *     id: "email",
 *     header: (props) => (
 *       <DataTable.Header>
 *         <DataTable.HeaderSortButton column={props.column} sortingMode="alphanumeric">
 *           Email
 *         </DataTable.HeaderSortButton>
 *       </DataTable.Header>
 *     ),
 *     cell: (props) => <DataTable.Cell>{props.getValue()}</DataTable.Cell>,
 *   }),
 *   columnHelper.accessor("amount", {
 *     id: "amount",
 *     header: (props) => (
 *       <DataTable.Header className="text-right">
 *         <DataTable.HeaderSortButton
 *           column={props.column}
 *           sortingMode="alphanumeric"
 *           className="justify-end"
 *           iconPlacement="start"
 *         >
 *           Amount
 *         </DataTable.HeaderSortButton>
 *       </DataTable.Header>
 *     ),
 *     cell: (props) => (
 *       <DataTable.Cell className="text-right tabular-nums">
 *         {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(props.getValue())}
 *       </DataTable.Cell>
 *     ),
 *   }),
 * ];
 *
 * function PaymentsTable({ data }: { data: Payment[] }) {
 *   const [globalFilter, setGlobalFilter] = useState("");
 *
 *   const table = useReactTable({
 *     data,
 *     columns,
 *     state: { globalFilter },
 *     onGlobalFilterChange: setGlobalFilter,
 *     getCoreRowModel: getCoreRowModel(),
 *     getSortedRowModel: getSortedRowModel(),
 *     getFilteredRowModel: getFilteredRowModel(),
 *     getPaginationRowModel: getPaginationRowModel(),
 *   });
 *   const rows = table.getRowModel().rows;
 *
 *   return (
 *     <div className="space-y-4">
 *       <Input
 *         placeholder="Filter payments…"
 *         value={globalFilter}
 *         onChange={(event) => setGlobalFilter(event.target.value)}
 *       />
 *       <DataTable.Root table={table}>
 *         <DataTable.Head />
 *         <DataTable.Body>
 *           {rows.length > 0
 *             ? rows.map((row) => <DataTable.Row key={row.id} row={row} />)
 *             : <DataTable.EmptyRow>No payments match.</DataTable.EmptyRow>}
 *         </DataTable.Body>
 *       </DataTable.Root>
 *       <div className="flex items-center justify-between gap-2">
 *         <span className="text-sm text-muted">
 *           Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
 *         </span>
 *         <div className="flex gap-2">
 *           <Button
 *             type="button"
 *             priority="neutral"
 *             onClick={() => table.previousPage()}
 *             disabled={!table.getCanPreviousPage()}
 *           >
 *             Previous
 *           </Button>
 *           <Button
 *             type="button"
 *             priority="neutral"
 *             onClick={() => table.nextPage()}
 *             disabled={!table.getCanNextPage()}
 *           >
 *             Next
 *           </Button>
 *         </div>
 *       </div>
 *     </div>
 *   );
 * }
 * ```
 *
 * @example
 * Row action column — a sticky right-edge cell with a dropdown menu of actions.
 * If the row also has `onClick`, stop propagation on the action cell so clicks
 * don't bubble up and fire the row handler:
 * ```tsx
 * import { DataTable, createColumnHelper } from "@ngrok/mantle/data-table";
 * import { DropdownMenu } from "@ngrok/mantle/dropdown-menu";
 * import { IconButton } from "@ngrok/mantle/icon-button";
 * import { DotsThreeVerticalIcon } from "@phosphor-icons/react/DotsThreeVertical";
 *
 * const columnHelper = createColumnHelper<Payment>();
 *
 * const columns = [
 *   // …other columns…
 *   columnHelper.display({
 *     id: "actions",
 *     header: () => <DataTable.ActionHeader />,
 *     cell: (props) => (
 *       <DataTable.ActionCell onClick={(event) => event.stopPropagation()}>
 *         <DropdownMenu.Root>
 *           <DropdownMenu.Trigger asChild>
 *             <IconButton type="button" label="Actions" icon={<DotsThreeVerticalIcon />} />
 *           </DropdownMenu.Trigger>
 *           <DropdownMenu.Content align="end">
 *             <DropdownMenu.Item onSelect={() => copy(props.row.original.id)}>
 *               Copy ID
 *             </DropdownMenu.Item>
 *             <DropdownMenu.Item onSelect={() => refund(props.row.original.id)}>
 *               Refund
 *             </DropdownMenu.Item>
 *           </DropdownMenu.Content>
 *         </DropdownMenu.Root>
 *       </DataTable.ActionCell>
 *     ),
 *   }),
 * ];
 * ```
 *
 * @example
 * Clickable row navigating to a detail page — also render a `<Link>` inside the
 * primary cell so the row is reachable by keyboard and screen readers (a `<tr>`
 * is not focusable):
 * ```tsx
 * import { DataTable } from "@ngrok/mantle/data-table";
 * import { Link, href, useNavigate } from "react-router";
 *
 * function PaymentsTable({ data }: { data: Payment[] }) {
 *   const navigate = useNavigate();
 *   const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });
 *   const rows = table.getRowModel().rows;
 *
 *   return (
 *     <DataTable.Root table={table}>
 *       <DataTable.Head />
 *       <DataTable.Body>
 *         {rows.map((row) => (
 *           <DataTable.Row
 *             key={row.id}
 *             row={row}
 *             onClick={() => navigate(href("/payments/:id", { id: row.original.id }))}
 *           />
 *         ))}
 *       </DataTable.Body>
 *     </DataTable.Root>
 *   );
 * }
 *
 * // The primary column's cell renders a <Link> for keyboard / a11y reachability.
 * columnHelper.accessor("email", {
 *   id: "email",
 *   header: (props) => <DataTable.Header>Email</DataTable.Header>,
 *   cell: (props) => (
 *     <DataTable.Cell>
 *       <Link to={href("/payments/:id", { id: props.row.original.id })}>
 *         {props.getValue()}
 *       </Link>
 *     </DataTable.Cell>
 *   ),
 * });
 * ```
 */
const DataTable = {
	/**
	 * The root container of the data table component. REQUIRED: pass a
	 * `useReactTable` instance (from `@tanstack/react-table`, also re-exported
	 * from `@ngrok/mantle/data-table`) via the `table` prop — every other
	 * `DataTable.*` part reads from it through context.
	 *
	 * @see https://mantle.ngrok.com/components/data-table#datatableroot
	 *
	 * @example
	 * ```tsx
	 * const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });
	 * const rows = table.getRowModel().rows;
	 *
	 * <DataTable.Root table={table}>
	 *   <DataTable.Head />
	 *   <DataTable.Body>
	 *     {rows.length > 0
	 *       ? rows.map((row) => <DataTable.Row key={row.id} row={row} />)
	 *       : <DataTable.EmptyRow>No results.</DataTable.EmptyRow>}
	 *   </DataTable.Body>
	 * </DataTable.Root>
	 * ```
	 */
	Root,
	/**
	 * A sticky action cell positioned at the end of each row, typically holding
	 * an `IconButton` that opens a `DropdownMenu`. Pair with `DataTable.ActionHeader`.
	 *
	 * If the row has `onClick`, stop propagation on this cell so clicks on action
	 * controls don't bubble up and fire the row handler.
	 *
	 * @see https://mantle.ngrok.com/components/data-table#datatableactioncell
	 *
	 * @example
	 * ```tsx
	 * columnHelper.display({
	 *   id: "actions",
	 *   header: () => <DataTable.ActionHeader />,
	 *   cell: () => (
	 *     <DataTable.ActionCell onClick={(event) => event.stopPropagation()}>
	 *       <DropdownMenu.Root>...</DropdownMenu.Root>
	 *     </DataTable.ActionCell>
	 *   ),
	 * });
	 * ```
	 */
	ActionCell,
	/**
	 * A sticky header cell that pairs with `DataTable.ActionCell`, keeping the
	 * action column aligned across the header and body when scrolling horizontally.
	 * Use as the `header` for a `columnHelper.display` action column.
	 *
	 * @see https://mantle.ngrok.com/components/data-table#datatableactionheader
	 *
	 * @example
	 * ```tsx
	 * columnHelper.display({
	 *   id: "actions",
	 *   header: () => <DataTable.ActionHeader />,
	 *   cell: () => (
	 *     <DataTable.ActionCell onClick={(event) => event.stopPropagation()}>
	 *       <DropdownMenu.Root>...</DropdownMenu.Root>
	 *     </DataTable.ActionCell>
	 *   ),
	 * });
	 * ```
	 */
	ActionHeader,
	/**
	 * A `<td>` for rendering an individual data cell. Re-exported from
	 * `Table.Cell`. Every cell rendered by a column's `cell` function should
	 * be wrapped in this — a raw `<td>` skips mantle typography and padding.
	 *
	 * @see https://mantle.ngrok.com/components/data-table#datatablecell
	 *
	 * @example
	 * ```tsx
	 * columnHelper.accessor("name", {
	 *   id: "name",
	 *   header: (props) => <DataTable.Header>Name</DataTable.Header>,
	 *   cell: (props) => <DataTable.Cell>{props.getValue()}</DataTable.Cell>,
	 * });
	 * ```
	 */
	Cell: Table.Cell,
	/**
	 * The `<tbody>` container for rows of data. Typically wraps a map of
	 * `DataTable.Row`, with a `DataTable.EmptyRow` fallback when there is
	 * no data.
	 *
	 * @see https://mantle.ngrok.com/components/data-table#datatablebody
	 *
	 * @example
	 * ```tsx
	 * <DataTable.Body>
	 *   {rows.length > 0
	 *     ? rows.map((row) => <DataTable.Row key={row.id} row={row} />)
	 *     : <DataTable.EmptyRow>No results.</DataTable.EmptyRow>}
	 * </DataTable.Body>
	 * ```
	 */
	Body,
	/**
	 * An empty-state row that spans every column. Render this as the `else`
	 * branch when `rows.length === 0` to keep the table's frame intact instead
	 * of collapsing to an empty `<tbody>`.
	 *
	 * @see https://mantle.ngrok.com/components/data-table#datatableemptyrow
	 *
	 * @example
	 * ```tsx
	 * <DataTable.Body>
	 *   {rows.length > 0
	 *     ? rows.map((row) => <DataTable.Row key={row.id} row={row} />)
	 *     : <DataTable.EmptyRow>No results.</DataTable.EmptyRow>}
	 * </DataTable.Body>
	 * ```
	 */
	EmptyRow,
	/**
	 * The `<thead>` container that renders column headers automatically from
	 * `table.getHeaderGroups()`. Does not accept children — headers come from
	 * each column's `header` definition.
	 *
	 * @see https://mantle.ngrok.com/components/data-table#datatablehead
	 *
	 * @example
	 * ```tsx
	 * <DataTable.Root table={table}>
	 *   <DataTable.Head />
	 *   <DataTable.Body>...</DataTable.Body>
	 * </DataTable.Root>
	 * ```
	 */
	Head,
	/**
	 * A `<th>` optimized for header actions. Wrap each column's header content
	 * in this; for sortable columns, nest a `DataTable.HeaderSortButton` inside.
	 *
	 * @see https://mantle.ngrok.com/components/data-table#datatableheader
	 *
	 * @example
	 * ```tsx
	 * columnHelper.accessor("name", {
	 *   id: "name",
	 *   header: (props) => (
	 *     <DataTable.Header>
	 *       <DataTable.HeaderSortButton column={props.column} sortingMode="alphanumeric">
	 *         Name
	 *       </DataTable.HeaderSortButton>
	 *     </DataTable.Header>
	 *   ),
	 *   cell: (props) => <DataTable.Cell>{props.getValue()}</DataTable.Cell>,
	 * });
	 * ```
	 */
	Header,
	/**
	 * A sortable button toggle for a column header. Clicks cycle through
	 * sort directions: for `"alphanumeric"`, `unsorted → asc → desc → unsorted`;
	 * for `"time"`, `unsorted → desc (newest-first) → asc → unsorted`.
	 *
	 * Pass `className="justify-end"` and `iconPlacement="start"` for
	 * right-aligned numeric columns so the sort icon stays paired with the label.
	 *
	 * @see https://mantle.ngrok.com/components/data-table#datatableheadersortbutton
	 *
	 * @example
	 * ```tsx
	 * columnHelper.accessor("email", {
	 *   id: "email",
	 *   header: (props) => (
	 *     <DataTable.Header>
	 *       <DataTable.HeaderSortButton column={props.column} sortingMode="alphanumeric">
	 *         Email
	 *       </DataTable.HeaderSortButton>
	 *     </DataTable.Header>
	 *   ),
	 *   cell: (props) => <DataTable.Cell>{props.getValue()}</DataTable.Cell>,
	 * });
	 * ```
	 */
	HeaderSortButton,
	/**
	 * A single data table body row rendered from a TanStack Table row instance.
	 * Does not accept children — cells come from each column's `cell` definition.
	 *
	 * When `onClick` is provided, the row automatically receives `cursor-pointer`.
	 * Pass a different `cursor-*` class via `className` to override. For keyboard
	 * and screen-reader access, also render a `<Link>` inside the primary cell.
	 *
	 * @see https://mantle.ngrok.com/components/data-table#datatablerow
	 *
	 * @example
	 * ```tsx
	 * const navigate = useNavigate();
	 *
	 * {rows.map((row) => (
	 *   <DataTable.Row
	 *     key={row.id}
	 *     row={row}
	 *     onClick={() => navigate(href("/payments/:id", { id: row.original.id }))}
	 *   />
	 * ))}
	 * ```
	 */
	Row,
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

	const nextSortDirection = getNextSortDirection(currentSortDirection, sortingMode);

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

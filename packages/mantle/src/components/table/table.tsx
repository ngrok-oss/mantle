import type { ComponentProps, ComponentRef } from "react";
import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { composeRefs } from "../../utils/compose-refs/compose-refs.js";
import { cx } from "../../utils/cx/cx.js";

/**
 * The `<TableRoot>` is the root container element for all `<Table>`s.
 * It provides styling and additional functionality, such as horizontal overflow
 * detection.
 *
 * Must be used as the parent of a `<Table>`.
 *
 * @example
 * ```tsx
 * <TableRoot>
 *   <Table>
 *     <TableCaption>A list of your recent invoices.</TableCaption>
 *     <TableHead>
 *       <TableRow>
 *         <TableHeader className="w-[100px]">Invoice</TableHeader>
 *         <TableHeader>Status</TableHeader>
 *         <TableHeader>Method</TableHeader>
 *         <TableHeader className="text-right">Amount</TableHeader>
 *       </TableRow>
 *     </TableHead>
 *     <TableBody>
 *       {invoices.map((invoice) => (
 *         <TableRow key={invoice.invoice}>
 *           <TableCell className="font-medium">{invoice.invoice}</TableCell>
 *           <TableCell>{invoice.paymentStatus}</TableCell>
 *           <TableCell>{invoice.paymentMethod}</TableCell>
 *           <TableCell className="text-right">{invoice.totalAmount}</TableCell>
 *         </TableRow>
 *       ))}
 *     </TableBody>
 *     <TableFoot>
 *       <TableRow>
 *         <TableCell colSpan={3}>Total</TableCell>
 *         <TableCell className="text-right">$2,500.00</TableCell>
 *       </TableRow>
 *     </TableFoot>
 *   </Table>
 * </TableRoot>
 * ```
 *
 * @see https://mantle.ngrok.com/components/table#api-table-root
 */
const TableRoot = forwardRef<ComponentRef<"div">, ComponentProps<"div">>(
	({ children, className, ...props }, ref) => {
		const horizontalOverflow =
			useHorizontalOverflowObserver<ComponentRef<"div">>();

		return (
			<div
				className={cx(
					"group/table scrollbar overflow-x-auto rounded-lg border border-card bg-white dark:bg-gray-100 relative w-full",
					className,
				)}
				data-sticky-active={
					(horizontalOverflow.state.hasOverflow &&
						!horizontalOverflow.state.scrolledToEnd) ||
					undefined
				}
				data-x-overflow={horizontalOverflow.state.hasOverflow}
				data-x-scroll-end={
					horizontalOverflow.state.hasOverflow &&
					horizontalOverflow.state.scrolledToEnd
				}
				ref={composeRefs(horizontalOverflow.ref, ref)}
				{...props}
			>
				{children}
			</div>
		);
	},
);
TableRoot.displayName = "TableRoot";

/**
 * The `<Table>` is a structured way to display data in rows and columns. The API
 * matches the HTML `<table>` element 1:1.
 *
 * Permitted content in this order:
 * 1. optional: `<TableCaption>`
 * 2. 0 or more: `<colgroup>` elements
 * 3. optional: `<TableHead>`
 * 4. either one of the following:
 *    - 0 or more: `<TableBody>`
 *    - 0 or more: `<TableRow>`
 * 5. optional: `<TableFoot>`
 *
 * @description
 * Establishes a table formatting context. Elements inside the `<Table>`
 * generate rectangular boxes. Each box occupies a number of table cells
 * according to the following rules:
 *   1. The row boxes fill the table in the source code order from top to bottom.
 *      Each row box occupies one row of cells.
 *   2. A row group box occupies one or more row boxes.
 *   3. Column boxes are placed next to each other in source code order.
 *      Depending on the value of the dir attribute, the columns are laid in
 *      left-to-right or right-to-left direction. A column box occupies one or
 *      more columns of table cells.
 *   4. A column group box occupies one or more column boxes.
 *   5. A cell box may span over multiple rows and columns. User agents trim
 *      cells to fit in the available number of rows and columns.
 * Table cells do have padding. Boxes that make up a table do not have margins.
 * For more in depth information, see the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table).
 *
 * @example
 * ```tsx
 * <TableRoot>
 *   <Table>
 *     <TableCaption>A list of your recent invoices.</TableCaption>
 *     <TableHead>
 *       <TableRow>
 *         <TableHeader className="w-[100px]">Invoice</TableHeader>
 *         <TableHeader>Status</TableHeader>
 *         <TableHeader>Method</TableHeader>
 *         <TableHeader className="text-right">Amount</TableHeader>
 *       </TableRow>
 *     </TableHead>
 *     <TableBody>
 *       {invoices.map((invoice) => (
 *         <TableRow key={invoice.invoice}>
 *           <TableCell className="font-medium">{invoice.invoice}</TableCell>
 *           <TableCell>{invoice.paymentStatus}</TableCell>
 *           <TableCell>{invoice.paymentMethod}</TableCell>
 *           <TableCell className="text-right">{invoice.totalAmount}</TableCell>
 *         </TableRow>
 *       ))}
 *     </TableBody>
 *     <TableFoot>
 *       <TableRow>
 *         <TableCell colSpan={3}>Total</TableCell>
 *         <TableCell className="text-right">$2,500.00</TableCell>
 *       </TableRow>
 *     </TableFoot>
 *   </Table>
 * </TableRoot>
 * ```
 *
 * @see https://mantle.ngrok.com/components/table#api-table
 */
const Table = forwardRef<ComponentRef<"table">, ComponentProps<"table">>(
	({ children, className, ...props }, ref) => {
		return (
			<table
				ref={ref}
				className={cx(
					"table-auto border-collapse caption-bottom w-full min-w-full text-left",
					className,
				)}
				{...props}
			>
				{children}
			</table>
		);
	},
);
Table.displayName = "Table";

/**
 * The `<TableHead>` is a container for the table's column headers.
 * Encapsulates a set of `<TableRow>`s, indicating that they comprise the head
 * of a table with information about the table's columns. This is usually in the
 * form of column headers (`<TableHeader>`).
 *
 * Must be used as a child of a `<Table>`. It should only come after any
 * `<TableCaption>` or `<colgroup>` and before any `<TableBody>` or `<TableFoot>`.
 *
 * Permitted Content:
 * 1. 0 or more: `<TableRow>`
 *
 * @example
 * ```tsx
 * <TableRoot>
 *   <Table>
 *     <TableCaption>A list of your recent invoices.</TableCaption>
 *     <TableHead>
 *       <TableRow>
 *         <TableHeader className="w-[100px]">Invoice</TableHeader>
 *         <TableHeader>Status</TableHeader>
 *         <TableHeader>Method</TableHeader>
 *         <TableHeader className="text-right">Amount</TableHeader>
 *       </TableRow>
 *     </TableHead>
 *     <TableBody>
 *       {invoices.map((invoice) => (
 *         <TableRow key={invoice.invoice}>
 *           <TableCell className="font-medium">{invoice.invoice}</TableCell>
 *           <TableCell>{invoice.paymentStatus}</TableCell>
 *           <TableCell>{invoice.paymentMethod}</TableCell>
 *           <TableCell className="text-right">{invoice.totalAmount}</TableCell>
 *         </TableRow>
 *       ))}
 *     </TableBody>
 *     <TableFoot>
 *       <TableRow>
 *         <TableCell colSpan={3}>Total</TableCell>
 *         <TableCell className="text-right">$2,500.00</TableCell>
 *       </TableRow>
 *     </TableFoot>
 *   </Table>
 * </TableRoot>
 * ```
 *
 * @see https://mantle.ngrok.com/components/table#api-table-header
 */
const TableHead = forwardRef<ComponentRef<"thead">, ComponentProps<"thead">>(
	({ children, className, ...props }, ref) => (
		<thead
			ref={ref}
			className={cx(
				//,
				"border-b border-card-muted",
				"divide-y divide-card-muted",
				"text-strong bg-base",
				className,
			)}
			{...props}
		>
			{children}
		</thead>
	),
);
TableHead.displayName = "TableHead";

/**
 * The `<TableBody>` encapsulates a set of `<TableRow>`s, indicating that they
 * comprise the body of a table's (main) data.
 *
 * Must be used as a child of a `<Table>` and only come after any
 * `<TableCaption>`, `<colgroup>`, or `<TableHead>`.
 *
 * Permitted Content:
 * 1. 0 or more: `<TableRow>`
 *
 * @example
 * ```tsx
 * <TableRoot>
 *   <Table>
 *     <TableCaption>A list of your recent invoices.</TableCaption>
 *     <TableHead>
 *       <TableRow>
 *         <TableHeader className="w-[100px]">Invoice</TableHeader>
 *         <TableHeader>Status</TableHeader>
 *         <TableHeader>Method</TableHeader>
 *         <TableHeader className="text-right">Amount</TableHeader>
 *       </TableRow>
 *     </TableHead>
 *     <TableBody>
 *       {invoices.map((invoice) => (
 *         <TableRow key={invoice.invoice}>
 *           <TableCell className="font-medium">{invoice.invoice}</TableCell>
 *           <TableCell>{invoice.paymentStatus}</TableCell>
 *           <TableCell>{invoice.paymentMethod}</TableCell>
 *           <TableCell className="text-right">{invoice.totalAmount}</TableCell>
 *         </TableRow>
 *       ))}
 *     </TableBody>
 *     <TableFoot>
 *       <TableRow>
 *         <TableCell colSpan={3}>Total</TableCell>
 *         <TableCell className="text-right">$2,500.00</TableCell>
 *       </TableRow>
 *     </TableFoot>
 *   </Table>
 * </TableRoot>
 * ```
 *
 * @see https://mantle.ngrok.com/components/table#api-table-body
 */
const TableBody = forwardRef<ComponentRef<"tbody">, ComponentProps<"tbody">>(
	({ children, className, ...props }, ref) => (
		<tbody
			className={cx(
				//,
				"divide-y divide-card-muted",
				"text-body",
				"[thead+&]:border-t [thead+&]:border-card-muted",
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</tbody>
	),
);
TableBody.displayName = "TableBody";

/**
 * The `<TableFoot>` encapsulates a set of `<TableRow>`s, indicating that they
 * comprise the foot of a table with information about the table's columns. This
 * is usually a summary of the columns, e.g., a sum of the given numbers in a
 * column.
 *
 * Must be used as a child of a `<Table>` and only come after any
 * `<TableCaption>`, `<colgroup>`, `<TableHead>`, and `<TableBody>`.
 *
 * Permitted Content:
 * 1. 0 or more: `<TableRow>` elements
 *
 * @example
 * ```tsx
 * <TableRoot>
 *   <Table>
 *     <TableCaption>A list of your recent invoices.</TableCaption>
 *     <TableHead>
 *       <TableRow>
 *         <TableHeader className="w-[100px]">Invoice</TableHeader>
 *         <TableHeader>Status</TableHeader>
 *         <TableHeader>Method</TableHeader>
 *         <TableHeader className="text-right">Amount</TableHeader>
 *       </TableRow>
 *     </TableHead>
 *     <TableBody>
 *       {invoices.map((invoice) => (
 *         <TableRow key={invoice.invoice}>
 *           <TableCell className="font-medium">{invoice.invoice}</TableCell>
 *           <TableCell>{invoice.paymentStatus}</TableCell>
 *           <TableCell>{invoice.paymentMethod}</TableCell>
 *           <TableCell className="text-right">{invoice.totalAmount}</TableCell>
 *         </TableRow>
 *       ))}
 *     </TableBody>
 *     <TableFoot>
 *       <TableRow>
 *         <TableCell colSpan={3}>Total</TableCell>
 *         <TableCell className="text-right">$2,500.00</TableCell>
 *       </TableRow>
 *     </TableFoot>
 *   </Table>
 * </TableRoot>
 * ```
 *
 * @see https://mantle.ngrok.com/components/table#api-table-foot
 */
const TableFoot = forwardRef<ComponentRef<"tfoot">, ComponentProps<"tfoot">>(
	({ children, className, ...props }, ref) => (
		<tfoot
			ref={ref}
			className={cx(
				//,
				"bg-gray-50/50 font-medium text-body",
				"border-t border-card-muted",
				"divide-y divide-card-muted",
				className,
			)}
			{...props}
		>
			{children}
		</tfoot>
	),
);
TableFoot.displayName = "TableFoot";

/**
 * The `<TableRow>` defines a row of cells in a table. The row's cells can then
 * be established using a mix of `<TableCell>` and `<TableHeader>` components.
 *
 * Must be used as a child of a `<TableHead>`, `<TableBody>`, or `<TableFoot>`.
 *
 * Permitted Content:
 * 1. 0 or more: `<TableHeader>` or `<TableCell>`
 *
 * @example
 * ```tsx
 * <TableRoot>
 *   <Table>
 *     <TableCaption>A list of your recent invoices.</TableCaption>
 *     <TableHead>
 *       <TableRow>
 *         <TableHeader className="w-[100px]">Invoice</TableHeader>
 *         <TableHeader>Status</TableHeader>
 *         <TableHeader>Method</TableHeader>
 *         <TableHeader className="text-right">Amount</TableHeader>
 *       </TableRow>
 *     </TableHead>
 *     <TableBody>
 *       {invoices.map((invoice) => (
 *         <TableRow key={invoice.invoice}>
 *           <TableCell className="font-medium">{invoice.invoice}</TableCell>
 *           <TableCell>{invoice.paymentStatus}</TableCell>
 *           <TableCell>{invoice.paymentMethod}</TableCell>
 *           <TableCell className="text-right">{invoice.totalAmount}</TableCell>
 *         </TableRow>
 *       ))}
 *     </TableBody>
 *     <TableFoot>
 *       <TableRow>
 *         <TableCell colSpan={3}>Total</TableCell>
 *         <TableCell className="text-right">$2,500.00</TableCell>
 *       </TableRow>
 *     </TableFoot>
 *   </Table>
 * </TableRoot>
 * ```
 *
 * @see https://mantle.ngrok.com/components/table#api-table-row
 */
const TableRow = forwardRef<ComponentRef<"tr">, ComponentProps<"tr">>(
	({ children, className, ...props }, ref) => (
		<tr
			ref={ref}
			className={cx(
				// "data-state-selected:bg-gray-200",
				"[&>td]:bg-card [&>td]:hover:bg-card-hover",
				className,
			)}
			{...props}
		>
			{children}
		</tr>
	),
);
TableRow.displayName = "TableRow";

/**
 * The `<TableHeader>` defines a cell as the header of a group of table cells
 * and may be used as a child of a `<TableRow>`. The exact nature of this group
 * is defined by the scope and headers attributes.
 *
 * Must be used as a child of a `<TableRow>`.
 *
 * Permitted Content:
 * 1. Flow content, but with no header, footer, sectioning content, or heading
 * content descendants.
 *
 * @example
 * ```tsx
 * <TableRoot>
 *   <Table>
 *     <TableCaption>A list of your recent invoices.</TableCaption>
 *     <TableHead>
 *       <TableRow>
 *         <TableHeader className="w-[100px]">Invoice</TableHeader>
 *         <TableHeader>Status</TableHeader>
 *         <TableHeader>Method</TableHeader>
 *         <TableHeader className="text-right">Amount</TableHeader>
 *       </TableRow>
 *     </TableHead>
 *     <TableBody>
 *       {invoices.map((invoice) => (
 *         <TableRow key={invoice.invoice}>
 *           <TableCell className="font-medium">{invoice.invoice}</TableCell>
 *           <TableCell>{invoice.paymentStatus}</TableCell>
 *           <TableCell>{invoice.paymentMethod}</TableCell>
 *           <TableCell className="text-right">{invoice.totalAmount}</TableCell>
 *         </TableRow>
 *       ))}
 *     </TableBody>
 *     <TableFoot>
 *       <TableRow>
 *         <TableCell colSpan={3}>Total</TableCell>
 *         <TableCell className="text-right">$2,500.00</TableCell>
 *       </TableRow>
 *     </TableFoot>
 *   </Table>
 * </TableRoot>
 * ```
 *
 * @see https://mantle.ngrok.com/components/table#api-table-header
 */
const TableHeader = forwardRef<ComponentRef<"th">, ComponentProps<"th">>(
	({ children, className, ...props }, ref) => (
		<th
			ref={ref}
			className={cx(
				"h-12 px-4 text-left align-middle text-sm font-medium [&:has([role=checkbox])]:pr-0",
				className,
			)}
			{...props}
		>
			{children}
		</th>
	),
);
TableHead.displayName = "TableHead";

/**
 * The `<TableCell>` defines a cell of a table that contains data and may be
 * used as a child of a `<TableRow>`.
 *
 * Must be used as a child of a `<TableRow>`.
 *
 * Permitted Content:
 * 1. Flow content
 *
 * @example
 * ```tsx
 * <TableRoot>
 *   <Table>
 *     <TableCaption>A list of your recent invoices.</TableCaption>
 *     <TableHead>
 *       <TableRow>
 *         <TableHeader className="w-[100px]">Invoice</TableHeader>
 *         <TableHeader>Status</TableHeader>
 *         <TableHeader>Method</TableHeader>
 *         <TableHeader className="text-right">Amount</TableHeader>
 *       </TableRow>
 *     </TableHead>
 *     <TableBody>
 *       {invoices.map((invoice) => (
 *         <TableRow key={invoice.invoice}>
 *           <TableCell className="font-medium">{invoice.invoice}</TableCell>
 *           <TableCell>{invoice.paymentStatus}</TableCell>
 *           <TableCell>{invoice.paymentMethod}</TableCell>
 *           <TableCell className="text-right">{invoice.totalAmount}</TableCell>
 *         </TableRow>
 *       ))}
 *     </TableBody>
 *     <TableFoot>
 *       <TableRow>
 *         <TableCell colSpan={3}>Total</TableCell>
 *         <TableCell className="text-right">$2,500.00</TableCell>
 *       </TableRow>
 *     </TableFoot>
 *   </Table>
 * </TableRoot>
 * ```
 *
 * @see https://mantle.ngrok.com/components/table#api-table-cell
 */
const TableCell = forwardRef<ComponentRef<"td">, ComponentProps<"td">>(
	({ children, className, ...props }, ref) => (
		<td
			ref={ref}
			className={cx(
				"p-4 align-middle [&:has([role=checkbox])]:pr-0 font-mono text-size-mono",
				className,
			)}
			{...props}
		>
			{children}
		</td>
	),
);
TableCell.displayName = "TableCell";

/**
 * The optional `<TableCaption>` specifies the caption (or title) of a table,
 * providing the table an accessible description.
 *
 * If used, must be the first child of a `<Table>`.
 *
 * Permitted Content:
 * 1. Flow content
 *
 * @example
 * ```tsx
 * <TableRoot>
 *   <Table>
 *     <TableCaption>A list of your recent invoices.</TableCaption>
 *     <TableHead>
 *       <TableRow>
 *         <TableHeader className="w-[100px]">Invoice</TableHeader>
 *         <TableHeader>Status</TableHeader>
 *         <TableHeader>Method</TableHeader>
 *         <TableHeader className="text-right">Amount</TableHeader>
 *       </TableRow>
 *     </TableHead>
 *     <TableBody>
 *       {invoices.map((invoice) => (
 *         <TableRow key={invoice.invoice}>
 *           <TableCell className="font-medium">{invoice.invoice}</TableCell>
 *           <TableCell>{invoice.paymentStatus}</TableCell>
 *           <TableCell>{invoice.paymentMethod}</TableCell>
 *           <TableCell className="text-right">{invoice.totalAmount}</TableCell>
 *         </TableRow>
 *       ))}
 *     </TableBody>
 *     <TableFoot>
 *       <TableRow>
 *         <TableCell colSpan={3}>Total</TableCell>
 *         <TableCell className="text-right">$2,500.00</TableCell>
 *       </TableRow>
 *     </TableFoot>
 *   </Table>
 * </TableRoot>
 * ```
 *
 * @see https://mantle.ngrok.com/components/table#api-table-caption
 */
const TableCaption = forwardRef<
	ComponentRef<"caption">,
	ComponentProps<"caption">
>(({ children, className, ...props }, ref) => (
	<caption
		ref={ref}
		className={cx(
			"py-4 text-sm text-gray-500",
			"border-t border-card-muted",
			className,
		)}
		{...props}
	>
		{children}
	</caption>
));
TableCaption.displayName = "TableCaption";

export {
	//,
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFoot,
	TableHead,
	TableHeader,
	TableRoot,
	TableRow,
};

/**
 * A custom hook that observes the horizontal overflow of an element and determines
 * if it has overflow and if it is scrolled to the end.
 *
 * @private
 */
function useHorizontalOverflowObserver<T extends HTMLElement>() {
	const ref = useRef<T | null>(null);
	const [state, setState] = useState({
		hasOverflow: false,
		scrolledToEnd: false,
	});

	useEffect(() => {
		const element = ref.current;
		if (!element) {
			return;
		}

		const checkState = () => {
			const hasOverflow = element.scrollWidth > element.clientWidth;
			const scrolledToEnd =
				Math.abs(
					element.scrollWidth - element.scrollLeft - element.clientWidth,
				) < 1;

			setState((previous) => {
				if (
					previous.hasOverflow !== hasOverflow ||
					previous.scrolledToEnd !== scrolledToEnd
				) {
					return { hasOverflow, scrolledToEnd };
				}
				return previous; // No state change
			});
		};

		const resizeObserver = new ResizeObserver(checkState);
		resizeObserver.observe(element);

		const mutationObserver = new MutationObserver(checkState);
		mutationObserver.observe(element, { childList: true, subtree: true });

		element.addEventListener("scroll", checkState, { passive: true });

		checkState();

		return () => {
			resizeObserver.disconnect();
			mutationObserver.disconnect();
			element.removeEventListener("scroll", checkState);
		};
	}, []);

	return useMemo(() => ({ ref, state }), [state]);
}

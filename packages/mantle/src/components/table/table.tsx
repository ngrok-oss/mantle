import type { ComponentProps, ComponentRef } from "react";
import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { composeRefs } from "../../utils/compose-refs/compose-refs.js";
import { cx } from "../../utils/cx/cx.js";

/**
 * The `<Table.Root>` is the root container element for all `Table`s.
 * It provides styling and additional functionality, such as horizontal overflow
 * detection.
 *
 * Must be used as the parent of a `<Table.Element>`.
 *
 * @example
 * ```tsx
 * <Table.Root>
 *   <Table.Element>
 *     <Table.Caption>A list of your recent invoices.</Table.Caption>
 *     <Table.Head>
 *       <Table.Row>
 *         <Table.Header className="w-[100px]">Invoice</Table.Header>
 *         <Table.Header>Status</Table.Header>
 *         <Table.Header>Method</Table.Header>
 *         <Table.Header className="text-right">Amount</Table.Header>
 *       </Table.Row>
 *     </Table.Head>
 *     <Table.Body>
 *       {invoices.map((invoice) => (
 *         <Table.Row key={invoice.invoice}>
 *           <Table.Cell className="font-medium">{invoice.invoice}</Table.Cell>
 *           <Table.Cell>{invoice.paymentStatus}</Table.Cell>
 *           <Table.Cell>{invoice.paymentMethod}</Table.Cell>
 *           <Table.Cell className="text-right">{invoice.totalAmount}</Table.Cell>
 *         </Table.Row>
 *       ))}
 *     </Table.Body>
 *     <Table.Foot>
 *       <Table.Row>
 *         <Table.Cell colSpan={3}>Total</Table.Cell>
 *         <Table.Cell className="text-right">$2,500.00</Table.Cell>
 *       </Table.Row>
 *     </Table.Foot>
 *   </Table.Element>
 * </Table.Root>
 * ```
 *
 * @see https://mantle.ngrok.com/components/table#api-table-root
 */
const Root = forwardRef<ComponentRef<"div">, ComponentProps<"div">>(
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
Root.displayName = "TableRoot";

/**
 * The `<Table.Element>` is a structured way to display data in rows and columns. The API
 * matches the HTML `<table>` element 1:1.
 *
 * Permitted content in this order:
 * 1. optional: `<Table.Caption>`
 * 2. 0 or more: `<colgroup>` elements
 * 3. optional: `<Table.Head>`
 * 4. either one of the following:
 *    - 0 or more: `<Table.Body>`
 *    - 0 or more: `<Table.Row>`
 * 5. optional: `<Table.Foot>`
 *
 * @description
 * Establishes a table formatting context. Elements inside the `<Table.Element>`
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
 * <Table.Root>
 *   <Table.Element>
 *     <Table.Caption>A list of your recent invoices.</Table.Caption>
 *     <Table.Head>
 *       <Table.Row>
 *         <Table.Header className="w-[100px]">Invoice</Table.Header>
 *         <Table.Header>Status</Table.Header>
 *         <Table.Header>Method</Table.Header>
 *         <Table.Header className="text-right">Amount</Table.Header>
 *       </Table.Row>
 *     </Table.Head>
 *     <Table.Body>
 *       {invoices.map((invoice) => (
 *         <Table.Row key={invoice.invoice}>
 *           <Table.Cell className="font-medium">{invoice.invoice}</Table.Cell>
 *           <Table.Cell>{invoice.paymentStatus}</Table.Cell>
 *           <Table.Cell>{invoice.paymentMethod}</Table.Cell>
 *           <Table.Cell className="text-right">{invoice.totalAmount}</Table.Cell>
 *         </Table.Row>
 *       ))}
 *     </Table.Body>
 *     <Table.Foot>
 *       <Table.Row>
 *         <Table.Cell colSpan={3}>Total</Table.Cell>
 *         <Table.Cell className="text-right">$2,500.00</Table.Cell>
 *       </Table.Row>
 *     </Table.Foot>
 *   </Table.Element>
 * </Table.Root>
 * ```
 *
 * @see https://mantle.ngrok.com/components/table#api-table
 */
const Element = forwardRef<ComponentRef<"table">, ComponentProps<"table">>(
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
Element.displayName = "TableElement";

/**
 * The `<Table.Head>` is a container for the table's column headers.
 * Encapsulates a set of `<Table.Row>`s, indicating that they comprise the head
 * of a table with information about the table's columns. This is usually in the
 * form of column headers (`<Table.Header>`).
 *
 * Must be used as a child of a `<Table.Element>`. It should only come after any
 * `<Table.Caption>` or `<colgroup>` and before any `<Table.Body>` or `<Table.Foot>`.
 *
 * Permitted Content:
 * 1. 0 or more: `<Table.Row>`
 *
 * @example
 * ```tsx
 * <Table.Root>
 *   <Table.Element>
 *     <Table.Caption>A list of your recent invoices.</Table.Caption>
 *     <Table.Head>
 *       <Table.Row>
 *         <Table.Header className="w-[100px]">Invoice</Table.Header>
 *         <Table.Header>Status</Table.Header>
 *         <Table.Header>Method</Table.Header>
 *         <Table.Header className="text-right">Amount</Table.Header>
 *       </Table.Row>
 *     </Table.Head>
 *     <Table.Body>
 *       {invoices.map((invoice) => (
 *         <Table.Row key={invoice.invoice}>
 *           <Table.Cell className="font-medium">{invoice.invoice}</Table.Cell>
 *           <Table.Cell>{invoice.paymentStatus}</Table.Cell>
 *           <Table.Cell>{invoice.paymentMethod}</Table.Cell>
 *           <Table.Cell className="text-right">{invoice.totalAmount}</Table.Cell>
 *         </Table.Row>
 *       ))}
 *     </Table.Body>
 *     <Table.Foot>
 *       <Table.Row>
 *         <Table.Cell colSpan={3}>Total</Table.Cell>
 *         <Table.Cell className="text-right">$2,500.00</Table.Cell>
 *       </Table.Row>
 *     </Table.Foot>
 *   </Table.Element>
 * </Table.Root>
 * ```
 *
 * @see https://mantle.ngrok.com/components/table#api-table-header
 */
const Head = forwardRef<ComponentRef<"thead">, ComponentProps<"thead">>(
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
Head.displayName = "TableHead";

/**
 * The `<Table.Body>` encapsulates a set of `<Table.Row>`s, indicating that they
 * comprise the body of a table's (main) data.
 *
 * Must be used as a child of a `<Table.Element>` and only come after any
 * `<Table.Caption>`, `<colgroup>`, or `<Table.Head>`.
 *
 * Permitted Content:
 * 1. 0 or more: `<Table.Row>`
 *
 * @example
 * ```tsx
 * <Table.Root>
 *   <Table.Element>
 *     <Table.Caption>A list of your recent invoices.</Table.Caption>
 *     <Table.Head>
 *       <Table.Row>
 *         <Table.Header className="w-[100px]">Invoice</Table.Header>
 *         <Table.Header>Status</Table.Header>
 *         <Table.Header>Method</Table.Header>
 *         <Table.Header className="text-right">Amount</Table.Header>
 *       </Table.Row>
 *     </Table.Head>
 *     <Table.Body>
 *       {invoices.map((invoice) => (
 *         <Table.Row key={invoice.invoice}>
 *           <Table.Cell className="font-medium">{invoice.invoice}</Table.Cell>
 *           <Table.Cell>{invoice.paymentStatus}</Table.Cell>
 *           <Table.Cell>{invoice.paymentMethod}</Table.Cell>
 *           <Table.Cell className="text-right">{invoice.totalAmount}</Table.Cell>
 *         </Table.Row>
 *       ))}
 *     </Table.Body>
 *     <Table.Foot>
 *       <Table.Row>
 *         <Table.Cell colSpan={3}>Total</Table.Cell>
 *         <Table.Cell className="text-right">$2,500.00</Table.Cell>
 *       </Table.Row>
 *     </Table.Foot>
 *   </Table.Element>
 * </Table.Root>
 * ```
 *
 * @see https://mantle.ngrok.com/components/table#api-table-body
 */
const Body = forwardRef<ComponentRef<"tbody">, ComponentProps<"tbody">>(
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
Body.displayName = "TableBody";

/**
 * The `<Table.Foot>` encapsulates a set of `<Table.Row>`s, indicating that they
 * comprise the foot of a table with information about the table's columns. This
 * is usually a summary of the columns, e.g., a sum of the given numbers in a
 * column.
 *
 * Must be used as a child of a `<Table.Element>` and only come after any
 * `<Table.Caption>`, `<colgroup>`, `<Table.Head>`, and `<Table.Body>`.
 *
 * Permitted Content:
 * 1. 0 or more: `<Table.Row>` elements
 *
 * @example
 * ```tsx
 * <Table.Root>
 *   <Table.Element>
 *     <Table.Caption>A list of your recent invoices.</Table.Caption>
 *     <Table.Head>
 *       <Table.Row>
 *         <Table.Header className="w-[100px]">Invoice</Table.Header>
 *         <Table.Header>Status</Table.Header>
 *         <Table.Header>Method</Table.Header>
 *         <Table.Header className="text-right">Amount</Table.Header>
 *       </Table.Row>
 *     </Table.Head>
 *     <Table.Body>
 *       {invoices.map((invoice) => (
 *         <Table.Row key={invoice.invoice}>
 *           <Table.Cell className="font-medium">{invoice.invoice}</Table.Cell>
 *           <Table.Cell>{invoice.paymentStatus}</Table.Cell>
 *           <Table.Cell>{invoice.paymentMethod}</Table.Cell>
 *           <Table.Cell className="text-right">{invoice.totalAmount}</Table.Cell>
 *         </Table.Row>
 *       ))}
 *     </Table.Body>
 *     <Table.Foot>
 *       <Table.Row>
 *         <Table.Cell colSpan={3}>Total</Table.Cell>
 *         <Table.Cell className="text-right">$2,500.00</Table.Cell>
 *       </Table.Row>
 *     </Table.Foot>
 *   </Table.Element>
 * </Table.Root>
 * ```
 *
 * @see https://mantle.ngrok.com/components/table#api-table-foot
 */
const Foot = forwardRef<ComponentRef<"tfoot">, ComponentProps<"tfoot">>(
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
Foot.displayName = "TableFoot";

/**
 * The `<Table.Row>` defines a row of cells in a table. The row's cells can then
 * be established using a mix of `<Table.Cell>` and `<Table.Header>` components.
 *
 * Must be used as a child of a `<Table.Head>`, `<Table.Body>`, or `<Table.Foot>`.
 *
 * Permitted Content:
 * 1. 0 or more: `<Table.Header>` or `<Table.Cell>`
 *
 * @example
 * ```tsx
 * <Table.Root>
 *   <Table.Element>
 *     <Table.Caption>A list of your recent invoices.</Table.Caption>
 *     <Table.Head>
 *       <Table.Row>
 *         <Table.Header className="w-[100px]">Invoice</Table.Header>
 *         <Table.Header>Status</Table.Header>
 *         <Table.Header>Method</Table.Header>
 *         <Table.Header className="text-right">Amount</Table.Header>
 *       </Table.Row>
 *     </Table.Head>
 *     <Table.Body>
 *       {invoices.map((invoice) => (
 *         <Table.Row key={invoice.invoice}>
 *           <Table.Cell className="font-medium">{invoice.invoice}</Table.Cell>
 *           <Table.Cell>{invoice.paymentStatus}</Table.Cell>
 *           <Table.Cell>{invoice.paymentMethod}</Table.Cell>
 *           <Table.Cell className="text-right">{invoice.totalAmount}</Table.Cell>
 *         </Table.Row>
 *       ))}
 *     </Table.Body>
 *     <Table.Foot>
 *       <Table.Row>
 *         <Table.Cell colSpan={3}>Total</Table.Cell>
 *         <Table.Cell className="text-right">$2,500.00</Table.Cell>
 *       </Table.Row>
 *     </Table.Foot>
 *   </Table.Element>
 * </Table.Root>
 * ```
 *
 * @see https://mantle.ngrok.com/components/table#api-table-row
 */
const Row = forwardRef<ComponentRef<"tr">, ComponentProps<"tr">>(
	({ children, className, ...props }, ref) => (
		<tr
			ref={ref}
			className={cx(
				// "data-state-selected:bg-gray-200",
				"[&>td]:bg-card [tbody:has(tr:not(:only-child))>&>td]:hover:bg-card-hover",
				className,
			)}
			{...props}
		>
			{children}
		</tr>
	),
);
Row.displayName = "TableRow";

/**
 * The `<Table.Header>` defines a cell as the header of a group of table cells
 * and may be used as a child of a `<Table.Row>`. The exact nature of this group
 * is defined by the scope and headers attributes.
 *
 * Must be used as a child of a `<Table.Row>`.
 *
 * Permitted Content:
 * 1. Flow content, but with no header, footer, sectioning content, or heading
 * content descendants.
 *
 * @example
 * ```tsx
 * <Table.Root>
 *   <Table.Element>
 *     <Table.Caption>A list of your recent invoices.</Table.Caption>
 *     <Table.Head>
 *       <Table.Row>
 *         <Table.Header className="w-[100px]">Invoice</Table.Header>
 *         <Table.Header>Status</Table.Header>
 *         <Table.Header>Method</Table.Header>
 *         <Table.Header className="text-right">Amount</Table.Header>
 *       </Table.Row>
 *     </Table.Head>
 *     <Table.Body>
 *       {invoices.map((invoice) => (
 *         <Table.Row key={invoice.invoice}>
 *           <Table.Cell className="font-medium">{invoice.invoice}</Table.Cell>
 *           <Table.Cell>{invoice.paymentStatus}</Table.Cell>
 *           <Table.Cell>{invoice.paymentMethod}</Table.Cell>
 *           <Table.Cell className="text-right">{invoice.totalAmount}</Table.Cell>
 *         </Table.Row>
 *       ))}
 *     </Table.Body>
 *     <Table.Foot>
 *       <Table.Row>
 *         <Table.Cell colSpan={3}>Total</Table.Cell>
 *         <Table.Cell className="text-right">$2,500.00</Table.Cell>
 *       </Table.Row>
 *     </Table.Foot>
 *   </Table.Element>
 * </Table.Root>
 * ```
 *
 * @see https://mantle.ngrok.com/components/table#api-table-header
 */
const Header = forwardRef<ComponentRef<"th">, ComponentProps<"th">>(
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
Header.displayName = "TableHeader";

/**
 * The `<Table.Cell>` defines a cell of a table that contains data and may be
 * used as a child of a `<Table.Row>`.
 *
 * Must be used as a child of a `<Table.Row>`.
 *
 * Permitted Content:
 * 1. Flow content
 *
 * @example
 * ```tsx
 * <Table.Root>
 *   <Table.Element>
 *     <Table.Caption>A list of your recent invoices.</Table.Caption>
 *     <Table.Head>
 *       <Table.Row>
 *         <Table.Header className="w-[100px]">Invoice</Table.Header>
 *         <Table.Header>Status</Table.Header>
 *         <Table.Header>Method</Table.Header>
 *         <Table.Header className="text-right">Amount</Table.Header>
 *       </Table.Row>
 *     </Table.Head>
 *     <Table.Body>
 *       {invoices.map((invoice) => (
 *         <Table.Row key={invoice.invoice}>
 *           <Table.Cell className="font-medium">{invoice.invoice}</Table.Cell>
 *           <Table.Cell>{invoice.paymentStatus}</Table.Cell>
 *           <Table.Cell>{invoice.paymentMethod}</Table.Cell>
 *           <Table.Cell className="text-right">{invoice.totalAmount}</Table.Cell>
 *         </Table.Row>
 *       ))}
 *     </Table.Body>
 *     <Table.Foot>
 *       <Table.Row>
 *         <Table.Cell colSpan={3}>Total</Table.Cell>
 *         <Table.Cell className="text-right">$2,500.00</Table.Cell>
 *       </Table.Row>
 *     </Table.Foot>
 *   </Table.Element>
 * </Table.Root>
 * ```
 *
 * @see https://mantle.ngrok.com/components/table#api-table-cell
 */
const Cell = forwardRef<ComponentRef<"td">, ComponentProps<"td">>(
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
Cell.displayName = "TableCell";

/**
 * The optional `<Table.Caption>` specifies the caption (or title) of a table,
 * providing the table an accessible description.
 *
 * If used, must be the first child of a `<Table.Element>`.
 *
 * Permitted Content:
 * 1. Flow content
 *
 * @example
 * ```tsx
 * <Table.Root>
 *   <Table.Element>
 *     <Table.Caption>A list of your recent invoices.</Table.Caption>
 *     <Table.Head>
 *       <Table.Row>
 *         <Table.Header className="w-[100px]">Invoice</Table.Header>
 *         <Table.Header>Status</Table.Header>
 *         <Table.Header>Method</Table.Header>
 *         <Table.Header className="text-right">Amount</Table.Header>
 *       </Table.Row>
 *     </Table.Head>
 *     <Table.Body>
 *       {invoices.map((invoice) => (
 *         <Table.Row key={invoice.invoice}>
 *           <Table.Cell className="font-medium">{invoice.invoice}</Table.Cell>
 *           <Table.Cell>{invoice.paymentStatus}</Table.Cell>
 *           <Table.Cell>{invoice.paymentMethod}</Table.Cell>
 *           <Table.Cell className="text-right">{invoice.totalAmount}</Table.Cell>
 *         </Table.Row>
 *       ))}
 *     </Table.Body>
 *     <Table.Foot>
 *       <Table.Row>
 *         <Table.Cell colSpan={3}>Total</Table.Cell>
 *         <Table.Cell className="text-right">$2,500.00</Table.Cell>
 *       </Table.Row>
 *     </Table.Foot>
 *   </Table.Element>
 * </Table.Root>
 * ```
 *
 * @see https://mantle.ngrok.com/components/table#api-table-caption
 */
const Caption = forwardRef<ComponentRef<"caption">, ComponentProps<"caption">>(
	({ children, className, ...props }, ref) => (
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
	),
);
Caption.displayName = "TableCaption";

/**
 * A table namespace object that contains the table components.
 */
const Table = {
	Body,
	Caption,
	Cell,
	Element,
	Foot,
	Head,
	Header,
	Root,
	Row,
} as const;

export {
	//,
	Table,
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

import { CaretLeft } from "@phosphor-icons/react/dist/icons/CaretLeft";
import { CaretRight } from "@phosphor-icons/react/dist/icons/CaretRight";
import { createContext, forwardRef, useContext, useState, type ComponentProps, type ElementRef } from "react";
import invariant from "tiny-invariant";
import { ButtonGroup, IconButton } from "../../../button";
import { cx } from "../../../utils/cx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../select";
import { Separator } from "../separator";

type CursorPaginationContextValue = {
	defaultPageSize: number;
	pageSize: number;
	setPageSize: (value: number) => void;
};

const CursorPaginationContext = createContext<CursorPaginationContextValue | undefined>(undefined);

type CursorPaginationProps = ComponentProps<"div"> & {
	defaultPageSize: number;
};

/**
 * A pagination component for use with cursor-based pagination.
 *
 * Cursor-based pagination is a way of loading data in chunks by using a cursor
 * from the last item on the current page to know where to start the next set,
 * making sure nothing is missed or repeated. Like a linked list, but for chunks
 * of data. It doesn't let you jump to a specific page or know how many total pages
 * there are, but it's more efficient for large or real-time data sets.
 */
const CursorPagination = forwardRef<HTMLDivElement, CursorPaginationProps>(
	({ className, children, defaultPageSize, ...props }, ref) => {
		const [pageSize, setPageSize] = useState<number>(defaultPageSize);

		return (
			<CursorPaginationContext.Provider value={{ defaultPageSize, pageSize, setPageSize }}>
				<div className={cx("inline-flex items-center justify-between gap-2", className)} ref={ref} {...props}>
					{children}
				</div>
			</CursorPaginationContext.Provider>
		);
	},
);
CursorPagination.displayName = "CursorPagination";

type CursorButtonsProps = Omit<ComponentProps<typeof ButtonGroup>, "appearance"> & {
	hasNextPage: boolean;
	hasPreviousPage: boolean;
	onNextPage?: () => void;
	onPreviousPage?: () => void;
};

/**
 * A pair of buttons for navigating between pages of data when using cursor-based pagination.
 */
const CursorButtons = forwardRef<ElementRef<typeof ButtonGroup>, CursorButtonsProps>(
	({ hasNextPage, hasPreviousPage, onNextPage, onPreviousPage, ...props }, ref) => {
		// TODO(cody): this _feels_ like a good spot for left and right arrow keys to navigate between pages when focused on the buttons

		return (
			<ButtonGroup appearance="panel" ref={ref} {...props}>
				<IconButton
					appearance="ghost"
					disabled={!hasPreviousPage}
					icon={<CaretLeft />}
					label="Previous page"
					onClick={onPreviousPage}
					size="sm"
					type="button"
				/>
				<Separator orientation="vertical" className="min-h-5" />
				<IconButton
					appearance="ghost"
					disabled={!hasNextPage}
					icon={<CaretRight />}
					label="Next page"
					onClick={onNextPage}
					size="sm"
					type="button"
				/>
			</ButtonGroup>
		);
	},
);
CursorButtons.displayName = "CursorButtons";

const defaultPageSizes = [5, 10, 20, 50, 100] as const;

type CursorPageSizeSelectProps = Omit<ComponentProps<typeof SelectTrigger>, "children"> & {
	pageSizes?: readonly number[];
	onChangePageSize?: (value: number) => void;
};

/**
 * A select input for changing the number of items per page when using cursor-based pagination.
 */
const CursorPageSizeSelect = forwardRef<ElementRef<typeof SelectTrigger>, CursorPageSizeSelectProps>(
	({ className, pageSizes = defaultPageSizes, onChangePageSize, ...rest }, ref) => {
		const ctx = useContext(CursorPaginationContext);

		invariant(ctx, "CursorPageSizeSelect must be used as a child of a CursorPagination component");

		invariant(pageSizes.includes(ctx.defaultPageSize), "defaultPageSize must be included in pageSizes");

		invariant(pageSizes.includes(ctx.pageSize), "pageSize must be included in pageSizes");

		return (
			<Select
				defaultValue={`${ctx.pageSize}`}
				onChange={(value) => {
					let newPageSize = Number.parseInt(value, 10);
					if (Number.isNaN(newPageSize)) {
						newPageSize = ctx.defaultPageSize;
					}
					ctx.setPageSize(newPageSize);
					onChangePageSize?.(newPageSize);
				}}
			>
				<SelectTrigger ref={ref} className={cx("w-auto min-w-36", className)} value={ctx.pageSize} {...rest}>
					<SelectValue />
				</SelectTrigger>
				<SelectContent width="trigger">
					{pageSizes.map((size) => (
						<SelectItem key={size} value={`${size}`}>
							{size} per page
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		);
	},
);
CursorPageSizeSelect.displayName = "CursorPageSizeSelect";

export {
	//,
	CursorPagination,
	CursorButtons,
	CursorPageSizeSelect,
};

export type {
	//,
	CursorPaginationProps,
	CursorButtonsProps,
	CursorPageSizeSelectProps,
};

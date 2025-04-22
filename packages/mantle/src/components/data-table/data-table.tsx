import type { Column, HeaderContext } from "@tanstack/react-table";
import type { ComponentProps, ReactNode } from "react";
import { cx } from "../../utils/cx/cx.js";
import {
	type SortingMode,
	sortingDirections as baseSortingDirections,
} from "../../utils/sorting/direction.js";
import { Button } from "../button/button.js";
import type { SvgAttributes } from "../icon/types.js";
import { Sort } from "../icons/sort.js";
import { TableHeader } from "../table/table.js";

const sortDirections = [...baseSortingDirections, "unsorted"] as const;
type SortDirection = (typeof sortDirections)[number];

type DataTableColumnHeaderProps<TData, TValue> = ComponentProps<
	typeof TableHeader
> &
	Pick<HeaderContext<TData, TValue>, "column"> & {
		/**
		 * Use this to render a custom sort icon for the column if it is sortable
		 * and you want to override the default sort icon
		 */
		sortIcon?: (sortDirection: SortDirection) => ReactNode;
		/**
		 * The sorting mode of the column, whether it is alphanumeric or time based.
		 */
		sortingMode: SortingMode;
	};

/**
 * The header for a column in a data table.
 * If the column is sortable, clicking the header will toggle the sorting
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
function DataTableHeader<TData, TValue>({
	children,
	className,
	column,
	sortIcon: propsSortIcon,
	sortingMode,
	...props
}: DataTableColumnHeaderProps<TData, TValue>) {
	const _sortDirection = column.getIsSorted();
	const canSort = column.getCanSort();

	const sortDirection: SortDirection =
		canSort && typeof _sortDirection === "string" ? _sortDirection : "unsorted";

	const sortIcon = propsSortIcon?.(sortDirection) ?? (
		<DefaultSortIcon mode={sortingMode} direction={sortDirection} />
	);

	return (
		<TableHeader className={cx("px-0", className)} {...props}>
			<Button
				className="flex justify-start w-full h-full rounded-none"
				type="button"
				appearance="ghost"
				priority="neutral"
				iconPlacement="end"
				data-sort-direction={sortDirection}
				icon={sortIcon}
				onClick={() => {
					if (!canSort) {
						return;
					}
					toggleNextSortingDirection(column, sortingMode);
				}}
			>
				{sortDirection !== "unsorted" && (
					<span className="sr-only">
						Sorted in {sortDirection === "asc" ? "ascending" : "descending"}{" "}
						order
					</span>
				)}
				{children}
			</Button>
		</TableHeader>
	);
}

export {
	//,
	DataTableHeader,
};

type DefaultSortIconProps = SvgAttributes & {
	direction: SortDirection;
	mode: SortingMode;
};

function DefaultSortIcon({ direction, mode, ...props }: DefaultSortIconProps) {
	if (direction === "unsorted") {
		return null;
	}

	return <Sort mode={mode} direction={direction} {...props} />;
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

	const _sortDirection = column.getIsSorted();
	const sortDirection: SortDirection =
		typeof _sortDirection === "string" ? _sortDirection : "unsorted";

	const nextSortDirection = getNextSortDirection(sortDirection, sortingMode);

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

function getNextSortDirection(
	currentSortDirection: SortDirection,
	sortingMode: SortingMode,
) {
	const sortOrder =
		sortingMode === "alphanumeric"
			? (["unsorted", "asc", "desc"] as const satisfies SortDirection[])
			: (["unsorted", "desc", "asc"] as const satisfies SortDirection[]);

	return getNextInCircularList(sortOrder, currentSortDirection) ?? "unsorted";
}

function getNextInCircularList<T>(
	list: T[],
	currentItem: T,
	fallback?: T | undefined,
) {
	const currentIndex = list.findIndex((item) => item === currentItem);
	const nextIndex = (currentIndex + 1) % list.length;
	return list.at(nextIndex) ?? fallback;
}

import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useOffsetPagination } from "./use-offset-pagination";

describe("useOffsetPagination", () => {
	test("given a list size of zero", () => {
		const { result } = renderHook(() =>
			useOffsetPagination({
				listSize: 0,
				pageSize: 10,
			}),
		);
		expect(result.current.currentPage).toBe(1);
		expect(result.current.totalPages).toBe(0);
		expect(result.current.hasNextPage).toBe(false);
		expect(result.current.hasPreviousPage).toBe(false);
	});

	test("given a list size of 1", () => {
		const { result } = renderHook(() =>
			useOffsetPagination({
				listSize: 1,
				pageSize: 10,
			}),
		);
		expect(result.current.currentPage).toBe(1);
		expect(result.current.totalPages).toBe(1);
		expect(result.current.hasNextPage).toBe(false);
		expect(result.current.hasPreviousPage).toBe(false);
	});

	test("given a list size of 1867 and a page size of 100", () => {
		const { result } = renderHook(() =>
			useOffsetPagination({
				listSize: 1867,
				pageSize: 100,
			}),
		);
		expect(result.current.currentPage).toBe(1);
		expect(result.current.totalPages).toBe(19);
		expect(result.current.hasNextPage).toBe(true);
		expect(result.current.hasPreviousPage).toBe(false);

		act(() => {
			result.current.nextPage();
		});
		expect(result.current.currentPage).toBe(2);
		expect(result.current.hasNextPage).toBe(true);
		expect(result.current.hasPreviousPage).toBe(true);

		act(() => {
			result.current.goToPage(10);
		});
		expect(result.current.currentPage).toBe(10);
		expect(result.current.hasNextPage).toBe(true);
		expect(result.current.hasPreviousPage).toBe(true);

		act(() => {
			result.current.goToLastPage();
		});
		expect(result.current.currentPage).toBe(19);
		expect(result.current.hasNextPage).toBe(false);
		expect(result.current.hasPreviousPage).toBe(true);

		act(() => {
			result.current.previousPage();
		});
		expect(result.current.currentPage).toBe(18);
		expect(result.current.hasNextPage).toBe(true);
		expect(result.current.hasPreviousPage).toBe(true);

		act(() => {
			result.current.setPageSize(50);
		});
		expect(result.current.currentPage).toBe(1);
		expect(result.current.totalPages).toBe(38);
		expect(result.current.hasNextPage).toBe(true);
		expect(result.current.hasPreviousPage).toBe(false);
	});

	test("changing the page size resets the current page to 1", async () => {
		const { result, rerender } = renderHook((props) => useOffsetPagination(props), {
			initialProps: {
				listSize: 1867,
				pageSize: 100,
			},
		});

		expect(result.current.currentPage).toBe(1);
		expect(result.current.pageSize).toBe(100);

		act(() => result.current.nextPage());
		expect(result.current.currentPage).toBe(2);

		rerender({ listSize: 1867, pageSize: 50 });
		expect(result.current.currentPage).toBe(1);
	});

	test("changing the list size resets the current page to 1", async () => {
		const { result, rerender } = renderHook((props) => useOffsetPagination(props), {
			initialProps: {
				listSize: 1867,
				pageSize: 100,
			},
		});

		expect(result.current.currentPage).toBe(1);
		expect(result.current.pageSize).toBe(100);

		act(() => result.current.nextPage());
		expect(result.current.currentPage).toBe(2);

		rerender({ listSize: 200, pageSize: 100 });
		expect(result.current.currentPage).toBe(1);
	});
});

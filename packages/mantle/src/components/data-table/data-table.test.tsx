import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import type { ComponentProps } from "react";
import invariant from "tiny-invariant";
import { describe, expect, test, vi } from "vitest";
import { DataTable, createColumnHelper, getCoreRowModel, useReactTable } from "./index.js";

type Row = { id: string; name: string };

const columnHelper = createColumnHelper<Row>();
const columns = [
	columnHelper.accessor("name", {
		id: "name",
		header: () => <DataTable.Header>Name</DataTable.Header>,
		cell: (props) => <DataTable.Cell>{props.getValue()}</DataTable.Cell>,
	}),
];
const data: Row[] = [{ id: "row-1", name: "Alice" }];

function Harness(props: Omit<ComponentProps<typeof DataTable.Row>, "row">) {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});
	const row = table.getRowModel().rows[0];
	invariant(row, "Harness expected at least one row");
	return (
		<DataTable.Root table={table}>
			<DataTable.Body>
				<DataTable.Row data-testid="row" row={row} {...props} />
			</DataTable.Body>
		</DataTable.Root>
	);
}

describe("DataTable.Row", () => {
	test("applies `cursor-pointer` when `onClick` is provided", () => {
		render(<Harness onClick={() => {}} />);
		expect(screen.getByTestId("row")).toHaveClass("cursor-pointer");
	});

	test("does not apply `cursor-pointer` when no `onClick` is provided", () => {
		render(<Harness />);
		expect(screen.getByTestId("row")).not.toHaveClass("cursor-pointer");
	});

	test("invokes `onClick` when the row is clicked", async () => {
		const user = userEvent.setup();
		const handleClick = vi.fn();
		render(<Harness onClick={handleClick} />);

		await user.click(screen.getByTestId("row"));

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	test("consumer `className` takes precedence over the auto `cursor-pointer`", () => {
		render(<Harness onClick={() => {}} className="cursor-wait" />);
		const row = screen.getByTestId("row");
		expect(row).toHaveClass("cursor-wait");
		expect(row).not.toHaveClass("cursor-pointer");
	});
});

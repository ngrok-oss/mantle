import { IconButton } from "@ngrok/mantle/button";
import {
	DataTable,
	createColumnHelper,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@ngrok/mantle/data-table";
import { DropdownMenu } from "@ngrok/mantle/dropdown-menu";
import { Icon } from "@ngrok/mantle/icon";
import { DotsThreeIcon } from "@phosphor-icons/react/DotsThree";
import { PencilSimpleIcon } from "@phosphor-icons/react/PencilSimple";
import { TrashSimpleIcon } from "@phosphor-icons/react/TrashSimple";
import { useMemo } from "react";

type Payment = {
	id: string;
	amount: number;
	status: string;
	email: string;
};

const examplePayments: Payment[] = [
	{ id: "m5gr84i9", amount: 316, status: "success", email: "ken99@example.com" },
	{ id: "3u1reuv4", amount: 242, status: "success", email: "Abe45@example.com" },
	{ id: "derv1ws0", amount: 837, status: "processing", email: "Monserrat44@example.com" },
	{ id: "5kma53ae", amount: 874, status: "success", email: "Silas22@example.com" },
	{ id: "bhqecj4p", amount: 721, status: "failed", email: "carmella@example.com" },
];

const columnHelper = createColumnHelper<Payment>();

const columns = [
	columnHelper.accessor("id", {
		id: "id",
		header: (props) => (
			<DataTable.Header>
				<DataTable.HeaderSortButton column={props.column} sortingMode="alphanumeric">
					ID
				</DataTable.HeaderSortButton>
			</DataTable.Header>
		),
		cell: (props) => <DataTable.Cell key={props.cell.id}>{props.getValue()}</DataTable.Cell>,
	}),
	columnHelper.accessor("amount", {
		id: "amount",
		header: (props) => (
			<DataTable.Header className="w-50">
				<DataTable.HeaderSortButton
					className="justify-end"
					column={props.column}
					iconPlacement="start"
					sortingMode="alphanumeric"
				>
					Amount
				</DataTable.HeaderSortButton>
			</DataTable.Header>
		),
		cell: (props) => (
			<DataTable.Cell key={props.cell.id} className="text-right">
				{props.getValue()}
			</DataTable.Cell>
		),
	}),
	columnHelper.accessor("status", {
		id: "status",
		header: (props) => (
			<DataTable.Header>
				<DataTable.HeaderSortButton column={props.column} sortingMode="alphanumeric">
					Status
				</DataTable.HeaderSortButton>
			</DataTable.Header>
		),
		cell: (props) => <DataTable.Cell key={props.cell.id}>{props.getValue()}</DataTable.Cell>,
	}),
	columnHelper.accessor("email", {
		id: "email",
		header: (props) => (
			<DataTable.Header>
				<DataTable.HeaderSortButton column={props.column} sortingMode="alphanumeric">
					Email
				</DataTable.HeaderSortButton>
			</DataTable.Header>
		),
		cell: (props) => <DataTable.Cell key={props.cell.id}>{props.getValue()}</DataTable.Cell>,
	}),
	columnHelper.display({
		id: "actions",
		header: () => <DataTable.Header />,
		cell: () => (
			<DataTable.ActionCell>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild>
						<IconButton
							appearance="outlined"
							className="max-w rounded"
							type="button"
							size="sm"
							label="Open actions"
							icon={<DotsThreeIcon weight="bold" />}
						/>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content align="end">
						<DropdownMenu.Item className="flex items-center gap-2">
							<Icon svg={<PencilSimpleIcon />} /> Edit
						</DropdownMenu.Item>
						<DropdownMenu.Item className="text-danger-600 flex items-center gap-2">
							<Icon svg={<TrashSimpleIcon />} />
							Delete
						</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</DataTable.ActionCell>
		),
	}),
];

/**
 * Demo of a data table with sortable columns and row actions.
 */
export function PaymentsDemo() {
	const data = useMemo(() => examplePayments, []);
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		initialState: {
			sorting: [{ id: "email", desc: false }],
			pagination: { pageSize: 100 },
		},
	});
	const rows = table.getRowModel().rows;
	return (
		<DataTable.Root table={table}>
			<DataTable.Head />
			<DataTable.Body>
				{rows.length > 0 ? (
					rows.map((row) => (
						<DataTable.Row
							className="cursor-pointer"
							key={row.id}
							onClick={() => {
								window.alert(`Clicked payment row: ${row.original.id}`);
							}}
							row={row}
						/>
					))
				) : (
					<DataTable.EmptyRow>
						<p className="flex items-center justify-center min-h-20">No results.</p>
					</DataTable.EmptyRow>
				)}
			</DataTable.Body>
		</DataTable.Root>
	);
}

/**
 * Demo of a data table in an empty state.
 */
export function EmptyPaymentsDemo() {
	const data = useMemo<Payment[]>(() => [], []);
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		initialState: {
			sorting: [{ id: "email", desc: false }],
			pagination: { pageSize: 100 },
		},
	});
	const rows = table.getRowModel().rows;
	return (
		<DataTable.Root table={table}>
			<DataTable.Head />
			<DataTable.Body>
				{rows.length > 0 ? (
					rows.map((row) => <DataTable.Row className="cursor-pointer" key={row.id} row={row} />)
				) : (
					<DataTable.EmptyRow>
						<p className="flex items-center justify-center min-h-20">No results.</p>
					</DataTable.EmptyRow>
				)}
			</DataTable.Body>
		</DataTable.Root>
	);
}

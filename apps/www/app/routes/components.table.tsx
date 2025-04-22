import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	fmtCode,
} from "@ngrok/mantle/code-block";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFoot,
	TableHead,
	TableHeader,
	TableRow,
} from "@ngrok/mantle/table";
import { Example } from "~/components/example";
import { PageHeader } from "~/components/page-header";
import type { Route } from "./+types/components.table";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Table" },
		{
			name: "description",
			content: "mantle is ngrok's UI library and design system",
		},
	];
};

export const headers: Route.HeadersFunction = () => {
	return {
		"Cache-Control": "max-age=300, stale-while-revalidate=604800",
	};
};

export default function Page() {
	return (
		<section className="space-y-4">
			<PageHeader id="table">Table</PageHeader>
			<p className="font-body text-body text-xl">
				A responsive table component.
			</p>
			<div>
				<Example className="gap-2">
					<ExampleTable />
				</Example>
				<CodeBlock className="rounded-b-lg rounded-t-none">
					<CodeBlockBody>
						<CodeBlockCopyButton />
						<CodeBlockCode
							language="tsx"
							value={fmtCode`
							import {
								Table,
								TableBody,
								TableCaption,
								TableCell,
								TableFoot,
								TableHead,
								TableHeader,
								TableRow,
							} from "@ngrok/mantle/table";

							<Table>
								<TableCaption>A list of your recent invoices.</TableCaption>
								<TableHead>
									<TableRow>
										<TableHeader className="w-[100px]">Invoice</TableHeader>
										<TableHeader>Status</TableHeader>
										<TableHeader>Method</TableHeader>
										<TableHeader className="text-right">Amount</TableHeader>
									</TableRow>
								</TableHead>
								<TableBody>
									{invoices.map((invoice) => (
										<TableRow key={invoice.invoice}>
											<TableCell className="font-medium">{invoice.invoice}</TableCell>
											<TableCell>{invoice.paymentStatus}</TableCell>
											<TableCell>{invoice.paymentMethod}</TableCell>
											<TableCell className="text-right">{invoice.totalAmount}</TableCell>
										</TableRow>
									))}
								</TableBody>
								<TableFoot>
									<TableRow>
										<TableCell colSpan={3}>Total</TableCell>
										<TableCell className="text-right">$2,500.00</TableCell>
									</TableRow>
								</TableFoot>
							</Table>
						`}
						/>
					</CodeBlockBody>
				</CodeBlock>
			</div>
		</section>
	);
}

const ExampleTable = () => {
	const invoices = [
		{
			invoice: "INV001",
			paymentStatus: "Paid",
			totalAmount: "$250.00",
			paymentMethod: "Credit Card",
		},
		{
			invoice: "INV002",
			paymentStatus: "Pending",
			totalAmount: "$150.00",
			paymentMethod: "PayPal",
		},
		{
			invoice: "INV003",
			paymentStatus: "Unpaid",
			totalAmount: "$350.00",
			paymentMethod: "Bank Transfer",
		},
		{
			invoice: "INV004",
			paymentStatus: "Paid",
			totalAmount: "$450.00",
			paymentMethod: "Credit Card",
		},
		{
			invoice: "INV005",
			paymentStatus: "Paid",
			totalAmount: "$550.00",
			paymentMethod: "PayPal",
		},
		{
			invoice: "INV006",
			paymentStatus: "Pending",
			totalAmount: "$200.00",
			paymentMethod: "Bank Transfer",
		},
		{
			invoice: "INV007",
			paymentStatus: "Unpaid",
			totalAmount: "$300.00",
			paymentMethod: "Credit Card",
		},
	];

	return (
		<Table>
			<TableCaption>A list of your recent invoices.</TableCaption>
			<TableHead>
				<TableRow>
					<TableHeader className="w-[100px]">Invoice</TableHeader>
					<TableHeader>Status</TableHeader>
					<TableHeader>Method</TableHeader>
					<TableHeader className="text-right">Amount</TableHeader>
				</TableRow>
			</TableHead>
			<TableBody>
				{invoices.map((invoice) => (
					<TableRow key={invoice.invoice}>
						<TableCell className="font-medium">{invoice.invoice}</TableCell>
						<TableCell>{invoice.paymentStatus}</TableCell>
						<TableCell>{invoice.paymentMethod}</TableCell>
						<TableCell className="text-right">{invoice.totalAmount}</TableCell>
					</TableRow>
				))}
			</TableBody>
			<TableFoot>
				<TableRow>
					<TableCell colSpan={3}>Total</TableCell>
					<TableCell className="text-right">$2,500.00</TableCell>
				</TableRow>
			</TableFoot>
		</Table>
	);
};

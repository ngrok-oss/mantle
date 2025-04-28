import { Anchor } from "@ngrok/mantle/anchor";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	fmtCode,
} from "@ngrok/mantle/code-block";
import { InlineCode } from "@ngrok/mantle/inline-code";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFoot,
	TableHead,
	TableHeader,
	TableRoot,
	TableRow,
} from "@ngrok/mantle/table";
import { useMemo } from "react";
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
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="table">Table</PageHeader>
				<p className="font-body text-body text-xl">
					A structured way to display data in rows and columns. The API matches
					the HTML <InlineCode>table</InlineCode> element 1:1.
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
										TableRoot,
										TableRow,
									} from "@ngrok/mantle/table";

									<TableRoot>
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
									</TableRoot>
								`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section className="mt-16 space-y-8 font-body text-body">
				<header className="space-y-4">
					<h2 id="api" className="text-3xl font-medium text-strong">
						API Reference
					</h2>
					<p className="font-body text-body text-xl">
						The <InlineCode>Table</InlineCode> is structured way to display data
						in rows and columns. The API matches the HTML{" "}
						<InlineCode>table</InlineCode> element 1:1. It is composed of
						several sub-components.
					</p>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 id="api-table-root" className="text-xl font-medium text-strong">
							TableRoot
						</h3>

						<div className="space-y-1 font-body text-body">
							<p>
								Root container for all <InlineCode>Table</InlineCode>{" "}
								sub-components. Should be the parent of all other table
								sub-components.
							</p>

							<p>
								It provides styling and additional functionality, such as
								horizontal overflow detection.
							</p>
							<p>
								All props from{" "}
								<Anchor
									href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes"
									target="_blank"
									rel="noopener noreferrer"
								>
									the html div element
								</Anchor>
							</p>
						</div>
					</header>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 id="api-table" className="text-xl font-medium text-strong">
							Table
						</h3>

						<div className="space-y-1 font-body text-body">
							<p>
								The API matches the HTML <InlineCode>table</InlineCode> element
								1:1.
							</p>

							<p>Permitted content in this order:</p>
							<ol className="list-decimal ml-8 space-y-1">
								<li>
									optional: <InlineCode>TableCaption</InlineCode>
								</li>
								<li>
									0 or more: <InlineCode>colgroup</InlineCode> elements
								</li>
								<li>
									optional: <InlineCode>TableHead</InlineCode>
								</li>
								<li>
									either one of the following:
									<ul className="list-disc ml-8 space-y-1">
										<li>
											0 or more: <InlineCode>TableBody</InlineCode>
										</li>
										<li>
											0 or more: <InlineCode>TableRow</InlineCode>
										</li>
									</ul>
								</li>
								<li>
									optional: <InlineCode>TableFoot</InlineCode>
								</li>
							</ol>
							<p>
								Establishes a table formatting context. Elements inside the{" "}
								<InlineCode>Table</InlineCode> generate rectangular boxes. Each
								box occupies a number of table cells according to the following
								rules:
							</p>
							<ul className="list-disc ml-8 space-y-1">
								<li>
									The row boxes fill the table in the source code order from top
									to bottom. Each row box occupies one row of cells.
								</li>
								<li>A row group box occupies one or more row boxes.</li>
								<li>
									Column boxes are placed next to each other in source code
									order. Depending on the value of the dir attribute, the
									columns are laid in left-to-right or right-to-left direction.
									A column box occupies one or more columns of table cells.
								</li>
								<li>A column group box occupies one or more column boxes.</li>
								<li>
									A cell box may span over multiple rows and columns. User
									agents trim cells to fit in the available number of rows and
									columns.
								</li>
							</ul>
							<p>
								Table cells do have padding. Boxes that make up a table do not
								have margins.
							</p>
							<p>
								All props from{" "}
								<Anchor
									href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table#attributes"
									target="_blank"
									rel="noopener noreferrer"
								>
									the html table element
								</Anchor>
							</p>
						</div>
					</header>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 id="api-table-head" className="text-xl font-medium text-strong">
							TableHead
						</h3>

						<div className="space-y-1 font-body text-body">
							<p>
								The <InlineCode>TableHead</InlineCode> is a container for the
								table's column headers. Encapsulates a set of{" "}
								<InlineCode>TableRow</InlineCode>s, indicating that they
								comprise the head of a table with information about the table's
								columns. This is usually in the form of column headers (
								<InlineCode>TableHeader</InlineCode>).
							</p>

							<p>
								Must be used as a child of a <InlineCode>Table</InlineCode>. It
								should only come after any
								<InlineCode>TableCaption</InlineCode> or{" "}
								<InlineCode>colgroup</InlineCode> and before any
								<InlineCode>TableBody</InlineCode> or{" "}
								<InlineCode>TableFoot</InlineCode>.
							</p>

							<p>Permitted content:</p>
							<ol className="list-decimal ml-8 space-y-1">
								<li>
									0 or more: <InlineCode>TableRow</InlineCode>
								</li>
							</ol>
							<p>
								All props from{" "}
								<Anchor
									href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead#attributes"
									target="_blank"
									rel="noopener noreferrer"
								>
									the html thead element
								</Anchor>
							</p>
						</div>
					</header>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 id="api-table-body" className="text-xl font-medium text-strong">
							TableBody
						</h3>

						<div className="space-y-1 font-body text-body">
							<p>
								The <InlineCode>TableBody</InlineCode> encapsulates a set of{" "}
								<InlineCode>TableRow</InlineCode>s, indicating they they
								comprise the body of a table's (main) data.
							</p>

							<p>
								Must be used as a child of a <InlineCode>Table</InlineCode> and
								only come after any
								<InlineCode>TableCaption</InlineCode>,
								<InlineCode>colgroup</InlineCode>, or{" "}
								<InlineCode>TableHead</InlineCode>.
							</p>

							<p>Permitted content:</p>
							<ol className="list-decimal ml-8 space-y-1">
								<li>
									0 or more: <InlineCode>TableRow</InlineCode>
								</li>
							</ol>
							<p>
								All props from{" "}
								<Anchor
									href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody#attributes"
									target="_blank"
									rel="noopener noreferrer"
								>
									the html tbody element
								</Anchor>
							</p>
						</div>
					</header>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 id="api-table-foot" className="text-xl font-medium text-strong">
							TableFoot
						</h3>

						<div className="space-y-1 font-body text-body">
							<p>
								The <InlineCode>TableFoot</InlineCode> encapsulates a set of{" "}
								<InlineCode>TableRow</InlineCode>s, indicating that they
								comprise the foot of a table with information about the table's
								columns. This is usually a summary of the columns, e.g., a sum
								of the given numbers in a column.
							</p>

							<p>
								Must be used as a child of a <InlineCode>Table</InlineCode> and
								only come after any
								<InlineCode>TableCaption</InlineCode>,
								<InlineCode>colgroup</InlineCode>,
								<InlineCode>TableHead</InlineCode>, and{" "}
								<InlineCode>TableBody</InlineCode>.
							</p>

							<p>Permitted content:</p>
							<ol className="list-decimal ml-8 space-y-1">
								<li>
									0 or more: <InlineCode>TableRow</InlineCode>
								</li>
							</ol>
							<p>
								All props from{" "}
								<Anchor
									href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot#attributes"
									target="_blank"
									rel="noopener noreferrer"
								>
									the html tfoot element
								</Anchor>
							</p>
						</div>
					</header>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 id="api-table-row" className="text-xl font-medium text-strong">
							TableRow
						</h3>

						<div className="space-y-1 font-body text-body">
							<p>
								The <InlineCode>TableRow</InlineCode> defines a row of cells in
								a table. The row's cells can then be established using a mix of{" "}
								<InlineCode>TableCell</InlineCode> and{" "}
								<InlineCode>TableHeader</InlineCode> components.
							</p>

							<p>
								Must be used as a child of a <InlineCode>TableHead</InlineCode>,{" "}
								<InlineCode>TableBody</InlineCode>, or{" "}
								<InlineCode>TableFoot</InlineCode>.
							</p>

							<p>Permitted content:</p>
							<ol className="list-decimal ml-8 space-y-1">
								<li>
									0 or more: <InlineCode>TableHeader</InlineCode> or{" "}
									<InlineCode>TableCell</InlineCode>
								</li>
							</ol>
							<p>
								All props from{" "}
								<Anchor
									href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr#attributes"
									target="_blank"
									rel="noopener noreferrer"
								>
									the html tr element
								</Anchor>
							</p>
						</div>
					</header>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3
							id="api-table-header"
							className="text-xl font-medium text-strong"
						>
							TableHeader
						</h3>

						<div className="space-y-1 font-body text-body">
							<p>
								The <InlineCode>TableHeader</InlineCode> defines a cell as the
								header of a group of table cells and may be used as a child of a{" "}
								<InlineCode>TableRow</InlineCode>. The exact nature of this
								group is defined by the scope and headers attributes.
							</p>

							<p>
								Must be used as a child of a <InlineCode>TableRow</InlineCode>.
							</p>

							<p>Permitted content:</p>
							<ol className="list-decimal ml-8 space-y-1">
								<li>
									Flow content, but with no header, footer, sectioning content,
									or heading content descendants.
								</li>
							</ol>
							<p>
								All props from{" "}
								<Anchor
									href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attributes"
									target="_blank"
									rel="noopener noreferrer"
								>
									the html th element
								</Anchor>
							</p>
						</div>
					</header>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 id="api-table-cell" className="text-xl font-medium text-strong">
							TableCell
						</h3>

						<div className="space-y-1 font-body text-body">
							<p>
								The <InlineCode>TableCell</InlineCode> defines a cell of a table
								that contains data and may be used as a child of a{" "}
								<InlineCode>TableRow</InlineCode>.
							</p>

							<p>
								Must be used as a child of a <InlineCode>TableRow</InlineCode>.
							</p>

							<p>Permitted content:</p>
							<ol className="list-decimal ml-8 space-y-1">
								<li>Flow content</li>
							</ol>
							<p>
								All props from{" "}
								<Anchor
									href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attributes"
									target="_blank"
									rel="noopener noreferrer"
								>
									the html td element
								</Anchor>
							</p>
						</div>
					</header>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3
							id="api-table-caption"
							className="text-xl font-medium text-strong"
						>
							TableCaption
						</h3>

						<div className="space-y-1 font-body text-body">
							<p>
								The optional <InlineCode>TableCaption</InlineCode> specifies the
								caption (or title) of a table, providing the table an accessible
								description.
							</p>

							<p>
								If used, must be the first child of a{" "}
								<InlineCode>Table</InlineCode>.
							</p>

							<p>Permitted content:</p>
							<ol className="list-decimal ml-8 space-y-1">
								<li>Flow content</li>
							</ol>
							<p>
								All props from{" "}
								<Anchor
									href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption#attributes"
									target="_blank"
									rel="noopener noreferrer"
								>
									the html caption element
								</Anchor>
							</p>
						</div>
					</header>
				</section>
			</section>
		</div>
	);
}

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

const ExampleTable = () => {
	return (
		<TableRoot>
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
							<TableCell className="text-right">
								{invoice.totalAmount}
							</TableCell>
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
		</TableRoot>
	);
};

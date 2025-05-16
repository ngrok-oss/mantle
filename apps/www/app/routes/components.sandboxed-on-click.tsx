import { Anchor } from "@ngrok/mantle/anchor";
import { IconButton } from "@ngrok/mantle/button";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	fmtCode,
} from "@ngrok/mantle/code-block";
import { InlineCode } from "@ngrok/mantle/inline-code";
import { SandboxedOnClick } from "@ngrok/mantle/sandboxed-on-click";
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
import { BookIcon } from "@phosphor-icons/react";
import { Example } from "~/components/example";
import { PageHeader } from "~/components/page-header";
import {
	BooleanPropType,
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropTypeCell,
	PropsTable,
} from "~/components/props-table";
import type { Route } from "./+types/components.sandboxed-on-click";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — SandboxedOnClick" },
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

export default function Page() {
	return (
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="sandboxed-on-click">SandboxedOnClick</PageHeader>
				<p className="font-body text-body text-xl">
					A container that prevents the click event from bubbling out of it.
				</p>
				<div>
					<Example className="flex-col gap-4">
						<p>
							Each table row will trigger a{" "}
							<InlineCode>window.alert()</InlineCode> when clicked. The icon
							button is wrapped in <InlineCode>SandboxedOnClick</InlineCode> and
							navigates you to{" "}
							<Anchor href="https://ngrok.com/docs">the ngrok docs.</Anchor>
						</p>
						<TableRoot>
							<Table>
								<TableCaption>A list of your recent invoices.</TableCaption>
								<TableHead>
									<TableRow>
										<TableHeader className="w-[100px]">Invoice</TableHeader>
										<TableHeader>Status</TableHeader>
										<TableHeader>Method</TableHeader>
										<TableHeader className="text-right">Amount</TableHeader>
										<TableHeader className="text-right">Actions</TableHeader>
									</TableRow>
								</TableHead>
								<TableBody>
									{invoices.map((invoice) => (
										<TableRow
											key={invoice.invoice}
											className="cursor-pointer"
											onClick={() => {
												window.alert(`Clicked on ${invoice.invoice}!`);
											}}
										>
											<TableCell className="font-medium">
												{invoice.invoice}
											</TableCell>
											<TableCell>{invoice.paymentStatus}</TableCell>
											<TableCell>{invoice.paymentMethod}</TableCell>
											<TableCell className="text-right">
												{invoice.totalAmount}
											</TableCell>
											<TableCell className="text-right">
												<SandboxedOnClick allowClickEventDefault>
													<IconButton
														label="See ngrok docs"
														icon={<BookIcon />}
														asChild
													>
														<a href="https://ngrok.com/docs" target="_blank" />
													</IconButton>
												</SandboxedOnClick>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
								<TableFoot>
									<TableRow>
										<TableCell colSpan={3}>Total</TableCell>
										<TableCell className="text-right">$2,500.00</TableCell>
										<TableCell />
									</TableRow>
								</TableFoot>
							</Table>
						</TableRoot>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { IconButton } from "@ngrok/mantle/button";
									import { SandboxedOnClick } from "@ngrok/mantle/sandboxed-on-click";
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
									import { BookIcon } from "@phosphor-icons/react";

									<TableRoot>
										<Table>
											<TableCaption>A list of your recent invoices.</TableCaption>
											<TableHead>
												<TableRow>
													<TableHeader className="w-[100px]">Invoice</TableHeader>
													<TableHeader>Status</TableHeader>
													<TableHeader>Method</TableHeader>
													<TableHeader className="text-right">Amount</TableHeader>
													<TableHeader className="text-right">Actions</TableHeader>
												</TableRow>
											</TableHead>
											<TableBody>
												{invoices.map((invoice) => (
													<TableRow
														key={invoice.invoice}
														className="cursor-pointer"
														onClick={() => {
															window.alert(\`Clicked on \${invoice.invoice}!\`);
														}}
													>
														<TableCell className="font-medium">
															{invoice.invoice}
														</TableCell>
														<TableCell>{invoice.paymentStatus}</TableCell>
														<TableCell>{invoice.paymentMethod}</TableCell>
														<TableCell className="text-right">
															{invoice.totalAmount}
														</TableCell>
														<TableCell className="text-right">
															<SandboxedOnClick allowClickEventDefault>
																<IconButton
																	label="See ngrok docs"
																	icon={<BookIcon />}
																	asChild
																>
																	<a href="https://ngrok.com/docs" target="_blank" />
																</IconButton>
															</SandboxedOnClick>
														</TableCell>
													</TableRow>
												))}
											</TableBody>
											<TableFoot>
												<TableRow>
													<TableCell colSpan={3}>Total</TableCell>
													<TableCell className="text-right">$2,500.00</TableCell>
													<TableCell />
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

			<section className="space-y-8">
				<header className="space-y-4">
					<h2 id="api" className="text-3xl font-medium">
						API Reference
					</h2>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3
							id="api-sandboxed-on-click"
							className="text-xl font-medium text-strong"
						>
							SandboxedOnClick
						</h3>

						<p className="font-body text-body">
							A container that prevents the click event from bubbling out of it.
							Good to use when you want to provide some action buttons inside of
							a table row or list item that navigates on click.
						</p>

						<p className="font-body text-body">
							Good to use when you want to provide some action buttons inside of
							a table row or list item that navigates on click.
						</p>

						<p className="font-body text-body">
							All props from{" "}
							<Anchor
								href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes"
								target="_blank"
								rel="noopener noreferrer"
							>
								div
							</Anchor>
							, plus:
						</p>
					</header>

					<PropsTable>
						<PropRow>
							<PropNameCell name="allowClickEventDefault" optional />
							<PropTypeCell>
								<BooleanPropType />
							</PropTypeCell>
							<PropDefaultValueCell>
								<BooleanPropType value={false} />
							</PropDefaultValueCell>
							<PropDescriptionCell>
								<p>
									Only call <InlineCode>event.preventDefault()</InlineCode> in
									the <InlineCode>onClick</InlineCode> handler if the user has
									not set <InlineCode>allowClickEventDefault</InlineCode> to
									<InlineCode>true</InlineCode>.
								</p>
								<p>
									This allows the user to control whether or not the default
									behavior of the click event should be allowed.
								</p>
								<p>
									This is useful for links or buttons that should navigate or
									perform some action on click.
								</p>
							</PropDescriptionCell>
						</PropRow>
						<PropRow>
							<PropNameCell name="asChild" optional />
							<PropTypeCell>
								<BooleanPropType />
							</PropTypeCell>
							<PropDefaultValueCell>
								<BooleanPropType value={false} />
							</PropDefaultValueCell>
							<PropDescriptionCell>
								<p>
									Use the <InlineCode>asChild</InlineCode> prop to compose the{" "}
									<InlineCode>SandboxedOnClick</InlineCode> functionality onto
									alternative element types or your own React components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>
			</section>
		</div>
	);
}

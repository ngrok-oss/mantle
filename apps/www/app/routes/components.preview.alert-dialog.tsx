import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogBody,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogIcon,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@ngrok/mantle/alert-dialog";
import { Anchor } from "@ngrok/mantle/anchor";
import { Button } from "@ngrok/mantle/button";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, fmtCode } from "@ngrok/mantle/code-block";
import { InlineCode } from "@ngrok/mantle/inline-code";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { PreviewBadge } from "~/components/badges";
import { Example } from "~/components/example";
import { Link } from "~/components/link";
import {
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropsTable,
	PropTypeCell,
	StringPropType,
} from "~/components/props-table";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — AlertDialog" },
		{ name: "description", content: "mantle is ngrok's UI library and design system" },
	];
};

export const headers: HeadersFunction = () => {
	return {
		"Cache-Control": "max-age=300, stale-while-revalidate=604800",
	};
};

export default function Page() {
	return (
		<div className="space-y-16">
			<section className="space-y-4">
				<div className="flex items-center gap-3">
					<h1 id="calendar" className="text-5xl font-medium">
						Alert Dialog
					</h1>
					<PreviewBadge />
				</div>
				<p className="font-body text-body text-xl">
					A modal dialog that interrupts the user with important content and expects a response.
				</p>
				<div>
					<Example className="flex-col gap-6">
						<AlertDialog priority="info">
							<AlertDialogTrigger asChild>
								<Button type="button" appearance="outlined">
									Show Info Alert Dialog
								</Button>
							</AlertDialogTrigger>
							<AlertDialogContent>
								<AlertDialogIcon />
								<AlertDialogBody>
									<AlertDialogHeader>
										<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
										<AlertDialogDescription>
											This action cannot be undone. This will permanently delete your account and remove your data from
											our servers.
										</AlertDialogDescription>
									</AlertDialogHeader>
									<AlertDialogFooter>
										<AlertDialogCancel type="button">Cancel</AlertDialogCancel>
										<AlertDialogAction type="button">Continue</AlertDialogAction>
									</AlertDialogFooter>
								</AlertDialogBody>
							</AlertDialogContent>
						</AlertDialog>
						<AlertDialog priority="danger">
							<AlertDialogTrigger asChild>
								<Button type="button" appearance="outlined">
									Show Danger Alert Dialog
								</Button>
							</AlertDialogTrigger>
							<AlertDialogContent>
								<AlertDialogIcon />
								<AlertDialogBody>
									<AlertDialogHeader>
										<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
										<AlertDialogDescription>
											This action cannot be undone. This will permanently delete your account and remove your data from
											our servers.
										</AlertDialogDescription>
									</AlertDialogHeader>
									<AlertDialogFooter>
										<AlertDialogCancel type="button">Cancel</AlertDialogCancel>
										<AlertDialogAction type="button">Continue</AlertDialogAction>
									</AlertDialogFooter>
								</AlertDialogBody>
							</AlertDialogContent>
						</AlertDialog>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import {
										AlertDialog,
										AlertDialogAction,
										AlertDialogBody,
										AlertDialogCancel,
										AlertDialogContent,
										AlertDialogDescription,
										AlertDialogFooter,
										AlertDialogHeader,
										AlertDialogIcon,
										AlertDialogTitle,
										AlertDialogTrigger,
									} from "@ngrok/mantle/alert-dialog";
									import { Button } from "@ngrok/mantle/button";

									<AlertDialog priority="info">
										<AlertDialogTrigger asChild>
											<Button type="button" appearance="outlined">
												Show Info Alert Dialog
											</Button>
										</AlertDialogTrigger>
										<AlertDialogContent>
											<AlertDialogIcon />
											<AlertDialogBody>
												<AlertDialogHeader>
													<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
													<AlertDialogDescription>
														This action cannot be undone. This will permanently delete your account and remove your data from
														our servers.
													</AlertDialogDescription>
												</AlertDialogHeader>
												<AlertDialogFooter>
													<AlertDialogCancel type="button">Cancel</AlertDialogCancel>
													<AlertDialogAction type="button">Continue</AlertDialogAction>
												</AlertDialogFooter>
											</AlertDialogBody>
										</AlertDialogContent>
									</AlertDialog>
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
					<p className="font-body text-body text-xl">
						The <InlineCode>AlertDialog</InlineCode> components are built on top of{" "}
						<Anchor
							href="https://www.radix-ui.com/primitives/docs/components/alert-dialog"
							target="_blank"
							rel="noopener noreferrer"
						>
							Radix Alert Dialog
						</Anchor>
						.
					</p>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 className="text-xl font-medium">AlertDialog</h3>

						<p className="font-body text-body">The root component for the Alert Dialog.</p>
						<p className="font-body text-body">
							All props from Radix{" "}
							<Anchor
								href="https://www.radix-ui.com/primitives/docs/components/alert-dialog#root"
								target="_blank"
								rel="noopener noreferrer"
							>
								AlertDialog.Root
							</Anchor>
							, plus:
						</p>
					</header>

					<PropsTable>
						<PropRow>
							<PropNameCell name="priority" />
							<PropTypeCell>
								<ul>
									<li>
										<StringPropType value="info" />
									</li>
									<li>
										<StringPropType value="danger" />
									</li>
								</ul>
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<p>
									Indicates the importance or impact level of the AlertDialog, affecting its color and styling to
									communicate its purpose to the user.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-1">
					<h3 className="text-xl font-medium">AlertDialogTrigger</h3>

					<p className="font-body text-body">A button that opens the Alert Dialog.</p>
					<p className="font-body text-body">
						Radix{" "}
						<Anchor
							href="https://www.radix-ui.com/primitives/docs/components/alert-dialog#trigger"
							target="_blank"
							rel="noopener noreferrer"
						>
							AlertDialog.Trigger
						</Anchor>{" "}
						props.
					</p>
				</section>

				<section className="space-y-1">
					<h3 className="text-xl font-medium">AlertDialogContent</h3>

					<p className="font-body text-body">
						The popover Alert Dialog container. Renders on top of the overlay and is centered in the viewport.
					</p>
					<p className="font-body text-body">
						Radix{" "}
						<Anchor
							href="https://www.radix-ui.com/primitives/docs/components/alert-dialog#content"
							target="_blank"
							rel="noopener noreferrer"
						>
							AlertDialog.Content
						</Anchor>{" "}
						props.
					</p>
				</section>

				<section className="space-y-1">
					<h3 className="text-xl font-medium">AlertDialogHeader</h3>

					<p className="font-body text-body">
						Contains the header content of the dialog, including the title and description.
					</p>
					<p className="font-body text-body">
						Same props as a <InlineCode>{"<div>"}</InlineCode> element.
					</p>
				</section>

				<section className="space-y-1">
					<h3 className="text-xl font-medium">AlertDialogFooter</h3>

					<p className="font-body text-body">
						Contains the footer content of the dialog, including the action and cancel buttons.
					</p>
					<p className="font-body text-body">
						Same props as a <InlineCode>{"<div>"}</InlineCode> element.
					</p>
				</section>

				<section className="space-y-1">
					<h3 className="text-xl font-medium">AlertDialogTitle</h3>

					<p className="font-body text-body">An accessible name to be announced when the dialog is opened.</p>
					<p className="font-body text-body">
						Alternatively, you can provide <InlineCode>aria-label</InlineCode> or{" "}
						<InlineCode>aria-labelledby</InlineCode> to <InlineCode>AlertDialogContent</InlineCode> and exclude this
						component.
					</p>
					<p className="font-body text-body">
						Radix{" "}
						<Anchor
							href="https://www.radix-ui.com/primitives/docs/components/alert-dialog#title"
							target="_blank"
							rel="noopener noreferrer"
						>
							AlertDialog.Title
						</Anchor>{" "}
						props.
					</p>
				</section>

				<section className="space-y-1">
					<h3 className="text-xl font-medium">AlertDialogDescription</h3>

					<p className="font-body text-body">An accessible description to be announced when the dialog is opened.</p>
					<p className="font-body text-body">
						Alternatively, you can provide <InlineCode>aria-describedby</InlineCode> to{" "}
						<InlineCode>AlertDialogContent</InlineCode> and exclude this component.
					</p>
					<p className="font-body text-body">
						Radix{" "}
						<Anchor
							href="https://www.radix-ui.com/primitives/docs/components/alert-dialog#description"
							target="_blank"
							rel="noopener noreferrer"
						>
							AlertDialog.Description
						</Anchor>{" "}
						props.
					</p>
				</section>

				<section className="space-y-1">
					<h3 className="text-xl font-medium">AlertDialogAction</h3>

					<p className="font-body text-body">
						A button that closes the alert dialog and confirms the action. Will default to{" "}
						<InlineCode>appearance="filled"</InlineCode>, as well as the priority color from the{" "}
						<InlineCode>AlertDialog</InlineCode>
					</p>
					<p className="font-body text-body">
						These buttons should be distinguished visually from the <InlineCode>AlertDialogCancel</InlineCode> button.
					</p>
					<p className="font-body text-body">
						Composes around the mantle <Link to="/components/button">Button</Link> component.
					</p>
					<p className="font-body text-body">
						Same props as the <Link to="/components/button">Button</Link> component.
					</p>
				</section>

				<section className="space-y-1">
					<h3 className="text-xl font-medium">AlertDialogCancel</h3>

					<p className="font-body text-body">
						A button that closes the dialog and cancels the action. Will default to{" "}
						<InlineCode>appearance="outlined"</InlineCode> and <InlineCode>priority="neutral"</InlineCode>.
					</p>
					<p className="font-body text-body">
						This button should be distinguished visually from <InlineCode>AlertDialogAction</InlineCode> buttons.
					</p>
					<p className="font-body text-body">
						Composes around the mantle <Link to="/components/button">Button</Link> component.
					</p>
					<p className="font-body text-body">
						Same props as the <Link to="/components/button">Button</Link> component.
					</p>
				</section>
			</section>
		</div>
	);
}
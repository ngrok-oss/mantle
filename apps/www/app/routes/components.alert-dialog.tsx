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
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { InlineCode } from "@ngrok/mantle/inline-code";
import { href } from "react-router";
import { Example } from "~/components/example";
import { Link } from "~/components/link";
import { PageHeader } from "~/components/page-header";
import {
	BooleanPropType,
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropTypeCell,
	PropsTable,
	StringPropType,
} from "~/components/props-table";
import type { Route } from "./+types/components.alert-dialog";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — AlertDialog" },
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
				<PageHeader id="alert-dialog">Alert Dialog</PageHeader>
				<p className="font-body text-body text-xl">
					A modal dialog that interrupts the user with important content and
					expects a response.
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
										<AlertDialogTitle>
											Are you absolutely sure?
										</AlertDialogTitle>
										<AlertDialogDescription>
											Proident quis nisi tempor irure sunt ut minim occaecat
											mollit sunt.
										</AlertDialogDescription>
									</AlertDialogHeader>
									<AlertDialogFooter>
										<AlertDialogCancel type="button">Cancel</AlertDialogCancel>
										<AlertDialogAction type="button">
											Continue
										</AlertDialogAction>
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
										<AlertDialogTitle>
											Are you absolutely sure?
										</AlertDialogTitle>
										<AlertDialogDescription>
											Proident quis nisi tempor irure sunt ut minim occaecat
											mollit sunt.
										</AlertDialogDescription>
									</AlertDialogHeader>
									<AlertDialogFooter>
										<AlertDialogCancel type="button">Cancel</AlertDialogCancel>
										<AlertDialogAction type="button">
											Continue
										</AlertDialogAction>
									</AlertDialogFooter>
								</AlertDialogBody>
							</AlertDialogContent>
						</AlertDialog>

						<AlertDialog priority="danger">
							<AlertDialogTrigger asChild>
								<Button type="button" appearance="outlined">
									With a form
								</Button>
							</AlertDialogTrigger>
							<AlertDialogContent>
								<AlertDialogIcon />
								<AlertDialogBody>
									<AlertDialogHeader>
										<AlertDialogTitle>
											Are you absolutely sure?
										</AlertDialogTitle>
										<AlertDialogDescription>
											Proident quis nisi tempor irure sunt ut minim occaecat
											mollit sunt.
										</AlertDialogDescription>
									</AlertDialogHeader>
									<AlertDialogFooter>
										<AlertDialogCancel type="button">Cancel</AlertDialogCancel>
										<form
											onSubmit={(event) => {
												event.preventDefault();
												window.alert("Form submitted!");
											}}
										>
											<AlertDialogAction
												type="submit"
												className="w-full sm:w-fit"
											>
												Continue
											</AlertDialogAction>
										</form>
									</AlertDialogFooter>
								</AlertDialogBody>
							</AlertDialogContent>
						</AlertDialog>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
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
														 Proident quis nisi tempor irure sunt ut minim occaecat mollit sunt.
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
												With a form
											</Button>
										</AlertDialogTrigger>
										<AlertDialogContent>
											<AlertDialogIcon />
											<AlertDialogBody>
												<AlertDialogHeader>
													<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
													<AlertDialogDescription>
														 Proident quis nisi tempor irure sunt ut minim occaecat mollit sunt.
													</AlertDialogDescription>
												</AlertDialogHeader>
												<AlertDialogFooter>
													<AlertDialogCancel type="button">Cancel</AlertDialogCancel>
													<form
														onSubmit={(event) => {
															event.preventDefault();
															window.alert("Form submitted!");
														}}
													>
														<AlertDialogAction type="submit">Continue</AlertDialogAction>
													</form>
												</AlertDialogFooter>
											</AlertDialogBody>
										</AlertDialogContent>
									</AlertDialog>
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-8">
				<header className="space-y-4">
					<h2 id="api" className="text-3xl font-medium">
						API Reference
					</h2>
					<p className="font-body text-body text-xl">
						The <InlineCode>AlertDialog</InlineCode> components are built on top
						of{" "}
						<Anchor
							href="https://www.radix-ui.com/primitives/docs/components/dialog"
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
						<h3
							id="api-alert-dialog"
							className="text-xl font-medium text-strong"
						>
							AlertDialog
						</h3>

						<p className="font-body text-body">
							The root component for the Alert Dialog.
						</p>
						<p className="font-body text-body">
							All props from Radix{" "}
							<Anchor
								href="https://www.radix-ui.com/primitives/docs/components/dialog#root"
								target="_blank"
								rel="noopener noreferrer"
							>
								Dialog.Root
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
									Indicates the importance or impact level of the AlertDialog,
									affecting its color and styling to communicate its purpose to
									the user.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-1">
					<h3
						id="api-alert-dialog-trigger"
						className="text-xl font-medium text-strong"
					>
						AlertDialogTrigger
					</h3>

					<p className="font-body text-body">
						A button that opens the Alert Dialog.
					</p>
					<p className="font-body text-body">
						Radix{" "}
						<Anchor
							href="https://www.radix-ui.com/primitives/docs/components/dialog#trigger"
							target="_blank"
							rel="noopener noreferrer"
						>
							Dialog.Trigger
						</Anchor>{" "}
						props.
					</p>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3
							id="api-alert-dialog-content"
							className="text-xl font-medium text-strong"
						>
							AlertDialogContent
						</h3>

						<p className="font-body text-body">
							The popover Alert Dialog container. Renders on top of the overlay
							and is centered in the viewport.
						</p>
						<p className="font-body text-body">
							Radix{" "}
							<Anchor
								href="https://www.radix-ui.com/primitives/docs/components/dialog#content"
								target="_blank"
								rel="noopener noreferrer"
							>
								Dialog.Content
							</Anchor>{" "}
							props, plus:
						</p>
					</header>
					<PropsTable>
						<PropRow>
							<PropNameCell name="preferredWidth" optional />
							<PropTypeCell>
								<StringPropType />
							</PropTypeCell>
							<PropDefaultValueCell>
								<StringPropType value="max-w-md" />
							</PropDefaultValueCell>
							<PropDescriptionCell>
								<p>
									The preferred width of the{" "}
									<InlineCode>AlertDialogContent</InlineCode> as a tailwind{" "}
									<InlineCode>max-w-</InlineCode> class.
								</p>
								<p>
									By default, a <InlineCode>AlertDialogContent</InlineCode>'s
									content width is responsive with a default{" "}
									<span className="italic">preferred width</span>: the maxiumum
									width of the <InlineCode>AlertDialogContent</InlineCode>.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-1">
					<h3
						id="api-alert-dialog-body"
						className="text-xl font-medium text-strong"
					>
						AlertDialogBody
					</h3>
					<p className="font-body text-body">
						Contains the main content of the alert dialog.
					</p>
					<p className="font-body text-body text-xl">
						The <InlineCode>AlertDialogBody</InlineCode> accepts the following
						props in addition to the{" "}
						<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes">
							standard HTML div attributes
						</Anchor>
						.
					</p>
					<PropsTable>
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
									<InlineCode>AlertDialogBody</InlineCode> styling and
									functionality onto alternative element types or your own React
									components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-1">
					<h3
						id="api-alert-dialog-header"
						className="text-xl font-medium text-strong"
					>
						AlertDialogHeader
					</h3>
					<p className="font-body text-body">
						Contains the header content of the dialog, including the title and
						description.
					</p>
					<p className="font-body text-body text-xl">
						The <InlineCode>AlertDialogHeader</InlineCode> accepts the following
						props in addition to the{" "}
						<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes">
							standard HTML div attributes
						</Anchor>
						.
					</p>
					<PropsTable>
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
									<InlineCode>AlertDialogHeader</InlineCode> styling and
									functionality onto alternative element types or your own React
									components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-1">
					<h3
						id="api-alert-dialog-footer"
						className="text-xl font-medium text-strong"
					>
						AlertDialogFooter
					</h3>
					<p className="font-body text-body">
						Contains the footer content of the dialog, including the action and
						cancel buttons.
					</p>
					<p className="font-body text-body text-xl">
						The <InlineCode>AlertDialogFooter</InlineCode> accepts the following
						props in addition to the{" "}
						<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes">
							standard HTML div attributes
						</Anchor>
						.
					</p>
					<PropsTable>
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
									<InlineCode>AlertDialogFooter</InlineCode> styling and
									functionality onto alternative element types or your own React
									components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-1">
					<h3
						id="api-alert-dialog-title"
						className="text-xl font-medium text-strong"
					>
						AlertDialogTitle
					</h3>

					<p className="font-body text-body">
						An accessible name to be announced when the dialog is opened.
					</p>
					<p className="font-body text-body">
						Alternatively, you can provide <InlineCode>aria-label</InlineCode>{" "}
						or <InlineCode>aria-labelledby</InlineCode> to{" "}
						<InlineCode>AlertDialogContent</InlineCode> and exclude this
						component.
					</p>
					<p className="font-body text-body">
						Radix{" "}
						<Anchor
							href="https://www.radix-ui.com/primitives/docs/components/dialog#title"
							target="_blank"
							rel="noopener noreferrer"
						>
							Dialog.Title
						</Anchor>{" "}
						props.
					</p>
				</section>

				<section className="space-y-1">
					<h3
						id="api-alert-dialog-description"
						className="text-xl font-medium text-strong"
					>
						AlertDialogDescription
					</h3>

					<p className="font-body text-body">
						An accessible description to be announced when the dialog is opened.
					</p>
					<p className="font-body text-body">
						Alternatively, you can provide{" "}
						<InlineCode>aria-describedby</InlineCode> to{" "}
						<InlineCode>AlertDialogContent</InlineCode> and exclude this
						component.
					</p>
					<p className="font-body text-body">
						Radix{" "}
						<Anchor
							href="https://www.radix-ui.com/primitives/docs/components/dialog#description"
							target="_blank"
							rel="noopener noreferrer"
						>
							Dialog.Description
						</Anchor>{" "}
						props.
					</p>
				</section>

				<section className="space-y-1">
					<h3
						id="api-alert-dialog-action"
						className="text-xl font-medium text-strong"
					>
						AlertDialogAction
					</h3>

					<p className="font-body text-body">
						A button that confirms the Alert Dialog action. Will default to{" "}
						<InlineCode>appearance="filled"</InlineCode>, as well as the
						priority color from the <InlineCode>AlertDialog</InlineCode>. Does
						not close the alert dialog by default.
					</p>
					<p className="font-body text-body">
						These buttons should be distinguished visually from the{" "}
						<InlineCode>AlertDialogCancel</InlineCode> button.
					</p>
					<p className="font-body text-body">
						Composes around the mantle{" "}
						<Link to={href("/components/button")}>Button</Link> component.
					</p>
					<p className="font-body text-body">
						Same props as the{" "}
						<Link to={href("/components/button")}>Button</Link> component.
					</p>
				</section>

				<section className="space-y-1">
					<h3
						id="api-alert-dialog-cancel"
						className="text-xl font-medium text-strong"
					>
						AlertDialogCancel
					</h3>

					<p className="font-body text-body">
						A button that closes the dialog and cancels the action. Will default
						to <InlineCode>appearance="outlined"</InlineCode> and{" "}
						<InlineCode>priority="neutral"</InlineCode>.
					</p>
					<p className="font-body text-body">
						This button should be distinguished visually from{" "}
						<InlineCode>AlertDialogAction</InlineCode> buttons.
					</p>
					<p className="font-body text-body">
						Composes around the mantle{" "}
						<Link to={href("/components/button")}>Button</Link> component.
					</p>
					<p className="font-body text-body">
						Same props as the{" "}
						<Link to={href("/components/button")}>Button</Link> component.
					</p>
				</section>
			</section>
		</div>
	);
}

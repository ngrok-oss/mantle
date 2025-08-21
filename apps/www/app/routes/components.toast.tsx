import { AlertDialog } from "@ngrok/mantle/alert-dialog";
import { Anchor } from "@ngrok/mantle/anchor";
import { Button, IconButton } from "@ngrok/mantle/button";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { Dialog } from "@ngrok/mantle/dialog";
import { Sheet } from "@ngrok/mantle/sheet";
import { type Priority, Toast, makeToast } from "@ngrok/mantle/toast";
import { XIcon } from "@phosphor-icons/react/X";
import { useState } from "react";
import invariant from "tiny-invariant";
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
	ReactNodePropType,
	StringPropType,
} from "~/components/props-table";
import type { Route } from "./+types/components.toast";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Toast" },
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

const priorities = [
	"info",
	"success",
	"warning",
	"danger",
] as const satisfies Priority[];

function getPriorityByIndex(index: number): Priority {
	const priority = priorities[index % priorities.length];
	invariant(priority, `Invalid priority index: ${index}`);
	return priority;
}

export default function Page() {
	const [priorityIndex, setPriorityIndex] = useState(0);
	const priority = getPriorityByIndex(priorityIndex);

	return (
		<div className="space-y-4">
			<PageHeader id="toast">Toast</PageHeader>
			<p className="font-body text-body text-xl">
				A succinct message that is displayed temporarily. Toasts are used to
				provide feedback to the user without interrupting their workflow.
			</p>
			<div>
				<Example className="flex-col gap-4">
					<Button
						type="button"
						appearance="filled"
						onClick={() => {
							makeToast(
								<Toast.Root priority={priority}>
									<Toast.Icon />
									<Toast.Message>
										Laborum ea anim adipisicing in Lorem incididunt mollit ipsum
										reprehenderit.
									</Toast.Message>
									<Toast.Action asChild>
										<IconButton
											type="button"
											appearance="ghost"
											size="xs"
											icon={<XIcon />}
											label="Dismiss toast"
										/>
									</Toast.Action>
								</Toast.Root>,
							);

							setPriorityIndex((prev) => prev + 1);
						}}
					>
						Show Toast
					</Button>
					<Sheet.Root>
						<Sheet.Trigger asChild>
							<Button type="button" appearance="filled">
								Open Sheet
							</Button>
						</Sheet.Trigger>
						<Sheet.Content>
							<Sheet.Header>
								<Sheet.Title>Are you absolutely sure?</Sheet.Title>
							</Sheet.Header>
							<Sheet.Body className="space-y-4">
								<Button
									type="button"
									onClick={() =>
										makeToast(
											<Toast.Root priority="warning">
												<Toast.Icon />
												<Toast.Message>
													Laborum ea anim adipisicing in Lorem incididunt mollit
													ipsum reprehenderit.
												</Toast.Message>
												<Toast.Action asChild>
													<IconButton
														type="button"
														appearance="ghost"
														size="xs"
														icon={<XIcon />}
														label="Dismiss toast"
													/>
												</Toast.Action>
											</Toast.Root>,
										)
									}
								>
									Show Toast
								</Button>
							</Sheet.Body>
							<Sheet.Footer>
								<Sheet.Close asChild>
									<Button type="button">Close</Button>
								</Sheet.Close>
							</Sheet.Footer>
						</Sheet.Content>
					</Sheet.Root>
					<Dialog.Root>
						<Dialog.Trigger asChild>
							<Button type="button" appearance="filled">
								Open dialog
							</Button>
						</Dialog.Trigger>
						<Dialog.Content>
							<Dialog.Header>
								<Dialog.Title>
									Are you absolutely sure? aslkdfjas dlfksdoijfoasdjf ioadsjfi
								</Dialog.Title>
								<Dialog.CloseIconButton />
							</Dialog.Header>
							<Dialog.Body>
								<Button
									type="button"
									onClick={() =>
										makeToast(
											<Toast.Root priority="danger">
												<Toast.Icon />
												<Toast.Message>
													Laborum ea anim adipisicing in Lorem incididunt mollit
													ipsum reprehenderit.
												</Toast.Message>
												<Toast.Action asChild>
													<IconButton
														type="button"
														appearance="ghost"
														size="xs"
														icon={<XIcon />}
														label="Dismiss toast"
													/>
												</Toast.Action>
											</Toast.Root>,
										)
									}
								>
									Show Toast
								</Button>
							</Dialog.Body>
							<Dialog.Footer>
								<Dialog.Close asChild>
									<Button
										type="button"
										priority="neutral"
										appearance="outlined"
									>
										Cancel
									</Button>
								</Dialog.Close>
							</Dialog.Footer>
						</Dialog.Content>
					</Dialog.Root>
					<AlertDialog.Root priority="info">
						<AlertDialog.Trigger asChild>
							<Button type="button" appearance="filled">
								Show Info Alert Dialog
							</Button>
						</AlertDialog.Trigger>
						<AlertDialog.Content>
							<AlertDialog.Icon />
							<AlertDialog.Body>
								<AlertDialog.Header>
									<AlertDialog.Title>
										Are you absolutely sure?
									</AlertDialog.Title>
								</AlertDialog.Header>
								<Button
									type="button"
									onClick={() =>
										makeToast(
											<Toast.Root priority="success">
												<Toast.Icon />
												<Toast.Message>
													Laborum ea anim adipisicing in Lorem incididunt mollit
													ipsum reprehenderit.
												</Toast.Message>
												<Toast.Action asChild>
													<IconButton
														type="button"
														appearance="ghost"
														size="xs"
														icon={<XIcon />}
														label="Dismiss toast"
													/>
												</Toast.Action>
											</Toast.Root>,
										)
									}
								>
									Show Toast
								</Button>
								<AlertDialog.Footer>
									<AlertDialog.Cancel type="button">Cancel</AlertDialog.Cancel>
								</AlertDialog.Footer>
							</AlertDialog.Body>
						</AlertDialog.Content>
					</AlertDialog.Root>
				</Example>
				<CodeBlock.Root className="rounded-b-lg rounded-t-none">
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code
							language="tsx"
							value={fmtCode`
								import { Button } from "@ngrok/mantle/button";
								import { makeToast, Toast } from "@ngrok/mantle/toast";

								// Only one <Toaster /> should be rendered at a time
								// add it to the root of your app
								<Toaster />

								<Button
									type="button"
									onClick={() =>
										// make some toast! 🍞😋
										makeToast(
											<Toast.Root priority="success">
												<Toast.Icon />
												<Toast.Message>
													Laborum ea anim adipisicing in Lorem incididunt mollit ipsum reprehenderit.
												</Toast.Message>
												<Toast.Action asChild>
													<IconButton type="button" appearance="ghost" size="xs" icon={<XIcon />} label="Dismiss toast" />
												</Toast.Action>
											</Toast.Root>,
										)
									}
								>
									Show Toast
								</Button>
							`}
						/>
					</CodeBlock.Body>
				</CodeBlock.Root>
			</div>

			<section className="space-y-4">
				<h2 id="api" className="text-3xl font-medium">
					API Reference
				</h2>

				<div className="space-y-8">
					<div className="space-y-4">
						<h3 id="api-toaster" className="text-2xl font-medium">
							Toaster
						</h3>
						<p className="font-body text-body text-xl">
							The <Code>Toaster</Code> component renders all toasts. It accepts
							the following props:
						</p>
						<PropsTable>
							<PropRow>
								<PropNameCell name="position" optional />
								<PropTypeCell>
									<ul>
										<li>
											<StringPropType value="top-left" />
										</li>
										<li>
											<StringPropType value="top-center" />
										</li>
										<li>
											<StringPropType value="top-right" />
										</li>
										<li>
											<StringPropType value="bottom-left" />
										</li>
										<li>
											<StringPropType value="bottom-center" />
										</li>
										<li>
											<StringPropType value="bottom-right" />
										</li>
									</ul>
								</PropTypeCell>
								<PropDefaultValueCell>
									<StringPropType value="top-center" />
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>The position where toasts will appear on the screen.</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="duration_ms" optional />
								<PropTypeCell>
									<StringPropType value="number" />
								</PropTypeCell>
								<PropDefaultValueCell>
									<StringPropType value="4000" />
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>
										Time in milliseconds that should elapse before automatically
										dismissing toasts. When set here, this will be the default
										duration for all toasts.
									</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="containerAriaLabel" optional />
								<PropTypeCell>
									<StringPropType />
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>Aria label for the toast container for screen readers.</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="dir" optional />
								<PropTypeCell>
									<ul>
										<li>
											<StringPropType value="ltr" />
										</li>
										<li>
											<StringPropType value="rtl" />
										</li>
									</ul>
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>Direction of text for internationalization support.</p>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
					</div>

					<div className="space-y-4">
						<h3 id="api-toast-root" className="text-2xl font-medium">
							Toast.Root
						</h3>
						<p className="font-body text-body text-xl">
							The <Code>Toast.Root</Code> is the container for a toast message.
							It accepts the following props in addition to the{" "}
							<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div">
								standard HTML div attributes
							</Anchor>
							.
						</p>
						<PropsTable>
							<PropRow>
								<PropNameCell name="priority" />
								<PropTypeCell>
									<ul>
										<li>
											<StringPropType value="info" />
										</li>
										<li>
											<StringPropType value="success" />
										</li>
										<li>
											<StringPropType value="warning" />
										</li>
										<li>
											<StringPropType value="danger" />
										</li>
									</ul>
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>
										The priority level of the toast, which determines the visual
										styling and default icon.
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
										Use the <Code>asChild</Code> prop to compose the{" "}
										<Code>Toast.Root</Code> styling and functionality onto
										alternative element types or your own React components.
									</p>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
					</div>

					<div className="space-y-4">
						<h3 id="api-toast-icon" className="text-2xl font-medium">
							Toast.Icon
						</h3>
						<p className="font-body text-body text-xl">
							The <Code>Toast.Icon</Code> displays an icon representing the
							toast priority. If no custom icon is provided, a default icon for
							the priority is used.
						</p>
						<PropsTable>
							<PropRow>
								<PropNameCell name="svg" optional />
								<PropTypeCell>
									<ReactNodePropType />
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>
										A custom SVG icon to display. If not provided, the default
										icon for the toast priority will be used.
									</p>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
					</div>

					<div className="space-y-4">
						<h3 id="api-toast-message" className="text-2xl font-medium">
							Toast.Message
						</h3>
						<p className="font-body text-body text-xl">
							The <Code>Toast.Message</Code> contains the main text content of
							the toast. It accepts the following props in addition to the{" "}
							<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p">
								standard HTML paragraph attributes
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
										Use the <Code>asChild</Code> prop to compose the{" "}
										<Code>Toast.Message</Code> styling and functionality onto
										alternative element types or your own React components.
									</p>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
					</div>

					<div className="space-y-4">
						<h3 id="api-toast-action" className="text-2xl font-medium">
							Toast.Action
						</h3>
						<p className="font-body text-body text-xl">
							The <Code>Toast.Action</Code> is a button that dismisses the toast
							when clicked. It accepts the following props in addition to the{" "}
							<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button">
								standard HTML button attributes
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
										Use the <Code>asChild</Code> prop to compose the{" "}
										<Code>Toast.Action</Code> styling and functionality onto
										alternative element types or your own React components.
									</p>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
						<p className="font-body text-body">
							<strong>Note:</strong> You can prevent the toast from being
							dismissed on click by calling <Code>event.preventDefault()</Code>{" "}
							in your <Code>onClick</Code> handler.
						</p>
					</div>

					<div className="space-y-4">
						<h3 id="api-make-toast" className="text-2xl font-medium">
							makeToast
						</h3>
						<p className="font-body text-body text-xl">
							The <Code>makeToast</Code> function creates and displays a toast.
							It accepts the following parameters:
						</p>
						<PropsTable>
							<PropRow>
								<PropNameCell name="children" />
								<PropTypeCell>
									<ReactNodePropType />
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>
										The React component to render inside the toast container.
										Typically a <Code>Toast.Root</Code> component.
									</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="options" optional />
								<PropTypeCell>
									<StringPropType value="MakeToastOptions" />
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>
										Optional configuration object with the following properties:
									</p>
									<ul className="mt-2 list-disc list-inside space-y-1">
										<li>
											<Code>duration_ms</Code> (number, optional): Time in
											milliseconds before auto-dismissal
										</li>
										<li>
											<Code>id</Code> (string, optional): Custom ID for the
											toast
										</li>
									</ul>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
					</div>
				</div>
			</section>
		</div>
	);
}

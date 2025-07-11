import { AlertDialog } from "@ngrok/mantle/alert-dialog";
import { Button, IconButton } from "@ngrok/mantle/button";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { Dialog } from "@ngrok/mantle/dialog";
import { Sheet } from "@ngrok/mantle/sheet";
import { type Priority, Toast, makeToast } from "@ngrok/mantle/toast";
import { XIcon } from "@phosphor-icons/react/X";
import { useState } from "react";
import invariant from "tiny-invariant";
import { Example } from "~/components/example";
import { PageHeader } from "~/components/page-header";
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
								<Toast priority={priority}>
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
								</Toast>,
							);

							setPriorityIndex((prev) => prev + 1);
						}}
					>
						Show Toast
					</Button>
					<Sheet>
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
											<Toast priority="warning">
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
											</Toast>,
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
					</Sheet>
					<Dialog>
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
											<Toast priority="danger">
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
											</Toast>,
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
					</Dialog>
					<AlertDialog priority="info">
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
											<Toast priority="success">
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
											</Toast>,
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
					</AlertDialog>
				</Example>
				<CodeBlock className="rounded-b-lg rounded-t-none">
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code
							language="tsx"
							value={fmtCode`
								import { Button } from "@ngrok/mantle/button";
								import { makeToast, Toast } from "@ngrok/mantle/toast";

								// Only one <Toast.Toaster /> should be rendered at a time
								// add it to the root of your app
								<Toast.Toaster />

								<Button
									type="button"
									onClick={() =>
										// make some toast! 🍞😋
										makeToast(
											<Toast priority="success">
												<Toast.Icon />
												<Toast.Message>
													Laborum ea anim adipisicing in Lorem incididunt mollit ipsum reprehenderit.
												</Toast.Message>
												<Toast.Action asChild>
													<IconButton type="button" appearance="ghost" size="xs" icon={<XIcon />} label="Dismiss toast" />
												</Toast.Action>
											</Toast>,
										)
									}
								>
									Show Toast
								</Button>
							`}
						/>
					</CodeBlock.Body>
				</CodeBlock>
			</div>
		</div>
	);
}

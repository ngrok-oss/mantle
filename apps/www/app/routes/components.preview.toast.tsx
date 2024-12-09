import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogIcon,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@ngrok/mantle/alert-dialog";
import { Button, IconButton } from "@ngrok/mantle/button";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, fmtCode } from "@ngrok/mantle/code-block";
import {
	Dialog,
	DialogBody,
	DialogClose,
	DialogCloseIconButton,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@ngrok/mantle/dialog";
import {
	Sheet,
	SheetBody,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@ngrok/mantle/sheet";
import { makeToast, Toast, ToastAction, ToastIcon, ToastMessage, type Priority } from "@ngrok/mantle/toast";
import { X } from "@phosphor-icons/react/X";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { PreviewBadge } from "~/components/badges";
import { Example } from "~/components/example";
import { useState } from "react";
import invariant from "tiny-invariant";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Toast" },
		{ name: "description", content: "mantle is ngrok's UI library and design system" },
	];
};

export const headers: HeadersFunction = () => {
	return {
		"Cache-Control": "max-age=300, stale-while-revalidate=604800",
	};
};

const priorities = ["info", "success", "warning", "danger"] as const satisfies Priority[];

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
			<div className="flex items-center gap-3">
				<h1 className="text-5xl font-medium">Toast</h1>
				<PreviewBadge />
			</div>
			<p className="font-body text-body text-xl">
				A succinct message that is displayed temporarily. Toasts are used to provide feedback to the user without
				interrupting their workflow.
			</p>
			<div>
				<Example className="flex-col gap-4">
					<Button
						type="button"
						appearance="filled"
						onClick={() => {
							makeToast(
								<Toast priority={priority}>
									<ToastIcon />
									<ToastMessage>
										Laborum ea anim adipisicing in Lorem incididunt mollit ipsum reprehenderit.
									</ToastMessage>
									<ToastAction asChild>
										<IconButton type="button" appearance="ghost" size="xs" icon={<X />} label="Dismiss toast" />
									</ToastAction>
								</Toast>,
							);

							setPriorityIndex((prev) => prev + 1);
						}}
					>
						Show Toast
					</Button>
					<Sheet>
						<SheetTrigger asChild>
							<Button type="button" appearance="filled">
								Open Sheet
							</Button>
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								<SheetTitle>Are you absolutely sure?</SheetTitle>
							</SheetHeader>
							<SheetBody className="space-y-4">
								<Button
									type="button"
									onClick={() =>
										makeToast(
											<Toast priority="warning">
												<ToastIcon />
												<ToastMessage>
													Laborum ea anim adipisicing in Lorem incididunt mollit ipsum reprehenderit.
												</ToastMessage>
												<ToastAction asChild>
													<IconButton type="button" appearance="ghost" size="xs" icon={<X />} label="Dismiss toast" />
												</ToastAction>
											</Toast>,
										)
									}
								>
									Show Toast
								</Button>
							</SheetBody>
							<SheetFooter>
								<SheetClose asChild>
									<Button type="button">Close</Button>
								</SheetClose>
							</SheetFooter>
						</SheetContent>
					</Sheet>
					<Dialog>
						<DialogTrigger asChild>
							<Button type="button" appearance="filled">
								Open dialog
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Are you absolutely sure? aslkdfjas dlfksdoijfoasdjf ioadsjfi</DialogTitle>
								<DialogCloseIconButton />
							</DialogHeader>
							<DialogBody>
								<Button
									type="button"
									onClick={() =>
										makeToast(
											<Toast priority="danger">
												<ToastIcon />
												<ToastMessage>
													Laborum ea anim adipisicing in Lorem incididunt mollit ipsum reprehenderit.
												</ToastMessage>
												<ToastAction asChild>
													<IconButton type="button" appearance="ghost" size="xs" icon={<X />} label="Dismiss toast" />
												</ToastAction>
											</Toast>,
										)
									}
								>
									Show Toast
								</Button>
							</DialogBody>
							<DialogFooter>
								<DialogClose asChild>
									<Button type="button" priority="neutral" appearance="outlined">
										Cancel
									</Button>
								</DialogClose>
							</DialogFooter>
						</DialogContent>
					</Dialog>
					<AlertDialog priority="info">
						<AlertDialogTrigger asChild>
							<Button type="button" appearance="filled">
								Show Info Alert Dialog
							</Button>
						</AlertDialogTrigger>
						<AlertDialogContent>
							<AlertDialogIcon />
							<AlertDialogBody>
								<AlertDialogHeader>
									<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
								</AlertDialogHeader>
								<Button
									type="button"
									onClick={() =>
										makeToast(
											<Toast priority="success">
												<ToastIcon />
												<ToastMessage>
													Laborum ea anim adipisicing in Lorem incididunt mollit ipsum reprehenderit.
												</ToastMessage>
												<ToastAction asChild>
													<IconButton type="button" appearance="ghost" size="xs" icon={<X />} label="Dismiss toast" />
												</ToastAction>
											</Toast>,
										)
									}
								>
									Show Toast
								</Button>
								<AlertDialogFooter>
									<AlertDialogCancel type="button">Cancel</AlertDialogCancel>
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
								import { Button } from "@ngrok/mantle/button";
								import { makeToast, Toast, ToastAction, ToastIcon, ToastMessage } from "@ngrok/mantle/toast";

								// Only one of these should be added to the root of your app
								<Toaster />

								<Button
									type="button"
									onClick={() =>
										makeToast(
											<Toast priority="success">
												<ToastIcon />
												<ToastMessage>
													Laborum ea anim adipisicing in Lorem incididunt mollit ipsum reprehenderit.
												</ToastMessage>
												<ToastAction asChild>
													<IconButton type="button" appearance="ghost" size="xs" icon={<X />} label="Dismiss toast" />
												</ToastAction>
											</Toast>,
										)
									}
								>
									Show Toast
								</Button>
							`}
						/>
					</CodeBlockBody>
				</CodeBlock>
			</div>
		</div>
	);
}

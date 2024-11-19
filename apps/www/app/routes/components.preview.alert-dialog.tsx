import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@ngrok/mantle/alert-dialog";
import { Button } from "@ngrok/mantle/button";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, fmtCode } from "@ngrok/mantle/code-block";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { PreviewBadge } from "~/components/badges";
import { Example } from "~/components/example";

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
						AlertDialog
					</h1>
					<PreviewBadge />
				</div>
				<p className="font-body text-body text-xl">
					A modal dialog that interrupts the user with important content and expects a response.
				</p>
				<div>
					<Example className="flex-col gap-6">
						<AlertDialog>
							<AlertDialogTrigger asChild>
								<Button type="button" appearance="outlined">
									Show Dialog
								</Button>
							</AlertDialogTrigger>
							<AlertDialogContent>
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
										AlertDialogCancel,
										AlertDialogContent,
										AlertDialogDescription,
										AlertDialogFooter,
										AlertDialogHeader,
										AlertDialogTitle,
										AlertDialogTrigger,
									} from "@ngrok/mantle/alert-dialog";
									import { Button } from "@ngrok/mantle/button";

									<AlertDialog>
										<AlertDialogTrigger asChild>
											<Button type="button" appearance="outlined">
												Show Dialog
											</Button>
										</AlertDialogTrigger>
										<AlertDialogContent>
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
										</AlertDialogContent>
									</AlertDialog>
								`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			{/* <section className="space-y-4">
				<h2 id="composition" className="text-3xl font-medium">
					Composition
				</h2>
				<p className="font-body text-body text-xl">
					In some cases, you might wish to have a tooltip over the dialog trigger. This is helpful if the dialog trigger
					is an <InlineCode>IconButton</InlineCode> and you wish to provide more context to what the button does. You
					can compose them both together to where the dialog trigger is also the tooltip trigger.
				</p>
				<div>
					<Example>
						<Dialog>
							<Tooltip>
								<TooltipTrigger asChild>
									<DialogTrigger asChild>
										<IconButton type="button" label="Delete" size="sm" icon={<TrashSimple />} />
									</DialogTrigger>
								</TooltipTrigger>
								<TooltipContent>
									<p>Delete</p>
								</TooltipContent>
							</Tooltip>

							<DialogContent>
								<DialogHeader>
									<DialogTitle>Are you absolutely sure?</DialogTitle>
									<DialogCloseIconButton />
								</DialogHeader>
								<DialogBody>
									This action cannot be undone. This will permanently delete your account and remove your data from our
									servers.
								</DialogBody>
								<DialogFooter>
									<DialogClose asChild>
										<Button type="button" priority="danger" appearance="filled">
											Delete
										</Button>
									</DialogClose>
									<DialogClose asChild>
										<Button type="button" priority="neutral" appearance="outlined">
											Cancel
										</Button>
									</DialogClose>
								</DialogFooter>
							</DialogContent>
						</Dialog>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									<Dialog>
										<Tooltip>
											<TooltipTrigger asChild>
												<DialogTrigger asChild>
													<IconButton type="button" label="Delete" size="sm" icon={<TrashSimple />} />
												</DialogTrigger>
											</TooltipTrigger>
											<TooltipContent>
												<p>Delete</p>
											</TooltipContent>
										</Tooltip>

										<DialogContent>
											<DialogHeader>
												<DialogTitle>Are you absolutely sure?</DialogTitle>
												<DialogCloseIconButton />
											</DialogHeader>
											<DialogBody>
												This action cannot be undone. This will permanently delete your account and remove your data from our
												servers.
											</DialogBody>
											<DialogFooter>
												<DialogClose asChild>
													<Button type="button" priority="danger" appearance="filled">
														Delete
													</Button>
												</DialogClose>
												<DialogClose asChild>
													<Button type="button" priority="neutral" appearance="outlined">
														Cancel
													</Button>
												</DialogClose>
											</DialogFooter>
										</DialogContent>
									</Dialog>
								`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section> */}
		</div>
	);
}

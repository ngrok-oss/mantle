import { Button, IconButton } from "@ngrok/mantle/button";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	fmtCode,
} from "@ngrok/mantle/code-block";
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
import { InlineCode } from "@ngrok/mantle/inline-code";
import { Tooltip, TooltipContent, TooltipTrigger } from "@ngrok/mantle/tooltip";
import { TrashSimpleIcon } from "@phosphor-icons/react";
import { Example } from "~/components/example";
import { PageHeader } from "~/components/page-header";
import type { Route } from "./+types/components.dialog";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Dialog" },
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
				<PageHeader id="dialog">Dialog</PageHeader>
				<p className="font-body text-body text-xl">
					A window overlaid on either the primary window or another dialog
					window, rendering the content underneath inert.
				</p>
				<div>
					<Example className="flex-col gap-6">
						<Dialog>
							<DialogTrigger asChild>
								<Button type="button" appearance="filled">
									Open dialog
								</Button>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>
										Are you absolutely sure? aslkdfjas dlfksdoijfoasdjf ioadsjfi
									</DialogTitle>
									<DialogCloseIconButton />
								</DialogHeader>
								<DialogBody>
									This action cannot be undone. This will permanently delete
									your account and remove your data from our servers.
								</DialogBody>
								<DialogFooter>
									<DialogClose asChild>
										<Button type="button" priority="danger" appearance="filled">
											Delete
										</Button>
									</DialogClose>
									<DialogClose asChild>
										<Button
											type="button"
											priority="neutral"
											appearance="outlined"
										>
											Cancel
										</Button>
									</DialogClose>
								</DialogFooter>
							</DialogContent>
						</Dialog>
						<Dialog>
							<DialogTrigger asChild>
								<Button type="button" appearance="filled">
									Open dialog (no close button)
								</Button>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>
										Are you absolutely sure? aslkdfjas dlfksdoijfoasdjf ioadsjfi
									</DialogTitle>
								</DialogHeader>
								<DialogBody>
									This action cannot be undone. This will permanently delete
									your account and remove your data from our servers.
								</DialogBody>
								<DialogFooter>
									<DialogClose asChild>
										<Button type="button" priority="danger" appearance="filled">
											Delete
										</Button>
									</DialogClose>
									<DialogClose asChild>
										<Button
											type="button"
											priority="neutral"
											appearance="outlined"
										>
											Cancel
										</Button>
									</DialogClose>
								</DialogFooter>
							</DialogContent>
						</Dialog>
						<Dialog>
							<DialogTrigger asChild>
								<Button type="button" appearance="filled">
									Open dialog (tall boi)
								</Button>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>Tall boi example</DialogTitle>
									<DialogCloseIconButton />
								</DialogHeader>
								<DialogBody className="flex flex-col gap-4">
									<p>
										Consequat velit minim labore esse aliqua laboris non laborum
										qui labore duis reprehenderit.
									</p>
									<p>Eiusmod eu consequat ex ipsum ex adipisicing.</p>
									<p>
										Veniam eu nostrud officia pariatur aliquip dolor laboris
										cupidatat magna cillum nostrud aliquip ex esse.
									</p>
									<p>Tempor laborum proident officia do.</p>
									<p>Aliqua laborum id cillum anim.</p>
									<p>Exercitation ex culpa laborum anim.</p>
									<p>Voluptate minim culpa qui anim officia non do labore.</p>
									<p>Ad exercitation do nulla laborum deserunt.</p>
									<p>
										Quis mollit nostrud sint officia elit eu deserunt nostrud
										excepteur ea.
									</p>
									<p>
										Qui pariatur anim ad et Lorem eu aliquip minim amet elit ex
										adipisicing.
									</p>
									<p>Exercitation officia sunt sit sint.</p>
									<p>Velit eu deserunt proident Lorem sit proident ut minim.</p>
									<p>
										Consequat velit minim labore esse aliqua laboris non laborum
										qui labore duis reprehenderit.
									</p>
									<p>Eiusmod eu consequat ex ipsum ex adipisicing.</p>
									<p>
										Veniam eu nostrud officia pariatur aliquip dolor laboris
										cupidatat magna cillum nostrud aliquip ex esse.
									</p>
									<p>Tempor laborum proident officia do.</p>
									<p>Aliqua laborum id cillum anim.</p>
									<p>Exercitation ex culpa laborum anim.</p>
									<p>Voluptate minim culpa qui anim officia non do labore.</p>
									<p>Ad exercitation do nulla laborum deserunt.</p>
									<p>
										Quis mollit nostrud sint officia elit eu deserunt nostrud
										excepteur ea.
									</p>
									<p>
										Qui pariatur anim ad et Lorem eu aliquip minim amet elit ex
										adipisicing.
									</p>
									<p>Exercitation officia sunt sit sint.</p>
									<p>Velit eu deserunt proident Lorem sit proident ut minim.</p>
								</DialogBody>
								<DialogFooter>
									<DialogClose asChild>
										<Button type="button" priority="danger" appearance="filled">
											Delete
										</Button>
									</DialogClose>
									<DialogClose asChild>
										<Button
											type="button"
											priority="neutral"
											appearance="outlined"
										>
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
							import { Dialog, DialogBody, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@ngrok/mantle/dialog";

							<Dialog>
								<DialogTrigger asChild>
									<Button type="button">Open dialog</Button>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<DialogTitle>Are you absolutely sure?</DialogTitle>
									</DialogHeader>
									<DialogBody>
										This action cannot be undone. This will permanently delete your account and remove your data from our
										servers.
									</DialogBody>
									<DialogFooter>
										<Button type="button">
											Delete
										</Button>
										<Button type="button">
											Cancel
										</Button>
									</DialogFooter>
								</DialogContent>
							</Dialog>
						`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section className="space-y-4">
				<h2 id="composition" className="text-3xl font-medium">
					Composition
				</h2>
				<p className="font-body text-body text-xl">
					In some cases, you might wish to have a tooltip over the dialog
					trigger. This is helpful if the dialog trigger is an{" "}
					<InlineCode>IconButton</InlineCode> and you wish to provide more
					context to what the button does. You can compose them both together to
					where the dialog trigger is also the tooltip trigger.
				</p>
				<div>
					<Example>
						<Dialog>
							<Tooltip>
								<TooltipTrigger asChild>
									<DialogTrigger asChild>
										<IconButton
											type="button"
											label="Delete"
											size="sm"
											icon={<TrashSimpleIcon />}
										/>
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
									This action cannot be undone. This will permanently delete
									your account and remove your data from our servers.
								</DialogBody>
								<DialogFooter>
									<DialogClose asChild>
										<Button type="button" priority="danger" appearance="filled">
											Delete
										</Button>
									</DialogClose>
									<DialogClose asChild>
										<Button
											type="button"
											priority="neutral"
											appearance="outlined"
										>
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
													<IconButton type="button" label="Delete" size="sm" icon={<TrashSimpleIcon />} />
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
			</section>
		</div>
	);
}

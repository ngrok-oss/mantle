import { Button, IconButton } from "@ngrok/mantle/button";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	fmtCode,
} from "@ngrok/mantle/code-block";
import { Dialog } from "@ngrok/mantle/dialog";
import { InlineCode } from "@ngrok/mantle/inline-code";
import { Tooltip, TooltipContent, TooltipTrigger } from "@ngrok/mantle/tooltip";
import { TrashSimpleIcon } from "@phosphor-icons/react/TrashSimple";
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
									This action cannot be undone. This will permanently delete
									your account and remove your data from our servers.
								</Dialog.Body>
								<Dialog.Footer>
									<Dialog.Close asChild>
										<Button type="button" priority="danger" appearance="filled">
											Delete
										</Button>
									</Dialog.Close>
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
						<Dialog>
							<Dialog.Trigger asChild>
								<Button type="button" appearance="filled">
									Open dialog (no close button)
								</Button>
							</Dialog.Trigger>
							<Dialog.Content>
								<Dialog.Header>
									<Dialog.Title>
										Are you absolutely sure? aslkdfjas dlfksdoijfoasdjf ioadsjfi
									</Dialog.Title>
								</Dialog.Header>
								<Dialog.Body>
									This action cannot be undone. This will permanently delete
									your account and remove your data from our servers.
								</Dialog.Body>
								<Dialog.Footer>
									<Dialog.Close asChild>
										<Button type="button" priority="danger" appearance="filled">
											Delete
										</Button>
									</Dialog.Close>
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
						<Dialog>
							<Dialog.Trigger asChild>
								<Button type="button" appearance="filled">
									Open dialog (tall boi)
								</Button>
							</Dialog.Trigger>
							<Dialog.Content>
								<Dialog.Header>
									<Dialog.Title>Tall boi example</Dialog.Title>
									<Dialog.CloseIconButton />
								</Dialog.Header>
								<Dialog.Body className="flex flex-col gap-4">
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
								</Dialog.Body>
								<Dialog.Footer>
									<Dialog.Close asChild>
										<Button type="button" priority="danger" appearance="filled">
											Delete
										</Button>
									</Dialog.Close>
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
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { Dialog } from "@ngrok/mantle/dialog";

									<Dialog>
										<Dialog.Trigger asChild>
											<Button type="button">Open dialog</Button>
										</Dialog.Trigger>
										<Dialog.Content>
											<Dialog.Header>
												<Dialog.Title>Are you absolutely sure?</Dialog.Title>
											</Dialog.Header>
											<Dialog.Body>
												This action cannot be undone. This will permanently delete your account and remove your data from our
												servers.
											</Dialog.Body>
											<Dialog.Footer>
												<Button type="button">
													Delete
												</Button>
												<Button type="button">
													Cancel
												</Button>
											</Dialog.Footer>
										</Dialog.Content>
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
									<Dialog.Trigger asChild>
										<IconButton
											type="button"
											label="Delete"
											size="sm"
											icon={<TrashSimpleIcon />}
										/>
									</Dialog.Trigger>
								</TooltipTrigger>
								<TooltipContent>
									<p>Delete</p>
								</TooltipContent>
							</Tooltip>

							<Dialog.Content>
								<Dialog.Header>
									<Dialog.Title>Are you absolutely sure?</Dialog.Title>
									<Dialog.CloseIconButton />
								</Dialog.Header>
								<Dialog.Body>
									This action cannot be undone. This will permanently delete
									your account and remove your data from our servers.
								</Dialog.Body>
								<Dialog.Footer>
									<Dialog.Close asChild>
										<Button type="button" priority="danger" appearance="filled">
											Delete
										</Button>
									</Dialog.Close>
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
												<Dialog.Trigger asChild>
													<IconButton type="button" label="Delete" size="sm" icon={<TrashSimpleIcon />} />
												</Dialog.Trigger>
											</TooltipTrigger>
											<TooltipContent>
												<p>Delete</p>
											</TooltipContent>
										</Tooltip>

										<Dialog.Content>
											<Dialog.Header>
												<Dialog.Title>Are you absolutely sure?</Dialog.Title>
												<Dialog.CloseIconButton />
											</Dialog.Header>
											<Dialog.Body>
												This action cannot be undone. This will permanently delete your account and remove your data from our
												servers.
											</Dialog.Body>
											<Dialog.Footer>
												<Dialog.Close asChild>
													<Button type="button" priority="danger" appearance="filled">
														Delete
													</Button>
												</Dialog.Close>
												<Dialog.Close asChild>
													<Button type="button" priority="neutral" appearance="outlined">
														Cancel
													</Button>
												</Dialog.Close>
											</Dialog.Footer>
										</Dialog.Content>
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

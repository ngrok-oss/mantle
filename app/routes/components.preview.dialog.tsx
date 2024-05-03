import { Button } from "@/button";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, fmtCode } from "@/code-block";
import {
	Dialog,
	DialogBody,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/dialog";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";
import { PreviewBadge } from "~/components/preview-badge";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Dialog" },
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
		<div className="space-y-4">
			<div className="flex items-center gap-3">
				<h1 className="text-5xl font-medium">Dialog</h1>
				<PreviewBadge />
			</div>
			<p className="text-xl text-body">
				A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
			</p>
			<div>
				<Example className="gap-2">
					<Dialog>
						<DialogTrigger asChild>
							<Button type="button" appearance="filled">
								Open dialog
							</Button>
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
		</div>
	);
}

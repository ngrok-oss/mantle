import { Button } from "@/button";
import { code, CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton } from "@/code-block";
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
		<div>
			<h1 className="text-5xl font-medium">Dialog</h1>
			<p className="text-default mt-4 text-xl">
				A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
			</p>
			<Example className="mt-4 gap-2">
				<Dialog>
					<DialogTrigger asChild>
						<Button appearance="filled">Open dialog</Button>
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
								<Button priority="danger" appearance="filled">
									Delete
								</Button>
							</DialogClose>
							<DialogClose asChild>
								<Button priority="neutral" appearance="outlined">
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
					<CodeBlockCode language="tsx">
						{code`
							import { Dialog, DialogBody, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@ngrok/mantle";

							<Dialog>
								<DialogTrigger asChild>
									<Button>Open dialog</Button>
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
										<Button>
											Delete
										</Button>
										<Button>
											Cancel
										</Button>
									</DialogFooter>
								</DialogContent>
							</Dialog>
						`}
					</CodeBlockCode>
				</CodeBlockBody>
			</CodeBlock>
		</div>
	);
}

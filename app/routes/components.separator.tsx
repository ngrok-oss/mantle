import { CodeBlock, CodeBlockBody, CodeBlockCopyButton, CodeBlockPre, fmtCode } from "@/code-block";
import { Separator } from "@/separator";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Separator" },
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
			<h1 className="text-5xl font-medium">Separator</h1>
			<p className="mt-4 text-xl text-body">Visually or semantically separates content.</p>

			<Example className="mt-4">
				<div>
					<div className="space-y-1">
						<h4 className="text-sm font-medium leading-none">mantle</h4>
						<p className="text-muted-foreground text-sm">An open-source UI component library.</p>
					</div>
					<Separator className="my-4" />
					<Separator className="my-4" decorative={false} />
					<div className="flex h-5 items-center space-x-4 text-sm">
						<div>Blog</div>
						<Separator orientation="vertical" />
						<div>Docs</div>
						<Separator orientation="vertical" />
						<div>Source</div>
					</div>
				</div>
			</Example>
			<CodeBlock className="rounded-b-lg rounded-t-none">
				<CodeBlockBody>
					<CodeBlockCopyButton />
					<CodeBlockPre
						language="tsx"
						value={fmtCode`
							import { Separator } from "@ngrok/mantle/separator";

							<div>
								<div className="space-y-1">
									<h4 className="text-sm font-medium leading-none">mantle</h4>
									<p className="text-muted-foreground text-sm">An open-source UI component library.</p>
								</div>
								<Separator className="my-4" />
								<div className="flex h-5 items-center space-x-4 text-sm">
									<div>Blog</div>
									<Separator orientation="vertical" />
									<div>Docs</div>
									<Separator orientation="vertical" />
									<div>Source</div>
								</div>
							</div>
						`}
					/>
				</CodeBlockBody>
			</CodeBlock>
		</div>
	);
}

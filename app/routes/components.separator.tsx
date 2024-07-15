import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, fmtCode } from "@/code-block";
import { HorizontalSeparatorGroup, Separator } from "@/separator";
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
		<div className="space-y-16">
			<section className="space-y-4">
				<h1 className="text-5xl font-medium">Separator</h1>
				<p className="font-body text-xl text-body">Visually or semantically separates content.</p>
				<div>
					<Example>
						<div className="space-y-4">
							<div className="space-y-1">
								<h4 className="text-sm font-medium leading-none">mantle</h4>
								<p className="text-muted-foreground text-sm">An open-source UI component library.</p>
							</div>
							<Separator className="my-4" />
							<Separator className="my-4" decorative={false} />
							<div className="flex h-5 items-center gap-4 text-sm">
								<div>Blog</div>
								<Separator orientation="vertical" />
								<div>Docs</div>
								<Separator orientation="vertical" />
								<div>Source</div>
							</div>
							<HorizontalSeparatorGroup>
								<Separator />
								<h3>ngrok mantle</h3>
								<Separator />
							</HorizontalSeparatorGroup>
							<HorizontalSeparatorGroup>
								<h3>ngrok mantle</h3>
								<Separator />
							</HorizontalSeparatorGroup>
							<HorizontalSeparatorGroup>
								<Separator />
								<h3>ngrok mantle</h3>
							</HorizontalSeparatorGroup>
						</div>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
							import { HorizontalSeparatorGroup, Separator } from "@ngrok/mantle/separator";

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
								<HorizontalSeparatorGroup>
									<Separator />
									<h3>ngrok mantle</h3>
									<Separator />
								</HorizontalSeparatorGroup>
								<HorizontalSeparatorGroup>
									<h3>ngrok mantle</h3>
									<Separator />
								</HorizontalSeparatorGroup>
								<HorizontalSeparatorGroup>
									<Separator />
									<h3>ngrok mantle</h3>
								</HorizontalSeparatorGroup>
							</div>
						`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>
		</div>
	);
}

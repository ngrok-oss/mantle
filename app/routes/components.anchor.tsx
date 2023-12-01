import { Anchor } from "@/anchor";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton } from "@/code-block";
import { code } from "@/code-block/code";
import type { MetaFunction } from "@vercel/remix";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Anchor" },
		{ name: "description", content: "mantle is ngrok's UI library and design system" },
	];
};

export default function Page() {
	return (
		<div>
			<h1 className="text-5xl font-medium">Anchor</h1>
			<p className="my-4 text-xl text-gray-600">Fundamental component for rendering links to external addresses.</p>
			<div className="mt-8 space-y-4 text-gray-600">
				<p>
					The{" "}
					<code className="font-mono bg-gray-100 border border-gray-300 text-sm rounded-md px-1 py-0.5">
						&lt;Anchor&gt;
					</code>{" "}
					element, with its{" "}
					<code className="font-mono bg-gray-100 border border-gray-300 text-sm rounded-md px-1 py-0.5">href</code>{" "}
					attribute, creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything
					else a URL can address.
				</p>
				<p>
					Content within each{" "}
					<code className="font-mono bg-gray-100 border border-gray-300 text-sm rounded-md px-1 py-0.5">
						&lt;Anchor&gt;
					</code>{" "}
					should indicate the link&apos;s destination. If the{" "}
					<code className="font-mono bg-gray-100 border border-gray-300 text-sm rounded-md px-1 py-0.5">href</code>{" "}
					attribute is present, pressing the enter key while focused on the{" "}
					<code className="font-mono bg-gray-100 border border-gray-300 text-sm rounded-md px-1 py-0.5">
						&lt;Anchor&gt;
					</code>{" "}
					element will activate it.
				</p>
				<p>
					See the <Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">MDN docs</Anchor> for more
					information.
				</p>
				<p>
					If you need to link to an internal application route, prefer using the{" "}
					<Anchor href="https://reactrouter.com/en/main/components/link">
						<code className="font-mono bg-gray-100 border border-gray-300 text-sm rounded-md px-1 py-0.5">
							react-router-dom
						</code>{" "}
						<code className="font-mono bg-gray-100 border border-gray-300 text-sm rounded-md px-1 py-0.5">
							&lt;Link&gt;
						</code>
					</Anchor>{" "}
					or the{" "}
					<Anchor href="https://remix.run/docs/en/main/components/link">
						<code className="font-mono bg-gray-100 border border-gray-300 text-sm rounded-md px-1 py-0.5">
							@remix-run/react
						</code>{" "}
						<code className="font-mono bg-gray-100 border border-gray-300 text-sm rounded-md px-1 py-0.5">
							&lt;Link&gt;
						</code>
					</Anchor>
					.
				</p>
			</div>
			<div className="my-4 rounded-lg border border-gray-300 bg-background">
				<div className="flex items-center justify-center p-4 md:p-9 border-b border-gray-300">
					<p>
						This link will go to <Anchor href="https://ngrok.com/">ngrok.com</Anchor>!
					</p>
				</div>
				<CodeBlock className="border-none">
					<CodeBlockBody>
						<CodeBlockCopyButton />
						<CodeBlockCode language="tsx">
							{code`
								<p>
									This link will go to <Anchor href="https://ngrok.com/">ngrok.com</Anchor>!
								</p>
							`}
						</CodeBlockCode>
					</CodeBlockBody>
				</CodeBlock>
			</div>
		</div>
	);
}

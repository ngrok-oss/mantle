import { Anchor } from "@ngrok/mantle/anchor";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	fmtCode,
} from "@ngrok/mantle/code-block";
import { InlineCode } from "@ngrok/mantle/inline-code";
import { Example } from "~/components/example";
import { PageHeader } from "~/components/page-header";
import type { Route } from "./+types/components.alert";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Anchor" },
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
		<div className="space-y-8">
			<header className="space-y-4">
				<PageHeader id="anchor">Anchor</PageHeader>
				<p className="font-body text-body text-xl">
					Fundamental component for rendering links to external addresses.
				</p>
			</header>
			<div className="font-body text-body space-y-4">
				<p>
					The <InlineCode>&lt;Anchor&gt;</InlineCode> element, with its{" "}
					<InlineCode>href</InlineCode> attribute, creates a hyperlink to web
					pages, files, email addresses, locations in the same page, or anything
					else a URL can address.
				</p>
				<p>
					Content within each <InlineCode>&lt;Anchor&gt;</InlineCode> should
					indicate the link&rsquo;s destination. If the{" "}
					<InlineCode>href</InlineCode> attribute is present, pressing the enter
					key while focused on the <InlineCode>&lt;Anchor&gt;</InlineCode>{" "}
					element will activate it.
				</p>
				<p>
					See the{" "}
					<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">
						MDN docs
					</Anchor>{" "}
					for more information.
				</p>
				<p>
					If you need to link to an internal application route, prefer using the{" "}
					<Anchor href="https://reactrouter.com/en/main/components/link">
						<InlineCode>react-router</InlineCode>{" "}
						<InlineCode>&lt;Link&gt;</InlineCode>
					</Anchor>
					.
				</p>
			</div>

			<div>
				<Example>
					<p>
						This link will go to{" "}
						<Anchor href="https://ngrok.com/">ngrok.com</Anchor>!
					</p>
				</Example>
				<CodeBlock className="rounded-b-lg rounded-t-none">
					<CodeBlockBody>
						<CodeBlockCopyButton />
						<CodeBlockCode
							language="tsx"
							value={fmtCode`
							import { Anchor } from "@ngrok/mantle/anchor";

							<p>
								This link will go to <Anchor href="https://ngrok.com/">ngrok.com</Anchor>!
							</p>
						`}
						/>
					</CodeBlockBody>
				</CodeBlock>
			</div>
		</div>
	);
}

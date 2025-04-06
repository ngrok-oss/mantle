import { Anchor } from "@ngrok/mantle/anchor";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	CodeBlockExpanderButton,
	fmtCode,
} from "@ngrok/mantle/code-block";
import { InlineCode } from "@ngrok/mantle/inline-code";
import { Input, InputCapture } from "@ngrok/mantle/input";
import { Label } from "@ngrok/mantle/label";
import { Info } from "@phosphor-icons/react/Info";
import { MagnifyingGlass } from "@phosphor-icons/react/MagnifyingGlass";
import { Link, href } from "react-router";
import { Example } from "~/components/example";
import { PageHeader } from "~/components/page-header";
import {
	BooleanPropType,
	FuncPropType,
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropTypeCell,
	PropsTable,
	StringPropType,
} from "~/components/props-table";
import type { Route } from "./+types/components.input";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Input" },
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
				<PageHeader id="input">Input</PageHeader>
				<p className="font-body text-body text-xl">
					Fundamental component for inputs.
				</p>
				<div>
					<Example className="flex flex-col gap-6">
						<Label className="block w-full max-w-80 space-y-1">
							<p>Username</p>
							<Input placeholder="Enter a username" />
						</Label>
						<Label className="block w-full max-w-80 space-y-1">
							<p>Email</p>
							<Input placeholder="Enter your email" autoComplete="email" />
						</Label>
						<div className="w-full max-w-80 space-y-2">
							<p>Validation States:</p>
							<div className="flex w-full flex-col gap-6">
								<Label className="space-y-1">
									<p>Error</p>
									<Input
										placeholder={'"validation="error"'}
										validation="error"
									/>
								</Label>
								<Label className="space-y-1">
									<p>Success</p>
									<Input
										placeholder={'"validation="success"'}
										validation="success"
									/>
								</Label>
								<Label className="space-y-1">
									<p>Warning</p>
									<Input
										placeholder={'"validation="warning"'}
										validation="warning"
									/>
								</Label>
							</div>
						</div>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { Input } from "@ngrok/mantle/input";

									<Input placeholder="Enter a username" />
									<Input placeholder="Enter a username" validation="error" />
									<Input placeholder="Enter a username" validation="success" />
									<Input placeholder="Enter a username" validation="warning" />
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
					You can compose additional visual or functional elements within the{" "}
					<InlineCode>Input</InlineCode> using <InlineCode>children</InlineCode>
					. The examples below show you how to render start and end icons or
					buttons. The{" "}
					<Anchor asChild>
						<Link to={href("/components/password-input")}>Password Input</Link>
					</Anchor>{" "}
					is built using this API under the hood! Keep in mind that you will
					need to manually pass the <InlineCode>InputCapture</InlineCode>{" "}
					component as children too because it is responsible for rendering the
					actual form <InlineCode>input</InlineCode> element! We provide an{" "}
					<InlineCode>InputCapture</InlineCode> component for you when you don't
					use the <InlineCode>children</InlineCode> API.
				</p>
				<p className="font-body text-body text-xl">
					Note: when composing with interactive content (e.g. a{" "}
					<InlineCode>button</InlineCode>), you will need to consider whether or
					not that element should be tab-indexable or receive focus!
				</p>
				<div>
					<Example className="grid grid-cols-2 place-items-center gap-6">
						<Label className="block w-full max-w-80 space-y-1">
							<p>Search with start icon</p>
							<Input className="max-w-64" placeholder="Search...">
								<MagnifyingGlass />
								<InputCapture />
							</Input>
						</Label>
						<Label className="block w-full max-w-80 space-y-1">
							<p>Search with end icon</p>
							<Input className="max-w-64" placeholder="Search...">
								<InputCapture />
								<Info />
							</Input>
						</Label>
						<Label className="block w-full max-w-80 space-y-1">
							<p>Search with start and end icons</p>
							<Input className="max-w-64" placeholder="Search...">
								<MagnifyingGlass />
								<InputCapture />
								<Info />
							</Input>
						</Label>
						<Label className="block w-full max-w-80 space-y-1">
							<p>Search with start icon (error)</p>
							<Input
								className="max-w-64"
								placeholder="Search..."
								validation="error"
							>
								<MagnifyingGlass />
								<InputCapture />
							</Input>
						</Label>
						<Label className="block w-full max-w-80 space-y-1">
							<p>Search with end icon (error)</p>
							<Input
								className="max-w-64"
								placeholder="Search..."
								validation="error"
							>
								<InputCapture />
								<Info />
							</Input>
						</Label>
						<Label className="block w-full max-w-80 space-y-1">
							<p>Search with start and end icons (error)</p>
							<Input
								className="max-w-64"
								validation="error"
								placeholder="Search..."
							>
								<MagnifyingGlass />
								<InputCapture />
								<Info />
							</Input>
						</Label>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { Input, InputCapture } from "@ngrok/mantle/input";
									import { Label } from "@ngrok/mantle/label";
									import { Info } from "@phosphor-icons/react/Info";
									import { MagnifyingGlass } from "@phosphor-icons/react/MagnifyingGlass";

									<Label className="block w-full max-w-80 space-y-1">
										<p>Search with start icon</p>
										<Input className="max-w-64" placeholder="Search...">
											<MagnifyingGlass />
											<InputCapture />
										</Input>
									</Label>
									<Label className="block w-full max-w-80 space-y-1">
										<p>Search with end icon</p>
										<Input className="max-w-64" placeholder="Search...">
											<InputCapture />
											<Info />
										</Input>
									</Label>
									<Label className="block w-full max-w-80 space-y-1">
										<p>Search with start and end icons</p>
										<Input className="max-w-64" placeholder="Search...">
											<MagnifyingGlass />
											<InputCapture />
											<Info />
										</Input>
									</Label>
									<Label className="block w-full max-w-80 space-y-1">
										<p>Search with start icon (error)</p>
										<Input className="max-w-64" placeholder="Search..." validation="error">
											<MagnifyingGlass />
											<InputCapture />
										</Input>
									</Label>
									<Label className="block w-full max-w-80 space-y-1">
										<p>Search with end icon (error)</p>
										<Input className="max-w-64" placeholder="Search..." validation="error">
											<InputCapture />
											<Info />
										</Input>
									</Label>
									<Label className="block w-full max-w-80 space-y-1">
										<p>Search with start and end icons (error)</p>
										<Input className="max-w-64" validation="error" placeholder="Search...">
											<MagnifyingGlass />
											<InputCapture />
											<Info />
										</Input>
									</Label>
								`}
							/>
							<CodeBlockExpanderButton />
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section className="space-y-4">
				<h2 id="api" className="text-3xl font-medium">
					API Reference
				</h2>
				<p className="font-body text-body text-xl">
					The <InlineCode>Input</InlineCode> accepts the following props in
					addition to the{" "}
					<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input">
						standard HTML input attributes
					</Anchor>
					.
				</p>
				<PropsTable>
					<PropRow>
						<PropNameCell name="validation" optional />
						<PropTypeCell>
							<ul>
								<li>
									<StringPropType value="error" />
								</li>
								<li>
									<StringPropType value="success" />
								</li>
								<li>
									<StringPropType value="warning" />
								</li>
								<li>
									<BooleanPropType value={false} />
								</li>
								<li>
									<FuncPropType
										value={`() => "error" | "success" | "warning" | false`}
									/>
								</li>
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell className="space-y-2">
							<p>
								Use the <InlineCode>validation</InlineCode> prop to show if the
								input has a specific validation status. This will change the
								border and outline of the input.
							</p>
							<p>
								The <InlineCode>false</InlineCode> type is useful when using
								short-circuiting logic so that you don't need to use a ternary
								with <InlineCode>undefined</InlineCode>.
							</p>
							<p>
								Setting <InlineCode>validation</InlineCode> to{" "}
								<InlineCode>error</InlineCode> also sets{" "}
								<InlineCode>aria-invalid</InlineCode>.
							</p>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable>
			</section>
		</div>
	);
}

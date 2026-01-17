import { Anchor } from "@ngrok/mantle/anchor";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { Input, InputCapture } from "@ngrok/mantle/input";
import { Label } from "@ngrok/mantle/label";
import { InfoIcon } from "@phosphor-icons/react/Info";
import { MagnifyingGlassIcon } from "@phosphor-icons/react/MagnifyingGlass";
import { Link, href } from "react-router";
import { Example } from "~/components/example";
import { HashLinkHeading } from "~/components/hash-link-heading";
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
	return [{ title: "@ngrok/mantle — Input" }];
};

export default function Page() {
	return (
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="input">Input</PageHeader>
				<p className="font-body text-body text-xl">Fundamental component for inputs.</p>
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
									<Input placeholder={'"validation="error"'} validation="error" />
								</Label>
								<Label className="space-y-1">
									<p>Success</p>
									<Input placeholder={'"validation="success"'} validation="success" />
								</Label>
								<Label className="space-y-1">
									<p>Warning</p>
									<Input placeholder={'"validation="warning"'} validation="warning" />
								</Label>
							</div>
						</div>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { Input } from "@ngrok/mantle/input";

									<Input placeholder="Enter a username" />
									<Input placeholder="Enter a username" validation="error" />
									<Input placeholder="Enter a username" validation="success" />
									<Input placeholder="Enter a username" validation="warning" />
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-4">
				<HashLinkHeading id="composition" className="text-3xl font-medium">
					<h2>Composition</h2>
				</HashLinkHeading>
				<p className="font-body text-body text-xl">
					You can compose additional visual or functional elements within the <Code>Input</Code>{" "}
					using <Code>children</Code>. The examples below show you how to render start and end icons
					or buttons. The{" "}
					<Anchor asChild>
						<Link to={href("/components/password-input")}>Password Input</Link>
					</Anchor>{" "}
					is built using this API under the hood! Keep in mind that you will need to manually pass
					the <Code>InputCapture</Code> component as children too because it is responsible for
					rendering the actual form <Code>input</Code> element! We provide an{" "}
					<Code>InputCapture</Code> component for you when you don't use the <Code>children</Code>{" "}
					API.
				</p>
				<p className="font-body text-body text-xl">
					Note: when composing with interactive content (e.g. a <Code>button</Code>), you will need
					to consider whether or not that element should be tab-indexable or receive focus!
				</p>
				<div>
					<Example className="grid grid-cols-2 place-items-center gap-6">
						<Label className="block w-full max-w-80 space-y-1">
							<p>Search with start icon</p>
							<Input className="max-w-64" placeholder="Search...">
								<MagnifyingGlassIcon />
								<InputCapture />
							</Input>
						</Label>
						<Label className="block w-full max-w-80 space-y-1">
							<p>Search with end icon</p>
							<Input className="max-w-64" placeholder="Search...">
								<InputCapture />
								<InfoIcon />
							</Input>
						</Label>
						<Label className="block w-full max-w-80 space-y-1">
							<p>Search with start and end icons</p>
							<Input className="max-w-64" placeholder="Search...">
								<MagnifyingGlassIcon />
								<InputCapture />
								<InfoIcon />
							</Input>
						</Label>
						<Label className="block w-full max-w-80 space-y-1">
							<p>Search with start icon (error)</p>
							<Input className="max-w-64" placeholder="Search..." validation="error">
								<MagnifyingGlassIcon />
								<InputCapture />
							</Input>
						</Label>
						<Label className="block w-full max-w-80 space-y-1">
							<p>Search with end icon (error)</p>
							<Input className="max-w-64" placeholder="Search..." validation="error">
								<InputCapture />
								<InfoIcon />
							</Input>
						</Label>
						<Label className="block w-full max-w-80 space-y-1">
							<p>Search with start and end icons (error)</p>
							<Input className="max-w-64" validation="error" placeholder="Search...">
								<MagnifyingGlassIcon />
								<InputCapture />
								<InfoIcon />
							</Input>
						</Label>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import { Input, InputCapture } from "@ngrok/mantle/input";
									import { Label } from "@ngrok/mantle/label";
									import { InfoIcon } from "@phosphor-icons/react/Info";
									import { MagnifyingGlassIcon } from "@phosphor-icons/react/MagnifyingGlass";

									<Label className="block w-full max-w-80 space-y-1">
										<p>Search with start icon</p>
										<Input className="max-w-64" placeholder="Search...">
											<MagnifyingGlassIcon />
											<InputCapture />
										</Input>
									</Label>
									<Label className="block w-full max-w-80 space-y-1">
										<p>Search with end icon</p>
										<Input className="max-w-64" placeholder="Search...">
											<InputCapture />
											<InfoIcon />
										</Input>
									</Label>
									<Label className="block w-full max-w-80 space-y-1">
										<p>Search with start and end icons</p>
										<Input className="max-w-64" placeholder="Search...">
											<MagnifyingGlassIcon />
											<InputCapture />
											<InfoIcon />
										</Input>
									</Label>
									<Label className="block w-full max-w-80 space-y-1">
										<p>Search with start icon (error)</p>
										<Input className="max-w-64" placeholder="Search..." validation="error">
											<MagnifyingGlassIcon />
											<InputCapture />
										</Input>
									</Label>
									<Label className="block w-full max-w-80 space-y-1">
										<p>Search with end icon (error)</p>
										<Input className="max-w-64" placeholder="Search..." validation="error">
											<InputCapture />
											<InfoIcon />
										</Input>
									</Label>
									<Label className="block w-full max-w-80 space-y-1">
										<p>Search with start and end icons (error)</p>
										<Input className="max-w-64" validation="error" placeholder="Search...">
											<MagnifyingGlassIcon />
											<InputCapture />
											<InfoIcon />
										</Input>
									</Label>
								`}
							/>
							<CodeBlock.ExpanderButton />
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-4">
				<HashLinkHeading id="api" className="text-3xl font-medium">
					<h2>API Reference</h2>
				</HashLinkHeading>
				<p className="font-body text-body text-xl">
					The <Code>Input</Code> accepts the following props in addition to the{" "}
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
									<FuncPropType value={`() => "error" | "success" | "warning" | false`} />
								</li>
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell />
						<PropDescriptionCell className="space-y-2">
							<p>
								Use the <Code>validation</Code> prop to show if the input has a specific validation
								status. This will change the border and outline of the input.
							</p>
							<p>
								The <Code>false</Code> type is useful when using short-circuiting logic so that you
								don't need to use a ternary with <Code>undefined</Code>.
							</p>
							<p>
								Setting <Code>validation</Code> to <Code>error</Code> also sets{" "}
								<Code>aria-invalid</Code>.
							</p>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable>
			</section>
		</div>
	);
}

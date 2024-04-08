import { Info, MagnifyingGlass } from "@phosphor-icons/react";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";
import {
	BooleanPropType,
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropsTable,
	PropTypeCell,
} from "~/components/props-table";
import { route } from "~/types/routes";
import { Anchor } from "packages/anchor";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	CodeBlockExpanderButton,
	fmtCode,
} from "packages/code-block";
import { InlineCode } from "packages/inline-code";
import { Input, InputCapture } from "packages/input";
import { Link } from "react-router-dom";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Input" },
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
			<section className="mb-4 space-y-4">
				<h1 id="input" className="text-5xl font-medium">
					Input
				</h1>
				<p className="mt-4 text-xl text-body">Fundamental component for inputs.</p>
				<div>
					<Example className="mt-4 flex flex-col gap-6">
						<label className="block w-full max-w-80 space-y-1">
							<p>Username</p>
							<Input className="max-w-64" placeholder="Enter a username" />
						</label>
						<label className="block w-full max-w-80 space-y-1">
							<p>Username (invalid)</p>
							<Input className="max-w-64" placeholder="Enter a username" invalid />
						</label>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { Input } from "@ngrok/mantle";

									<Input placeholder="Enter a username" />
									<Input placeholder="Enter a username" invalid />
								`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section className="mb-4 space-y-4">
				<h2 id="composition" className="text-3xl font-medium">
					Composition
				</h2>
				<p className="text-xl text-body">
					You can compose additional visual or functional elements within the <InlineCode>Input</InlineCode> using{" "}
					<InlineCode>children</InlineCode>. The examples below show you how to render start and end icons or buttons.
					The{" "}
					<Anchor asChild>
						<Link to={route("/components/password-input")}>Password Input</Link>
					</Anchor>{" "}
					is built using this API under the hood! Keep in mind that you will need to manually pass the{" "}
					<InlineCode>InputCapture</InlineCode> component as children too because it is responsible for rendering the
					actual form <InlineCode>input</InlineCode> element! We provide an <InlineCode>InputCapture</InlineCode>{" "}
					component for you when you don't use the <InlineCode>children</InlineCode> API.
				</p>
				<p className="text-xl text-body">
					Note: when composing with interactive content (e.g. a <InlineCode>button</InlineCode>), you will need to
					consider whether or not that element should be tab-indexable or receive focus!
				</p>
				<div>
					<Example className="mt-4 grid grid-cols-2 place-items-center gap-6">
						<label className="block w-full max-w-80 space-y-1">
							<p>Search with start icon</p>
							<Input className="max-w-64" placeholder="Search...">
								<MagnifyingGlass />
								<InputCapture />
							</Input>
						</label>
						<label className="block w-full max-w-80 space-y-1">
							<p>Search with end icon</p>
							<Input className="max-w-64" placeholder="Search...">
								<InputCapture />
								<Info />
							</Input>
						</label>
						<label className="block w-full max-w-80 space-y-1">
							<p>Search with start and end icons</p>
							<Input className="max-w-64" placeholder="Search...">
								<MagnifyingGlass />
								<InputCapture />
								<Info />
							</Input>
						</label>
						<label className="block w-full max-w-80 space-y-1">
							<p>Search with start icon (invalid)</p>
							<Input className="max-w-64" placeholder="Search..." invalid>
								<MagnifyingGlass />
								<InputCapture />
							</Input>
						</label>
						<label className="block w-full max-w-80 space-y-1">
							<p>Search with end icon (invalid)</p>
							<Input className="max-w-64" placeholder="Search..." invalid>
								<InputCapture />
								<Info />
							</Input>
						</label>
						<label className="block w-full max-w-80 space-y-1">
							<p>Search with start and end icons (invalid)</p>
							<Input className="max-w-64" invalid placeholder="Search...">
								<MagnifyingGlass />
								<InputCapture />
								<Info />
							</Input>
						</label>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { Input, InputCapture } from "@ngrok/mantle";
									import { Info } from "@phosphor-icons/react";
									import { MagnifyingGlass } from "@phosphor-icons/react";

									<label className="block w-full max-w-80 space-y-1">
										<p>Search with start icon</p>
										<Input className="max-w-64" placeholder="Search...">
											<MagnifyingGlass />
											<InputCapture />
										</Input>
									</label>
									<label className="block w-full max-w-80 space-y-1">
										<p>Search with end icon</p>
										<Input className="max-w-64" placeholder="Search...">
											<InputCapture />
											<Info />
										</Input>
									</label>
									<label className="block w-full max-w-80 space-y-1">
										<p>Search with start and end icons</p>
										<Input className="max-w-64" placeholder="Search...">
											<MagnifyingGlass />
											<InputCapture />
											<Info />
										</Input>
									</label>
									<label className="block w-full max-w-80 space-y-1">
										<p>Search with start icon (invalid)</p>
										<Input className="max-w-64" placeholder="Search..." invalid>
											<MagnifyingGlass />
											<InputCapture />
										</Input>
									</label>
									<label className="block w-full max-w-80 space-y-1">
										<p>Search with end icon (invalid)</p>
										<Input className="max-w-64" placeholder="Search..." invalid>
											<InputCapture />
											<Info />
										</Input>
									</label>
									<label className="block w-full max-w-80 space-y-1">
										<p>Search with start and end icons (invalid)</p>
										<Input className="max-w-64" invalid placeholder="Search...">
											<MagnifyingGlass />
											<InputCapture />
											<Info />
										</Input>
									</label>
								`}
							/>
							<CodeBlockExpanderButton />
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section className="mt-16 space-y-4">
				<h2 id="api" className="text-3xl font-medium">
					API Reference
				</h2>
				<p className="text-xl text-body">
					The <InlineCode>Input</InlineCode> accepts the following props in addition to the{" "}
					<Anchor href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input">
						standard HTML input attributes
					</Anchor>
					.
				</p>
				<PropsTable>
					<PropRow>
						<PropNameCell name="invalid" optional />
						<PropTypeCell>
							<BooleanPropType />
						</PropTypeCell>
						<PropDefaultValueCell>
							<BooleanPropType value={false} />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								Use the <InlineCode>invalid</InlineCode> prop to show if the input has a validation error. This will
								change the presentation of the input to indicate <span className="italic">danger</span> to the user as
								well as set <InlineCode>aria-invalid</InlineCode>.
							</p>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable>
			</section>
		</div>
	);
}

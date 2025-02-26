import {
	Alert,
	AlertContent,
	AlertDescription,
	AlertTitle,
} from "@ngrok/mantle/alert";
import { Card, CardBody } from "@ngrok/mantle/card";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	fmtCode,
} from "@ngrok/mantle/code-block";
import { InlineCode } from "@ngrok/mantle/inline-code";
import { CheckCircle } from "@phosphor-icons/react/CheckCircle";
import { Info } from "@phosphor-icons/react/Info";
import { Rocket } from "@phosphor-icons/react/Rocket";
import { Warning } from "@phosphor-icons/react/Warning";
import { WarningDiamond } from "@phosphor-icons/react/WarningDiamond";
import { Example } from "~/components/example";
import { PageHeader } from "~/components/page-header";
import {
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropTypeCell,
	PropsTable,
	StringPropType,
} from "~/components/props-table";
import type { Route } from "./+types/components.alert";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Alert" },
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
				<PageHeader id="alert">Alert</PageHeader>
				<p className="font-body text-body text-xl">
					Displays a callout for user attention.
				</p>
				<div>
					<Example className="flex-col gap-2">
						<Alert>
							<Rocket className="size-5" />
							<AlertContent>
								<AlertTitle>Default</AlertTitle>
								<AlertDescription>This is a default Alert.</AlertDescription>
							</AlertContent>
						</Alert>
						<Alert priority="danger">
							<Warning className="size-5" />
							<AlertContent>
								<AlertTitle>Danger</AlertTitle>
								<AlertDescription>This is a danger Alert.</AlertDescription>
							</AlertContent>
						</Alert>
						<Alert priority="info">
							<Info className="size-5" />
							<AlertContent>
								<AlertTitle>Info</AlertTitle>
								<AlertDescription>This is an info Alert.</AlertDescription>
							</AlertContent>
						</Alert>
						<Alert priority="success">
							<CheckCircle className="size-5" />
							<AlertContent>
								<AlertTitle>Success</AlertTitle>
								<AlertDescription>This is a success Alert.</AlertDescription>
							</AlertContent>
						</Alert>
						<Alert priority="warning">
							<WarningDiamond className="size-5" />
							<AlertContent>
								<AlertTitle>Warning</AlertTitle>
								<AlertDescription>This is a warning Alert.</AlertDescription>
							</AlertContent>
						</Alert>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { Alert, AlertContent, AlertDescription, AlertTitle } from "@ngrok/mantle/alert";

									<Alert>
										<Rocket className="size-5" />
										<AlertContent>
											<AlertTitle>Default</AlertTitle>
											<AlertDescription>This is a default Alert.</AlertDescription>
										</AlertContent>
									</Alert>
									<Alert priority="danger">
										<Warning className="size-5" />
										<AlertContent>
											<AlertTitle>Danger</AlertTitle>
											<AlertDescription>This is a danger Alert.</AlertDescription>
										</AlertContent>
									</Alert>
									<Alert priority="info">
										<Info className="size-5" />
										<AlertContent>
											<AlertTitle>Info</AlertTitle>
											<AlertDescription>This is an info Alert.</AlertDescription>
										</AlertContent>
									</Alert>
									<Alert priority="success">
										<CheckCircle className="size-5" />
										<AlertContent>
											<AlertTitle>Success</AlertTitle>
											<AlertDescription>This is a success Alert.</AlertDescription>
										</AlertContent>
									</Alert>
									<Alert priority="warning">
										<WarningDiamond className="size-5" />
										<AlertContent>
											<AlertTitle>Warning</AlertTitle>
											<AlertDescription>This is a warning Alert.</AlertDescription>
										</AlertContent>
									</Alert>
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
					You can mix and match what you put inside the{" "}
					<InlineCode>Alert</InlineCode> component to create different types of
					Alert layouts.
				</p>
				<div>
					<Example className="flex-col gap-4">
						<div className="w-full max-w-screen-sm space-y-2">
							<p>
								Danger <InlineCode>Alert</InlineCode> with icon
							</p>
							<Alert priority="danger">
								<Warning className="size-5" />
								<AlertContent>
									<AlertTitle>Danger Will Robinson</AlertTitle>
									<AlertDescription>
										Cupidatat ullamco commodo laborum consectetur ut mollit et
										nostrud amet elit ut Lorem culpa.
									</AlertDescription>
								</AlertContent>
							</Alert>
						</div>
						<div className="w-full max-w-screen-sm space-y-2">
							<p>
								Danger <InlineCode>Alert</InlineCode> without icon
							</p>
							<Alert priority="danger">
								<AlertContent>
									<AlertTitle>Danger Will Robinson</AlertTitle>
									<AlertDescription>
										Cupidatat ullamco commodo laborum consectetur ut mollit et
										nostrud amet elit ut Lorem culpa.
									</AlertDescription>
								</AlertContent>
							</Alert>
						</div>
						<div className="w-full max-w-screen-sm space-y-2">
							<p>
								Danger <InlineCode>Alert</InlineCode> with icon and no
								description
							</p>
							<Alert priority="danger">
								<Warning className="size-5" />
								<AlertContent>
									<AlertTitle>Danger Will Robinson</AlertTitle>
								</AlertContent>
							</Alert>
						</div>
						<div className="w-full max-w-screen-sm space-y-2">
							<p>
								Danger <InlineCode>Alert</InlineCode> without icon or
								description
							</p>
							<Alert priority="danger">
								<AlertContent>
									<AlertTitle>Danger Will Robinson</AlertTitle>
								</AlertContent>
							</Alert>
						</div>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { Alert, AlertContent, AlertDescription, AlertTitle } from "@ngrok/mantle/alert";
									import { Warning } from "@phosphor-icons/react";

									// Danger Alert with icon
									<Alert priority="danger">
										<Warning className="size-5" />
										<AlertContent>
											<AlertTitle>Danger Will Robinson</AlertTitle>
											<AlertDescription>This is a danger alert.</AlertDescription>
										</AlertContent>
									</Alert>

									// Danger Alert without icon
									<Alert priority="danger">
										<AlertContent>
											<AlertTitle>Danger Will Robinson</AlertTitle>
											<AlertDescription>This is a danger alert.</AlertDescription>
										</AlertContent>
									</Alert>

									// Danger Alert with icon and no description
									<Alert priority="danger">
										<Warning className="size-5" />
										<AlertContent>
											<AlertTitle>Danger Will Robinson</AlertTitle>
										</AlertContent>
									</Alert>

									// Danger Alert without icon or description
									<Alert priority="danger">
										<AlertContent>
											<AlertTitle>Danger Will Robinson</AlertTitle>
										</AlertContent>
									</Alert>
								`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section className="space-y-4">
				<h2 id="example-banner" className="text-3xl font-medium">
					Banners
				</h2>
				<p className="font-body text-body text-xl">
					For banner-like alerts, set <InlineCode>rounded-none</InlineCode> on
					the <InlineCode>Alert</InlineCode> component.
				</p>
				<div>
					<Example>
						<div className="border-card min-h-56 space-y-4 border">
							<Alert priority="info" className="rounded-none">
								<Rocket className="size-5" />
								<AlertContent>
									<AlertTitle>
										This is an info Alert as a page banner
									</AlertTitle>
								</AlertContent>
							</Alert>
							<Card className="mx-auto max-w-screen-sm">
								<CardBody>
									<p className="my-4">
										Laboris commodo Lorem anim consequat ut dolore proident.
									</p>
								</CardBody>
							</Card>
						</div>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import { Alert, AlertContent, AlertTitle } from "@ngrok/mantle/alert";
									import { Rocket } from "@phosphor-icons/react";

									<Alert priority="info" className="rounded-none">
										<Rocket className="size-5" />
										<AlertContent>
											<AlertTitle>This is an info Alert as a page banner</AlertTitle>
										</AlertContent>
									</Alert>
								`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section className="mt-16 space-y-4">
				<h2 id="api" className="text-3xl font-medium">
					API Reference
				</h2>
				<PropsTable>
					<PropRow>
						<PropNameCell name="priority" optional />
						<PropTypeCell>
							<ul>
								<li>
									<StringPropType value="danger" />
								</li>
								<li>
									<StringPropType value="default" />
								</li>
								<li>
									<StringPropType value="info" />
								</li>
								<li>
									<StringPropType value="success" />
								</li>
								<li>
									<StringPropType value="warning" />
								</li>
							</ul>
						</PropTypeCell>
						<PropDefaultValueCell>
							<StringPropType value="outlined" />
						</PropDefaultValueCell>
						<PropDescriptionCell>
							<p>
								Indicates the importance or impact level of the{" "}
								<InlineCode>Alert</InlineCode>, affecting its color and styling
								to communicate its purpose to the user.
							</p>
						</PropDescriptionCell>
					</PropRow>
				</PropsTable>
			</section>
		</div>
	);
}

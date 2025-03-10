import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@ngrok/mantle/card";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	fmtCode,
} from "@ngrok/mantle/code-block";
import { Example } from "~/components/example";
import { PageHeader } from "~/components/page-header";
import type { Route } from "./+types/components.card";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Card" },
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
		<div className="space-y-4">
			<PageHeader id="card">Card</PageHeader>
			<p className="font-body text-body text-xl">
				A container used to display content in a box, resembling a physical
				card.
			</p>

			<div>
				<Example>
					<Card className="shadow-lg">
						<CardHeader>
							<CardTitle>Card Title Here</CardTitle>
						</CardHeader>
						<CardBody>
							<p>Laborum in aute officia adipisicing elit velit.</p>
						</CardBody>
						<CardFooter>
							<p>Card footer</p>
						</CardFooter>
					</Card>
				</Example>
				<CodeBlock className="rounded-b-lg rounded-t-none">
					<CodeBlockBody>
						<CodeBlockCopyButton />
						<CodeBlockCode
							language="tsx"
							value={fmtCode`
							import { Card, CardBody, CardFooter, CardHeader, CardTitle } from "@ngrok/mantle/card";

							<Card>
								<CardHeader>
									<CardTitle>Card Title Here</CardTitle>
								</CardHeader>
								<CardBody>
									<p>Laborum in aute officia adipisicing elit velit.</p>
								</CardBody>
								<CardFooter>
									<p>Card footer</p>
								</CardFooter>
							</Card>
						`}
						/>
					</CodeBlockBody>
				</CodeBlock>
			</div>
		</div>
	);
}

import { Card, CardBody, CardFooter, CardHeader, CardTitle } from "@/card";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton } from "@/code-block";
import { code } from "@/code-block/code";
import type { MetaFunction } from "@vercel/remix";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Card" },
		{ name: "description", content: "mantle is ngrok's UI library and design system" },
	];
};

export default function Page() {
	return (
		<div>
			<h1 className="text-5xl font-medium">Card</h1>
			<h2 className="my-4 text-xl text-gray-600">
				A container used to display content in a box, resembling a physical card.
			</h2>

			<div className="my-4 rounded-lg border border-gray-300 bg-background">
				<div className="flex items-center justify-center p-4 md:p-9 border-b">
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
				</div>
				<CodeBlock className="border-none">
					<CodeBlockBody>
						<CodeBlockCopyButton />
						<CodeBlockCode language="tsx">
							{code`
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
						</CodeBlockCode>
					</CodeBlockBody>
				</CodeBlock>
			</div>
		</div>
	);
}

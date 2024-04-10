import { Anchor } from "@/anchor";
import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, CodeBlockHeader, fmtCode } from "@/code-block";
import { InlineCode } from "@/inline-code";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/table";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Link } from "~/components/link";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle" },
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
			<section className="space-y-4">
				<h1 className="text-5xl font-medium">Setup Mantle</h1>
				<p className="text-body">
					Start by installing <InlineCode>@ngrok/mantle</InlineCode> with your preferred package manager:
				</p>
				<div className="overflow-hidden rounded-lg border border-gray-300">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Package Manager</TableHead>
								<TableHead>Command</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>npm</TableCell>
								<TableCell>
									<CodeBlock>
										<CodeBlockBody>
											<CodeBlockCopyButton />
											<CodeBlockCode language="sh" value={fmtCode`npm install -E @ngrok/mantle`} />
										</CodeBlockBody>
									</CodeBlock>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>yarn</TableCell>
								<TableCell>
									<CodeBlock>
										<CodeBlockBody>
											<CodeBlockCopyButton />
											<CodeBlockCode language="sh" value={fmtCode`yarn add -E @ngrok/mantle`} />
										</CodeBlockBody>
									</CodeBlock>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>pnpm</TableCell>
								<TableCell>
									<CodeBlock>
										<CodeBlockBody>
											<CodeBlockCopyButton />
											<CodeBlockCode language="sh" value={fmtCode`pnpm add -E @ngrok/mantle`} />
										</CodeBlockBody>
									</CodeBlock>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>bun</TableCell>
								<TableCell>
									<CodeBlock>
										<CodeBlockBody>
											<CodeBlockCopyButton />
											<CodeBlockCode language="sh" value={fmtCode`bun add -E @ngrok/mantle`} />
										</CodeBlockBody>
									</CodeBlock>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</section>

			<section className="space-y-4">
				<h2 className="mt-8 text-3xl font-medium">Tailwind Configuration</h2>
				<p className="text-body">
					Then, add the <Anchor href="https://tailwindcss.com/docs/presets">tailwind preset</Anchor> to your tailwind
					configuration:
				</p>
				<CodeBlock>
					<CodeBlockHeader>tailwind.config.ts</CodeBlockHeader>
					<CodeBlockBody>
						<CodeBlockCopyButton />
						<CodeBlockCode
							language="ts"
							value={fmtCode`
							import { mantlePreset } from "@ngrok/mantle/tailwind-preset";
							import type { Config } from "tailwindcss";
							
							export default {
								presets: [mantlePreset],
								// ... the rest of your tailwind config!
							} satisfies Config;
						`}
						/>
					</CodeBlockBody>
				</CodeBlock>
			</section>

			<section className="space-y-4">
				<h2 className="mt-8 text-3xl font-medium">Application Scaffolding</h2>
				<p className="text-body">
					In your application&rsquo;s entry/root, import the <InlineCode>mantle.css</InlineCode> file to apply the
					mantle styles:
				</p>
				<CodeBlock>
					<CodeBlockHeader>root.tsx</CodeBlockHeader>
					<CodeBlockBody>
						<CodeBlockCopyButton />
						<CodeBlockCode
							language="tsx"
							value={fmtCode`
							import { StrictMode } from "react";
							import { createRoot } from "react-dom/client";

							// 👇 add this import to your root file to apply mantle styles! 👇
							import "@ngrok/mantle/mantle.css";
							
							const container = window.document.getElementById("app");
							
							if (!container) {
								throw new Error("Something went wrong: cannot render application! Please refresh the page to try again.");
							}
							
							const root = createRoot(container);
							
							root.render(
								<StrictMode>
									<App />
								</StrictMode>,
							);
						`}
						/>
					</CodeBlockBody>
				</CodeBlock>
				<p className="text-body">
					Next, you should add the <Link to="/components/theme-provider">Theme Provider</Link> to your application to
					provide the mantle theme to your components. You are now ready to use mantle components in your application!
				</p>
				<p className="text-body">
					You are now ready to use mantle components in your application! For example, you can use the{" "}
					<Link to="/components/button">Button</Link>!
				</p>
			</section>
		</div>
	);
}

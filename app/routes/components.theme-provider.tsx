import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	CodeBlockExpanderButton,
	CodeBlockHeader,
	CodeBlockTitle,
	fmtCode,
} from "@/code-block";
import { InlineCode } from "@/inline-code";
import { PreloadFonts, preventWrongThemeFlashScriptContent } from "@/theme-provider";
import { FileText } from "@phosphor-icons/react";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { renderToStaticMarkup } from "react-dom/server";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Theme Provider" },
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
			<h1 className="text-5xl font-medium">Theme Provider</h1>
			<p className="mb-4 mt-4 text-xl text-body">
				ThemeProvider is a React Context Provider that provides the current theme to the application and a function to
				change it.
			</p>
			<div className="mt-8 space-y-4 text-body">
				<p>
					To use the <InlineCode>ThemeProvider</InlineCode>, wrap your application&apos;s entry point. This should be
					done as high in the component tree as possible.
				</p>
				<p>
					You should also add the <InlineCode>MantleThemeHeadContent</InlineCode> component to the head of your
					application to prevent a Flash of Unstyled Content (FOUC) when the app first loads as well as preload all of
					our custom fonts.
				</p>
				<CodeBlock>
					<CodeBlockHeader>
						<FileText className="h-5 w-5" weight="fill" />
						<CodeBlockTitle>root.tsx</CodeBlockTitle>
					</CodeBlockHeader>
					<CodeBlockBody>
						<CodeBlockCopyButton />
						<CodeBlockCode
							language="tsx"
							value={fmtCode`
							import { MantleThemeHeadContent, ThemeProvider } from "@ngrok/mantle/theme-provider";

							export default function App() {
								return (
									<html className="h-full" lang="en-US" dir="ltr">
										<head>
											// 👇 add this as high in the <head> as possible!
											<MantleThemeHeadContent />
											<meta charSet="utf-8" />
											<meta name="author" content="ngrok" />
											<meta name="viewport" content="width=device-width, initial-scale=1" />
											<Meta />
											<Links />
										</head>
										<body className="h-full min-h-full overflow-y-scroll bg-body">
											// 👇 wrap your app entry in the ThemeProvider
											<ThemeProvider>
												<Outlet />
											</ThemeProvider>
										</body>
									</html>
								);
							}
						`}
						/>
						<CodeBlockExpanderButton />
					</CodeBlockBody>
				</CodeBlock>
				<p>
					Sometimes you cannot use the <InlineCode>MantleThemeHeadContent</InlineCode> component because your webserver
					is not able to render React components. In this case, you can use the copy the following script and add it to
					your application&apos;s <InlineCode>&lt;head&gt;</InlineCode>:
				</p>
				<CodeBlock>
					<CodeBlockHeader>
						<FileText className="h-5 w-5" weight="fill" />
						<CodeBlockTitle>index.html</CodeBlockTitle>
					</CodeBlockHeader>
					<CodeBlockBody>
						<CodeBlockCopyButton />
						<CodeBlockCode
							language="html"
							value={fmtCode`<script>
${preventWrongThemeFlashScriptContent({ defaultTheme: "system" })}
</script>
`}
						/>
						<CodeBlockExpanderButton />
					</CodeBlockBody>
				</CodeBlock>
				<p>
					You will also need to ensure that you add the <InlineCode>PreloadFonts</InlineCode> component to your app as
					well.
				</p>
				<CodeBlock>
					<CodeBlockHeader>
						<FileText className="h-5 w-5" weight="fill" />
						<CodeBlockTitle>index.html</CodeBlockTitle>
					</CodeBlockHeader>
					<CodeBlockBody>
						<CodeBlockCopyButton />
						<CodeBlockCode
							language="html"
							value={fmtCode`<head>\n\t${renderToStaticMarkup(<PreloadFonts />)
								.split("/><")
								.join("/>\n\t<")}\n</head>`}
						/>
					</CodeBlockBody>
				</CodeBlock>
				<p>
					Then, in your application, you can use the <InlineCode>useTheme</InlineCode> hook to get and change the
					current theme:
				</p>
				<CodeBlock>
					<CodeBlockHeader>
						<FileText className="h-5 w-5" weight="fill" />
						<CodeBlockTitle>app.tsx</CodeBlockTitle>
					</CodeBlockHeader>
					<CodeBlockBody>
						<CodeBlockCopyButton />
						<CodeBlockCode
							language="tsx"
							value={fmtCode`
							import {
								Select,
								SelectContent,
								SelectGroup,
								SelectItem,
								SelectLabel,
								SelectTrigger,
							} from "@ngrok/mantle/select";
							import { isTheme, theme, useTheme } from "@ngrok/mantle/theme-provider";

							function App() {
								const [currentTheme, setTheme] = useTheme();

								return (
									<>
										<Select
											value={currentTheme}
											onValueChange={(value) => {
												const maybeNewTheme = isTheme(value) ? value : undefined;
												if (maybeNewTheme) {
													setTheme(maybeNewTheme);
												}
											}}
										>
											<div className="ml-auto">
												<span className="sr-only">Theme Switcher</span>
												<SelectTrigger className="w-min">
													<Sun className="mr-1 h-6 w-6" />
												</SelectTrigger>
											</div>
											<SelectContent>
												<SelectGroup>
													<SelectLabel>Choose a theme</SelectLabel>
													<SelectItem value={theme("system")}>System</SelectItem>
													<SelectItem value={theme("light")}>Light</SelectItem>
													<SelectItem value={theme("dark")}>Dark</SelectItem>
													<SelectItem value={theme("light-high-contrast")}>Light High Contrast</SelectItem>
													<SelectItem value={theme("dark-high-contrast")}>Dark High Contrast</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
										{/* The rest of your app... */}
									</>
								);
							}
`}
						/>
					</CodeBlockBody>
					<CodeBlockExpanderButton />
				</CodeBlock>
			</div>
		</div>
	);
}

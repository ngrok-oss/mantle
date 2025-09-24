import { Anchor } from "@ngrok/mantle/anchor";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import {
	PreloadFonts,
	preventWrongThemeFlashScriptContent,
} from "@ngrok/mantle/theme";
import { FileTextIcon } from "@phosphor-icons/react/FileText";
import { renderToStaticMarkup } from "react-dom/server";
import { HashLinkHeading } from "~/components/hash-link-heading";
import { PageHeader } from "~/components/page-header";
import {
	BooleanPropType,
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropTypeCell,
	PropsTable,
	ReactNodePropType,
	StringPropType,
} from "~/components/props-table";
import type { Route } from "./+types/components.theme";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Theme" },
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
				<PageHeader id="theme-provider">Theme</PageHeader>
				<p className="font-body text-body text-xl">
					ThemeProvider is a React Context Provider that provides the current
					theme to the application and a function to change it.
				</p>
			</header>
			<section className="font-body text-body space-y-4">
				<p>
					To use the <Code>ThemeProvider</Code>, wrap your application&apos;s
					entry point. This should be done as high in the component tree as
					possible.
				</p>
				<p>
					You should also add the <Code>MantleThemeHeadContent</Code> component
					to the head of your application to prevent a Flash of Unstyled Content
					(FOUC) when the app first loads as well as preload all of our custom
					fonts.
				</p>
				<CodeBlock.Root>
					<CodeBlock.Header>
						<CodeBlock.Icon svg={<FileTextIcon weight="fill" />} />
						<CodeBlock.Title>root.tsx</CodeBlock.Title>
					</CodeBlock.Header>
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code
							language="tsx"
							value={fmtCode`
							import { MantleThemeHeadContent, ThemeProvider } from "@ngrok/mantle/theme";

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
						<CodeBlock.ExpanderButton />
					</CodeBlock.Body>
				</CodeBlock.Root>
			</section>
			<section className="space-y-4">
				<p className="font-body text-body">
					Sometimes you cannot use the <Code>MantleThemeHeadContent</Code>{" "}
					component because your webserver is not able to render React
					components. In this case, you can use the copy the following script
					and add it to your application&apos;s <Code>&lt;head&gt;</Code>:
				</p>
				<CodeBlock.Root>
					<CodeBlock.Header>
						<CodeBlock.Icon svg={<FileTextIcon weight="fill" />} />
						<CodeBlock.Title>index.html</CodeBlock.Title>
					</CodeBlock.Header>
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code
							language="html"
							value={fmtCode`<script>
${preventWrongThemeFlashScriptContent({ defaultTheme: "system" })}
</script>
`}
						/>
						<CodeBlock.ExpanderButton />
					</CodeBlock.Body>
				</CodeBlock.Root>
			</section>
			<section className="space-y-4">
				<p className="font-body text-body">
					You will also need to ensure that you add the{" "}
					<Code>PreloadFonts</Code> component to your app as well.
				</p>
				<CodeBlock.Root>
					<CodeBlock.Header>
						<CodeBlock.Icon svg={<FileTextIcon weight="fill" />} />
						<CodeBlock.Title>index.html</CodeBlock.Title>
					</CodeBlock.Header>
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code
							language="html"
							value={fmtCode`<head>\n\t${renderToStaticMarkup(<PreloadFonts />)
								.split("/><")
								.join("/>\n\t<")}\n</head>`}
						/>
					</CodeBlock.Body>
				</CodeBlock.Root>
			</section>
			<section className="space-y-4">
				<p className="font-body text-body">
					Then, in your application, you can use the <Code>useTheme</Code> hook
					to get and change the current theme:
				</p>
				<CodeBlock.Root>
					<CodeBlock.Header>
						<CodeBlock.Icon svg={<FileTextIcon weight="fill" />} />
						<CodeBlock.Title>app.tsx</CodeBlock.Title>
					</CodeBlock.Header>
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code
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
							import { isTheme, theme, useTheme } from "@ngrok/mantle/theme";

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
					</CodeBlock.Body>
					<CodeBlock.ExpanderButton />
				</CodeBlock.Root>
			</section>

			<section className="space-y-4">
				<HashLinkHeading id="api" className="text-3xl font-medium">
					<h2>API Reference</h2>
				</HashLinkHeading>

				<div className="space-y-8">
					<div className="space-y-4">
						<HashLinkHeading
							id="api-theme-provider"
							className="text-2xl font-medium"
						>
							<h3>ThemeProvider</h3>
						</HashLinkHeading>
						<p className="font-body text-body text-xl">
							The <Code>ThemeProvider</Code> accepts the following props in
							addition to the{" "}
							<Anchor href="https://react.dev/reference/react/PropsWithChildren">
								PropsWithChildren
							</Anchor>
							.
						</p>
						<PropsTable>
							<PropRow>
								<PropNameCell name="children" />
								<PropTypeCell>
									<ReactNodePropType />
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>
										The React components to be wrapped by the theme provider
										context.
									</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="defaultTheme" optional />
								<PropTypeCell>
									<ul>
										<li>
											<StringPropType value="system" />
										</li>
										<li>
											<StringPropType value="light" />
										</li>
										<li>
											<StringPropType value="dark" />
										</li>
										<li>
											<StringPropType value="light-high-contrast" />
										</li>
										<li>
											<StringPropType value="dark-high-contrast" />
										</li>
									</ul>
								</PropTypeCell>
								<PropDefaultValueCell>
									<StringPropType value="system" />
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>
										The default theme to use when no theme is stored in
										localStorage. The <Code>system</Code> theme will
										automatically resolve to the user's preferred color scheme.
									</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="storageKey" optional />
								<PropTypeCell>
									<StringPropType />
								</PropTypeCell>
								<PropDefaultValueCell>
									<StringPropType value="mantle-ui-theme" />
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>
										The key used to store the theme preference in localStorage.
									</p>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
					</div>

					<div className="space-y-4">
						<HashLinkHeading
							id="api-mantle-theme-head-content"
							className="text-2xl font-medium"
						>
							<h3>MantleThemeHeadContent</h3>
						</HashLinkHeading>
						<p className="font-body text-body text-xl">
							The <Code>MantleThemeHeadContent</Code> component prevents Flash
							of Unstyled Content (FOUC) and preloads fonts. It accepts the
							following props:
						</p>
						<PropsTable>
							<PropRow>
								<PropNameCell name="defaultTheme" optional />
								<PropTypeCell>
									<ul>
										<li>
											<StringPropType value="system" />
										</li>
										<li>
											<StringPropType value="light" />
										</li>
										<li>
											<StringPropType value="dark" />
										</li>
										<li>
											<StringPropType value="light-high-contrast" />
										</li>
										<li>
											<StringPropType value="dark-high-contrast" />
										</li>
									</ul>
								</PropTypeCell>
								<PropDefaultValueCell>
									<StringPropType value="system" />
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>
										The default theme to use in the FOUC prevention script.
										Should match the <Code>defaultTheme</Code> prop of your{" "}
										<Code>ThemeProvider</Code>.
									</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="storageKey" optional />
								<PropTypeCell>
									<StringPropType />
								</PropTypeCell>
								<PropDefaultValueCell>
									<StringPropType value="mantle-ui-theme" />
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>
										The localStorage key to check for theme preference. Should
										match the <Code>storageKey</Code> prop of your{" "}
										<Code>ThemeProvider</Code>.
									</p>
								</PropDescriptionCell>
							</PropRow>
							<PropRow>
								<PropNameCell name="includeNunitoSans" optional />
								<PropTypeCell>
									<BooleanPropType />
								</PropTypeCell>
								<PropDefaultValueCell>
									<BooleanPropType value={false} />
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>
										Whether to include preload links for the Nunito Sans font
										family.
									</p>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
					</div>
				</div>
			</section>
		</div>
	);
}

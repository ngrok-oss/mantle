import { Anchor } from "@ngrok/mantle/anchor";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import {
	PreloadCoreFonts,
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
	return [{ title: "@ngrok/mantle — Theme" }];
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
			<section className="space-y-6">
				<HashLinkHeading id="setup" className="text-2xl font-medium">
					<h2>Setup</h2>
				</HashLinkHeading>
				<div className="font-body text-body space-y-4">
					<p>
						To use the <Code>ThemeProvider</Code>, wrap your application&apos;s
						entry point. This should be done as high in the component tree as
						possible.
					</p>
					<p>
						You should also add the <Code>MantleThemeHeadContent</Code>{" "}
						component to the head of your application to prevent a Flash of
						Unstyled Content (FOUC) when the app first loads as well as preload
						all of our custom fonts.{" "}
						<strong>
							This is the recommended approach for most applications.
						</strong>
					</p>
				</div>
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
						import { MantleThemeHeadContent, ThemeProvider, useInitialHtmlThemeProps } from "@ngrok/mantle/theme";

						export default function App() {
						// 👇 get the initial theme props to prevent hydration errors
						const initialHtmlThemeProps = useInitialHtmlThemeProps({
						className: "h-full",
						});

						return (
						// 👇 spread the theme props onto the <html> element
						<html {...initialHtmlThemeProps} lang="en-US" dir="ltr">
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

			<section className="space-y-6">
				<HashLinkHeading
					id="custom-head-content"
					className="text-2xl font-medium"
				>
					<h2>Custom Head Content</h2>
				</HashLinkHeading>
				<div className="font-body text-body space-y-4">
					<p>
						<strong>
							Only use this section if you cannot use{" "}
							<Code>MantleThemeHeadContent</Code>.
						</strong>
					</p>
					<p>
						Sometimes you cannot use the <Code>MantleThemeHeadContent</Code>{" "}
						component because your web server is not able to render React
						components. In this case, you can copy the following script and add
						it to your application&apos;s <Code>&lt;head&gt;</Code>:
					</p>
				</div>
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
${preventWrongThemeFlashScriptContent()}
</script>
`}
						/>
						<CodeBlock.ExpanderButton />
					</CodeBlock.Body>
				</CodeBlock.Root>

				<div className="space-y-4">
					<HashLinkHeading
						id="custom-font-preloading"
						className="text-xl font-medium"
					>
						<h3>Font Preloading</h3>
					</HashLinkHeading>
					<p className="font-body text-body">
						You will also need to ensure that you add the{" "}
						<Code>PreloadCoreFonts</Code> component to your app as well if
						you&apos;re using the custom setup.
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
								value={fmtCode`<head>\n\t${renderToStaticMarkup(
									<PreloadCoreFonts />,
								)
									.split("/><")
									.join("/>\n\t<")}\n</head>`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-6">
				<HashLinkHeading id="usage" className="text-2xl font-medium">
					<h2>Usage</h2>
				</HashLinkHeading>
				<p className="font-body text-body">
					In your application, you can use the <Code>useTheme</Code> hook to get
					and change the current theme:
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
						</PropsTable>
						<p className="font-body text-body mt-4">
							<strong>Note:</strong> The <Code>ThemeProvider</Code> uses a
							hardcoded storage key of <Code>mantle-ui-theme</Code> and defaults
							to <Code>system</Code> theme. These values are managed internally
							and do not require configuration.
						</p>
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
							<PropRow>
								<PropNameCell name="nonce" optional />
								<PropTypeCell>
									<StringPropType />
								</PropTypeCell>
								<PropDefaultValueCell />
								<PropDescriptionCell>
									<p>
										An optional CSP nonce to allowlist the inline FOUC
										prevention script. Using this helps avoid the CSP{" "}
										<Code>unsafe-inline</Code> directive, which disables XSS
										protection and would allowlist all inline scripts or styles.
									</p>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
						<p className="font-body text-body mt-4">
							<strong>Note:</strong> The FOUC prevention script uses hardcoded
							values for storage key (<Code>mantle-ui-theme</Code>) and default
							theme (<Code>system</Code>) to ensure consistency with{" "}
							<Code>ThemeProvider</Code>.
						</p>
					</div>

					<div className="space-y-4">
						<HashLinkHeading
							id="api-use-initial-html-theme-props"
							className="text-2xl font-medium"
						>
							<h3>useInitialHtmlThemeProps</h3>
						</HashLinkHeading>
						<p className="font-body text-body text-xl">
							The <Code>useInitialHtmlThemeProps</Code> hook returns props that
							should be applied to the <Code>&lt;html&gt;</Code> element to
							prevent React hydration errors. It accepts the following options:
						</p>
						<PropsTable>
							<PropRow>
								<PropNameCell name="className" optional />
								<PropTypeCell>
									<StringPropType />
								</PropTypeCell>
								<PropDefaultValueCell>
									<StringPropType value="" />
								</PropDefaultValueCell>
								<PropDescriptionCell>
									<p>
										Additional CSS classes to apply to the{" "}
										<Code>&lt;html&gt;</Code> element. These will be combined
										with the theme class.
									</p>
								</PropDescriptionCell>
							</PropRow>
						</PropsTable>
						<p className="font-body text-body mt-4">
							<strong>Returns:</strong> An object with <Code>className</Code>,{" "}
							<Code>data-theme</Code>, and <Code>data-applied-theme</Code> props
							to spread onto your <Code>&lt;html&gt;</Code> element.
						</p>
						<p className="font-body text-body mt-2">
							<strong>Note:</strong> On the server, this defaults to{" "}
							<Code>system</Code> theme (resolved to <Code>light</Code>). On the
							client, it reads the current theme from cookies to match what the
							FOUC prevention script applied, ensuring React hydration succeeds.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}

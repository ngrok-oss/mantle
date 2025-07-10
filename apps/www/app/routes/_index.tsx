import {
	Alert,
	AlertContent,
	AlertDescription,
	AlertIcon,
} from "@ngrok/mantle/alert";
import { Anchor } from "@ngrok/mantle/anchor";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	CodeBlockHeader,
	CodeBlockIcon,
	CodeBlockTitle,
	fmtCode,
} from "@ngrok/mantle/code-block";
import { InlineCode } from "@ngrok/mantle/inline-code";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ngrok/mantle/select";
import { preventWrongThemeFlashScriptContent } from "@ngrok/mantle/theme-provider";
import { FileHtmlIcon, FileTsxIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { href } from "react-router";
import { useLocalStorage } from "usehooks-ts";
import { Link } from "~/components/link";
import { PageHeader } from "~/components/page-header";
import type { Route } from "./+types/_index";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle" },
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
		<div>
			<PageHeader id="mantle">Mantle</PageHeader>
			<p className="font-weight font-body text-body mt-4 text-xl">
				Mantle is <Anchor href="https://ngrok.com">ngrok</Anchor>
				&rsquo;s UI library and design system that powers its front-end.
			</p>

			<h2 id="overview" className="mt-8 text-3xl font-medium">
				Overview
			</h2>
			<p className="font-body text-body mt-3">
				Mantle is a carefully designed system of{" "}
				<Anchor href="https://react.dev">React</Anchor> components and utilities
				that establishes a unified design language and consistent user
				experience across ngrok’s web applications. Built with flexibility,
				extensibility, and developer ergonomics in mind, Mantle prioritizes
				accessibility, performance, and long-term maintainability. Developed in{" "}
				<Anchor href="https://www.typescriptlang.org/">TypeScript</Anchor>, it
				offers strong typing, rich IDE support, and increased confidence through
				compile-time safety. Mantle empowers ngrok’s developers to craft
				interfaces that align seamlessly with the company’s brand, design
				principles, and engineering standards. By progressively enhancing
				standard DOM elements, it not only improves usability and accessibility,
				but also fills functional gaps—providing a robust foundation for
				building cohesive, modern UIs throughout the platform.
			</p>

			<p className="font-body text-body mt-3">
				All of Mantle&rsquo;s components are styled using{" "}
				<Anchor href="https://tailwindcss.com">Tailwind</Anchor>. and we compose
				around the following unstyled primitive component libraries:
			</p>
			<ul className="list-disc pl-6 font-body text-body mt-3">
				<li>
					<Anchor href="https://www.radix-ui.com">Radix</Anchor>
				</li>
				<li>
					<Anchor href="https://ariakit.org/components">Ariakit</Anchor>
				</li>
				<li>
					<Anchor href="https://headlessui.com/">Headless UI</Anchor>
				</li>
			</ul>
			<p className="font-body text-body mt-3">
				Mantle uses{" "}
				<Anchor href="https://phosphoricons.com/">Phosphor Icons</Anchor> as the
				primary icon library, providing a versatile and consistent set of icons.
				In addition, custom-designed icons tailored to ngrok’s needs are
				available through the{" "}
				<Link to={href("/components/icons")}>
					<InlineCode>@ngrok/mantle/icons</InlineCode>
				</Link>{" "}
				module.
			</p>

			<h3 id="status" className="mt-8 text-xl font-medium">
				Status
			</h3>
			<p className="font-body text-body mt-3">
				Mantle is a work in progress that&rsquo;s currently adding components.
				It intends to replace new and existing ngrok user interfaces.
			</p>

			<p className="font-body text-body mt-3">
				Mantle is available in its alpha state on{" "}
				<Anchor href="https://www.npmjs.com/package/@ngrok/mantle">NPM</Anchor>.
				It is open source and available on{" "}
				<Anchor href="https://github.com/ngrok-oss/mantle">GitHub</Anchor>.
			</p>

			<h2 id="setup" className="text-3xl font-medium mt-12 mb-4">
				Setup
			</h2>

			<InstallationInstructions />

			<section>
				<h3 className="mt-8 text-xl font-medium">Tailwind Configuration</h3>
				<p className="font-body text-body mt-3">
					Then, add the{" "}
					<Anchor href="https://tailwindcss.com/docs/presets">
						tailwind preset
					</Anchor>{" "}
					and mantle content to your tailwind configuration:
				</p>
				<CodeBlock className="mt-4">
					<CodeBlockHeader>tailwind.config.ts</CodeBlockHeader>
					<CodeBlockBody>
						<CodeBlockCopyButton />
						<CodeBlockCode
							language="ts"
							value={fmtCode`
								import { createRequire } from "node:module";
								import { mantlePreset, resolveMantleContentGlob } from "@ngrok/mantle/tailwind-preset";
								import type { Config } from "tailwindcss";

								const require = createRequire(import.meta.url);

								export default {
									presets: [mantlePreset],
									content: [resolveMantleContentGlob(require), "./app/**/*.tsx"], // 👈 don't forget to swap out app content glob here!
									// ... the rest of your tailwind config!
								} satisfies Config;
							`}
						/>
					</CodeBlockBody>
				</CodeBlock>
			</section>

			<ApplicationScaffoldingSection />
		</div>
	);
}

const packageManagers = ["npm", "pnpm", "bun"] as const;

type PackageManager = (typeof packageManagers)[number];

const $packageManager = <T extends PackageManager = PackageManager>(value: T) =>
	value;

function isPackageManager(value: unknown): value is PackageManager {
	return (
		typeof value === "string" &&
		packageManagers.includes(value as PackageManager)
	);
}

const prodDependencies = "@ngrok/mantle @phosphor-icons/react date-fns";
const devDependencies = "tailwindcss@3.4.1 postcss autoprefixer";

const primaryInstallationCommand = {
	npm: `npm install -E ${prodDependencies}`,
	pnpm: `pnpm add -E ${prodDependencies}`,
	bun: `bun add -E ${prodDependencies}`,
} as const satisfies Record<PackageManager, string>;

const devDependenciesInstallationCommand = {
	npm: `npm install -DE ${devDependencies}`,
	pnpm: `pnpm add -DE ${devDependencies}`,
	bun: `bun add -DE ${devDependencies}`,
} as const satisfies Record<PackageManager, string>;

function InstallationInstructions() {
	const [preferredPackageManager, setPrefferedPackageManager] =
		useLocalStorage<PackageManager>(
			"preferredPackageManager",
			$packageManager("pnpm"),
		);

	return (
		<div className="space-y-4">
			<h3 id="installation" className="text-xl font-medium">
				Installation
			</h3>
			<p className="font-body text-body">
				Start by installing <InlineCode>@ngrok/mantle</InlineCode> and all of
				the required <InlineCode>peerDependencies</InlineCode>:
			</p>
			<Alert priority="info">
				<AlertIcon />
				<AlertContent>
					<AlertDescription>
						Mantle supports <InlineCode>react</InlineCode> and{" "}
						<InlineCode>react-dom</InlineCode> versions 18 and 19.
					</AlertDescription>
				</AlertContent>
			</Alert>
			<CodeBlock>
				<CodeBlockHeader>
					<CodeBlockIcon preset="cli" />
					<CodeBlockTitle className="flex-1">
						mantle and dependencies installation
					</CodeBlockTitle>
					<PackageManagerSelect
						value={preferredPackageManager}
						onChange={setPrefferedPackageManager}
					/>
				</CodeBlockHeader>
				<CodeBlockBody>
					<CodeBlockCopyButton />
					<CodeBlockCode
						language="sh"
						value={fmtCode`${primaryInstallationCommand[preferredPackageManager]}`}
					/>
				</CodeBlockBody>
			</CodeBlock>
			<p className="font-body text-body">
				You will also need to install the following{" "}
				<InlineCode>devDependencies</InlineCode>:
			</p>
			<Alert priority="warning">
				<AlertIcon />
				<AlertContent>
					<AlertDescription>
						Mantle only supports <InlineCode>tailwindcss</InlineCode> version 3
						at this time. We are in the process of upgrading to version 4.
					</AlertDescription>
				</AlertContent>
			</Alert>
			<CodeBlock>
				<CodeBlockHeader>
					<CodeBlockIcon preset="cli" />
					<CodeBlockTitle className="flex-1">
						mantle devDependencies installation
					</CodeBlockTitle>
					<PackageManagerSelect
						value={preferredPackageManager}
						onChange={setPrefferedPackageManager}
					/>
				</CodeBlockHeader>
				<CodeBlockBody>
					<CodeBlockCopyButton />
					<CodeBlockCode
						language="sh"
						value={fmtCode`${devDependenciesInstallationCommand[preferredPackageManager]}`}
					/>
				</CodeBlockBody>
			</CodeBlock>
		</div>
	);
}

type PackageManagerSelectProps = {
	value: PackageManager;
	onChange: (value: PackageManager) => void;
};

function PackageManagerSelect({ value, onChange }: PackageManagerSelectProps) {
	return (
		<Select
			value={value}
			onValueChange={(value) => {
				if (isPackageManager(value)) {
					onChange(value);
				}
			}}
		>
			<SelectTrigger className="w-24">
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				{packageManagers.map((packageManager) => (
					<SelectItem key={packageManager} value={packageManager}>
						{packageManager}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}

const applicationTemplates = [
	//,
	"react-router",
	"next",
	"vite",
	"react spa",
] as const;
type ApplicationTemplate = (typeof applicationTemplates)[number];

function isApplicationTemplate(value: unknown): value is ApplicationTemplate {
	return (
		typeof value === "string" &&
		applicationTemplates.includes(value as ApplicationTemplate)
	);
}

function ApplicationScaffoldingSection() {
	const [applicationTemplate, setApplicationTemplate] =
		useState<ApplicationTemplate>("react-router");

	return (
		<section>
			<h3 className="mt-8 text-xl font-medium">Application Scaffolding</h3>
			<p className="font-body text-body mt-3 mb-4">
				I want to use <InlineCode>mantle</InlineCode> in my{" "}
				<Select
					value={applicationTemplate}
					onValueChange={(value) => {
						if (isApplicationTemplate(value)) {
							setApplicationTemplate(value);
						}
					}}
				>
					<SelectTrigger className="w-32 inline-flex">
						<SelectValue />
					</SelectTrigger>
					<SelectContent width="content">
						{applicationTemplates.map((template) => (
							<SelectItem key={template} value={template}>
								{template}
							</SelectItem>
						))}
					</SelectContent>
				</Select>{" "}
				application…
			</p>
			<ApplicationTemplate template={applicationTemplate} />
			<p className="font-body text-body mt-4">
				You are now ready to use mantle components in your application! For
				example, you can use the{" "}
				<Link to={href("/components/button")}>Button</Link>!
			</p>
		</section>
	);
}

function ApplicationTemplate({ template }: { template: ApplicationTemplate }) {
	switch (template) {
		case "react-router":
			return <ReactRouterScaffolding />;
		case "next":
			return <NextJsScaffolding />;
		case "vite":
			return <ViteScaffolding />;
		case "react spa":
			return <ReactSpaScaffolding />;
		default:
			return (
				<Alert priority="danger">
					<AlertIcon />
					<AlertContent>
						<AlertDescription>
							Unknown application template: {template}
						</AlertDescription>
					</AlertContent>
				</Alert>
			);
	}
}

function ReactRouterScaffolding() {
	return (
		<div className="space-y-4">
			<p className="font-body text-body">
				In your react-router app&rsquo;s <InlineCode>src/root.tsx</InlineCode>{" "}
				file, import the <InlineCode>mantle.css</InlineCode> file to apply the
				mantle styles.
			</p>
			<p className="font-body text-body">
				We will also add the{" "}
				<Link to={href("/components/theme-provider")}>Theme Provider</Link>,{" "}
				<Link to={href("/components/toast")}>Toaster</Link>, and{" "}
				<Link to={href("/components/preview/tooltip")}>Tooltip Provider</Link>{" "}
				to your app to enable theme selection, toasts, and tooltips.
			</p>
			<Alert priority="warning">
				<AlertIcon />
				<AlertContent>
					<AlertDescription>
						It is critical to include the{" "}
						<InlineCode>MantleThemeHeadContent</InlineCode> in the{" "}
						<InlineCode>head</InlineCode> of your app to prevent a flash of
						unstyled content (FOUC). This component will inject the necessary
						script to prevent the FOUC.
					</AlertDescription>
				</AlertContent>
			</Alert>
			<CodeBlock>
				<CodeBlockHeader>
					<CodeBlockIcon svg={<FileTsxIcon />} />{" "}
					<CodeBlockTitle>app/root.tsx</CodeBlockTitle>
				</CodeBlockHeader>
				<CodeBlockBody>
					<CodeBlockCopyButton />
					<CodeBlockCode
						language="tsx"
						value={fmtCode`
							import {
								MantleThemeHeadContent,
								ThemeProvider,
								useInitialHtmlThemeProps,
							} from "@ngrok/mantle/theme-provider";
							import { Toaster } from "@ngrok/mantle/toast";
							import { TooltipProvider } from "@ngrok/mantle/tooltip";
							import {
								isRouteErrorResponse,
								Links,
								Meta,
								Outlet,
								Scripts,
								ScrollRestoration,
							} from "react-router";

							import type { Route } from "./+types/root";
							import "@ngrok/mantle/mantle.css"; // 👈 add this import to include mantle styles!

							export function Layout({ children }: { children: React.ReactNode }) {
								const initialHtmlThemeProps = useInitialHtmlThemeProps({
									className: "h-full",
								});

								return (
									<html {...initialHtmlThemeProps} lang="en-US" dir="ltr">
										<head>
											<meta charSet="utf-8" />
											{/* 👇 The MantleThemeHeadContent should be rendered at the top of your <head>
													to prevent a flash of unstyled content (FOUC)! */}
											<MantleThemeHeadContent />
											<meta name="viewport" content="width=device-width, initial-scale=1" />
											<Meta />
											<Links />
										</head>
										<body>
											<ThemeProvider>
												<TooltipProvider>
													<Toaster />
													{children}
												</TooltipProvider>
											</ThemeProvider>
											<ScrollRestoration />
											<Scripts />
										</body>
									</html>
								);
							}

							export default function App() {
								return <Outlet />;
							}

							export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
								let message = "Oops!";
								let details = "An unexpected error occurred.";
								let stack: string | undefined;

								if (isRouteErrorResponse(error)) {
									message = error.status === 404 ? "404" : "Error";
									details =
										error.status === 404
											? "The requested page could not be found."
											: error.statusText || details;
								} else if (import.meta.env.DEV && error && error instanceof Error) {
									details = error.message;
									stack = error.stack;
								}

								return (
									<main className="pt-16 p-4 container mx-auto">
										<h1>{message}</h1>
										<p>{details}</p>
										{stack && (
											<pre className="w-full p-4 overflow-x-auto">
												<code>{stack}</code>
											</pre>
										)}
									</main>
								);
							}

						`}
					/>
				</CodeBlockBody>
			</CodeBlock>
		</div>
	);
}

function NextJsScaffolding() {
	return (
		<div className="space-y-4">
			<Alert priority="danger">
				<AlertIcon />
				<AlertContent>
					<AlertDescription>
						Mantle does not yet support Next.js 15, especially with react 19 and
						RSC. We are working on adding support for it soon.
					</AlertDescription>
				</AlertContent>
			</Alert>
		</div>
	);
}

function ViteScaffolding() {
	return (
		<div className="space-y-4 mt-3">
			<p className="font-body text-body">
				In your vite app&rsquo;s <InlineCode>src/main.tsx</InlineCode> file,
				import the <InlineCode>mantle.css</InlineCode> file to apply the mantle
				styles.
			</p>
			<p className="font-body text-body">
				We will also add the{" "}
				<Link to={href("/components/theme-provider")}>Theme Provider</Link>,{" "}
				<Link to={href("/components/toast")}>Toaster</Link>, and{" "}
				<Link to={href("/components/preview/tooltip")}>Tooltip Provider</Link>{" "}
				to your app to enable theme selection, toasts, and tooltips.
			</p>
			<CodeBlock>
				<CodeBlockHeader>
					<CodeBlockIcon svg={<FileTsxIcon />} />{" "}
					<CodeBlockTitle>src/main.tsx</CodeBlockTitle>
				</CodeBlockHeader>
				<CodeBlockBody>
					<CodeBlockCopyButton />
					<CodeBlockCode
						language="tsx"
						value={fmtCode`
							import { StrictMode } from "react"
							import { createRoot } from "react-dom/client"
							import { ThemeProvider } from "@ngrok/mantle/theme-provider";
							import { Toaster } from "@ngrok/mantle/toast";
							import { TooltipProvider } from "@ngrok/mantle/tooltip";
							import "@ngrok/mantle/mantle.css"; // 👈 add this import to include mantle styles!
							import App from "./App.tsx"

							createRoot(document.getElementById("root")!).render(
								<StrictMode>
									<ThemeProvider>
										<TooltipProvider>
											<Toaster />
											<App />
										</TooltipProvider>
									</ThemeProvider>
								</StrictMode>,
							)
						`}
					/>
				</CodeBlockBody>
			</CodeBlock>

			<p className="font-body text-body">
				To prevent a flash of unstyled content (FOUC), you will need to update
				your <InlineCode>index.html</InlineCode> to include our script:
			</p>
			<Alert priority="warning">
				<AlertIcon />
				<AlertContent>
					<AlertDescription>
						While mantle supports any type of react application, vite is not the
						primary target. For now, you will need to manually include the
						following script in the <InlineCode>head</InlineCode> of your app.
						We plan to add a vite plugin in the future to automate this.
					</AlertDescription>
				</AlertContent>
			</Alert>
			<CodeBlock>
				<CodeBlockHeader>
					<CodeBlockIcon svg={<FileHtmlIcon />} />{" "}
					<CodeBlockTitle>index.html</CodeBlockTitle>
				</CodeBlockHeader>
				<CodeBlockBody>
					<CodeBlockCopyButton />
					<CodeBlockCode
						language="html"
						value={fmtCode`
<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<link rel="icon" type="image/svg+xml" href="/vite.svg" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Vite + React + TS</title>
		<script>${preventWrongThemeFlashScriptContent()}</script>
	</head>
	<body>
		<div id="root"></div>
		<script type="module" src="/src/main.tsx"></script>
	</body>
</html>
						`}
					/>
				</CodeBlockBody>
			</CodeBlock>
		</div>
	);
}

function ReactSpaScaffolding() {
	return (
		<div className="space-y-4">
			<p className="font-body text-body">
				In your react app&rsquo;s entry/root file, import the{" "}
				<InlineCode>mantle.css</InlineCode> file to apply the mantle styles.
			</p>
			<p className="font-body text-body">
				We will also add the{" "}
				<Link to={href("/components/theme-provider")}>Theme Provider</Link>,{" "}
				<Link to={href("/components/toast")}>Toaster</Link>, and{" "}
				<Link to={href("/components/preview/tooltip")}>Tooltip Provider</Link>{" "}
				to your app to enable theme selection, toasts, and tooltips.
			</p>
			<CodeBlock>
				<CodeBlockHeader>
					<CodeBlockIcon svg={<FileTsxIcon />} />{" "}
					<CodeBlockTitle>root.tsx</CodeBlockTitle>
				</CodeBlockHeader>
				<CodeBlockBody>
					<CodeBlockCopyButton />
					<CodeBlockCode
						language="tsx"
						value={fmtCode`
							import { StrictMode } from "react"
							import { createRoot } from "react-dom/client"
							import { ThemeProvider } from "@ngrok/mantle/theme-provider";
							import { Toaster } from "@ngrok/mantle/toast";
							import { TooltipProvider } from "@ngrok/mantle/tooltip";
							import "@ngrok/mantle/mantle.css"; // 👈 add this import to include mantle styles!
							import App from "./App.tsx"

							const container = window.document.getElementById("app");

							if (!container) {
								throw new Error("Something went wrong: cannot render application! Please refresh the page to try again.");
							}

							const root = createRoot(container);

							root.render(
								<StrictMode>
									<ThemeProvider>
										<TooltipProvider>
											<Toaster />
											<App />
										</TooltipProvider>
									</ThemeProvider>
								</StrictMode>,
							);
						`}
					/>
				</CodeBlockBody>
			</CodeBlock>

			<p className="font-body text-body">
				To prevent a flash of unstyled content (FOUC), you will need to update
				your <InlineCode>index.html</InlineCode> to include our script:
			</p>
			<Alert priority="warning">
				<AlertIcon />
				<AlertContent>
					<AlertDescription>
						While mantle supports any type of react application, arbitrary react
						SPA apps are not the primary target. For now, you will need to
						manually include the following script in the{" "}
						<InlineCode>head</InlineCode> of your app.
					</AlertDescription>
				</AlertContent>
			</Alert>
			<CodeBlock>
				<CodeBlockHeader>
					<CodeBlockIcon svg={<FileHtmlIcon />} />{" "}
					<CodeBlockTitle>index.html</CodeBlockTitle>
				</CodeBlockHeader>
				<CodeBlockBody>
					<CodeBlockCopyButton />
					<CodeBlockCode
						language="html"
						value={fmtCode`
<script>${preventWrongThemeFlashScriptContent()}</script>
						`}
					/>
				</CodeBlockBody>
			</CodeBlock>
		</div>
	);
}

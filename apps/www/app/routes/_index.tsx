import { Alert } from "@ngrok/mantle/alert";
import { Anchor } from "@ngrok/mantle/anchor";
import { Code } from "@ngrok/mantle/code";
import { CodeBlock, fmtCode } from "@ngrok/mantle/code-block";
import { Select } from "@ngrok/mantle/select";
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
					<Code>@ngrok/mantle/icons</Code>
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

			<SetupInstructions />
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

const prodDependencies =
	"@ngrok/mantle @phosphor-icons/react date-fns react react-dom";
const devDependencies = "tailwindcss";

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

const additionalDevDependencies = {
	"react spa": "",
	"react-router": "@tailwindcss/vite",
	vite: "@tailwindcss/vite",
	next: "@tailwindcss/postcss postcss",
} as const satisfies Record<ApplicationTemplate, string>;

function SetupInstructions() {
	const [applicationTemplate, setApplicationTemplate] =
		useState<ApplicationTemplate>("react-router");

	const [preferredPackageManager, setPrefferedPackageManager] =
		useLocalStorage<PackageManager>(
			"preferredPackageManager",
			$packageManager("pnpm"),
		);

	const devDependencies = [
		//,
		devDependenciesInstallationCommand[preferredPackageManager],
		additionalDevDependencies[applicationTemplate],
	]
		.filter(Boolean)
		.join(" ");

	return (
		<section>
			<h2 id="setup" className="text-3xl font-medium mt-12 mb-4">
				Setup
			</h2>

			<p className="font-body text-body mt-3 mb-4">
				I want to use <Code>mantle</Code> in my{" "}
				<Select.Root
					value={applicationTemplate}
					onValueChange={(value) => {
						if (isApplicationTemplate(value)) {
							setApplicationTemplate(value);
						}
					}}
				>
					<Select.Trigger className="w-32 inline-flex">
						<Select.Value />
					</Select.Trigger>
					<Select.Content width="content">
						{applicationTemplates.map((template) => (
							<Select.Item key={template} value={template}>
								{template}
							</Select.Item>
						))}
					</Select.Content>
				</Select.Root>{" "}
				application…
			</p>

			<div className="space-y-4">
				<h3 id="installation" className="text-xl font-medium">
					Installation
				</h3>
				<p className="font-body text-body">
					Start by installing <Code>@ngrok/mantle</Code> and all of the required{" "}
					<Code>peerDependencies</Code>:
				</p>
				<Alert.Root priority="info">
					<Alert.Icon />
					<Alert.Content>
						<Alert.Description>
							Mantle supports <Code>react</Code> and <Code>react-dom</Code>{" "}
							version 19.
						</Alert.Description>
					</Alert.Content>
				</Alert.Root>
				<CodeBlock.Root>
					<CodeBlock.Header>
						<CodeBlock.Icon preset="cli" />
						<CodeBlock.Title className="flex-1">
							mantle and dependencies installation
						</CodeBlock.Title>
						<PackageManagerSelect
							value={preferredPackageManager}
							onChange={setPrefferedPackageManager}
						/>
					</CodeBlock.Header>
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code
							language="sh"
							value={fmtCode`${primaryInstallationCommand[preferredPackageManager]}`}
						/>
					</CodeBlock.Body>
				</CodeBlock.Root>
				<p className="font-body text-body">
					You will also need to install the following{" "}
					<Code>devDependencies</Code>:
				</p>
				<CodeBlock.Root>
					<CodeBlock.Header>
						<CodeBlock.Icon preset="cli" />
						<CodeBlock.Title className="flex-1">
							mantle devDependencies installation
						</CodeBlock.Title>
						<PackageManagerSelect
							value={preferredPackageManager}
							onChange={setPrefferedPackageManager}
						/>
					</CodeBlock.Header>
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code language="sh" value={fmtCode`${devDependencies}`} />
					</CodeBlock.Body>
				</CodeBlock.Root>
			</div>

			<section className="mt-8 space-y-4">
				<h3 className="text-xl font-medium">Application Scaffolding</h3>
				<ApplicationTemplate template={applicationTemplate} />
				<p className="font-body text-body mt-4">
					You are now ready to use mantle components in your application! For
					example, you can use the{" "}
					<Link to={href("/components/button")}>Button</Link>!
				</p>
			</section>
		</section>
	);
}

type PackageManagerSelectProps = {
	value: PackageManager;
	onChange: (value: PackageManager) => void;
};

function PackageManagerSelect({ value, onChange }: PackageManagerSelectProps) {
	return (
		<Select.Root
			value={value}
			onValueChange={(value) => {
				if (isPackageManager(value)) {
					onChange(value);
				}
			}}
		>
			<Select.Trigger className="w-24">
				<Select.Value />
			</Select.Trigger>
			<Select.Content>
				{packageManagers.map((packageManager) => (
					<Select.Item key={packageManager} value={packageManager}>
						{packageManager}
					</Select.Item>
				))}
			</Select.Content>
		</Select.Root>
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
				<Alert.Root priority="danger">
					<Alert.Icon />
					<Alert.Content>
						<Alert.Description>
							Unknown application template: {template}
						</Alert.Description>
					</Alert.Content>
				</Alert.Root>
			);
	}
}

function ReactRouterScaffolding() {
	return (
		<div className="space-y-4">
			<p className="font-body text-body">
				We need to add the <Code>@tailwindcss/vite</Code> plugin to your Vite
				configuration.
			</p>
			<CodeBlock.Root>
				<CodeBlock.Header>
					<CodeBlock.Icon preset="file" />
					<CodeBlock.Title>vite.config.ts</CodeBlock.Title>
				</CodeBlock.Header>
				<CodeBlock.Body>
					<CodeBlock.CopyButton />
					<CodeBlock.Code
						language="ts"
						value={fmtCode`
						import { reactRouter } from "@react-router/dev/vite";
						import { defineConfig } from "vite";
						import tsconfigPaths from "vite-tsconfig-paths";
						import tailwindcss from "@tailwindcss/vite"; // import tailwindcss vite plugin

						export default defineConfig({
							plugins: [
								tailwindcss(), // add tailwindcss plugin
								reactRouter(),
								tsconfigPaths(),
							],
						});
						`}
					/>
				</CodeBlock.Body>
			</CodeBlock.Root>
			<p className="font-body text-body">
				Then, in your react-router app&rsquo;s <Code>src/root.tsx</Code> file,
				import the <Code>mantle.css</Code> file to apply the mantle styles.
			</p>
			<p className="font-body text-body">
				We will also add the{" "}
				<Link to={href("/components/theme-provider")}>Theme Provider</Link>,{" "}
				<Link to={href("/components/toast")}>Toaster</Link>, and{" "}
				<Link to={href("/components/preview/tooltip")}>Tooltip Provider</Link>{" "}
				to your app to enable theme selection, toasts, and tooltips.
			</p>
			<Alert.Root priority="warning">
				<Alert.Icon />
				<Alert.Content>
					<Alert.Description>
						It is critical to include the <Code>MantleThemeHeadContent</Code> in
						the <Code>head</Code> of your app to prevent a flash of unstyled
						content (FOUC). This component will inject the necessary script to
						prevent the FOUC.
					</Alert.Description>
				</Alert.Content>
			</Alert.Root>
			<CodeBlock.Root>
				<CodeBlock.Header>
					<CodeBlock.Icon svg={<FileTsxIcon />} />{" "}
					<CodeBlock.Title>app/root.tsx</CodeBlock.Title>
				</CodeBlock.Header>
				<CodeBlock.Body>
					<CodeBlock.CopyButton />
					<CodeBlock.Code
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
				</CodeBlock.Body>
			</CodeBlock.Root>
		</div>
	);
}

function NextJsScaffolding() {
	return (
		<div className="space-y-4">
			<Alert.Root priority="danger">
				<Alert.Icon />
				<Alert.Content>
					<Alert.Description>
						Mantle does not yet support Next.js 15, especially with react 19 and
						RSC. We are working on adding support for it soon.
					</Alert.Description>
				</Alert.Content>
			</Alert.Root>
		</div>
	);
}

function ViteScaffolding() {
	return (
		<div className="space-y-4 mt-3">
			<p className="font-body text-body">
				We need to add the <Code>@tailwindcss/vite</Code> plugin to your Vite
				configuration.
			</p>
			<CodeBlock.Root>
				<CodeBlock.Header>
					<CodeBlock.Icon preset="file" />
					<CodeBlock.Title>vite.config.ts</CodeBlock.Title>
				</CodeBlock.Header>
				<CodeBlock.Body>
					<CodeBlock.CopyButton />
					<CodeBlock.Code
						language="ts"
						value={fmtCode`
						import { defineConfig } from "vite";
						import tailwindcss from "@tailwindcss/vite"; // import tailwindcss vite plugin

						export default defineConfig({
							plugins: [
								tailwindcss(), // add tailwindcss plugin
							],
						});
						`}
					/>
				</CodeBlock.Body>
			</CodeBlock.Root>
			<p className="font-body text-body">
				Then, in your vite app&rsquo;s <Code>src/main.tsx</Code> file, import
				the <Code>mantle.css</Code> file to apply the mantle styles.
			</p>
			<p className="font-body text-body">
				We will also add the{" "}
				<Link to={href("/components/theme-provider")}>Theme Provider</Link>,{" "}
				<Link to={href("/components/toast")}>Toaster</Link>, and{" "}
				<Link to={href("/components/preview/tooltip")}>Tooltip Provider</Link>{" "}
				to your app to enable theme selection, toasts, and tooltips.
			</p>
			<CodeBlock.Root>
				<CodeBlock.Header>
					<CodeBlock.Icon svg={<FileTsxIcon />} />{" "}
					<CodeBlock.Title>src/main.tsx</CodeBlock.Title>
				</CodeBlock.Header>
				<CodeBlock.Body>
					<CodeBlock.CopyButton />
					<CodeBlock.Code
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
				</CodeBlock.Body>
			</CodeBlock.Root>

			<p className="font-body text-body">
				To prevent a flash of unstyled content (FOUC), you will need to update
				your <Code>index.html</Code> to include our script:
			</p>
			<Alert.Root priority="warning">
				<Alert.Icon />
				<Alert.Content>
					<Alert.Description>
						While mantle supports any type of react application, vite is not the
						primary target. For now, you will need to manually include the
						following script in the <Code>head</Code> of your app. We plan to
						add a vite plugin in the future to automate this.
					</Alert.Description>
				</Alert.Content>
			</Alert.Root>
			<CodeBlock.Root>
				<CodeBlock.Header>
					<CodeBlock.Icon svg={<FileHtmlIcon />} />{" "}
					<CodeBlock.Title>index.html</CodeBlock.Title>
				</CodeBlock.Header>
				<CodeBlock.Body>
					<CodeBlock.CopyButton />
					<CodeBlock.Code
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
				</CodeBlock.Body>
			</CodeBlock.Root>
		</div>
	);
}

function ReactSpaScaffolding() {
	return (
		<div className="space-y-4">
			<p className="font-body text-body">
				In your react app&rsquo;s entry/root file, import the{" "}
				<Code>mantle.css</Code> file to apply the mantle styles.
			</p>
			<p className="font-body text-body">
				We will also add the{" "}
				<Link to={href("/components/theme-provider")}>Theme Provider</Link>,{" "}
				<Link to={href("/components/toast")}>Toaster</Link>, and{" "}
				<Link to={href("/components/preview/tooltip")}>Tooltip Provider</Link>{" "}
				to your app to enable theme selection, toasts, and tooltips.
			</p>
			<CodeBlock.Root>
				<CodeBlock.Header>
					<CodeBlock.Icon svg={<FileTsxIcon />} />{" "}
					<CodeBlock.Title>root.tsx</CodeBlock.Title>
				</CodeBlock.Header>
				<CodeBlock.Body>
					<CodeBlock.CopyButton />
					<CodeBlock.Code
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
				</CodeBlock.Body>
			</CodeBlock.Root>

			<p className="font-body text-body">
				To prevent a flash of unstyled content (FOUC), you will need to update
				your <Code>index.html</Code> to include our script:
			</p>
			<Alert.Root priority="warning">
				<Alert.Icon />
				<Alert.Content>
					<Alert.Description>
						While mantle supports any type of react application, arbitrary react
						SPA apps are not the primary target. For now, you will need to
						manually include the following script in the <Code>head</Code> of
						your app.
					</Alert.Description>
				</Alert.Content>
			</Alert.Root>
			<CodeBlock.Root>
				<CodeBlock.Header>
					<CodeBlock.Icon svg={<FileHtmlIcon />} />{" "}
					<CodeBlock.Title>index.html</CodeBlock.Title>
				</CodeBlock.Header>
				<CodeBlock.Body>
					<CodeBlock.CopyButton />
					<CodeBlock.Code
						language="html"
						value={fmtCode`
<script>${preventWrongThemeFlashScriptContent()}</script>
						`}
					/>
				</CodeBlock.Body>
			</CodeBlock.Root>
		</div>
	);
}

import { Anchor } from "@ngrok/mantle/anchor";
import { Code } from "@ngrok/mantle/code";
import {
	CodeBlock,
	fmtCode,
	supportedLanguages,
} from "@ngrok/mantle/code-block";
import { href } from "react-router";
import { Example } from "~/components/example";
import { HashLinkHeading } from "~/components/hash-link-heading";
import { Link } from "~/components/link";
import { PageHeader } from "~/components/page-header";
import {
	BooleanPropType,
	FuncPropType,
	PropDefaultValueCell,
	PropDescriptionCell,
	PropNameCell,
	PropRow,
	PropTypeCell,
	PropsTable,
	ReactNodePropType,
	StringPropType,
} from "~/components/props-table";
import type { Route } from "./+types/components.code-block";

export const meta: Route.MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Code Block" },
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
				<PageHeader id="code-block">Code Block</PageHeader>
				<p className="font-body text-body text-xl">
					Code blocks render and apply syntax highlighting to blocks of code.
				</p>

				<div>
					<Example>
						<CodeBlock.Root>
							<CodeBlock.Header>
								<CodeBlock.Icon preset="file" />
								<CodeBlock.Title>ngrok-example.js</CodeBlock.Title>
							</CodeBlock.Header>
							<CodeBlock.Body>
								<CodeBlock.CopyButton />
								<CodeBlock.Code
									language="js"
									value={fmtCode`
										const listener = await ngrok.connect({
											// session configuration
											addr: \`localhost:8080\`, // or \`8080\` or \`unix:$\{UNIX_SOCKET\}\`
											authtoken: "<authtoken>",
											authtoken_from_env: true,
											on_status_change: (addr, error) => {
												console.log(\`disconnected, addr $\{addr\} error: $\{error\}\`);
											},
											session_metadata: "Online in One Line",
											// listener configuration
											allow_user_agent: "^mozilla.*",
											basic_auth: ["ngrok:online1line"],
											circuit_breaker: 0.1,
											compression: true,
											deny_user_agent: "^curl.*",
											domain: "<domain>",
											ip_restriction_allow_cidrs: ["0.0.0.0/0"],
											ip_restriction_deny_cidrs: ["10.1.1.1/32"],
											metadata: "example listener metadata from nodejs",
											mutual_tls_cas: [fs.readFileSync('ca.crt', 'utf8')],
											oauth_provider: "google",
											oauth_allow_domains: ["<domain>"],
											oauth_allow_emails: ["<email>"],
											oauth_scopes: ["<scope>"],
											oauth_client_id: "<id>",
											oauth_client_secret: "<secret>",
											oidc_issuer_url: "<url>",
											oidc_client_id: "<id>",
											oidc_client_secret: "<secret>",
											oidc_allow_domains: ["<domain>"],
											oidc_allow_emails: ["<email>"],
											oidc_scopes: ["<scope>"],
											proxy_proto: "", // One of: "", "1", "2"
											request_header_remove: ["X-Req-Nope"],
											response_header_remove: ["X-Res-Nope"],
											request_header_add: ["X-Req-Yup:true"],
											response_header_add: ["X-Res-Yup:true"],
											schemes: ["HTTPS"],
											verify_webhook_provider: "twilio",
											verify_webhook_secret: "asdf",
											websocket_tcp_converter: true,
										});
									`}
								/>
							</CodeBlock.Body>
							<CodeBlock.ExpanderButton />
						</CodeBlock.Root>
					</Example>
					<CodeBlock.Root className="rounded-b-lg rounded-t-none">
						<CodeBlock.Body>
							<CodeBlock.CopyButton />
							<CodeBlock.Code
								language="tsx"
								value={fmtCode`
									import {
										CodeBlock,
										fmtCode,
									} from "@ngrok/mantle/code-block";

									<CodeBlock.Root>
										<CodeBlock.Header>
											<CodeBlock.Icon preset="file" />
											<CodeBlock.Title>…</CodeBlock.Title>
										</CodeBlock.Header>
										<CodeBlock.Body>
											<CodeBlock.CopyButton />
											<CodeBlock.Code language="…" value={fmtCode\`…\`} />
										</CodeBlock.Body>
										<CodeBlock.ExpanderButton />
									</CodeBlock.Root>
								`}
							/>
						</CodeBlock.Body>
					</CodeBlock.Root>
				</div>
			</section>

			<section className="space-y-8">
				<HashLinkHeading id="examples" className="text-3xl font-medium">
					<h2>Examples</h2>
				</HashLinkHeading>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading
							id="example-single-line-with-header"
							className="text-xl font-medium text-strong"
						>
							<h3>Single Line with a Header</h3>
						</HashLinkHeading>
						<p className="font-body text-body">
							Many code blocks will be single line command line prompts and
							should be able to render with a header and copy button. This makes
							it absolutely clear that this example is a command line prompt and
							not a code sample.
						</p>
					</header>

					<div>
						<Example>
							<CodeBlock.Root>
								<CodeBlock.Header>
									<CodeBlock.Icon preset="cli" />
									<CodeBlock.Title>Command Line</CodeBlock.Title>
								</CodeBlock.Header>
								<CodeBlock.Body>
									<CodeBlock.CopyButton />
									<CodeBlock.Code
										language="sh"
										value={fmtCode`sudo unzip ~/Downloads/ngrok-v3-stable-darwin.zip -d /usr/local/bin`}
									/>
								</CodeBlock.Body>
							</CodeBlock.Root>
						</Example>
						<CodeBlock.Root className="rounded-b-lg rounded-t-none">
							<CodeBlock.Body>
								<CodeBlock.CopyButton />
								<CodeBlock.Code
									language="tsx"
									value={fmtCode`
										<CodeBlock.Root>
											<CodeBlock.Header>
												<CodeBlock.Icon preset="cli" />
												<CodeBlock.Title>Command Line</CodeBlock.Title>
											</CodeBlock.Header>
											<CodeBlock.Body>
												<CodeBlock.CopyButton />
												<CodeBlock.Code language="sh" value={fmtCode\`sudo unzip ~/Downloads/ngrok-v3-stable-darwin.zip -d /usr/local/bin\`} />
											</CodeBlock.Body>
										</CodeBlock.Root>
									`}
								/>
							</CodeBlock.Body>
						</CodeBlock.Root>
					</div>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading
							id="example-horizontal-scrolling"
							className="text-xl font-medium text-strong"
						>
							<h3>Horizontal Scrolling</h3>
						</HashLinkHeading>
						<p className="font-body text-body">
							This example is included to demonstrate that code blocks can
							scroll horizontally if the content is too wide. Mantle attempts to
							normalize scrollbar styling across browsers and platforms.
						</p>
					</header>
					<div>
						<Example>
							<CodeBlock.Root>
								<CodeBlock.Header>
									<CodeBlock.Icon preset="file" />
									<CodeBlock.Title>ngrok-example.js</CodeBlock.Title>
								</CodeBlock.Header>
								<CodeBlock.Body>
									<CodeBlock.CopyButton />
									<CodeBlock.Code
										language="js"
										value={fmtCode`
											const http = require('http');
											const ngrok = require("@ngrok/ngrok");
											const server = http.createServer((req, res) => {
												res.writeHead(200);
												res.end("Hello!");
												setTimeout(() => {
													Promise.resolve(() => {
														console.log("url:", server.tunnel.url());
													})
												}, timeout);
											});
											// Consumes authtoken from env automatically
											ngrok.listen(server).then(() => {
												console.log("url:", server.tunnel.url());
											});
											// really long line here that should wrap around and stuff Officia ipsum sint eu labore esse deserunt aliqua quis irure.
										`}
									/>
								</CodeBlock.Body>
							</CodeBlock.Root>
						</Example>
						<CodeBlock.Root className="rounded-b-lg rounded-t-none">
							<CodeBlock.Body>
								<CodeBlock.CopyButton />
								<CodeBlock.Code
									language="tsx"
									value={fmtCode`
										<CodeBlock.Root>
											<CodeBlock.Header>
												<CodeBlock.Icon preset="file" />
												<CodeBlock.Title>ngrok-example.js</CodeBlock.Title>
											</CodeBlock.Header>
											<CodeBlock.Body>
												<CodeBlock.CopyButton />
												<CodeBlock.Code
													language="js"
													value={fmtCode\`
														const http = require('http');
														const ngrok = require("@ngrok/ngrok");
														const server = http.createServer((req, res) => {
															res.writeHead(200);
															res.end("Hello!");
															setTimeout(() => {
																Promise.resolve(() => {
																	console.log("url:", server.tunnel.url());
																})
															}, timeout);
														});
														// Consumes authtoken from env automatically
														ngrok.listen(server).then(() => {
															console.log("url:", server.tunnel.url());
														});
														// really long line here that should wrap around and stuff Officia ipsum sint eu labore esse deserunt aliqua quis irure.
													\`}
												/>
											</CodeBlock.Body>
										</CodeBlock.Root>
									`}
								/>
							</CodeBlock.Body>
							<CodeBlock.ExpanderButton />
						</CodeBlock.Root>
					</div>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading
							id="example-no-header-or-copy-button"
							className="text-xl font-medium text-strong"
						>
							<h3>No Header or Copy Button</h3>
						</HashLinkHeading>
						<p className="font-body text-body">
							This is the most simple example of our code block component. While
							very useful, the copy button is optional. It is also perfectly
							acceptable to render a code block without a header, especially if
							context is provided in the surrounding content or the code block
							is self-explanatory eg. “In your index.js file, paste the
							following:”.
						</p>
					</header>
					<div>
						<Example>
							<CodeBlock.Root>
								<CodeBlock.Body>
									<CodeBlock.Code
										language="js"
										value={fmtCode`
											const http = require('http');
											const ngrok = require("@ngrok/ngrok");
											const server = http.createServer((req, res) => {
												res.writeHead(200);
												res.end("Hello!");
											});
											// Consumes authtoken from env automatically
											ngrok.listen(server).then(() => {
												console.log("url:", server.tunnel.url());
											});
										`}
									/>
								</CodeBlock.Body>
							</CodeBlock.Root>
						</Example>
						<CodeBlock.Root className="rounded-b-lg rounded-t-none">
							<CodeBlock.Body>
								<CodeBlock.CopyButton />
								<CodeBlock.Code
									language="tsx"
									value={fmtCode`
										<CodeBlock.Root>
											<CodeBlock.Body>
												<CodeBlock.Code
													language="js"
													value={fmtCode\`
														const http = require('http');
														const ngrok = require("@ngrok/ngrok");
														const server = http.createServer((req, res) => {
															res.writeHead(200);
															res.end("Hello!");
														});
														// Consumes authtoken from env automatically
														ngrok.listen(server).then(() => {
															console.log("url:", server.tunnel.url());
														});
													\`}
												/>
											</CodeBlock.Body>
										</CodeBlock.Root>
									`}
								/>
							</CodeBlock.Body>
							<CodeBlock.ExpanderButton />
						</CodeBlock.Root>
					</div>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading
							id="example-single-line-with-horizontal-scrolling"
							className="text-xl font-medium text-strong"
						>
							<h3>Single Line with Horizontal Scrolling</h3>
						</HashLinkHeading>
						<p className="font-body text-body">
							This example is included to show the interaction between the copy
							button and horizontal scrolling on a single verbose terminal
							command.
						</p>
					</header>
					<div>
						<Example>
							<CodeBlock.Root>
								<CodeBlock.Body>
									<CodeBlock.CopyButton />
									<CodeBlock.Code
										language="sh"
										value={fmtCode`ffmpeg -i multichannel.mxf -map 0:v:0 -map 0:a:0 -map 0:a:0 -c:a:0 ac3 -b:a:0 640k -ac:a:1 2 -c:a:1 aac -b:2 128k out.mp4`}
									/>
								</CodeBlock.Body>
							</CodeBlock.Root>
						</Example>
						<CodeBlock.Root className="rounded-b-lg rounded-t-none">
							<CodeBlock.Body>
								<CodeBlock.CopyButton />
								<CodeBlock.Code
									language="tsx"
									value={fmtCode`
										<CodeBlock.Root>
											<CodeBlock.Body>
												<CodeBlock.CopyButton />
												<CodeBlock.Code
													language="sh"
													value={fmtCode\`ffmpeg -i multichannel.mxf -map 0:v:0 -map 0:a:0 -map 0:a:0 -c:a:0 ac3 -b:a:0 640k -ac:a:1 2 -c:a:1 aac -b:2 128k out.mp4\`}
												/>
											</CodeBlock.Body>
										</CodeBlock.Root>
									`}
								/>
							</CodeBlock.Body>
						</CodeBlock.Root>
					</div>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading
							id="example-overriding-default-language-indentation"
							className="text-xl font-medium text-strong"
						>
							<h3>Overriding default language indentation</h3>
						</HashLinkHeading>
						<p className="font-body text-body">
							By default, the code block code will detect the preferred (or
							required) indentation of the given language. This is important for
							languages that require a certain indentation style; for example,
							Python and YAML are space-indented languages, so the code block
							will use spaces for indentation. This is done to ensure that the
							code is displayed and copied correctly and is easy to read.
							However, you can override this by passing the{" "}
							<Code>indentation</Code> prop to the <Code>CodeBlock.Code</Code>.
						</p>
					</header>
					<div>
						<Example className="flex-wrap gap-4">
							<CodeBlock.Root>
								<CodeBlock.Header>
									<CodeBlock.Icon preset="traffic-policy" />
									<CodeBlock.Title>traffic-policy.yaml</CodeBlock.Title>
								</CodeBlock.Header>
								<CodeBlock.Body>
									<CodeBlock.CopyButton />
									<CodeBlock.Code
										language="yaml"
										value={fmtCode`
											# yaml indentation MUST use spaces (we infer this for you)
											on_http_request:
												actions:
													type: custom-response
													config:
														status_code: 200
														content: Hello, World!
										`}
									/>
								</CodeBlock.Body>
							</CodeBlock.Root>
							<CodeBlock.Root>
								<CodeBlock.Header>
									<CodeBlock.Icon preset="file" />
									<CodeBlock.Title>
										ngrok-example.js (using space indentation)
									</CodeBlock.Title>
								</CodeBlock.Header>
								<CodeBlock.Body>
									<CodeBlock.CopyButton />
									<CodeBlock.Code
										language="js"
										indentation="spaces"
										value={fmtCode`
											// by default, mantle decides that javascript uses tabs,
											// but this example uses spaces for indentation
											const http = require('http');
											const ngrok = require("@ngrok/ngrok");
											const server = http.createServer((req, res) => {
												res.writeHead(200);
												res.end("Hello!");
												setTimeout(() => {
													Promise.resolve(() => {
														console.log("url:", server.tunnel.url());
													})
												}, timeout);
											});
											// Consumes authtoken from env automatically
											ngrok.listen(server).then(() => {
												console.log("url:", server.tunnel.url());
											});
										`}
									/>
								</CodeBlock.Body>
							</CodeBlock.Root>
						</Example>
						<CodeBlock.Root className="rounded-b-lg rounded-t-none">
							<CodeBlock.Body>
								<CodeBlock.CopyButton />
								<CodeBlock.Code
									language="tsx"
									value={fmtCode`
										<CodeBlock.Root>
											<CodeBlock.Header>
												<CodeBlock.Icon preset="file" />
												<CodeBlock.Title>traffic-policy.yaml</CodeBlock.Title>
											</CodeBlock.Header>
											<CodeBlock.Body>
												<CodeBlock.CopyButton />
												<CodeBlock.Code
													language="yaml"
													value={fmtCode\`
														# yaml indentation MUST use spaces (we infer this for you)
														on_http_request:
															actions:
																type: custom-response
																config:
																	status_code: 200
																	content: Hello, World!
													\`}
												/>
											</CodeBlock.Body>
										</CodeBlock.Root>

										<CodeBlock.Root>
											<CodeBlock.Header>
												<CodeBlock.Icon preset="file" />
												<CodeBlock.Title>ngrok-example.js (using space indentation)</CodeBlock.Title>
											</CodeBlock.Header>
											<CodeBlock.Body>
												<CodeBlock.CopyButton />
												<CodeBlock.Code
													language="js"
													indentation="spaces"
													value={fmtCode\`
														// by default, mantle decides that javascript uses tabs,
														// but this example uses spaces for indentation
														const http = require('http');
														const ngrok = require("@ngrok/ngrok");
														const server = http.createServer((req, res) => {
															res.writeHead(200);
															res.end("Hello!");
															setTimeout(() => {
																Promise.resolve(() => {
																	console.log("url:", server.tunnel.url());
																})
															}, timeout);
														});
														// Consumes authtoken from env automatically
														ngrok.listen(server).then(() => {
															console.log("url:", server.tunnel.url());
														});
													\`}
												/>
											</CodeBlock.Body>
										</CodeBlock.Root>
									`}
								/>
							</CodeBlock.Body>
							<CodeBlock.ExpanderButton />
						</CodeBlock.Root>
					</div>
				</section>
			</section>

			<section className="mt-16 space-y-8 font-body text-body">
				<header className="space-y-4">
					<HashLinkHeading
						id="api"
						className="text-3xl font-medium text-strong"
					>
						<h2>API Reference</h2>
					</HashLinkHeading>
					<p className="font-body text-body text-xl">
						The <Code>CodeBlock</Code> render and apply syntax highlighting to
						blocks of code and is composed of several sub-components.
					</p>
				</header>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading
							id="api-code-block"
							className="text-xl font-medium text-strong"
						>
							<h3>
								<span id="api-code-block-root" />
								CodeBlock
							</h3>
						</HashLinkHeading>

						<p className="font-body text-body">
							Code blocks render and apply syntax highlighting to blocks of
							code. Root container for all <Code>CodeBlock</Code>{" "}
							sub-components.
						</p>

						<p>
							All props from{" "}
							<Anchor
								href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes"
								target="_blank"
								rel="noopener noreferrer"
							>
								standard HTML div attributes
							</Anchor>
							, plus:
						</p>
					</header>

					<PropsTable>
						<PropRow>
							<PropNameCell name="asChild" optional />
							<PropTypeCell>
								<BooleanPropType />
							</PropTypeCell>
							<PropDefaultValueCell>
								<BooleanPropType value={false} />
							</PropDefaultValueCell>
							<PropDescriptionCell>
								<p>
									Use the <Code>asChild</Code> prop to compose the{" "}
									<Code>CodeBlock</Code> styling and functionality onto
									alternative element types or your own React components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading
							id="api-code-block-body"
							className="text-xl font-medium text-strong"
						>
							<h3>CodeBlock.Body</h3>
						</HashLinkHeading>
						<p className="font-body text-body">
							The body of the <Code>CodeBlock</Code>. This is where the{" "}
							<Code>CodeBlock.Code</Code> and optional{" "}
							<Code>CodeBlock.CopyButton</Code> are rendered as direct children.
						</p>
						<p className="font-body text-body">
							All props from{" "}
							<Anchor
								href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes"
								target="_blank"
								rel="noopener noreferrer"
							>
								standard HTML div attributes
							</Anchor>
							, plus:
						</p>
					</header>

					<PropsTable>
						<PropRow>
							<PropNameCell name="asChild" optional />
							<PropTypeCell>
								<BooleanPropType />
							</PropTypeCell>
							<PropDefaultValueCell>
								<BooleanPropType value={false} />
							</PropDefaultValueCell>
							<PropDescriptionCell>
								<p>
									Use the <Code>asChild</Code> prop to compose the{" "}
									<Code>CodeBlock.Body</Code> styling and functionality onto
									alternative element types or your own React components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading
							id="api-code-block-code"
							className="text-xl font-medium text-strong"
						>
							<h3>CodeBlock.Code</h3>
						</HashLinkHeading>
						<p className="font-body text-body">
							The <Code>CodeBlock</Code> content. This is where the code is
							rendered and syntax highlighted.
						</p>
						<p className="font-body text-body">
							All props from{" "}
							<Anchor
								href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre#attributes"
								target="_blank"
								rel="noopener noreferrer"
							>
								standard HTML pre attributes
							</Anchor>
							, plus:
						</p>
					</header>
					<PropsTable>
						<PropRow>
							<PropNameCell name="value" />
							<PropTypeCell>
								<StringPropType />
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<p>
									The code to display in the <Code>CodeBlock</Code>. Should be
									code formatted as a string. This code will be passed to our
									syntax highlighter. You should strongly consider wrapping this
									input with the <Code>fmtCode</Code> tagged template literal
									function helper.
								</p>
							</PropDescriptionCell>
						</PropRow>
						<PropRow>
							<PropNameCell name="indentation" optional />
							<PropTypeCell>
								<ul>
									<li>
										<StringPropType value="spaces" />
									</li>
									<li>
										<StringPropType value="tabs" />
									</li>
								</ul>
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<p>
									The type of indentation to use. Can be either{" "}
									<Code>spaces</Code> or <Code>tabs</Code>. By default, the code
									block code will detect the preferred (or required) indentation
									of the given language. This is important for languages that
									require a certain indentation style; for example, Python and
									YAML are space-indented languages, so the code block will use
									spaces for indentation. This is done to ensure that the code
									is displayed and copied correctly and is easy to read.
									However, you can override this behavior with this prop.
								</p>
							</PropDescriptionCell>
						</PropRow>
						<PropRow>
							<PropNameCell name="language" />
							<PropTypeCell>
								<ul>
									{supportedLanguages.map((language) => (
										<li key={language}>
											<StringPropType value={language} />
										</li>
									))}
								</ul>
							</PropTypeCell>
							<PropDefaultValueCell>
								<StringPropType value="text" />
							</PropDefaultValueCell>
							<PropDescriptionCell>
								<p>
									The language of the <Code>CodeBlock</Code>. This will be used
									to determine how to syntax highlight the code.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading
							id="api-code-block-header"
							className="text-xl font-medium text-strong"
						>
							<h3>CodeBlock.Header</h3>
						</HashLinkHeading>
						<p className="font-body text-body">
							An optional header slot of the <Code>CodeBlock</Code>. This is
							where things like the
							<Code>CodeBlock.Icon</Code> and <Code>CodeBlock.Title</Code> are
							rendered.
						</p>
						<p className="font-body text-body">
							All props from{" "}
							<Anchor
								href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div#attributes"
								target="_blank"
								rel="noopener noreferrer"
							>
								standard HTML div attributes
							</Anchor>
							, plus:
						</p>
					</header>
					<PropsTable>
						<PropRow>
							<PropNameCell name="asChild" optional />
							<PropTypeCell>
								<BooleanPropType />
							</PropTypeCell>
							<PropDefaultValueCell>
								<BooleanPropType value={false} />
							</PropDefaultValueCell>
							<PropDescriptionCell>
								<p>
									Use the <Code>asChild</Code> prop to compose the{" "}
									<Code>CodeBlock.Header</Code> styling and functionality onto
									alternative element types or your own React components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading
							id="api-code-block-title"
							className="text-xl font-medium text-strong"
						>
							<h3>CodeBlock.Title</h3>
						</HashLinkHeading>
						<p className="font-body text-body">
							The (optional) title of a <Code>CodeBlock</Code>. Default renders
							as an <Code>h3</Code> element; use <Code>asChild</Code> to render
							something else.
						</p>
						<p className="font-body text-body">
							All props from{" "}
							<Anchor
								href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#attributes"
								target="_blank"
								rel="noopener noreferrer"
							>
								standard HTML h3 attributes
							</Anchor>
							, plus:
						</p>
					</header>
					<PropsTable>
						<PropRow>
							<PropNameCell name="asChild" optional />
							<PropTypeCell>
								<BooleanPropType />
							</PropTypeCell>
							<PropDefaultValueCell>
								<BooleanPropType value={false} />
							</PropDefaultValueCell>
							<PropDescriptionCell>
								<p>
									Use the <Code>asChild</Code> prop to compose the{" "}
									<Code>CodeBlock.Title</Code> styling and functionality onto
									alternative element types or your own React components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading
							id="api-code-block-copy-button"
							className="text-xl font-medium text-strong"
						>
							<h3>CodeBlock.CopyButton</h3>
						</HashLinkHeading>
						<p className="font-body text-body">
							The (optional) copy button of the <Code>CodeBlock</Code>. Render
							this as a child of the
							<Code>CodeBlock.Body</Code> to allow users to copy the code block
							contents to their clipboard.
						</p>
						<p className="font-body text-body">
							All props from{" "}
							<Anchor
								href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes"
								target="_blank"
								rel="noopener noreferrer"
							>
								standard HTML button attributes
							</Anchor>
							, plus:
						</p>
					</header>
					<PropsTable>
						<PropRow>
							<PropNameCell name="onCopy" optional />
							<PropTypeCell>
								<FuncPropType value="(value: string) => void" />
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<p>
									Callback fired when the copy button is clicked, passes the
									copied text as an argument.
								</p>
							</PropDescriptionCell>
						</PropRow>
						<PropRow>
							<PropNameCell name="onCopyError" optional />
							<PropTypeCell>
								<FuncPropType value="(error: unknown) => void" />
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<p>Callback fired when an error occurs during copying.</p>
							</PropDescriptionCell>
						</PropRow>
						<PropRow>
							<PropNameCell name="asChild" optional />
							<PropTypeCell>
								<BooleanPropType />
							</PropTypeCell>
							<PropDefaultValueCell>
								<BooleanPropType value={false} />
							</PropDefaultValueCell>
							<PropDescriptionCell>
								<p>
									Use the <Code>asChild</Code> prop to compose the{" "}
									<Code>CodeBlock.CopyButton</Code> styling and functionality
									onto alternative element types or your own React components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading
							id="api-code-block-expander-button"
							className="text-xl font-medium text-strong"
						>
							<h3>CodeBlock.ExpanderButton</h3>
						</HashLinkHeading>
						<p className="font-body text-body">
							The (optional) expander button of the <Code>CodeBlock</Code>.
							Render this as a child of the
							<Code>CodeBlock.Body</Code> to allow users to expand/collapse the
							code block contents.
						</p>
						<p className="font-body text-body">
							All props from{" "}
							<Anchor
								href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes"
								target="_blank"
								rel="noopener noreferrer"
							>
								standard HTML button attributes
							</Anchor>
							, plus:
						</p>
					</header>
					<PropsTable>
						<PropRow>
							<PropNameCell name="asChild" optional />
							<PropTypeCell>
								<BooleanPropType />
							</PropTypeCell>
							<PropDefaultValueCell>
								<BooleanPropType value={false} />
							</PropDefaultValueCell>
							<PropDescriptionCell>
								<p>
									Use the <Code>asChild</Code> prop to compose the{" "}
									<Code>CodeBlock.ExpanderButton</Code> styling and
									functionality onto alternative element types or your own React
									components.
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<HashLinkHeading
							id="api-code-block-icon"
							className="text-xl font-medium text-strong"
						>
							<h3>CodeBlock.Icon</h3>
						</HashLinkHeading>
						<p className="font-body text-body">
							A small icon that represents the type of code block being
							displayed, rendered as an SVG next to the code block title in the
							code block header. You can pass in a custom SVG component or use
							one of the presets (you can exclusively pass one of{" "}
							<Code>svg</Code> or <Code>preset</Code>).
						</p>
						<p className="font-body text-body">
							All props from{" "}
							<Anchor asChild>
								<Link to={href("/components/icon")}>Icon</Link>
							</Anchor>
							, plus:
						</p>
					</header>
					<PropsTable>
						<PropRow>
							<PropNameCell name="svg" optional />
							<PropTypeCell>
								<ReactNodePropType />
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<p>
									A custom icon to display in the code block header. You can
									exclusively pass one of <Code>svg</Code> or{" "}
									<Code>preset</Code>
								</p>
							</PropDescriptionCell>
						</PropRow>
						<PropRow>
							<PropNameCell name="preset" optional />
							<PropTypeCell>
								<ul>
									<li>
										<StringPropType value="cli" />
									</li>
									<li>
										<StringPropType value="file" />
									</li>
									<li>
										<StringPropType value="traffic-policy" />
									</li>
								</ul>
							</PropTypeCell>
							<PropDefaultValueCell />
							<PropDescriptionCell>
								<p>
									A preset icon to display in the code block header. You can
									exclusively pass one of <Code>svg</Code> or{" "}
									<Code>preset</Code>
								</p>
							</PropDescriptionCell>
						</PropRow>
					</PropsTable>
				</section>
			</section>
		</div>
	);
}

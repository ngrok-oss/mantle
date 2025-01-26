import { Card, CardBody } from "@ngrok/mantle/card";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	CodeBlockExpanderButton,
	CodeBlockHeader,
	CodeBlockIcon,
	CodeBlockTitle,
	fmtCode,
	supportedLanguages,
} from "@ngrok/mantle/code-block";
import type { HeadersFunction, MetaFunction } from "@remix-run/node";
import { Example } from "~/components/example";
import { PageHeader } from "~/components/page-header";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Code Block" },
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
		<div className="space-y-16">
			<section className="space-y-4">
				<PageHeader id="code-block">Code Block</PageHeader>
				<p className="font-body text-body text-xl">
					Code blocks render and apply syntax highlighting to blocks of code.
				</p>

				<div>
					<Example>
						<CodeBlock>
							<CodeBlockHeader>
								<CodeBlockIcon preset="file" />
								<CodeBlockTitle>ngrok-example.js</CodeBlockTitle>
							</CodeBlockHeader>
							<CodeBlockBody>
								<CodeBlockCopyButton />
								<CodeBlockCode
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
							</CodeBlockBody>
							<CodeBlockExpanderButton />
						</CodeBlock>
					</Example>
					<CodeBlock className="rounded-b-lg rounded-t-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode
								language="tsx"
								value={fmtCode`
									import {
										CodeBlock,
										CodeBlockBody,
										CodeBlockCode,
										CodeBlockCopyButton,
										CodeBlockExpanderButton,
										CodeBlockHeader,
										CodeBlockIcon,
										CodeBlockTitle,
										fmtCode,
									} from "@ngrok/mantle/code-block";

									<CodeBlock>
										<CodeBlockHeader>
											<CodeBlockIcon preset="file" />
											<CodeBlockTitle>…</CodeBlockTitle>
										</CodeBlockHeader>
										<CodeBlockBody>
											<CodeBlockCopyButton />
											<CodeBlockCode language="…" value={fmtCode\`…\`} />
										</CodeBlockBody>
										<CodeBlockExpanderButton />
									</CodeBlock>
								`}
							/>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section className="space-y-8">
				<h2 className="text-3xl font-medium">Examples</h2>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 className="text-xl font-medium">Single Line with a Header</h3>
						<p className="font-body text-body">
							Many code blocks will be single line command line prompts and should be able to render with a header and
							copy button. This makes it absolutely clear that this example is a command line prompt and not a code
							sample.
						</p>
					</header>

					<div>
						<Example>
							<CodeBlock>
								<CodeBlockHeader>
									<CodeBlockIcon preset="cli" />
									<CodeBlockTitle>Command Line</CodeBlockTitle>
								</CodeBlockHeader>
								<CodeBlockBody>
									<CodeBlockCopyButton />
									<CodeBlockCode
										language="sh"
										value={fmtCode`sudo unzip ~/Downloads/ngrok-v3-stable-darwin.zip -d /usr/local/bin`}
									/>
								</CodeBlockBody>
							</CodeBlock>
						</Example>
						<CodeBlock className="rounded-b-lg rounded-t-none">
							<CodeBlockBody>
								<CodeBlockCopyButton />
								<CodeBlockCode
									language="tsx"
									value={fmtCode`
										<CodeBlock>
											<CodeBlockHeader>
												<CodeBlockIcon preset="cli" />
												<CodeBlockTitle>Command Line</CodeBlockTitle>
											</CodeBlockHeader>
											<CodeBlockBody>
												<CodeBlockCopyButton />
												<CodeBlockCode language="sh" value={fmtCode\`sudo unzip ~/Downloads/ngrok-v3-stable-darwin.zip -d /usr/local/bin\`} />
											</CodeBlockBody>
										</CodeBlock>
									`}
								/>
							</CodeBlockBody>
						</CodeBlock>
					</div>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 className="text-xl font-medium">Horizontal Scrolling</h3>
						<p className="font-body text-body">
							This example is included to demonstrate that code blocks can scroll horizontally if the content is too
							wide. Mantle attempts to normalize scrollbar styling across browsers and platforms.
						</p>
					</header>
					<div>
						<Example>
							<CodeBlock>
								<CodeBlockHeader>
									<CodeBlockIcon preset="file" />
									<CodeBlockTitle>ngrok-example.js</CodeBlockTitle>
								</CodeBlockHeader>
								<CodeBlockBody>
									<CodeBlockCopyButton />
									<CodeBlockCode
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
								</CodeBlockBody>
							</CodeBlock>
						</Example>
						<CodeBlock className="rounded-b-lg rounded-t-none">
							<CodeBlockBody>
								<CodeBlockCopyButton />
								<CodeBlockCode
									language="tsx"
									value={fmtCode`
										<CodeBlock>
											<CodeBlockHeader>
												<CodeBlockIcon preset="file" />
												<CodeBlockTitle>ngrok-example.js</CodeBlockTitle>
											</CodeBlockHeader>
											<CodeBlockBody>
												<CodeBlockCopyButton />
												<CodeBlockCode
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
											</CodeBlockBody>
										</CodeBlock>
									`}
								/>
							</CodeBlockBody>
							<CodeBlockExpanderButton />
						</CodeBlock>
					</div>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 className="text-xl font-medium">No Header or Copy Button</h3>
						<p className="font-body text-body">
							This is the most simple example of our code block component. While very useful, the copy button is
							optional. It is also perfectly acceptable to render a code block without a header, especially if context
							is provided in the surrounding content or the code block is self-explanatory eg. “In your index.js file,
							paste the following:”.
						</p>
					</header>
					<div>
						<Example>
							<CodeBlock>
								<CodeBlockBody>
									<CodeBlockCode
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
								</CodeBlockBody>
							</CodeBlock>
						</Example>
						<CodeBlock className="rounded-b-lg rounded-t-none">
							<CodeBlockBody>
								<CodeBlockCopyButton />
								<CodeBlockCode
									language="tsx"
									value={fmtCode`
										<CodeBlock>
											<CodeBlockBody>
												<CodeBlockCode
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
											</CodeBlockBody>
										</CodeBlock>
									`}
								/>
							</CodeBlockBody>
							<CodeBlockExpanderButton />
						</CodeBlock>
					</div>
				</section>

				<section className="space-y-4">
					<header className="space-y-1">
						<h3 className="text-xl font-medium">Single Line with Horizontal Scrolling</h3>
						<p className="font-body text-body">
							This example is included to show the interaction between the copy button and horizontal scrolling on a
							single verbose terminal command.
						</p>
					</header>
					<div>
						<Example>
							<CodeBlock>
								<CodeBlockBody>
									<CodeBlockCopyButton />
									<CodeBlockCode
										language="sh"
										value={fmtCode`ffmpeg -i multichannel.mxf -map 0:v:0 -map 0:a:0 -map 0:a:0 -c:a:0 ac3 -b:a:0 640k -ac:a:1 2 -c:a:1 aac -b:2 128k out.mp4`}
									/>
								</CodeBlockBody>
							</CodeBlock>
						</Example>
						<CodeBlock className="rounded-b-lg rounded-t-none">
							<CodeBlockBody>
								<CodeBlockCopyButton />
								<CodeBlockCode
									language="tsx"
									value={fmtCode`
										<CodeBlock>
											<CodeBlockBody>
												<CodeBlockCopyButton />
												<CodeBlockCode
													language="sh"
													value={fmtCode\`ffmpeg -i multichannel.mxf -map 0:v:0 -map 0:a:0 -map 0:a:0 -c:a:0 ac3 -b:a:0 640k -ac:a:1 2 -c:a:1 aac -b:2 128k out.mp4\`}
												/>
											</CodeBlockBody>
										</CodeBlock>
									`}
								/>
							</CodeBlockBody>
						</CodeBlock>
					</div>
				</section>
			</section>

			<section className="space-y-4">
				<h2 id="supported-languages" className="text-3xl font-medium">
					Supported Languages
				</h2>
				<p className="font-body text-body text-xl">Mantle supports the following languages:</p>

				<Card className="font-mono text-xs">
					<CardBody>
						<ul className="grid grid-cols-3 gap-2 lg:grid-cols-7">
							{supportedLanguages.map((language) => (
								<li key={language}>{language}</li>
							))}
						</ul>
					</CardBody>
				</Card>
			</section>
		</div>
	);
}

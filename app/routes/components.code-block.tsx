import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	CodeBlockExpanderButton,
	CodeBlockHeader,
	CodeBlockTitle,
} from "@/code-block";
import { code } from "@/code-block/code";
import type { MetaFunction } from "@vercel/remix";

export const meta: MetaFunction = () => {
	return [
		{ title: "@ngrok/mantle — Code Block" },
		{ name: "description", content: "mantle is ngrok's UI library and design system" },
	];
};

export default function Page() {
	return (
		<div>
			<h1 className="text-5xl font-medium">Code Block</h1>
			<p className="mt-4 text-xl text-gray-600">Code blocks render and apply syntax highlighting to blocks of code.</p>

			<h2 className="mt-8 text-3xl font-medium">Examples</h2>

			<h3 className="mt-8 text-xl font-medium">Complete</h3>
			<p className="mt-1 text-gray-600">
				This example includes every potential child of our code block component—a header with file icon and file name,
				highlighted code with a copy button, and an expander which optionally crops the height of long code samples.
			</p>
			<div className="mt-4 rounded-lg border border-gray-300 to-gray-200 from-gray-50 bg-gradient-to-br dark:bg-gradient-to-tl">
				<div className="flex items-center justify-center p-4 md:p-16 border-b border-gray-300">
					<CodeBlock>
						<CodeBlockHeader>
							<FileIcon />
							<CodeBlockTitle>ngrok-example.js</CodeBlockTitle>
						</CodeBlockHeader>
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode language="js">
								{code`
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
							</CodeBlockCode>
							<CodeBlockExpanderButton />
						</CodeBlockBody>
					</CodeBlock>
				</div>
				<CodeBlock className="border-none">
					<CodeBlockBody>
						<CodeBlockCopyButton />
						<CodeBlockCode language="tsx">
							{code`
								<CodeBlock>
									<CodeBlockHeader>
										<Icon />
										<CodeBlockTitle>…</CodeBlockTitle>
									</CodeBlockHeader>
									<CodeBlockBody>
										<CodeBlockCopyButton />
										<CodeBlockCode language="…">
											{code\`
												…
											\`}
										</CodeBlockCode>
										<CodeBlockExpanderButton />
									</CodeBlockBody>
								</CodeBlock>
							`}
						</CodeBlockCode>
					</CodeBlockBody>
				</CodeBlock>
			</div>

			<section>
				<h3 className="mt-8 text-xl font-medium">Single Line with a Header</h3>
				<p className="mt-1 text-gray-600">
					Many code blocks will be single line command line prompts and should be able to render with a header and copy
					button. This makes it absolutely clear that this example is a command line prompt and not a code sample.
				</p>
				<div className="mt-4 rounded-lg border border-gray-300 to-gray-200 from-gray-50 bg-gradient-to-br dark:bg-gradient-to-tl">
					<div className="flex items-center justify-center p-4 md:p-16 border-b border-gray-300">
						<CodeBlock>
							<CodeBlockHeader>
								<CommandLineIcon />
								<CodeBlockTitle>Command Line</CodeBlockTitle>
							</CodeBlockHeader>
							<CodeBlockBody>
								<CodeBlockCopyButton />
								<CodeBlockCode language="sh">
									{code`sudo unzip ~/Downloads/ngrok-v3-stable-darwin.zip -d /usr/local/bin`}
								</CodeBlockCode>
							</CodeBlockBody>
						</CodeBlock>
					</div>
					<CodeBlock className="border-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode language="tsx">
								{code`
									<CodeBlock>
										<CodeBlockHeader>
											<CommandLineIcon />
											<CodeBlockTitle>Command Line</CodeBlockTitle>
										</CodeBlockHeader>
										<CodeBlockBody>
											<CodeBlockCopyButton />
											<CodeBlockCode language="sh">
												{code\`sudo unzip ~/Downloads/ngrok-v3-stable-darwin.zip -d /usr/local/bin\`}
											</CodeBlockCode>
										</CodeBlockBody>
									</CodeBlock>
								`}
							</CodeBlockCode>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section>
				<h3 className="mt-8 text-xl font-medium">Horizontal Scrolling</h3>
				<p className="mt-1 text-gray-600">
					This example is included to demonstrate that code blocks can scroll horizontally if the content is too wide.
					Mantle attempts to normalize scrollbar styling across browsers and platforms.
				</p>
				<div className="mt-4 rounded-lg border border-gray-300 to-gray-200 from-gray-50 bg-gradient-to-br dark:bg-gradient-to-tl">
					<div className="flex items-center justify-center p-4 md:p-16 border-b border-gray-300">
						<CodeBlock>
							<CodeBlockHeader>
								<FileIcon />
								<CodeBlockTitle>ngrok-example.js</CodeBlockTitle>
							</CodeBlockHeader>
							<CodeBlockBody>
								<CodeBlockCopyButton />
								<CodeBlockCode language="js">
									{code`
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
								</CodeBlockCode>
							</CodeBlockBody>
						</CodeBlock>
					</div>
					<CodeBlock className="border-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode language="tsx">
								{code`
									<CodeBlock>
										<CodeBlockHeader>
											<FileIcon />
											<CodeBlockTitle>ngrok-example.js</CodeBlockTitle>
										</CodeBlockHeader>
										<CodeBlockBody>
											<CodeBlockCopyButton />
											<CodeBlockCode language="js">
												{code\`
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
											</CodeBlockCode>
										</CodeBlockBody>
									</CodeBlock>
								`}
							</CodeBlockCode>
							<CodeBlockExpanderButton />
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section>
				<h3 className="mt-8 text-xl font-medium">No Header or Copy Button</h3>
				<p className="mt-1 text-gray-600">
					This is the most simple example of our code block component. While very useful, the copy button is optional.
					It is also perfectly acceptable to render a code block without a header, especially if context is provided in
					the surrounding content or the code block is self-explanatory eg. “In your index.js file, paste the
					following:”.
				</p>
				<div className="mt-4 rounded-lg border border-gray-300 to-gray-200 from-gray-50 bg-gradient-to-br dark:bg-gradient-to-tl">
					<div className="flex items-center justify-center p-4 md:p-16 border-b border-gray-300">
						<CodeBlock>
							<CodeBlockBody>
								<CodeBlockCode language="js">
									{code`
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
								</CodeBlockCode>
							</CodeBlockBody>
						</CodeBlock>
					</div>
					<CodeBlock className="border-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode language="tsx">
								{code`
									<CodeBlock>
										<CodeBlockBody>
											<CodeBlockCode language="js">
												{code\`
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
											</CodeBlockCode>
										</CodeBlockBody>
									</CodeBlock>
								`}
							</CodeBlockCode>
							<CodeBlockExpanderButton />
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>

			<section>
				<h3 className="mt-8 text-xl font-medium">Single Line with Horizontal Scrolling</h3>
				<p className="mt-1 text-gray-600">
					This example is included to show the interaction between the copy button and horizontal scrolling on a single
					verbose terminal command.
				</p>
				<div className="mt-4 rounded-lg border border-gray-300 to-gray-200 from-gray-50 bg-gradient-to-br dark:bg-gradient-to-tl">
					<div className="flex items-center justify-center p-4 md:p-16 border-b border-gray-300">
						<CodeBlock>
							<CodeBlockBody>
								<CodeBlockCopyButton />
								<CodeBlockCode language="sh">
									{code`ffmpeg -i multichannel.mxf -map 0:v:0 -map 0:a:0 -map 0:a:0 -c:a:0 ac3 -b:a:0 640k -ac:a:1 2 -c:a:1 aac -b:2 128k out.mp4`}
								</CodeBlockCode>
							</CodeBlockBody>
						</CodeBlock>
					</div>
					<CodeBlock className="border-none">
						<CodeBlockBody>
							<CodeBlockCopyButton />
							<CodeBlockCode language="tsx">
								{code`
									<CodeBlock>
										<CodeBlockBody>
											<CodeBlockCopyButton />
											<CodeBlockCode language="sh">
												{code\`ffmpeg -i multichannel.mxf -map 0:v:0 -map 0:a:0 -map 0:a:0 -c:a:0 ac3 -b:a:0 640k -ac:a:1 2 -c:a:1 aac -b:2 128k out.mp4\`}
											</CodeBlockCode>
										</CodeBlockBody>
									</CodeBlock>
								`}
							</CodeBlockCode>
						</CodeBlockBody>
					</CodeBlock>
				</div>
			</section>
		</div>
	);
}

const CommandLineIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
		<path
			fillRule="evenodd"
			d="M3.25 3A2.25 2.25 0 001 5.25v9.5A2.25 2.25 0 003.25 17h13.5A2.25 2.25 0 0019 14.75v-9.5A2.25 2.25 0 0016.75 3H3.25zm.943 8.752a.75.75 0 01.055-1.06L6.128 9l-1.88-1.693a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 01-1.06-.055zM9.75 10.25a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-2.5z"
			clipRule="evenodd"
		/>
	</svg>
);

const FileIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
		<path
			fillRule="evenodd"
			d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"
			clipRule="evenodd"
		/>
	</svg>
);

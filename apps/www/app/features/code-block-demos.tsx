import { Button } from "@ngrok/mantle/button";
import {
	CodeBlock,
	createMantleCodeBlockValue,
	mantleCode,
	parseLanguage,
	type MantleCodeBlockValue,
	type SupportedLanguage,
} from "@ngrok/mantle/code-block";
import { useState } from "react";
import { z } from "zod";
import { Example } from "~/components/example";

/**
 * Primary code block demo with a full-featured example showing header, copy button, and expander.
 */
export function PrimaryCodeBlockDemo() {
	return (
		<Example>
			<CodeBlock.Root>
				<CodeBlock.Header>
					<CodeBlock.Icon preset="file" />
					<CodeBlock.Title>ngrok-example.js</CodeBlock.Title>
				</CodeBlock.Header>
				<CodeBlock.Body>
					<CodeBlock.CopyButton />
					<CodeBlock.Code
						value={mantleCode("javascript")`
							const listener = await ngrok.connect({
								// session configuration
								addr: \`localhost:8080\`, // or \`8080\` or \`unix:\${UNIX_SOCKET}\`
								authtoken: "<authtoken>",
								authtoken_from_env: true,
								on_status_change: (addr, error) => {
									console.log(\`disconnected, addr \${addr} error: \${error}\`);
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
	);
}

/**
 * Single line command line code block with a header.
 */
export function SingleLineWithHeaderDemo() {
	return (
		<Example>
			<CodeBlock.Root>
				<CodeBlock.Header>
					<CodeBlock.Icon preset="cli" />
					<CodeBlock.Title>Command Line</CodeBlock.Title>
				</CodeBlock.Header>
				<CodeBlock.Body>
					<CodeBlock.CopyButton />
					<CodeBlock.Code
						value={mantleCode(
							"bash",
						)`sudo unzip ~/Downloads/ngrok-v3-stable-darwin.zip -d /usr/local/bin`}
					/>
				</CodeBlock.Body>
			</CodeBlock.Root>
		</Example>
	);
}

/**
 * Code block demonstrating horizontal scrolling with long lines.
 */
export function HorizontalScrollingDemo() {
	return (
		<Example>
			<CodeBlock.Root>
				<CodeBlock.Header>
					<CodeBlock.Icon preset="file" />
					<CodeBlock.Title>ngrok-example.js</CodeBlock.Title>
				</CodeBlock.Header>
				<CodeBlock.Body>
					<CodeBlock.CopyButton />
					<CodeBlock.Code
						value={mantleCode("javascript")`
							const http = require('http');
							const ngrok = require("@ngrok/ngrok");
							const server = http.createServer((req, res) => {
								res.writeHead(200);
								res.end("Hello!");
								setTimeout(() => {
									Promise.resolve().then(() => {
										console.log("url:", server.tunnel.url());
									});
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
	);
}

/**
 * Code block with no header or copy button.
 */
export function NoHeaderOrCopyButtonDemo() {
	return (
		<Example>
			<CodeBlock.Root>
				<CodeBlock.Body>
					<CodeBlock.Code
						value={mantleCode("javascript")`
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
	);
}

/**
 * Single line code block with horizontal scrolling and a copy button.
 */
export function SingleLineHorizontalScrollingDemo() {
	return (
		<Example>
			<CodeBlock.Root>
				<CodeBlock.Body>
					<CodeBlock.CopyButton />
					<CodeBlock.Code
						value={mantleCode(
							"bash",
						)`ffmpeg -i multichannel.mxf -map 0:v:0 -map 0:a:0 -map 0:a:0 -c:a:0 ac3 -b:a:0 640k -ac:a:1 2 -c:a:1 aac -b:2 128k out.mp4`}
					/>
				</CodeBlock.Body>
			</CodeBlock.Root>
		</Example>
	);
}

const shikiHighlightResponseSchema = z.object({
	code: z.string(),
	highlightLines: z.array(z.union([z.number(), z.string()])),
	html: z.string(),
	language: z.string(),
	lineNumberStart: z.number(),
	showLineNumbers: z.boolean(),
});

function normalizeHighlightLines(lines: (string | number)[]): (number | `${number}-${number}`)[] {
	return lines.filter((line): line is number | `${number}-${number}` => {
		if (typeof line === "number") {
			return Number.isFinite(line) && line > 0;
		}
		return /^\d+-\d+$/.test(line);
	});
}

const defaultServerCode = [
	"const service = await fetchServiceConfig();",
	"if (!service.enabled) {",
	'\tthrow new Error("service is disabled");',
	"}",
].join("\n");

/**
 * Fetches syntax-highlighted HTML from the server API and renders
 * it via `createMantleCodeBlockValue`. Demonstrates server-rendered
 * syntax highlighting for dynamic or user-provided code.
 */
export function ServerRenderedHighlightingDemo() {
	const [language, setLanguage] = useState<SupportedLanguage>("typescript");
	const [code, setCode] = useState(defaultServerCode);
	const [highlightedValue, setHighlightedValue] = useState<MantleCodeBlockValue | null>(null);
	const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
	const [errorMessage, setErrorMessage] = useState("");

	const handleHighlight = async () => {
		setStatus("loading");
		setErrorMessage("");

		try {
			const response = await fetch("/api/shiki-highlight", {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					code,
					highlightLines: ["2-3"],
					language,
					lineNumberStart: 1,
					showLineNumbers: true,
				}),
			});

			if (!response.ok) {
				throw new Error(`Highlight request failed with status ${response.status}`);
			}

			const data = shikiHighlightResponseSchema.parse(await response.json());
			setHighlightedValue(
				createMantleCodeBlockValue({
					code: data.code,
					highlightLines: normalizeHighlightLines(data.highlightLines),
					lineNumberStart: data.lineNumberStart,
					language,
					preHtml: data.html,
					showLineNumbers: data.showLineNumbers,
				}),
			);
			setStatus("idle");
		} catch (error) {
			setStatus("error");
			setErrorMessage(error instanceof Error ? error.message : "Unknown error");
		}
	};

	return (
		<Example className="flex-col items-stretch gap-4">
			<div className="space-y-3">
				<div className="space-y-2">
					<label className="block text-sm font-medium" htmlFor="server-highlight-language">
						Language
					</label>
					<select
						id="server-highlight-language"
						className="bg-form border-form rounded-md border px-2 py-1"
						value={language}
						onChange={(event) => {
							setLanguage(parseLanguage(event.currentTarget.value));
						}}
					>
						<option value="typescript">typescript</option>
						<option value="javascript">javascript</option>
						<option value="json">json</option>
						<option value="bash">bash</option>
					</select>
				</div>
				<div className="space-y-2">
					<label className="block text-sm font-medium" htmlFor="server-highlight-code">
						Code
					</label>
					<textarea
						id="server-highlight-code"
						className="bg-form border-form text-mono min-h-28 w-full rounded-md border p-2 font-mono"
						value={code}
						onChange={(event) => {
							setCode(event.currentTarget.value);
						}}
					/>
				</div>
				<Button
					type="button"
					appearance="filled"
					disabled={status === "loading"}
					onClick={() => void handleHighlight()}
				>
					{status === "loading" ? "Highlighting..." : "Highlight on Server"}
				</Button>
			</div>
			{status === "error" && <p className="text-danger-600 text-sm">{errorMessage}</p>}
			{highlightedValue != null && (
				<CodeBlock.Root>
					<CodeBlock.Body>
						<CodeBlock.CopyButton />
						<CodeBlock.Code value={highlightedValue} />
					</CodeBlock.Body>
				</CodeBlock.Root>
			)}
		</Example>
	);
}

/**
 * Code block demonstrating overriding default language indentation.
 */
export function OverridingIndentationDemo() {
	return (
		<Example className="flex-wrap gap-4">
			<CodeBlock.Root>
				<CodeBlock.Header>
					<CodeBlock.Icon preset="traffic-policy" />
					<CodeBlock.Title>traffic-policy.yaml</CodeBlock.Title>
				</CodeBlock.Header>
				<CodeBlock.Body>
					<CodeBlock.CopyButton />
					<CodeBlock.Code
						value={mantleCode("yaml")`
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
					<CodeBlock.Title>ngrok-example.js (using space indentation)</CodeBlock.Title>
				</CodeBlock.Header>
				<CodeBlock.Body>
					<CodeBlock.CopyButton />
					<CodeBlock.Code
						value={mantleCode("javascript", { indentation: "spaces" })`
							// by default, mantle decides that javascript uses tabs,
							// but this example uses spaces for indentation
							const http = require('http');
							const ngrok = require("@ngrok/ngrok");
							const server = http.createServer((req, res) => {
								res.writeHead(200);
								res.end("Hello!");
								setTimeout(() => {
									Promise.resolve().then(() => {
										console.log("url:", server.tunnel.url());
									});
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
	);
}

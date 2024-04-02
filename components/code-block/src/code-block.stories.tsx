import { FileText } from "@phosphor-icons/react/FileText";
import { Terminal } from "@phosphor-icons/react/Terminal";
import type { Meta, StoryObj } from "@storybook/react";
import { code } from "../src/code";
import {
	CodeBlock,
	CodeBlockBody,
	CodeBlockCode,
	CodeBlockCopyButton,
	CodeBlockExpanderButton,
	CodeBlockHeader,
	CodeBlockTitle,
} from "./code-block";

const meta = {
	title: "CodeBlock",
	component: CodeBlock,
	tags: ["autodocs"],
} satisfies Meta<typeof CodeBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithHeaderFileExpanding: Story = {
	render: () => (
		<div className="mx-auto max-w-screen-md">
			<CodeBlock>
				<CodeBlockHeader className="flex items-center gap-1">
					<FileText className="h-5 w-5" weight="fill" />
					<CodeBlockTitle>ngrok-example.js</CodeBlockTitle>
				</CodeBlockHeader>
				<CodeBlockBody>
					<CodeBlockCopyButton />
					<CodeBlockCode
						language="js"
						value={code`
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
					<CodeBlockExpanderButton />
				</CodeBlockBody>
			</CodeBlock>
		</div>
	),
};

export const WithHeaderCommandLine: Story = {
	render: () => (
		<div className="mx-auto max-w-screen-md">
			<CodeBlock>
				<CodeBlockHeader className="flex items-center gap-1">
					<Terminal className="h-5 w-5" weight="fill" />
					<CodeBlockTitle>Command Line</CodeBlockTitle>
				</CodeBlockHeader>
				<CodeBlockBody>
					<CodeBlockCopyButton />
					<CodeBlockCode
						language="sh"
						value={code`sudo unzip ~/Downloads/ngrok-v3-stable-darwin.zip -d /usr/local/bin`}
					/>
				</CodeBlockBody>
			</CodeBlock>
		</div>
	),
};

export const WithHeaderFile: Story = {
	render: () => (
		<div className="mx-auto max-w-screen-md">
			<CodeBlock>
				<CodeBlockHeader className="flex items-center gap-1">
					<FileText className="h-5 w-5" weight="fill" />
					<CodeBlockTitle>ngrok-example.js</CodeBlockTitle>
				</CodeBlockHeader>
				<CodeBlockBody>
					<CodeBlockCopyButton />
					<CodeBlockCode
						language="js"
						value={code`
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
		</div>
	),
};

export const WithoutHeaderFileAndNoCopyButton: Story = {
	render: () => (
		<div className="mx-auto max-w-screen-md">
			<CodeBlock>
				<CodeBlockBody>
					<CodeBlockCode
						language="js"
						value={code`
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
		</div>
	),
};

export const WithoutHeaderCommandLine: Story = {
	render: () => (
		<div className="mx-auto max-w-screen-md">
			<CodeBlock>
				<CodeBlockBody>
					<CodeBlockCopyButton />
					<CodeBlockCode
						language="sh"
						value={code`ffmpeg -i input%03d.png -c:v hevc_videotoolbox -allow_sw 1 -alpha_quality 0.75 -vtag hvc1 output.mov`}
					/>
				</CodeBlockBody>
			</CodeBlock>
		</div>
	),
};

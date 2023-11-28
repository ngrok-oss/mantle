import { CodeBlock, CodeBlockBody, CodeBlockCode, CodeBlockCopyButton, CodeBlockExpanderButton } from "@/code-block";
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
			<div className="mt-4 flex items-center justify-center rounded-lg rounded-b-none border border-gray-300 bg-background p-9">
				<CodeBlock>
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

			<CodeBlock className="rounded-t-none border-t-0">
				<CodeBlockBody>
					<CodeBlockCopyButton />
					<CodeBlockCode language="tsx">
						{code`
							<CodeBlock>
								<CodeBlockBody>
									<CodeBlockCopyButton />
									<CodeBlockCode language="js">
										{code\`
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
										\`}
									</CodeBlockCode>
									<CodeBlockExpanderButton />
								</CodeBlockBody>
							</CodeBlock>
						`}
					</CodeBlockCode>
					<CodeBlockExpanderButton />
				</CodeBlockBody>
			</CodeBlock>
		</div>
	);
}

import{a as b,b as x}from"/build/_shared/chunk-M7TSVJTU.js";import{a as g}from"/build/_shared/chunk-KVCFXNHB.js";import{a as i}from"/build/_shared/chunk-FSLJRMMD.js";import{b as v,c as l,d as r,e as n,f as u,g as p,h as c,i as k,j as s}from"/build/_shared/chunk-U623FORG.js";import"/build/_shared/chunk-WWFNUYL5.js";import"/build/_shared/chunk-UYLQA7CX.js";import"/build/_shared/chunk-5U3QKZBD.js";import{b as f}from"/build/_shared/chunk-3YTQ7E44.js";import"/build/_shared/chunk-I4CY5NX7.js";import{a as B,b as y}from"/build/_shared/chunk-SQBGVNFG.js";import{c as m}from"/build/_shared/chunk-QDA5CGMH.js";var h=m(B(),1);var o=m(B(),1),_=new Map([["bold",o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M120,137,48,201A12,12,0,1,1,32,183l61.91-55L32,73A12,12,0,1,1,48,55l72,64A12,12,0,0,1,120,137Zm96,43H120a12,12,0,0,0,0,24h96a12,12,0,0,0,0-24Z"}))],["duotone",o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M216,80V192H40V64H200A16,16,0,0,1,216,80Z",opacity:"0.2"}),o.default.createElement("path",{d:"M117.31,134l-72,64a8,8,0,1,1-10.63-12L100,128,34.69,70A8,8,0,1,1,45.32,58l72,64a8,8,0,0,1,0,12ZM216,184H120a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"}))],["fill",o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM77.66,173.66a8,8,0,0,1-11.32-11.32L100.69,128,66.34,93.66A8,8,0,0,1,77.66,82.34l40,40a8,8,0,0,1,0,11.32ZM192,176H128a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"}))],["light",o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M116,132.48l-72,64a6,6,0,0,1-8-9L103,128,36,68.49a6,6,0,0,1,8-9l72,64a6,6,0,0,1,0,9ZM216,186H120a6,6,0,0,0,0,12h96a6,6,0,0,0,0-12Z"}))],["regular",o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M117.31,134l-72,64a8,8,0,1,1-10.63-12L100,128,34.69,70A8,8,0,1,1,45.32,58l72,64a8,8,0,0,1,0,12ZM216,184H120a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"}))],["thin",o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:"M116,128a4,4,0,0,1-1.34,3l-72,64a4,4,0,1,1-5.32-6L106,128,37.34,67a4,4,0,0,1,5.32-6l72,64A4,4,0,0,1,116,128Zm100,60H120a4,4,0,0,0,0,8h96a4,4,0,0,0,0-8Z"}))]]);var E=Object.defineProperty,T=Object.defineProperties,q=Object.getOwnPropertyDescriptors,w=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,N=(t,a,d)=>a in t?E(t,a,{enumerable:!0,configurable:!0,writable:!0,value:d}):t[a]=d,O=(t,a)=>{for(var d in a||(a={}))M.call(a,d)&&N(t,d,a[d]);if(w)for(var d of w(a))j.call(a,d)&&N(t,d,a[d]);return t},L=(t,a)=>T(t,q(a)),C=(0,h.forwardRef)((t,a)=>h.default.createElement(f,L(O({ref:a},t),{weights:_})));C.displayName="Terminal";var e=m(y(),1),Z=()=>[{title:"@ngrok/mantle \u2014 Code Block"},{name:"description",content:"mantle is ngrok's UI library and design system"}];function H(){return(0,e.jsxs)("div",{className:"space-y-16",children:[(0,e.jsxs)("section",{className:"space-y-4",children:[(0,e.jsx)("h1",{className:"text-5xl font-medium",children:"Code Block"}),(0,e.jsx)("p",{className:"font-body text-body text-xl",children:"Code blocks render and apply syntax highlighting to blocks of code."}),(0,e.jsxs)("div",{children:[(0,e.jsx)(i,{children:(0,e.jsxs)(l,{children:[(0,e.jsxs)(u,{children:[(0,e.jsx)(g,{className:"h-5 w-5",weight:"fill"}),(0,e.jsx)(p,{children:"ngrok-example.js"})]}),(0,e.jsxs)(r,{children:[(0,e.jsx)(c,{}),(0,e.jsx)(n,{language:"js",value:s`
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
							`})]}),(0,e.jsx)(k,{})]})}),(0,e.jsx)(l,{className:"rounded-b-lg rounded-t-none",children:(0,e.jsxs)(r,{children:[(0,e.jsx)(c,{}),(0,e.jsx)(n,{language:"tsx",value:s`
							import {
								CodeBlock,
								CodeBlockBody,
								CodeBlockCode,
								CodeBlockCopyButton,
								CodeBlockExpanderButton,
								CodeBlockHeader,
								CodeBlockTitle,
								fmtCode,
							} from "@ngrok/mantle/code-block";

							<CodeBlock>
								<CodeBlockHeader>
									<Icon />
									<CodeBlockTitle>…</CodeBlockTitle>
								</CodeBlockHeader>
								<CodeBlockBody>
									<CodeBlockCopyButton />
									<CodeBlockCode language="…" value={fmtCode\`…\`} />
								</CodeBlockBody>
								<CodeBlockExpanderButton />
							</CodeBlock>
						`})]})})]})]}),(0,e.jsxs)("section",{className:"space-y-8",children:[(0,e.jsx)("h2",{className:"text-3xl font-medium",children:"Examples"}),(0,e.jsxs)("section",{className:"space-y-4",children:[(0,e.jsxs)("header",{className:"space-y-1",children:[(0,e.jsx)("h3",{className:"text-xl font-medium",children:"Single Line with a Header"}),(0,e.jsx)("p",{className:"font-body text-body",children:"Many code blocks will be single line command line prompts and should be able to render with a header and copy button. This makes it absolutely clear that this example is a command line prompt and not a code sample."})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)(i,{children:(0,e.jsxs)(l,{children:[(0,e.jsxs)(u,{children:[(0,e.jsx)(C,{className:"h-5 w-5",weight:"fill"}),(0,e.jsx)(p,{children:"Command Line"})]}),(0,e.jsxs)(r,{children:[(0,e.jsx)(c,{}),(0,e.jsx)(n,{language:"sh",value:s`sudo unzip ~/Downloads/ngrok-v3-stable-darwin.zip -d /usr/local/bin`})]})]})}),(0,e.jsx)(l,{className:"rounded-b-lg rounded-t-none",children:(0,e.jsxs)(r,{children:[(0,e.jsx)(c,{}),(0,e.jsx)(n,{language:"tsx",value:s`
								<CodeBlock>
									<CodeBlockHeader>
										<CommandLineIcon />
										<CodeBlockTitle>Command Line</CodeBlockTitle>
									</CodeBlockHeader>
									<CodeBlockBody>
										<CodeBlockCopyButton />
										<CodeBlockCode language="sh" value={fmtCode\`sudo unzip ~/Downloads/ngrok-v3-stable-darwin.zip -d /usr/local/bin\`} />
									</CodeBlockBody>
								</CodeBlock>
							`})]})})]})]}),(0,e.jsxs)("section",{className:"space-y-4",children:[(0,e.jsxs)("header",{className:"space-y-1",children:[(0,e.jsx)("h3",{className:"text-xl font-medium",children:"Horizontal Scrolling"}),(0,e.jsx)("p",{className:"font-body text-body",children:"This example is included to demonstrate that code blocks can scroll horizontally if the content is too wide. Mantle attempts to normalize scrollbar styling across browsers and platforms."})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)(i,{children:(0,e.jsxs)(l,{children:[(0,e.jsxs)(u,{children:[(0,e.jsx)(g,{className:"h-5 w-5",weight:"fill"}),(0,e.jsx)(p,{children:"ngrok-example.js"})]}),(0,e.jsxs)(r,{children:[(0,e.jsx)(c,{}),(0,e.jsx)(n,{language:"js",value:s`
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
								`})]})]})}),(0,e.jsxs)(l,{className:"rounded-b-lg rounded-t-none",children:[(0,e.jsxs)(r,{children:[(0,e.jsx)(c,{}),(0,e.jsx)(n,{language:"tsx",value:s`
								<CodeBlock>
									<CodeBlockHeader>
										<FileIcon />
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
							`})]}),(0,e.jsx)(k,{})]})]})]}),(0,e.jsxs)("section",{className:"space-y-4",children:[(0,e.jsxs)("header",{className:"space-y-1",children:[(0,e.jsx)("h3",{className:"text-xl font-medium",children:"No Header or Copy Button"}),(0,e.jsx)("p",{className:"font-body text-body",children:"This is the most simple example of our code block component. While very useful, the copy button is optional. It is also perfectly acceptable to render a code block without a header, especially if context is provided in the surrounding content or the code block is self-explanatory eg. \u201CIn your index.js file, paste the following:\u201D."})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)(i,{children:(0,e.jsx)(l,{children:(0,e.jsx)(r,{children:(0,e.jsx)(n,{language:"js",value:s`
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
								`})})})}),(0,e.jsxs)(l,{className:"rounded-b-lg rounded-t-none",children:[(0,e.jsxs)(r,{children:[(0,e.jsx)(c,{}),(0,e.jsx)(n,{language:"tsx",value:s`
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
							`})]}),(0,e.jsx)(k,{})]})]})]}),(0,e.jsxs)("section",{className:"space-y-4",children:[(0,e.jsxs)("header",{className:"space-y-1",children:[(0,e.jsx)("h3",{className:"text-xl font-medium",children:"Single Line with Horizontal Scrolling"}),(0,e.jsx)("p",{className:"font-body text-body",children:"This example is included to show the interaction between the copy button and horizontal scrolling on a single verbose terminal command."})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)(i,{children:(0,e.jsx)(l,{children:(0,e.jsxs)(r,{children:[(0,e.jsx)(c,{}),(0,e.jsx)(n,{language:"sh",value:s`ffmpeg -i multichannel.mxf -map 0:v:0 -map 0:a:0 -map 0:a:0 -c:a:0 ac3 -b:a:0 640k -ac:a:1 2 -c:a:1 aac -b:2 128k out.mp4`})]})})}),(0,e.jsx)(l,{className:"rounded-b-lg rounded-t-none",children:(0,e.jsxs)(r,{children:[(0,e.jsx)(c,{}),(0,e.jsx)(n,{language:"tsx",value:s`
							<CodeBlock>
								<CodeBlockBody>
									<CodeBlockCopyButton />
									<CodeBlockCode
										language="sh"
										value={fmtCode\`ffmpeg -i multichannel.mxf -map 0:v:0 -map 0:a:0 -map 0:a:0 -c:a:0 ac3 -b:a:0 640k -ac:a:1 2 -c:a:1 aac -b:2 128k out.mp4\`}
									/>
								</CodeBlockBody>
							</CodeBlock>
							`})]})})]})]})]}),(0,e.jsxs)("section",{className:"space-y-4",children:[(0,e.jsx)("h2",{id:"supported-languages",className:"text-3xl font-medium",children:"Supported Languages"}),(0,e.jsx)("p",{className:"font-body text-body text-xl",children:"Mantle supports the following languages:"}),(0,e.jsx)(b,{className:"font-mono text-xs",children:(0,e.jsx)(x,{children:(0,e.jsx)("ul",{className:"grid grid-cols-3 gap-2 lg:grid-cols-7",children:v.map(t=>(0,e.jsx)("li",{children:t},t))})})})]})]})}export{H as default,Z as meta};

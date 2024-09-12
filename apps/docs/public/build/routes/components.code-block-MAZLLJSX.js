import {
  Card,
  CardBody
} from "/build/_shared/chunk-ALBVFRJR.js";
import {
  F
} from "/build/_shared/chunk-W5A73FCH.js";
import {
  Example
} from "/build/_shared/chunk-JVSA6SEF.js";
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockCode,
  CodeBlockCopyButton,
  CodeBlockExpanderButton,
  CodeBlockHeader,
  CodeBlockTitle,
  fmtCode,
  supportedLanguages
} from "/build/_shared/chunk-MLYZRSVN.js";
import "/build/_shared/chunk-B3GOHHOF.js";
import "/build/_shared/chunk-3LE3N7DD.js";
import "/build/_shared/chunk-ET7BOX4G.js";
import {
  b
} from "/build/_shared/chunk-L6J2GUHO.js";
import "/build/_shared/chunk-ACY2JGBA.js";
import {
  createHotContext
} from "/build/_shared/chunk-T2SS4IJE.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-ANPTKELO.js";
import {
  require_react
} from "/build/_shared/chunk-POHPDT6N.js";
import "/build/_shared/chunk-VJGIG3I4.js";
import {
  __toESM
} from "/build/_shared/chunk-UNR7476Z.js";

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/Terminal.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/defs/Terminal.mjs
var import_react = __toESM(require_react(), 1);
var t = /* @__PURE__ */ new Map([
  [
    "bold",
    /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("path", { d: "M120,137,48,201A12,12,0,1,1,32,183l61.91-55L32,73A12,12,0,1,1,48,55l72,64A12,12,0,0,1,120,137Zm96,43H120a12,12,0,0,0,0,24h96a12,12,0,0,0,0-24Z" }))
  ],
  [
    "duotone",
    /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("path", { d: "M216,80V192H40V64H200A16,16,0,0,1,216,80Z", opacity: "0.2" }), /* @__PURE__ */ import_react.default.createElement("path", { d: "M117.31,134l-72,64a8,8,0,1,1-10.63-12L100,128,34.69,70A8,8,0,1,1,45.32,58l72,64a8,8,0,0,1,0,12ZM216,184H120a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z" }))
  ],
  [
    "fill",
    /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM77.66,173.66a8,8,0,0,1-11.32-11.32L100.69,128,66.34,93.66A8,8,0,0,1,77.66,82.34l40,40a8,8,0,0,1,0,11.32ZM192,176H128a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z" }))
  ],
  [
    "light",
    /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("path", { d: "M116,132.48l-72,64a6,6,0,0,1-8-9L103,128,36,68.49a6,6,0,0,1,8-9l72,64a6,6,0,0,1,0,9ZM216,186H120a6,6,0,0,0,0,12h96a6,6,0,0,0,0-12Z" }))
  ],
  [
    "regular",
    /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("path", { d: "M117.31,134l-72,64a8,8,0,1,1-10.63-12L100,128,34.69,70A8,8,0,1,1,45.32,58l72,64a8,8,0,0,1,0,12ZM216,184H120a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z" }))
  ],
  [
    "thin",
    /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("path", { d: "M116,128a4,4,0,0,1-1.34,3l-72,64a4,4,0,1,1-5.32-6L106,128,37.34,67a4,4,0,0,1,5.32-6l72,64A4,4,0,0,1,116,128Zm100,60H120a4,4,0,0,0,0,8h96a4,4,0,0,0,0-8Z" }))
  ]
]);

// node_modules/.pnpm/@phosphor-icons+react@2.1.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@phosphor-icons/react/dist/csr/Terminal.mjs
var f = Object.defineProperty;
var n = Object.defineProperties;
var p = Object.getOwnPropertyDescriptors;
var o = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty;
var c = Object.prototype.propertyIsEnumerable;
var a = (r, e2, m) => e2 in r ? f(r, e2, { enumerable: true, configurable: true, writable: true, value: m }) : r[e2] = m;
var t2 = (r, e2) => {
  for (var m in e2 || (e2 = {}))
    s.call(e2, m) && a(r, m, e2[m]);
  if (o)
    for (var m of o(e2))
      c.call(e2, m) && a(r, m, e2[m]);
  return r;
};
var i = (r, e2) => n(r, p(e2));
var R = (0, import_react2.forwardRef)((r, e2) => /* @__PURE__ */ import_react2.default.createElement(b, i(t2({ ref: e2 }, r), { weights: t })));
R.displayName = "Terminal";

// app/routes/components.code-block.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/components.code-block.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/components.code-block.tsx"
  );
  import.meta.hot.lastModified = "1724091104714.0881";
}
var meta = () => {
  return [{
    title: "@ngrok/mantle \u2014 Code Block"
  }, {
    name: "description",
    content: "mantle is ngrok's UI library and design system"
  }];
};
function Page() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-5xl font-medium", children: "Code Block" }, void 0, false, {
        fileName: "app/routes/components.code-block.tsx",
        lineNumber: 42,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-xl text-body", children: "Code blocks render and apply syntax highlighting to blocks of code." }, void 0, false, {
        fileName: "app/routes/components.code-block.tsx",
        lineNumber: 43,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Example, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlock, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(F, { className: "h-5 w-5", weight: "fill" }, void 0, false, {
              fileName: "app/routes/components.code-block.tsx",
              lineNumber: 51,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockTitle, { children: "ngrok-example.js" }, void 0, false, {
              fileName: "app/routes/components.code-block.tsx",
              lineNumber: 52,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 50,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockBody, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
              fileName: "app/routes/components.code-block.tsx",
              lineNumber: 55,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCode, { language: "js", value: fmtCode`
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
							` }, void 0, false, {
              fileName: "app/routes/components.code-block.tsx",
              lineNumber: 56,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 54,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockExpanderButton, {}, void 0, false, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 101,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.code-block.tsx",
          lineNumber: 49,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.code-block.tsx",
          lineNumber: 48,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockBody, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 106,
            columnNumber: 8
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
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
						` }, void 0, false, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 107,
            columnNumber: 8
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.code-block.tsx",
          lineNumber: 105,
          columnNumber: 7
        }, this) }, void 0, false, {
          fileName: "app/routes/components.code-block.tsx",
          lineNumber: 104,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.code-block.tsx",
        lineNumber: 47,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.code-block.tsx",
      lineNumber: 41,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl font-medium", children: "Examples" }, void 0, false, {
        fileName: "app/routes/components.code-block.tsx",
        lineNumber: 137,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-medium", children: "Single Line with a Header" }, void 0, false, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 141,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-body", children: "Many code blocks will be single line command line prompts and should be able to render with a header and copy button. This makes it absolutely clear that this example is a command line prompt and not a code sample." }, void 0, false, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 142,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.code-block.tsx",
          lineNumber: 140,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Example, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlock, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(R, { className: "h-5 w-5", weight: "fill" }, void 0, false, {
                fileName: "app/routes/components.code-block.tsx",
                lineNumber: 153,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockTitle, { children: "Command Line" }, void 0, false, {
                fileName: "app/routes/components.code-block.tsx",
                lineNumber: 154,
                columnNumber: 10
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.code-block.tsx",
              lineNumber: 152,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockBody, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
                fileName: "app/routes/components.code-block.tsx",
                lineNumber: 157,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCode, { language: "sh", value: fmtCode`sudo unzip ~/Downloads/ngrok-v3-stable-darwin.zip -d /usr/local/bin` }, void 0, false, {
                fileName: "app/routes/components.code-block.tsx",
                lineNumber: 158,
                columnNumber: 10
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.code-block.tsx",
              lineNumber: 156,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 151,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 150,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockBody, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
              fileName: "app/routes/components.code-block.tsx",
              lineNumber: 164,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
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
							` }, void 0, false, {
              fileName: "app/routes/components.code-block.tsx",
              lineNumber: 165,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 163,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 162,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.code-block.tsx",
          lineNumber: 149,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.code-block.tsx",
        lineNumber: 139,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-medium", children: "Horizontal Scrolling" }, void 0, false, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 184,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-body", children: "This example is included to demonstrate that code blocks can scroll horizontally if the content is too wide. Mantle attempts to normalize scrollbar styling across browsers and platforms." }, void 0, false, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 185,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.code-block.tsx",
          lineNumber: 183,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Example, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlock, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockHeader, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(F, { className: "h-5 w-5", weight: "fill" }, void 0, false, {
                fileName: "app/routes/components.code-block.tsx",
                lineNumber: 194,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockTitle, { children: "ngrok-example.js" }, void 0, false, {
                fileName: "app/routes/components.code-block.tsx",
                lineNumber: 195,
                columnNumber: 10
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.code-block.tsx",
              lineNumber: 193,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockBody, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
                fileName: "app/routes/components.code-block.tsx",
                lineNumber: 198,
                columnNumber: 10
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCode, { language: "js", value: fmtCode`
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
								` }, void 0, false, {
                fileName: "app/routes/components.code-block.tsx",
                lineNumber: 199,
                columnNumber: 10
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.code-block.tsx",
              lineNumber: 197,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 192,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 191,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockBody, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
                fileName: "app/routes/components.code-block.tsx",
                lineNumber: 222,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
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
							` }, void 0, false, {
                fileName: "app/routes/components.code-block.tsx",
                lineNumber: 223,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.code-block.tsx",
              lineNumber: 221,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockExpanderButton, {}, void 0, false, {
              fileName: "app/routes/components.code-block.tsx",
              lineNumber: 256,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 220,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.code-block.tsx",
          lineNumber: 190,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.code-block.tsx",
        lineNumber: 182,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-medium", children: "No Header or Copy Button" }, void 0, false, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 263,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-body", children: "This is the most simple example of our code block component. While very useful, the copy button is optional. It is also perfectly acceptable to render a code block without a header, especially if context is provided in the surrounding content or the code block is self-explanatory eg. \u201CIn your index.js file, paste the following:\u201D." }, void 0, false, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 264,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.code-block.tsx",
          lineNumber: 262,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Example, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlock, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCode, { language: "js", value: fmtCode`
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
								` }, void 0, false, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 275,
            columnNumber: 10
          }, this) }, void 0, false, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 274,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 273,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 272,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockBody, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
                fileName: "app/routes/components.code-block.tsx",
                lineNumber: 292,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
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
							` }, void 0, false, {
                fileName: "app/routes/components.code-block.tsx",
                lineNumber: 293,
                columnNumber: 9
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/components.code-block.tsx",
              lineNumber: 291,
              columnNumber: 8
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockExpanderButton, {}, void 0, false, {
              fileName: "app/routes/components.code-block.tsx",
              lineNumber: 315,
              columnNumber: 8
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 290,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.code-block.tsx",
          lineNumber: 271,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.code-block.tsx",
        lineNumber: 261,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "space-y-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-medium", children: "Single Line with Horizontal Scrolling" }, void 0, false, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 322,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-body", children: "This example is included to show the interaction between the copy button and horizontal scrolling on a single verbose terminal command." }, void 0, false, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 323,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.code-block.tsx",
          lineNumber: 321,
          columnNumber: 6
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Example, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlock, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockBody, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
              fileName: "app/routes/components.code-block.tsx",
              lineNumber: 332,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCode, { language: "sh", value: fmtCode`ffmpeg -i multichannel.mxf -map 0:v:0 -map 0:a:0 -map 0:a:0 -c:a:0 ac3 -b:a:0 640k -ac:a:1 2 -c:a:1 aac -b:2 128k out.mp4` }, void 0, false, {
              fileName: "app/routes/components.code-block.tsx",
              lineNumber: 333,
              columnNumber: 10
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 331,
            columnNumber: 9
          }, this) }, void 0, false, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 330,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 329,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlock, { className: "rounded-b-lg rounded-t-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockBody, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCopyButton, {}, void 0, false, {
              fileName: "app/routes/components.code-block.tsx",
              lineNumber: 339,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CodeBlockCode, { language: "tsx", value: fmtCode`
							<CodeBlock>
								<CodeBlockBody>
									<CodeBlockCopyButton />
									<CodeBlockCode
										language="sh"
										value={fmtCode\`ffmpeg -i multichannel.mxf -map 0:v:0 -map 0:a:0 -map 0:a:0 -c:a:0 ac3 -b:a:0 640k -ac:a:1 2 -c:a:1 aac -b:2 128k out.mp4\`}
									/>
								</CodeBlockBody>
							</CodeBlock>
							` }, void 0, false, {
              fileName: "app/routes/components.code-block.tsx",
              lineNumber: 340,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 338,
            columnNumber: 8
          }, this) }, void 0, false, {
            fileName: "app/routes/components.code-block.tsx",
            lineNumber: 337,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/components.code-block.tsx",
          lineNumber: 328,
          columnNumber: 6
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/components.code-block.tsx",
        lineNumber: 320,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.code-block.tsx",
      lineNumber: 136,
      columnNumber: 4
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { id: "supported-languages", className: "text-3xl font-medium", children: "Supported Languages" }, void 0, false, {
        fileName: "app/routes/components.code-block.tsx",
        lineNumber: 358,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-body text-xl text-body", children: "Mantle supports the following languages:" }, void 0, false, {
        fileName: "app/routes/components.code-block.tsx",
        lineNumber: 361,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { className: "font-mono text-xs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardBody, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "grid grid-cols-3 gap-2 lg:grid-cols-7", children: supportedLanguages.map((language) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: language }, language, false, {
        fileName: "app/routes/components.code-block.tsx",
        lineNumber: 366,
        columnNumber: 44
      }, this)) }, void 0, false, {
        fileName: "app/routes/components.code-block.tsx",
        lineNumber: 365,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "app/routes/components.code-block.tsx",
        lineNumber: 364,
        columnNumber: 6
      }, this) }, void 0, false, {
        fileName: "app/routes/components.code-block.tsx",
        lineNumber: 363,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/components.code-block.tsx",
      lineNumber: 357,
      columnNumber: 4
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/components.code-block.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
}
_c = Page;
var _c;
$RefreshReg$(_c, "Page");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Page as default,
  meta
};
//# sourceMappingURL=/build/routes/components.code-block-MAZLLJSX.js.map

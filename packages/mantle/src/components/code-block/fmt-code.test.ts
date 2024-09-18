import { describe, expect, test } from "vitest";
import { fmtCode } from "./fmt-code";

describe("fmtCode", () => {
	test("given empty string, returns empty string", () => {
		expect(fmtCode``).toBe("");
	});

	test("given a single line string, returns the string", () => {
		expect(fmtCode`SELECT * FROM users`).toBe("SELECT * FROM users");
	});

	test("given a multiline string with no indentation, returns the string", () => {
		const example = fmtCode`
const foo = {};
const bar = {};
foo.bar = bar;
`;
		expect(example).toBe("const foo = {};\nconst bar = {};\nfoo.bar = bar;");
	});

	test("given a multiline string with indentation, returns the string with indentation removed", () => {
		const example = fmtCode`
											const foo = {};
											const bar = {};
											foo.bar = bar;
											`;
		expect(example).toBe("const foo = {};\nconst bar = {};\nfoo.bar = bar;");
	});

	test("givenv a fmtCode block without indentation, returns the string", () => {
		const example = fmtCode`
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
		`;

		const lines = example.split("\n");
		expect(lines).toMatchInlineSnapshot(`
			[
			  "const http = require('http');",
			  "const ngrok = require("@ngrok/ngrok");",
			  "const server = http.createServer((req, res) => {",
			  "	res.writeHead(200);",
			  "	res.end("Hello!");",
			  "});",
			  "// Consumes authtoken from env automatically",
			  "ngrok.listen(server).then(() => {",
			  "	console.log("url:", server.tunnel.url());",
			  "});",
			]
		`);
	});

	test("givenv a fmtCode block with indentation, returns the string", () => {
		const example = fmtCode`
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
		`;

		const lines = example.split("\n");
		expect(lines).toMatchInlineSnapshot(`
			[
			  "const http = require('http');",
			  "const ngrok = require("@ngrok/ngrok");",
			  "const server = http.createServer((req, res) => {",
			  "	res.writeHead(200);",
			  "	res.end("Hello!");",
			  "});",
			  "// Consumes authtoken from env automatically",
			  "ngrok.listen(server).then(() => {",
			  "	console.log("url:", server.tunnel.url());",
			  "});",
			]
		`);
	});
});

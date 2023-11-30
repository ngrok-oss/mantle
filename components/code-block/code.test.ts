import { describe, expect, test } from "vitest";
import { code } from "./code";

describe("code", () => {
	test("given empty string, returns empty string", () => {
		expect(code``).toBe("");
	});

	test("given a single line string, returns the string", () => {
		expect(code`SELECT * FROM users`).toBe("SELECT * FROM users");
	});

	test("given a multiline string with no indentation, returns the string", () => {
		const example = code`
const foo = {};
const bar = {};
foo.bar = bar;
`;
		expect(example).toBe("const foo = {};\nconst bar = {};\nfoo.bar = bar;");
	});

	test("given a multiline string with indentation, returns the string with indentation removed", () => {
		const example = code`
											const foo = {};
											const bar = {};
											foo.bar = bar;
											`;
		expect(example).toBe("const foo = {};\nconst bar = {};\nfoo.bar = bar;");
	});

	test("givenv a code block without indentation, returns the string", () => {
		const example = code`
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
			  "const ngrok = require(\\"@ngrok/ngrok\\");",
			  "const server = http.createServer((req, res) => {",
			  "	res.writeHead(200);",
			  "	res.end(\\"Hello!\\");",
			  "});",
			  "// Consumes authtoken from env automatically",
			  "ngrok.listen(server).then(() => {",
			  "	console.log(\\"url:\\", server.tunnel.url());",
			  "});",
			]
		`);
	});

	test("givenv a code block with indentation, returns the string", () => {
		const example = code`
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
			  "const ngrok = require(\\"@ngrok/ngrok\\");",
			  "const server = http.createServer((req, res) => {",
			  "	res.writeHead(200);",
			  "	res.end(\\"Hello!\\");",
			  "});",
			  "// Consumes authtoken from env automatically",
			  "ngrok.listen(server).then(() => {",
			  "	console.log(\\"url:\\", server.tunnel.url());",
			  "});",
			]
		`);
	});
});

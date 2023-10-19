import type { Meta, StoryObj } from "@storybook/react";

import { CodeBlock, CodeBlockBody, CodeBlockContent, CodeBlockHeader } from ".";

const meta = {
	title: "CodeBlock",
	component: CodeBlock,
	tags: ["autodocs"],
} satisfies Meta<typeof CodeBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

const CodeIcon = () => (
	<svg className="inline" width="1em" height="1em" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M3.25 3C2.65326 3 2.08097 3.23705 1.65901 3.65901C1.23705 4.08097 1 4.65326 1 5.25V14.75C1 15.3467 1.23705 15.919 1.65901 16.341C2.08097 16.7629 2.65326 17 3.25 17H16.75C17.0455 17 17.3381 16.9418 17.611 16.8287C17.884 16.7157 18.1321 16.5499 18.341 16.341C18.5499 16.1321 18.7157 15.884 18.8287 15.611C18.9418 15.3381 19 15.0455 19 14.75V5.25C19 4.95453 18.9418 4.66194 18.8287 4.38896C18.7157 4.11598 18.5499 3.86794 18.341 3.65901C18.1321 3.45008 17.884 3.28434 17.611 3.17127C17.3381 3.0582 17.0455 3 16.75 3H3.25ZM4.193 11.752C4.12694 11.6788 4.07596 11.5933 4.04297 11.5004C4.00999 11.4075 3.99563 11.309 4.00074 11.2106C4.00585 11.1121 4.03032 11.0157 4.07274 10.9267C4.11517 10.8377 4.17473 10.758 4.248 10.692L6.128 9L4.248 7.307C4.17247 7.24174 4.11073 7.16207 4.06639 7.07264C4.02205 6.98322 3.996 6.88584 3.98978 6.78622C3.98356 6.6866 3.99729 6.58674 4.03016 6.4925C4.06303 6.39825 4.11438 6.31151 4.1812 6.23737C4.24803 6.16322 4.32898 6.10316 4.41931 6.06071C4.50965 6.01825 4.60755 5.99425 4.70728 5.99012C4.807 5.98599 4.90655 6.00181 5.00009 6.03664C5.09363 6.07148 5.17927 6.12464 5.252 6.193L7.752 8.443C7.82999 8.51332 7.89234 8.59924 7.93502 8.69519C7.9777 8.79114 7.99975 8.89499 7.99975 9C7.99975 9.10501 7.9777 9.20886 7.93502 9.30481C7.89234 9.40076 7.82999 9.48668 7.752 9.557L5.252 11.807C5.17882 11.8731 5.09334 11.924 5.00044 11.957C4.90754 11.99 4.80905 12.0044 4.7106 11.9993C4.61215 11.9941 4.51567 11.9697 4.42668 11.9273C4.3377 11.8848 4.25895 11.8253 4.193 11.752ZM9.75 10.25C9.55109 10.25 9.36032 10.329 9.21967 10.4697C9.07902 10.6103 9 10.8011 9 11C9 11.1989 9.07902 11.3897 9.21967 11.5303C9.36032 11.671 9.55109 11.75 9.75 11.75H12.25C12.4489 11.75 12.6397 11.671 12.7803 11.5303C12.921 11.3897 13 11.1989 13 11C13 10.8011 12.921 10.6103 12.7803 10.4697C12.6397 10.329 12.4489 10.25 12.25 10.25H9.75Z"
			fill="currentColor"
		/>
	</svg>
);

export const WithHeaderHighlightsAndHighlights: Story = {
	render: () => (
		<div className="max-w-96 mx-auto">
			<CodeBlock>
				<CodeBlockHeader className="flex items-center gap-2">
					<CodeIcon />
					hello.js
				</CodeBlockHeader>
				<CodeBlockBody>
					<CodeBlockContent language="js" showLineNumbers highlightLines={[1, 2, "10-12"]}>
						{`
const http  = require('http');
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
					</CodeBlockContent>
				</CodeBlockBody>
			</CodeBlock>
		</div>
	),
};

export const WithHeaderAndLineNumbers: Story = {
	render: () => (
		<div className="max-w-96 mx-auto">
			<CodeBlock>
				<CodeBlockHeader className="flex items-center gap-2">
					<CodeIcon />
					hello.js
				</CodeBlockHeader>
				<CodeBlockBody>
					<CodeBlockContent language="js" showLineNumbers>
						{`
const http  = require('http');
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
					</CodeBlockContent>
				</CodeBlockBody>
			</CodeBlock>
		</div>
	),
};

export const WithHeaderNoLineNumbers: Story = {
	render: () => (
		<div className="max-w-96 mx-auto">
			<CodeBlock>
				<CodeBlockHeader className="flex items-center gap-2">
					<CodeIcon />
					hello.js
				</CodeBlockHeader>
				<CodeBlockBody>
					<CodeBlockContent language="js">
						{`
const http  = require('http');
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
					</CodeBlockContent>
				</CodeBlockBody>
			</CodeBlock>
		</div>
	),
};

export const WithoutHeaderNoLineNumbers: Story = {
	render: () => (
		<div className="max-w-96 mx-auto">
			<CodeBlock>
				<CodeBlockBody>
					<CodeBlockContent language="js">
						{`
const http  = require('http');
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
					</CodeBlockContent>
				</CodeBlockBody>
			</CodeBlock>
		</div>
	),
};

export const WithoutHeaderNoLineNumbersButHighlights: Story = {
	render: () => (
		<div className="max-w-96 mx-auto">
			<CodeBlock>
				<CodeBlockBody>
					<CodeBlockContent language="js" highlightLines={[1, 2, "10-12"]}>
						{`
const http  = require('http');
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
					</CodeBlockContent>
				</CodeBlockBody>
			</CodeBlock>
		</div>
	),
};

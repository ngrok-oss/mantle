import type { Meta, StoryObj } from "@storybook/react";

import { CodeBlock, CodeBlockBody, CodeBlockContent, CodeBlockCopyButton, CodeBlockHeader, CodeBlockTitle } from ".";
import { code } from "./utils/code";

const meta = {
	title: "CodeBlock",
	component: CodeBlock,
	tags: ["autodocs"],
} satisfies Meta<typeof CodeBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

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

export const WithHeaderCommandLine: Story = {
	render: () => (
		<div className="mx-auto max-w-screen-md">
			<CodeBlock>
				<CodeBlockHeader className="flex items-center gap-1">
					<CommandLineIcon />
					<CodeBlockTitle>Command Line</CodeBlockTitle>
				</CodeBlockHeader>
				<CodeBlockBody>
					<CodeBlockCopyButton />
					<CodeBlockContent language="sh">
						{code`sudo unzip ~/Downloads/ngrok-v3-stable-darwin.zip -d /usr/local/bin`}
					</CodeBlockContent>
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
					<FileIcon />
					<CodeBlockTitle>ngrok-example.js</CodeBlockTitle>
				</CodeBlockHeader>
				<CodeBlockBody>
					<CodeBlockCopyButton />
					<CodeBlockContent language="js">
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
					</CodeBlockContent>
				</CodeBlockBody>
			</CodeBlock>
		</div>
	),
};

const status = 200;
const hello = "Hello!";
export const WithHeaderFileScrolling: Story = {
	render: () => (
		<div className="mx-auto max-w-screen-md">
			<CodeBlock>
				<CodeBlockHeader className="flex items-center gap-1">
					<FileIcon />
					<CodeBlockTitle>ngrok-example.js</CodeBlockTitle>
				</CodeBlockHeader>
				<CodeBlockBody>
					<CodeBlockCopyButton />
					<CodeBlockContent className="h-40" language="js">
						{code`
							const http = require('http');
							const ngrok = require("@ngrok/ngrok");

							const server = http.createServer((req, res) => {
								res.writeHead(${status});
								res.end(${hello});
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

export const WithoutHeaderFileAndNoCopyButton: Story = {
	render: () => (
		<div className="mx-auto max-w-screen-md">
			<CodeBlock>
				<CodeBlockBody>
					<CodeBlockContent language="js">
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
					</CodeBlockContent>
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
					<CodeBlockContent language="sh">
						{code`sudo unzip ~/Downloads/ngrok-v3-stable-darwin.zip -d /usr/local/bin absolute right-3 top-1.5 z-50 rounded-sm p-2 hover:bg-gray-200 focus:bg-gray-200`}
					</CodeBlockContent>
				</CodeBlockBody>
			</CodeBlock>
		</div>
	),
};

import type { Meta, StoryObj } from "@storybook/react";

import { CodeBlock, CodeBlockContent, CodeBlockCopyButton, CodeBlockLine } from "./code-block";

const meta = {
	title: "CodeBlock",
	component: CodeBlock,
	tags: ["autodocs"],
} satisfies Meta<typeof CodeBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
	render: () => (
		<div className="max-w-96 mx-auto">
			<CodeBlock>
				<div>
					<CodeBlockCopyButton />
				</div>
				<CodeBlockContent>
					<CodeBlockLine>Asdf</CodeBlockLine>
					<CodeBlockLine>foo bar</CodeBlockLine>
					<CodeBlockLine>Bush did 911</CodeBlockLine>
				</CodeBlockContent>
			</CodeBlock>
		</div>
	),
};

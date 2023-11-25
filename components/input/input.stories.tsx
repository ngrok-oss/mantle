import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
	title: "Input",
	component: Input,
	tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
	render: (args) => <Input {...args} />,
	args: {
		placeholder: "Choose a username",
		state: "default",
	},
};

export const Danger: Story = {
	render: (args) => <Input {...args} />,
	args: {
		value: "@aaronshekey",
		state: "danger",
	},
};

export const Success: Story = {
	render: (args) => <Input {...args} />,
	args: {
		value: "@aaronshekey",
		state: "success",
	},
};

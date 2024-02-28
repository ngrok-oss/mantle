import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
	title: "Button",
	component: Button,
	tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Ghost: Story = {
	render: (args) => <Button {...args}>Button</Button>,
	args: {
		appearance: "ghost",
	},
};

export const Filled: Story = {
	render: (args) => <Button {...args}>Button</Button>,
	args: {
		appearance: "filled",
	},
};

export const Outlined: Story = {
	render: (args) => <Button {...args}>Button</Button>,
	args: {
		appearance: "outlined",
	},
};

export const GhostNeutral: Story = {
	render: (args) => <Button {...args}>Button</Button>,
	args: {
		appearance: "ghost",
		priority: "neutral",
	},
};

export const FilledNeutral: Story = {
	render: (args) => <Button {...args}>Button</Button>,
	args: {
		appearance: "filled",
		priority: "neutral",
	},
};

export const OutlinedNeutral: Story = {
	render: (args) => <Button {...args}>Button</Button>,
	args: {
		appearance: "outlined",
		priority: "neutral",
	},
};

export const GhostDanger: Story = {
	render: (args) => <Button {...args}>Button</Button>,
	args: {
		appearance: "ghost",
		priority: "danger",
	},
};

export const FilledDanger: Story = {
	render: (args) => <Button {...args}>Button</Button>,
	args: {
		appearance: "filled",
		priority: "danger",
	},
};

export const OutlinedDanger: Story = {
	render: (args) => <Button {...args}>Button</Button>,
	args: {
		appearance: "outlined",
		priority: "danger",
	},
};

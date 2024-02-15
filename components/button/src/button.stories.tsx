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

export const GhostMuted: Story = {
	render: (args) => <Button {...args}>Button</Button>,
	args: {
		appearance: "ghost",
		priority: "muted",
	},
};

export const FilledMuted: Story = {
	render: (args) => <Button {...args}>Button</Button>,
	args: {
		appearance: "filled",
		priority: "muted",
	},
};

export const OutlinedMuted: Story = {
	render: (args) => <Button {...args}>Button</Button>,
	args: {
		appearance: "outlined",
		priority: "muted",
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

export const OutlineDanger: Story = {
	render: (args) => <Button {...args}>Button</Button>,
	args: {
		appearance: "outline",
		priority: "danger",
	},
};

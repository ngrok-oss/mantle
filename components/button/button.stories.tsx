import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

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

export const Solid: Story = {
	render: (args) => <Button {...args}>Button</Button>,
	args: {
		appearance: "solid",
	},
};

export const Outline: Story = {
	render: (args) => <Button {...args}>Button</Button>,
	args: {
		appearance: "outline",
	},
};

export const GhostMuted: Story = {
	render: (args) => <Button {...args}>Button</Button>,
	args: {
		appearance: "ghost",
		priority: "muted",
	},
};

export const SolidMuted: Story = {
	render: (args) => <Button {...args}>Button</Button>,
	args: {
		appearance: "solid",
		priority: "muted",
	},
};

export const OutlineMuted: Story = {
	render: (args) => <Button {...args}>Button</Button>,
	args: {
		appearance: "outline",
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

export const SolidDanger: Story = {
	render: (args) => <Button {...args}>Button</Button>,
	args: {
		appearance: "solid",
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

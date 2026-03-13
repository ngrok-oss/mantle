"use client";

import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { useState } from "react";
import { describe, expect, test } from "vitest";
import { Command } from "./command.js";

/**
 * A minimal controlled Command.Dialog subject for testing open/close behavior.
 */
const CommandDialogSubject = ({ initialOpen = false }: { initialOpen?: boolean }) => {
	const [open, setOpen] = useState(initialOpen);

	return (
		<Command.Dialog.Root open={open} onOpenChange={setOpen}>
			<button type="button" onClick={() => setOpen(true)}>
				Open
			</button>
			<Command.Dialog.Content title="Test Command Palette">
				<Command.Input placeholder="Type a command or search..." />
				<Command.List>
					<Command.Empty>No results found.</Command.Empty>
					<Command.Group heading="Suggestions">
						<Command.Item>Calendar</Command.Item>
						<Command.Item>Search Emoji</Command.Item>
					</Command.Group>
					<Command.Separator />
					<Command.Group heading="Settings">
						<Command.Item>Profile</Command.Item>
						<Command.Item>Billing</Command.Item>
					</Command.Group>
				</Command.List>
			</Command.Dialog.Content>
		</Command.Dialog.Root>
	);
};

describe("Command.Dialog (browser)", () => {
	describe("open/close lifecycle", () => {
		test("pressing Escape closes the dialog", async () => {
			const user = userEvent.setup();
			render(<CommandDialogSubject initialOpen />);

			await waitFor(() => {
				expect(screen.getByText("Test Command Palette")).toBeInTheDocument();
			});

			await user.keyboard("{Escape}");

			await waitFor(() => {
				expect(screen.queryByText("Test Command Palette")).not.toBeInTheDocument();
			});
		});

		test("clicking the trigger button opens the dialog", async () => {
			const user = userEvent.setup();
			render(<CommandDialogSubject />);

			expect(screen.queryByText("Test Command Palette")).not.toBeInTheDocument();

			await user.click(screen.getByRole("button", { name: "Open" }));

			await waitFor(() => {
				expect(screen.getByText("Test Command Palette")).toBeInTheDocument();
			});
		});

		test("clicking the close button closes the dialog", async () => {
			const user = userEvent.setup();
			render(<CommandDialogSubject initialOpen />);

			await waitFor(() => {
				expect(screen.getByText("Test Command Palette")).toBeInTheDocument();
			});

			await user.click(screen.getByRole("button", { name: "Close Dialog" }));

			await waitFor(() => {
				expect(screen.queryByText("Test Command Palette")).not.toBeInTheDocument();
			});
		});
	});

	describe("Command.Separator auto-hide", () => {
		test("separator is visible when there is no active search query", async () => {
			render(<CommandDialogSubject initialOpen />);

			await waitFor(() => {
				expect(screen.getByText("Test Command Palette")).toBeInTheDocument();
			});

			expect(document.querySelector("[data-slot='command-separator']")).toBeInTheDocument();
		});

		test("separator is hidden when a search query is active", async () => {
			const user = userEvent.setup();
			render(<CommandDialogSubject initialOpen />);

			await waitFor(() => {
				expect(screen.getByText("Test Command Palette")).toBeInTheDocument();
			});

			await user.type(screen.getByPlaceholderText("Type a command or search..."), "cal");

			await waitFor(() => {
				expect(document.querySelector("[data-slot='command-separator']")).not.toBeInTheDocument();
			});
		});

		test("separator reappears when the search query is cleared", async () => {
			const user = userEvent.setup();
			render(<CommandDialogSubject initialOpen />);

			await waitFor(() => {
				expect(screen.getByText("Test Command Palette")).toBeInTheDocument();
			});

			const input = screen.getByPlaceholderText("Type a command or search...");
			await user.type(input, "cal");

			await waitFor(() => {
				expect(document.querySelector("[data-slot='command-separator']")).not.toBeInTheDocument();
			});

			await user.clear(input);

			await waitFor(() => {
				expect(document.querySelector("[data-slot='command-separator']")).toBeInTheDocument();
			});
		});
	});
});

import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { useState } from "react";
import { describe, expect, test } from "vitest";
import { Sheet } from "../sheet/sheet.js";
import { MultiSelect } from "./multi-select.js";

const snapshotAttributes = (element: HTMLElement) =>
	new Map(Array.from(element.attributes, ({ name, value }) => [name, value]));

const restoreAttributes = (element: HTMLElement, attributes: Map<string, string>) => {
	for (const { name } of Array.from(element.attributes)) {
		if (!attributes.has(name)) {
			element.removeAttribute(name);
		}
	}

	for (const [name, value] of attributes) {
		element.setAttribute(name, value);
	}
};

describe("MultiSelect", () => {
	test("renders the combobox input with placeholder", () => {
		render(
			<MultiSelect.Root>
				<MultiSelect.Trigger>
					<MultiSelect.TagValues />
					<MultiSelect.Input placeholder="Select items..." />
				</MultiSelect.Trigger>
				<MultiSelect.Content>
					<MultiSelect.Item value="apple">Apple</MultiSelect.Item>
					<MultiSelect.Item value="banana">Banana</MultiSelect.Item>
				</MultiSelect.Content>
			</MultiSelect.Root>,
		);
		expect(screen.getByRole("combobox")).toHaveAttribute("placeholder", "Select items...");
	});

	test("renders selected values as tags", () => {
		render(
			<MultiSelect.Root selectedValue={["apple", "banana"]} setSelectedValue={() => {}}>
				<MultiSelect.Trigger>
					<MultiSelect.TagValues />
					<MultiSelect.Input placeholder="Select items..." />
				</MultiSelect.Trigger>
				<MultiSelect.Content>
					<MultiSelect.Item value="apple">Apple</MultiSelect.Item>
					<MultiSelect.Item value="banana">Banana</MultiSelect.Item>
				</MultiSelect.Content>
			</MultiSelect.Root>,
		);
		expect(screen.getByText("apple")).toBeInTheDocument();
		expect(screen.getByText("banana")).toBeInTheDocument();
	});

	test("hides placeholder when values are selected", () => {
		render(
			<MultiSelect.Root selectedValue={["apple"]} setSelectedValue={() => {}}>
				<MultiSelect.Trigger>
					<MultiSelect.TagValues />
					<MultiSelect.Input placeholder="Select items..." />
				</MultiSelect.Trigger>
				<MultiSelect.Content>
					<MultiSelect.Item value="apple">Apple</MultiSelect.Item>
				</MultiSelect.Content>
			</MultiSelect.Root>,
		);
		expect(screen.getByRole("combobox")).not.toHaveAttribute("placeholder");
	});

	test("renders remove buttons for each selected tag", () => {
		render(
			<MultiSelect.Root selectedValue={["apple", "banana"]} setSelectedValue={() => {}}>
				<MultiSelect.Trigger>
					<MultiSelect.TagValues />
					<MultiSelect.Input placeholder="Select items..." />
				</MultiSelect.Trigger>
				<MultiSelect.Content>
					<MultiSelect.Item value="apple">Apple</MultiSelect.Item>
					<MultiSelect.Item value="banana">Banana</MultiSelect.Item>
				</MultiSelect.Content>
			</MultiSelect.Root>,
		);
		expect(screen.getByLabelText("Remove apple")).toBeInTheDocument();
		expect(screen.getByLabelText("Remove banana")).toBeInTheDocument();
	});

	test("renders the empty state when popover is open", () => {
		render(
			<MultiSelect.Root open>
				<MultiSelect.Trigger>
					<MultiSelect.TagValues />
					<MultiSelect.Input placeholder="Select items..." />
				</MultiSelect.Trigger>
				<MultiSelect.Content>
					<MultiSelect.Empty>No results found</MultiSelect.Empty>
				</MultiSelect.Content>
			</MultiSelect.Root>,
		);
		expect(screen.getByText("No results found")).toBeInTheDocument();
	});

	test("inside a modal sheet, portals the popover into the sheet content", async () => {
		const user = userEvent.setup();
		const bodyAttributes = snapshotAttributes(document.body);
		const documentElementAttributes = snapshotAttributes(document.documentElement);
		let unmount = () => {};

		try {
			({ unmount } = render(
				<Sheet.Root open>
					<Sheet.Content>
						<Sheet.Header>
							<Sheet.Title>Test Sheet</Sheet.Title>
						</Sheet.Header>
						<MultiSelect.Root>
							<MultiSelect.Trigger>
								<MultiSelect.TagValues />
								<MultiSelect.Input placeholder="Select items..." />
							</MultiSelect.Trigger>
							<MultiSelect.Content>
								<MultiSelect.Item value="apple">Apple</MultiSelect.Item>
								<MultiSelect.Item value="banana">Banana</MultiSelect.Item>
							</MultiSelect.Content>
						</MultiSelect.Root>
					</Sheet.Content>
				</Sheet.Root>,
			));

			await user.click(screen.getByRole("combobox"));
			const listbox = await screen.findByRole("listbox");
			const sheetContent = screen.getByRole("combobox").closest("[data-state='open']");

			expect(sheetContent?.contains(listbox)).toBe(true);

			await user.click(within(listbox).getByRole("option", { name: /Apple/ }));
			expect(screen.getByLabelText("Remove apple")).toBeInTheDocument();
		} finally {
			unmount();
			restoreAttributes(document.body, bodyAttributes);
			restoreAttributes(document.documentElement, documentElementAttributes);
		}
	});

	describe("keyboard navigation", () => {
		/**
		 * Stateful wrapper for keyboard nav tests — uses useState so that
		 * removeValue calls actually update the rendered tag list.
		 */
		const Subject = ({
			initialValues = ["apple", "banana", "cherry"],
		}: {
			initialValues?: string[];
		}) => {
			const [values, setValues] = useState(initialValues);
			return (
				<MultiSelect.Root selectedValue={values} setSelectedValue={setValues}>
					<MultiSelect.Trigger>
						<MultiSelect.TagValues />
						<MultiSelect.Input placeholder="Select items..." />
					</MultiSelect.Trigger>
					<MultiSelect.Content>
						<MultiSelect.Item value="apple">Apple</MultiSelect.Item>
						<MultiSelect.Item value="banana">Banana</MultiSelect.Item>
						<MultiSelect.Item value="cherry">Cherry</MultiSelect.Item>
					</MultiSelect.Content>
				</MultiSelect.Root>
			);
		};

		/**
		 * Finds a tag's option span via its remove button's aria-label, which is
		 * the most reliable anchor since the span's own accessible name varies by
		 * ARIA implementation.
		 */
		const getTagOption = (value: string): HTMLElement => {
			const removeBtn = screen.getByLabelText(`Remove ${value}`);
			const tagElement = removeBtn.closest<HTMLElement>('[role="option"]');
			if (tagElement == null) {
				throw new Error(`Tag option for "${value}" not found`);
			}
			return tagElement;
		};

		/**
		 * Waits for one rAF tick after the component's rAF has already been
		 * scheduled. Because the browser/happy-dom processes rAF callbacks
		 * FIFO, this resolves only after the focusTag callback has fired.
		 * Wrapped in act() so any resulting React state updates are flushed.
		 */
		const waitForRaf = () =>
			act(() => new Promise<void>((resolve) => requestAnimationFrame(() => resolve())));

		test("ArrowLeft from input focuses the first tag to the left of the input", () => {
			render(<Subject />);
			fireEvent.keyDown(screen.getByRole("combobox"), { key: "ArrowLeft" });
			expect(getTagOption("cherry")).toHaveFocus();
		});

		test("ArrowLeft on a non-first tag focuses the previous tag", async () => {
			const user = userEvent.setup();
			render(<Subject />);
			getTagOption("banana").focus();
			await user.keyboard("{ArrowLeft}");
			expect(getTagOption("apple")).toHaveFocus();
		});

		test("ArrowLeft on the first tag does not move focus", async () => {
			const user = userEvent.setup();
			render(<Subject />);
			getTagOption("apple").focus();
			await user.keyboard("{ArrowLeft}");
			expect(getTagOption("apple")).toHaveFocus();
		});

		test("ArrowRight on a non-last tag focuses the next tag", async () => {
			const user = userEvent.setup();
			render(<Subject />);
			getTagOption("apple").focus();
			await user.keyboard("{ArrowRight}");
			expect(getTagOption("banana")).toHaveFocus();
		});

		test("ArrowRight on the last tag focuses the input", async () => {
			const user = userEvent.setup();
			render(<Subject />);
			getTagOption("cherry").focus();
			await user.keyboard("{ArrowRight}");
			expect(screen.getByRole("combobox")).toHaveFocus();
		});

		test("Backspace on an empty input removes the last tag", async () => {
			const user = userEvent.setup();
			render(<Subject />);
			await user.click(screen.getByRole("combobox"));
			await user.keyboard("{Backspace}");
			expect(screen.queryByLabelText("Remove cherry")).not.toBeInTheDocument();
		});

		test("Backspace on the first tag with remaining tags focuses the new first tag", async () => {
			const user = userEvent.setup();
			render(<Subject />);
			getTagOption("apple").focus();
			await user.keyboard("{Backspace}");
			await waitForRaf();
			expect(screen.queryByLabelText("Remove apple")).not.toBeInTheDocument();
			expect(getTagOption("banana")).toHaveFocus();
		});

		test("Backspace on the only tag focuses the input", async () => {
			const user = userEvent.setup();
			render(<Subject initialValues={["apple"]} />);
			getTagOption("apple").focus();
			await user.keyboard("{Backspace}");
			await waitForRaf();
			expect(screen.queryByLabelText("Remove apple")).not.toBeInTheDocument();
			expect(screen.getByRole("combobox")).toHaveFocus();
		});

		test("Backspace on a non-first tag focuses the previous tag", async () => {
			const user = userEvent.setup();
			render(<Subject />);
			getTagOption("banana").focus();
			await user.keyboard("{Backspace}");
			await waitForRaf();
			expect(screen.queryByLabelText("Remove banana")).not.toBeInTheDocument();
			expect(getTagOption("apple")).toHaveFocus();
		});

		test("Delete on a non-last tag focuses the tag that slides into its index", async () => {
			const user = userEvent.setup();
			render(<Subject />);
			getTagOption("apple").focus();
			await user.keyboard("{Delete}");
			await waitForRaf();
			expect(screen.queryByLabelText("Remove apple")).not.toBeInTheDocument();
			expect(getTagOption("banana")).toHaveFocus();
		});

		test("Delete on the last tag focuses the input", async () => {
			const user = userEvent.setup();
			render(<Subject />);
			getTagOption("cherry").focus();
			await user.keyboard("{Delete}");
			await waitForRaf();
			expect(screen.queryByLabelText("Remove cherry")).not.toBeInTheDocument();
			expect(screen.getByRole("combobox")).toHaveFocus();
		});
	});

	test("given validation='error', renders trigger with data-validation='error'", () => {
		render(
			<MultiSelect.Root>
				<MultiSelect.Trigger data-testid="trigger" validation="error">
					<MultiSelect.TagValues />
					<MultiSelect.Input placeholder="Select items..." />
				</MultiSelect.Trigger>
				<MultiSelect.Content>
					<MultiSelect.Item value="apple">Apple</MultiSelect.Item>
				</MultiSelect.Content>
			</MultiSelect.Root>,
		);
		expect(screen.getByTestId("trigger")).toHaveAttribute("data-validation", "error");
	});
});

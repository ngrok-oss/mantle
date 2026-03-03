import { render, screen, waitFor, within } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { useState } from "react";
import { describe, expect, test } from "vitest";
import { MultiSelect } from "./multi-select.js";

describe("MultiSelect (browser)", () => {
	/**
	 * Stateful subject. `lockedValues` marks specific tags as non-removable;
	 * when non-empty a children render function is used so locked can be applied.
	 */
	const Subject = ({
		initialValues = [],
		lockedValues = [],
	}: {
		initialValues?: string[];
		lockedValues?: string[];
	}) => {
		const [values, setValues] = useState(initialValues);
		return (
			<MultiSelect.Root selectedValue={values} setSelectedValue={setValues}>
				<MultiSelect.Trigger>
					<MultiSelect.TagValues lockedValues={lockedValues} />
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

	/** Finds the listbox-scoped option by its visible label. */
	const getListboxOption = (label: RegExp | string) =>
		within(screen.getByRole("listbox")).getByRole("option", { name: label });

	/** Finds a tag's option element via its remove button's aria-label. */
	const getTagOption = (value: string): HTMLElement => {
		const removeBtn = screen.getByLabelText(`Remove ${value}`);
		const tagEl = removeBtn.closest<HTMLElement>('[role="option"]');
		if (tagEl == null) {
			throw new Error(`Tag option for "${value}" not found`);
		}
		return tagEl;
	};

	describe("popover lifecycle", () => {
		test("clicking the input opens the popover", async () => {
			const user = userEvent.setup();
			render(<Subject />);
			await user.click(screen.getByRole("combobox"));
			await waitFor(() => {
				expect(screen.getByRole("listbox")).toBeVisible();
			});
		});

		test("Escape closes the popover", async () => {
			const user = userEvent.setup();
			render(<Subject />);
			await user.click(screen.getByRole("combobox"));
			await waitFor(() => expect(screen.getByRole("listbox")).toBeVisible());
			await user.keyboard("{Escape}");
			await waitFor(() => {
				expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
			});
		});
	});

	describe("item selection", () => {
		test("clicking an item adds it as a tag", async () => {
			const user = userEvent.setup();
			render(<Subject />);
			await user.click(screen.getByRole("combobox"));
			await waitFor(() => expect(screen.getByRole("listbox")).toBeVisible());
			await user.click(getListboxOption(/Apple/));
			expect(screen.getByLabelText("Remove apple")).toBeInTheDocument();
		});

		test("clicking multiple items adds each as a tag", async () => {
			const user = userEvent.setup();
			render(<Subject />);
			await user.click(screen.getByRole("combobox"));
			await waitFor(() => expect(screen.getByRole("listbox")).toBeVisible());
			await user.click(getListboxOption(/Apple/));
			await user.click(getListboxOption(/Banana/));
			expect(screen.getByLabelText("Remove apple")).toBeInTheDocument();
			expect(screen.getByLabelText("Remove banana")).toBeInTheDocument();
		});

		test("clicking a selected item deselects it and removes its tag", async () => {
			const user = userEvent.setup();
			render(<Subject initialValues={["apple"]} />);
			await user.click(screen.getByRole("combobox"));
			await waitFor(() => expect(screen.getByRole("listbox")).toBeVisible());
			expect(getListboxOption(/Apple/)).toHaveAttribute("aria-selected", "true");
			await user.click(getListboxOption(/Apple/));
			expect(screen.queryByLabelText("Remove apple")).not.toBeInTheDocument();
		});

		test("selected items are marked aria-selected in the popover", async () => {
			const user = userEvent.setup();
			render(<Subject initialValues={["apple", "banana"]} />);
			await user.click(screen.getByRole("combobox"));
			await waitFor(() => expect(screen.getByRole("listbox")).toBeVisible());
			expect(getListboxOption(/Apple/)).toHaveAttribute("aria-selected", "true");
			expect(getListboxOption(/Banana/)).toHaveAttribute("aria-selected", "true");
			expect(getListboxOption(/Cherry/)).toHaveAttribute("aria-selected", "false");
		});
	});

	describe("typeahead filtering", () => {
		test("typing updates the input value and keeps the popover open", async () => {
			const user = userEvent.setup();
			render(<Subject />);
			await user.click(screen.getByRole("combobox"));
			await waitFor(() => expect(screen.getByRole("listbox")).toBeVisible());
			await user.type(screen.getByRole("combobox"), "ban");
			await waitFor(() => {
				expect(screen.getByRole("combobox")).toHaveValue("ban");
				expect(screen.getByRole("listbox")).toBeVisible();
			});
		});

		test("selecting an item clears the input so all items show next time", async () => {
			const user = userEvent.setup();
			render(<Subject />);
			await user.click(screen.getByRole("combobox"));
			await user.type(screen.getByRole("combobox"), "app");
			await waitFor(() => expect(getListboxOption(/Apple/)).toBeInTheDocument());
			await user.click(getListboxOption(/Apple/));
			// Input should be reset to empty after selection
			expect(screen.getByRole("combobox")).toHaveValue("");
			// All other items should be visible again
			await waitFor(() => {
				expect(getListboxOption(/Banana/)).toBeInTheDocument();
				expect(getListboxOption(/Cherry/)).toBeInTheDocument();
			});
		});
	});

	describe("tag removal via click", () => {
		test("clicking the remove button removes only that tag", async () => {
			const user = userEvent.setup();
			render(<Subject initialValues={["apple", "banana"]} />);
			await user.click(screen.getByLabelText("Remove apple"));
			expect(screen.queryByLabelText("Remove apple")).not.toBeInTheDocument();
			expect(screen.getByLabelText("Remove banana")).toBeInTheDocument();
		});

		test("removing a tag can be followed by reopening the popover", async () => {
			const user = userEvent.setup();
			render(<Subject initialValues={["apple"]} />);
			await user.click(screen.getByLabelText("Remove apple"));
			expect(screen.queryByLabelText("Remove apple")).not.toBeInTheDocument();
			// The component is still functional — clicking the input reopens the popover
			await user.click(screen.getByRole("combobox"));
			await waitFor(() => expect(screen.getByRole("listbox")).toBeVisible());
		});
	});

	describe("popover stays open while interacting with trigger", () => {
		test("clicking a tag keeps the popover open", async () => {
			const user = userEvent.setup();
			render(<Subject initialValues={["apple"]} />);
			await user.click(screen.getByRole("combobox"));
			await waitFor(() => expect(screen.getByRole("listbox")).toBeVisible());
			await user.click(getTagOption("apple"));
			expect(screen.getByRole("listbox")).toBeVisible();
		});

		test("clicking one tag then another keeps the popover open", async () => {
			const user = userEvent.setup();
			render(<Subject initialValues={["apple", "banana"]} />);
			await user.click(screen.getByRole("combobox"));
			await waitFor(() => expect(screen.getByRole("listbox")).toBeVisible());
			await user.click(getTagOption("apple"));
			expect(screen.getByRole("listbox")).toBeVisible();
			await user.click(getTagOption("banana"));
			expect(screen.getByRole("listbox")).toBeVisible();
		});
	});

	describe("locked tags", () => {
		test("locked tag's remove button has aria-disabled", () => {
			render(<Subject initialValues={["apple"]} lockedValues={["apple"]} />);
			expect(screen.getByLabelText("Remove apple")).toHaveAttribute("aria-disabled", "true");
		});

		test("clicking a locked item in the popover does not deselect it", async () => {
			const user = userEvent.setup();
			render(<Subject initialValues={["apple"]} lockedValues={["apple"]} />);
			await user.click(screen.getByRole("combobox"));
			await waitFor(() => expect(screen.getByRole("listbox")).toBeVisible());
			expect(getListboxOption(/Apple/)).toHaveAttribute("aria-selected", "true");
			await user.click(getListboxOption(/Apple/));
			// Tag should still be present
			expect(screen.getByLabelText("Remove apple")).toBeInTheDocument();
			// Item should still be selected in the popover
			expect(getListboxOption(/Apple/)).toHaveAttribute("aria-selected", "true");
		});

		test("Backspace on a locked tag does not remove it", async () => {
			const user = userEvent.setup();
			render(<Subject initialValues={["apple"]} lockedValues={["apple"]} />);
			getTagOption("apple").focus();
			await user.keyboard("{Backspace}");
			expect(screen.getByLabelText("Remove apple")).toBeInTheDocument();
		});

		test("Delete on a locked tag does not remove it", async () => {
			const user = userEvent.setup();
			render(<Subject initialValues={["apple"]} lockedValues={["apple"]} />);
			getTagOption("apple").focus();
			await user.keyboard("{Delete}");
			expect(screen.getByLabelText("Remove apple")).toBeInTheDocument();
		});

		test("Backspace on empty input skips a locked last tag", async () => {
			const user = userEvent.setup();
			render(<Subject initialValues={["apple"]} lockedValues={["apple"]} />);
			await user.click(screen.getByRole("combobox"));
			await user.keyboard("{Backspace}");
			expect(screen.getByLabelText("Remove apple")).toBeInTheDocument();
		});

		test("Backspace on empty input with a locked last tag does not remove any tag", async () => {
			const user = userEvent.setup();
			// "banana" is last and locked — Backspace shakes it instead of removing anything
			render(<Subject initialValues={["apple", "banana"]} lockedValues={["banana"]} />);
			await user.click(screen.getByRole("combobox"));
			await user.keyboard("{Backspace}");
			expect(screen.getByLabelText("Remove apple")).toBeInTheDocument();
			expect(screen.getByLabelText("Remove banana")).toBeInTheDocument();
		});
	});

	describe("printable character jumps focus to input", () => {
		test("typing a printable char while a tag is focused moves focus to the input", async () => {
			const user = userEvent.setup();
			render(<Subject initialValues={["apple"]} />);
			getTagOption("apple").focus();
			expect(getTagOption("apple")).toHaveFocus();
			await user.keyboard("b");
			expect(screen.getByRole("combobox")).toHaveFocus();
		});

		test("ctrl+key while a tag is focused does not jump to the input", async () => {
			const user = userEvent.setup();
			render(<Subject initialValues={["apple"]} />);
			getTagOption("apple").focus();
			// ctrl+a is a common selection shortcut — should not be hijacked
			await user.keyboard("{Control>}a{/Control}");
			expect(getTagOption("apple")).toHaveFocus();
		});

		test("meta+key while a tag is focused does not jump to the input", async () => {
			const user = userEvent.setup();
			render(<Subject initialValues={["apple"]} />);
			getTagOption("apple").focus();
			await user.keyboard("{Meta>}a{/Meta}");
			expect(getTagOption("apple")).toHaveFocus();
		});
	});
});

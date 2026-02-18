import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MultiSelect } from "./multi-select.js";

describe("MultiSelect", () => {
	test("renders the combobox input with placeholder", () => {
		render(
			<MultiSelect.Root>
				<MultiSelect.Trigger>
					<MultiSelect.TagValues placeholder="Select items..." />
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
					<MultiSelect.TagValues placeholder="Select items..." />
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
					<MultiSelect.TagValues placeholder="Select items..." />
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
					<MultiSelect.TagValues placeholder="Select items..." />
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
					<MultiSelect.TagValues placeholder="Select items..." />
				</MultiSelect.Trigger>
				<MultiSelect.Content>
					<MultiSelect.Empty>No results found</MultiSelect.Empty>
				</MultiSelect.Content>
			</MultiSelect.Root>,
		);
		expect(screen.getByText("No results found")).toBeInTheDocument();
	});

	test("given validation='error', renders trigger with data-validation='error'", () => {
		render(
			<MultiSelect.Root>
				<MultiSelect.Trigger data-testid="trigger" validation="error">
					<MultiSelect.TagValues placeholder="Select items..." />
				</MultiSelect.Trigger>
				<MultiSelect.Content>
					<MultiSelect.Item value="apple">Apple</MultiSelect.Item>
				</MultiSelect.Content>
			</MultiSelect.Root>,
		);
		expect(screen.getByTestId("trigger")).toHaveAttribute("data-validation", "error");
	});
});

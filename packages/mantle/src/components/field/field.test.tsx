import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Field } from "./field.js";

describe("Field", () => {
	describe("Field.Item", () => {
		test("renders a div with role=group by default", () => {
			render(<Field.Item data-testid="root">content</Field.Item>);
			const root = screen.getByTestId("root");
			expect(root.tagName).toBe("DIV");
			expect(root).toHaveAttribute("role", "group");
			expect(root).toHaveTextContent("content");
		});

		test("forwards data-slot=field-item", () => {
			render(<Field.Item data-testid="root" />);
			expect(screen.getByTestId("root")).toHaveAttribute("data-slot", "field-item");
		});

		test("merges custom className while keeping default layout classes", () => {
			render(<Field.Item className="custom-class" data-testid="root" />);
			const root = screen.getByTestId("root");
			expect(root.className).toContain("custom-class");
			expect(root.className).toContain("flex");
			expect(root.className).toContain("flex-col");
			expect(root.className).toContain("gap-1.5");
		});

		test("forwards arbitrary data-* attributes", () => {
			render(<Field.Item data-custom="hello" data-testid="root" />);
			expect(screen.getByTestId("root")).toHaveAttribute("data-custom", "hello");
		});

		test("allows overriding role", () => {
			render(<Field.Item data-testid="root" role="region" />);
			expect(screen.getByTestId("root")).toHaveAttribute("role", "region");
		});

		test("renders as child element when asChild is true", () => {
			render(
				<Field.Item asChild>
					<section data-testid="root">content</section>
				</Field.Item>,
			);
			const root = screen.getByTestId("root");
			expect(root.tagName).toBe("SECTION");
			expect(root).toHaveAttribute("data-slot", "field-item");
			expect(root).toHaveAttribute("role", "group");
		});
	});

	describe("Field.Group", () => {
		test("renders a div with data-slot=field-group", () => {
			render(<Field.Group data-testid="group">content</Field.Group>);
			const group = screen.getByTestId("group");
			expect(group.tagName).toBe("DIV");
			expect(group).toHaveAttribute("data-slot", "field-group");
			expect(group.className).toContain("gap-4");
		});

		test("merges custom className", () => {
			render(<Field.Group className="custom-group" data-testid="group" />);
			expect(screen.getByTestId("group").className).toContain("custom-group");
		});

		test("renders as child element when asChild is true", () => {
			render(
				<Field.Group asChild>
					<section data-testid="group">content</section>
				</Field.Group>,
			);
			const group = screen.getByTestId("group");
			expect(group.tagName).toBe("SECTION");
			expect(group).toHaveAttribute("data-slot", "field-group");
		});
	});

	describe("Field.Set", () => {
		test("renders a fieldset with data-slot=field-set", () => {
			render(<Field.Set data-testid="set">content</Field.Set>);
			const set = screen.getByTestId("set");
			expect(set.tagName).toBe("FIELDSET");
			expect(set).toHaveAttribute("data-slot", "field-set");
		});

		test("applies fieldset reset classes", () => {
			render(<Field.Set data-testid="set" />);
			const set = screen.getByTestId("set");
			expect(set.className).toContain("border-0");
			expect(set.className).toContain("p-0");
			expect(set.className).toContain("min-w-0");
		});

		test("renders as child element when asChild is true", () => {
			render(
				<Field.Set asChild>
					<section data-testid="set">content</section>
				</Field.Set>,
			);
			const set = screen.getByTestId("set");
			expect(set.tagName).toBe("SECTION");
			expect(set).toHaveAttribute("data-slot", "field-set");
		});
	});

	describe("Field.Legend", () => {
		test("renders a legend with data-slot=field-legend", () => {
			render(
				<Field.Set>
					<Field.Legend data-testid="legend">Title</Field.Legend>
				</Field.Set>,
			);
			const legend = screen.getByTestId("legend");
			expect(legend.tagName).toBe("LEGEND");
			expect(legend).toHaveAttribute("data-slot", "field-legend");
			expect(legend).toHaveTextContent("Title");
		});

		test("merges custom className while keeping label typography", () => {
			render(
				<Field.Set>
					<Field.Legend className="text-base" data-testid="legend">
						Title
					</Field.Legend>
				</Field.Set>,
			);
			const legend = screen.getByTestId("legend");
			expect(legend.className).toContain("text-base");
			expect(legend.className).toContain("text-strong");
			expect(legend.className).toContain("font-medium");
		});

		test("renders as child element when asChild is true", () => {
			render(
				<Field.Set>
					<Field.Legend asChild>
						<h2 data-testid="legend">Title</h2>
					</Field.Legend>
				</Field.Set>,
			);
			const legend = screen.getByTestId("legend");
			expect(legend.tagName).toBe("H2");
			expect(legend).toHaveAttribute("data-slot", "field-legend");
		});
	});

	describe("Field.Description", () => {
		test("renders a p with data-slot=field-description", () => {
			render(<Field.Description data-testid="desc">help</Field.Description>);
			const description = screen.getByTestId("desc");
			expect(description.tagName).toBe("P");
			expect(description).toHaveAttribute("data-slot", "field-description");
			expect(description).toHaveTextContent("help");
		});

		test("applies muted body color and small text by default", () => {
			render(<Field.Description data-testid="desc">help</Field.Description>);
			const description = screen.getByTestId("desc");
			expect(description.className).toContain("text-body");
			expect(description.className).toContain("text-sm");
		});

		test("merges custom className", () => {
			render(
				<Field.Description className="text-xs" data-testid="desc">
					help
				</Field.Description>,
			);
			const description = screen.getByTestId("desc");
			expect(description.className).toContain("text-xs");
			expect(description.className).toContain("text-body");
		});

		test("renders as child element when asChild is true", () => {
			render(
				<Field.Description asChild>
					<span data-testid="desc">help</span>
				</Field.Description>,
			);
			const description = screen.getByTestId("desc");
			expect(description.tagName).toBe("SPAN");
			expect(description).toHaveAttribute("data-slot", "field-description");
			expect(description.className).toContain("text-body");
		});

		test("carries the auto -mt-1.5 collapse rule for following a Field.Error", () => {
			render(<Field.Description data-testid="desc">help</Field.Description>);
			expect(screen.getByTestId("desc").className).toContain(
				"[:where([data-slot=field-error]+&)]:-mt-1.5",
			);
		});
	});

	describe("Field.Error", () => {
		test("renders a p with data-slot=field-error", () => {
			render(<Field.Error data-testid="err">Required</Field.Error>);
			const error = screen.getByTestId("err");
			expect(error.tagName).toBe("P");
			expect(error).toHaveAttribute("data-slot", "field-error");
			expect(error).toHaveTextContent("Required");
		});

		test("applies danger color and small text by default", () => {
			render(<Field.Error data-testid="err">Required</Field.Error>);
			const error = screen.getByTestId("err");
			expect(error.className).toContain("text-danger-600");
			expect(error.className).toContain("text-sm");
		});

		test("merges custom className", () => {
			render(
				<Field.Error className="font-bold" data-testid="err">
					Required
				</Field.Error>,
			);
			const error = screen.getByTestId("err");
			expect(error.className).toContain("font-bold");
			expect(error.className).toContain("text-danger-600");
		});

		test("renders as child element when asChild is true", () => {
			render(
				<Field.Error asChild>
					<span data-testid="err">Required</span>
				</Field.Error>,
			);
			const error = screen.getByTestId("err");
			expect(error.tagName).toBe("SPAN");
			expect(error).toHaveAttribute("data-slot", "field-error");
			expect(error.className).toContain("text-danger-600");
		});

		test("carries the auto -mt-1.5 collapse rule for following another Field.Error", () => {
			render(<Field.Error data-testid="err">Required</Field.Error>);
			expect(screen.getByTestId("err").className).toContain(
				"[:where([data-slot=field-error]+&)]:-mt-1.5",
			);
		});
	});

	describe("Field.LabelRow", () => {
		test("renders a div with data-slot=field-label-row", () => {
			render(<Field.LabelRow data-testid="row">content</Field.LabelRow>);
			const row = screen.getByTestId("row");
			expect(row.tagName).toBe("DIV");
			expect(row).toHaveAttribute("data-slot", "field-label-row");
		});

		test("applies horizontal flex layout with center alignment and gap-1", () => {
			render(<Field.LabelRow data-testid="row" />);
			const row = screen.getByTestId("row");
			expect(row.className).toContain("flex");
			expect(row.className).toContain("items-center");
			expect(row.className).toContain("gap-1");
		});

		test("merges custom className", () => {
			render(<Field.LabelRow className="justify-between" data-testid="row" />);
			const row = screen.getByTestId("row");
			expect(row.className).toContain("justify-between");
			expect(row.className).toContain("gap-1");
		});

		test("renders as child element when asChild is true", () => {
			render(
				<Field.LabelRow asChild>
					<header data-testid="row">content</header>
				</Field.LabelRow>,
			);
			const row = screen.getByTestId("row");
			expect(row.tagName).toBe("HEADER");
			expect(row).toHaveAttribute("data-slot", "field-label-row");
		});
	});

	describe("Field.Help", () => {
		test("renders the default question-mark IconButton trigger", () => {
			render(
				<Field.Help defaultOpen={false}>
					<Field.HelpTrigger />
					<Field.HelpContent>help body</Field.HelpContent>
				</Field.Help>,
			);
			const trigger = screen.getByRole("button", { name: "Show help" });
			expect(trigger).toHaveAttribute("data-slot", "icon-button");
			expect(trigger).toHaveAttribute("data-size", "xs");
			expect(trigger).toHaveAttribute("data-appearance", "ghost");
			expect(trigger.className).toContain("text-body");
		});

		test("HelpTrigger forwards a custom label and merges className", () => {
			render(
				<Field.Help defaultOpen={false}>
					<Field.HelpTrigger label="What is this?" className="ml-2" />
					<Field.HelpContent>help body</Field.HelpContent>
				</Field.Help>,
			);
			const trigger = screen.getByRole("button", { name: "What is this?" });
			expect(trigger.className).toContain("ml-2");
			expect(trigger.className).toContain("text-body");
		});

		test("HelpContent renders the popover body when open", () => {
			render(
				<Field.Help defaultOpen>
					<Field.HelpTrigger />
					<Field.HelpContent>Copy this from the dashboard.</Field.HelpContent>
				</Field.Help>,
			);
			expect(screen.getByText("Copy this from the dashboard.")).toBeInTheDocument();
		});
	});

	describe("Field.Optional", () => {
		test("renders a span with default '(Optional)' content and data-slot", () => {
			render(<Field.Optional data-testid="opt" />);
			const optional = screen.getByTestId("opt");
			expect(optional.tagName).toBe("SPAN");
			expect(optional).toHaveAttribute("data-slot", "field-optional");
			expect(optional).toHaveTextContent("(Optional)");
		});

		test("applies muted color and small normal-weight typography", () => {
			render(<Field.Optional data-testid="opt" />);
			const optional = screen.getByTestId("opt");
			expect(optional.className).toContain("text-muted");
			expect(optional.className).toContain("text-sm");
			expect(optional.className).toContain("font-normal");
		});

		test("renders custom children when provided (e.g. for translation)", () => {
			render(<Field.Optional data-testid="opt">(Optionnel)</Field.Optional>);
			const optional = screen.getByTestId("opt");
			expect(optional).toHaveTextContent("(Optionnel)");
			expect(optional).not.toHaveTextContent("(Optional)");
		});

		test("merges custom className", () => {
			render(<Field.Optional className="italic" data-testid="opt" />);
			const optional = screen.getByTestId("opt");
			expect(optional.className).toContain("italic");
			expect(optional.className).toContain("text-muted");
		});

		test("renders as child element when asChild is true", () => {
			render(
				<Field.Optional asChild>
					<em data-testid="opt">(Optional)</em>
				</Field.Optional>,
			);
			const optional = screen.getByTestId("opt");
			expect(optional.tagName).toBe("EM");
			expect(optional).toHaveAttribute("data-slot", "field-optional");
			expect(optional.className).toContain("text-muted");
		});
	});

	describe("Field.ErrorList", () => {
		test("renders one Field.Error per entry in the array", () => {
			render(<Field.ErrorList errors={["First error", "Second error", "Third error"]} />);
			const errors = screen.getAllByText(/error$/);
			expect(errors).toHaveLength(3);
			for (const error of errors) {
				expect(error).toHaveAttribute("data-slot", "field-error");
			}
		});

		test("renders nothing when errors is undefined", () => {
			const { container } = render(<Field.ErrorList />);
			expect(container).toBeEmptyDOMElement();
		});

		test("renders nothing when errors is an empty array", () => {
			const { container } = render(<Field.ErrorList errors={[]} />);
			expect(container).toBeEmptyDOMElement();
		});

		test("filters out null, undefined, false, and empty string entries", () => {
			render(<Field.ErrorList errors={["A", null, undefined, "", false, "B"]} />);
			const errors = screen.getAllByText(/^[AB]$/);
			expect(errors).toHaveLength(2);
		});

		test("renders nothing when every entry is falsy", () => {
			const { container } = render(<Field.ErrorList errors={[null, undefined, "", false]} />);
			expect(container).toBeEmptyDOMElement();
		});

		test("renders ReactNode entries (not just strings)", () => {
			render(
				<Field.ErrorList
					errors={[
						<span key="a" data-testid="err-a">
							A
						</span>,
						<span key="b" data-testid="err-b">
							B
						</span>,
					]}
				/>,
			);
			expect(screen.getByTestId("err-a")).toBeInTheDocument();
			expect(screen.getByTestId("err-b")).toBeInTheDocument();
		});
	});

	describe("composition", () => {
		test("renders a full Set + Legend + Group + Item tree", () => {
			render(
				<Field.Set data-testid="set">
					<Field.Legend data-testid="legend">Account</Field.Legend>
					<Field.Group data-testid="group">
						<Field.Item data-testid="root-1">
							<label htmlFor="email">Email</label>
							<input id="email" name="email" />
							<Field.Error data-testid="err">Email is required.</Field.Error>
							<Field.Description data-testid="desc">
								We'll never share your email.
							</Field.Description>
						</Field.Item>
						<Field.Item data-testid="root-2">
							<label htmlFor="password">Password</label>
							<input id="password" name="password" type="password" />
						</Field.Item>
					</Field.Group>
				</Field.Set>,
			);

			expect(screen.getByTestId("set").tagName).toBe("FIELDSET");
			expect(screen.getByTestId("legend").tagName).toBe("LEGEND");
			expect(screen.getByTestId("group").tagName).toBe("DIV");
			expect(screen.getByTestId("root-1")).toHaveAttribute("role", "group");
			expect(screen.getByTestId("root-2")).toHaveAttribute("role", "group");
			expect(screen.getByTestId("err")).toHaveTextContent("Email is required.");
			expect(screen.getByTestId("desc")).toHaveTextContent("We'll never share your email.");
		});
	});
});

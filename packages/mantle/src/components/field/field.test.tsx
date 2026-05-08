import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import type { ComponentProps, ReactNode } from "react";
import { describe, expect, test } from "vitest";
import { Input } from "../input/input.js";
import { Field } from "./field.js";

const MockControl = (props: ComponentProps<"input">) => <input {...props} />;
MockControl.displayName = "Input";

const MockWrapper = ({ children }: { children: ReactNode }) => children;

describe("Field", () => {
	describe("refs", () => {
		test("forwards refs to the default rendered elements", () => {
			const setRef = createRef<HTMLFieldSetElement>();
			const legendRef = createRef<HTMLLegendElement>();
			const groupRef = createRef<HTMLDivElement>();
			const itemRef = createRef<HTMLDivElement>();
			const labelRowRef = createRef<HTMLDivElement>();
			const optionalRef = createRef<HTMLSpanElement>();
			const descriptionRef = createRef<HTMLParagraphElement>();
			const errorListRef = createRef<HTMLUListElement>();
			const errorRef = createRef<HTMLLIElement>();

			render(
				<Field.Set ref={setRef}>
					<Field.Legend ref={legendRef}>Account</Field.Legend>
					<Field.Group ref={groupRef}>
						<Field.Item ref={itemRef}>
							<Field.LabelRow ref={labelRowRef}>
								<label htmlFor="email">
									Email <Field.Optional ref={optionalRef} />
								</label>
							</Field.LabelRow>
							<input id="email" />
							<Field.ErrorList ref={errorListRef}>
								<Field.Error ref={errorRef}>Required</Field.Error>
							</Field.ErrorList>
							<Field.Description ref={descriptionRef}>Use your work email.</Field.Description>
						</Field.Item>
					</Field.Group>
				</Field.Set>,
			);

			expect(setRef.current?.tagName).toBe("FIELDSET");
			expect(legendRef.current?.tagName).toBe("LEGEND");
			expect(groupRef.current?.tagName).toBe("DIV");
			expect(itemRef.current?.tagName).toBe("DIV");
			expect(labelRowRef.current?.tagName).toBe("DIV");
			expect(optionalRef.current?.tagName).toBe("SPAN");
			expect(descriptionRef.current?.tagName).toBe("P");
			expect(errorListRef.current?.tagName).toBe("UL");
			expect(errorRef.current?.tagName).toBe("LI");
		});

		test("forwards refs through asChild parts", () => {
			const itemRef = createRef<HTMLDivElement>();
			const groupRef = createRef<HTMLDivElement>();
			const labelRowRef = createRef<HTMLDivElement>();

			render(
				<>
					<Field.Item asChild ref={itemRef}>
						<div data-testid="item-child">Item</div>
					</Field.Item>
					<Field.Group asChild ref={groupRef}>
						<div data-testid="group-child">Group</div>
					</Field.Group>
					<Field.LabelRow asChild ref={labelRowRef}>
						<div data-testid="label-row-child">Label row</div>
					</Field.LabelRow>
				</>,
			);

			expect(itemRef.current).toBe(screen.getByTestId("item-child"));
			expect(groupRef.current).toBe(screen.getByTestId("group-child"));
			expect(labelRowRef.current).toBe(screen.getByTestId("label-row-child"));
		});

		test("forwards refs through help trigger and content wrappers", () => {
			const triggerRef = createRef<HTMLButtonElement>();
			const contentRef = createRef<HTMLDivElement>();

			render(
				<Field.Help defaultOpen>
					<Field.HelpTrigger ref={triggerRef} />
					<Field.HelpContent ref={contentRef}>Help body</Field.HelpContent>
				</Field.Help>,
			);

			expect(triggerRef.current).toBe(screen.getByRole("button", { name: "Show help" }));
			expect(contentRef.current).toHaveTextContent("Help body");
		});
	});

	describe("Field.Item", () => {
		test("renders a plain div with no implicit role", () => {
			render(<Field.Item data-testid="root">content</Field.Item>);
			const root = screen.getByTestId("root");
			expect(root.tagName).toBe("DIV");
			expect(root).not.toHaveAttribute("role");
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

		test("allows opting in to a role when needed", () => {
			render(<Field.Item data-testid="root" role="group" />);
			expect(screen.getByTestId("root")).toHaveAttribute("role", "group");
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
		});

		test("auto-wires Field.Description to a descendant control", () => {
			render(
				<Field.Item>
					<label htmlFor="email">Email</label>
					<input id="email" name="email" />
					<Field.Description>We'll never share your email.</Field.Description>
				</Field.Item>,
			);

			const input = screen.getByRole("textbox", { name: "Email" });
			const description = screen.getByText("We'll never share your email.");
			expect(description).toHaveAttribute("id");
			expect(input).toHaveAttribute("aria-describedby", description.id);
			expect(input).toHaveAttribute("id", "email");
			expect(input).toHaveAttribute("name", "email");
		});

		test("merges generated description IDs with existing aria-describedby", () => {
			render(
				<Field.Item>
					<input aria-label="Email" aria-describedby="existing-help" />
					<Field.Description>Generated help.</Field.Description>
				</Field.Item>,
			);

			const input = screen.getByRole("textbox", { name: "Email" });
			const description = screen.getByText("Generated help.");
			expect(input).toHaveAttribute("aria-describedby", `existing-help ${description.id}`);
		});

		test("uses explicit Field.Description IDs when provided", () => {
			render(
				<Field.Item>
					<input aria-label="Email" />
					<Field.Description id="email-help">Generated help.</Field.Description>
				</Field.Item>,
			);

			expect(screen.getByRole("textbox", { name: "Email" })).toHaveAttribute(
				"aria-describedby",
				"email-help",
			);
		});

		test("auto-wires Field.ErrorList to a descendant control", () => {
			render(
				<Field.Item>
					<input aria-label="Email" />
					<Field.ErrorList data-testid="errors">
						<Field.Error>Email is required.</Field.Error>
					</Field.ErrorList>
				</Field.Item>,
			);

			const input = screen.getByRole("textbox", { name: "Email" });
			const errorList = screen.getByTestId("errors");
			expect(errorList).toHaveAttribute("id");
			expect(input).toHaveAttribute("aria-errormessage", errorList.id);
			expect(input).toHaveAttribute("aria-invalid", "true");
		});

		test("does not mark a control invalid for an empty Field.ErrorList", () => {
			render(
				<Field.Item>
					<input aria-label="Email" />
					<Field.ErrorList>{[]}</Field.ErrorList>
				</Field.Item>,
			);

			const input = screen.getByRole("textbox", { name: "Email" });
			expect(input).not.toHaveAttribute("aria-errormessage");
			expect(input).not.toHaveAttribute("aria-invalid");
		});

		test("keeps explicit aria-invalid on a control when errors are present", () => {
			render(
				<Field.Item>
					<input aria-label="Email" aria-invalid="false" />
					<Field.ErrorList>
						<Field.Error>Email is required.</Field.Error>
					</Field.ErrorList>
				</Field.Item>,
			);

			expect(screen.getByRole("textbox", { name: "Email" })).toHaveAttribute(
				"aria-invalid",
				"false",
			);
		});

		test("auto-wires nested controls inside labels", () => {
			render(
				<Field.Item>
					<label>
						Accept terms
						<input type="checkbox" />
					</label>
					<Field.Description>Required to continue.</Field.Description>
				</Field.Item>,
			);

			const checkbox = screen.getByRole("checkbox", { name: "Accept terms" });
			const description = screen.getByText("Required to continue.");
			expect(checkbox).toHaveAttribute("aria-describedby", description.id);
		});

		test("auto-wires mantle Input without replacing TanStack-friendly id and name props", () => {
			render(
				<Field.Item>
					<label htmlFor="account.email">Email</label>
					<Input id="account.email" name="account.email" />
					<Field.Description>Use your work email.</Field.Description>
				</Field.Item>,
			);

			const input = screen.getByRole("textbox", { name: "Email" });
			const description = screen.getByText("Use your work email.");
			expect(input).toHaveAttribute("aria-describedby", description.id);
			expect(input).toHaveAttribute("id", "account.email");
			expect(input).toHaveAttribute("name", "account.email");
		});

		test("auto-wires display-named controls nested in custom wrappers", () => {
			render(
				<Field.Item>
					<MockWrapper>
						<MockControl aria-label="Wrapped control" />
					</MockWrapper>
					<Field.Description>Wrapped help.</Field.Description>
				</Field.Item>,
			);

			const input = screen.getByRole("textbox", { name: "Wrapped control" });
			const description = screen.getByText("Wrapped help.");
			expect(input).toHaveAttribute("aria-describedby", description.id);
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

		test("carries the auto -mt-1.5 collapse rule for following a Field.ErrorList", () => {
			render(<Field.Description data-testid="desc">help</Field.Description>);
			expect(screen.getByTestId("desc").className).toContain(
				"[:where([data-slot=field-error-list]+&)]:-mt-1.5",
			);
		});
	});

	describe("Field.Error", () => {
		test("renders an li with data-slot=field-error", () => {
			render(<Field.Error data-testid="err">Required</Field.Error>);
			const error = screen.getByTestId("err");
			expect(error.tagName).toBe("LI");
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
		test("renders a ul with data-slot=field-error-list", () => {
			render(
				<Field.ErrorList data-testid="list">
					<Field.Error>Required</Field.Error>
				</Field.ErrorList>,
			);
			const list = screen.getByTestId("list");
			expect(list.tagName).toBe("UL");
			expect(list).toHaveAttribute("data-slot", "field-error-list");
		});

		test("sets role=list by default", () => {
			render(
				<Field.ErrorList data-testid="list">
					<Field.Error>Required</Field.Error>
				</Field.ErrorList>,
			);
			expect(screen.getByTestId("list")).toHaveAttribute("role", "list");
		});

		test("allows overriding the default role", () => {
			render(
				<Field.ErrorList data-testid="list" role="presentation">
					<Field.Error>Required</Field.Error>
				</Field.ErrorList>,
			);
			expect(screen.getByTestId("list")).toHaveAttribute("role", "presentation");
		});

		test("strips default ul styling so it composes inside Field.Item", () => {
			render(
				<Field.ErrorList data-testid="list">
					<Field.Error>Required</Field.Error>
				</Field.ErrorList>,
			);
			const list = screen.getByTestId("list");
			expect(list.className).toContain("list-none");
			expect(list.className).toContain("p-0");
			expect(list.className).toContain("m-0");
		});

		test("merges custom className", () => {
			render(
				<Field.ErrorList className="custom-list" data-testid="list">
					<Field.Error>Required</Field.Error>
				</Field.ErrorList>,
			);
			expect(screen.getByTestId("list").className).toContain("custom-list");
		});

		test("renders each Field.Error child as a list item", () => {
			render(
				<Field.ErrorList>
					<Field.Error>First error</Field.Error>
					<Field.Error>Second error</Field.Error>
					<Field.Error>Third error</Field.Error>
				</Field.ErrorList>,
			);
			const errors = screen.getAllByText(/error$/);
			expect(errors).toHaveLength(3);
			for (const error of errors) {
				expect(error.tagName).toBe("LI");
				expect(error).toHaveAttribute("data-slot", "field-error");
			}
		});

		test("renders nothing when given no children", () => {
			const { container } = render(<Field.ErrorList />);
			expect(container).toBeEmptyDOMElement();
		});

		test("renders nothing when an empty array is passed as children", () => {
			const { container } = render(<Field.ErrorList>{[]}</Field.ErrorList>);
			expect(container).toBeEmptyDOMElement();
		});

		test("renders nothing when conditional children resolve to false", () => {
			const { container } = render(<Field.ErrorList>{false}</Field.ErrorList>);
			expect(container).toBeEmptyDOMElement();
		});

		test("renders as child element when asChild is true", () => {
			render(
				<Field.ErrorList asChild>
					<ol data-testid="list">
						<Field.Error>Required</Field.Error>
					</ol>
				</Field.ErrorList>,
			);
			const list = screen.getByTestId("list");
			expect(list.tagName).toBe("OL");
			expect(list).toHaveAttribute("data-slot", "field-error-list");
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
							<Field.ErrorList data-testid="errs">
								<Field.Error data-testid="err">Email is required.</Field.Error>
							</Field.ErrorList>
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
			expect(screen.getByTestId("root-1").tagName).toBe("DIV");
			expect(screen.getByTestId("root-2").tagName).toBe("DIV");
			expect(screen.getByTestId("errs").tagName).toBe("UL");
			expect(screen.getByTestId("err").tagName).toBe("LI");
			expect(screen.getByTestId("err")).toHaveTextContent("Email is required.");
			expect(screen.getByTestId("desc")).toHaveTextContent("We'll never share your email.");
		});
	});
});

import { readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { Project } from "ts-morph";
import { describe, expect, test } from "vitest";
import type { ComponentPropSchema } from "../src/types/component-prop-schema.js";
import {
	branchRequiredness,
	classifyTypeKind,
	deriveExtendsLabel,
	detectHostElement,
	formatArtifact,
	generateArtifact,
	leafToPascal,
	normalizeTypeText,
	parseEnumDoc,
	parseExtendsTagTarget,
	resolveDefault,
	stringLiteralMembers,
} from "./generate-component-props.js";

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const PACKAGE_DIR = resolve(SCRIPT_DIR, "..");
const ARTIFACT_PATH = join(PACKAGE_DIR, "src", "__generated__", "component-props.json");

describe("leafToPascal", () => {
	test("converts kebab-case directory names to PascalCase identifiers", () => {
		expect(leafToPascal("button")).toBe("Button");
		expect(leafToPascal("data-table")).toBe("DataTable");
		expect(leafToPascal("otp-input")).toBe("OtpInput");
	});
});

describe("parseEnumDoc", () => {
	test("parses quoted-member bulleted body into member/meaning pairs", () => {
		const body = [
			'- `"button"`: The button has no default behavior.',
			'- `"reset"`: The button resets all the controls.',
			'- `"submit"`: The button submits the form data.',
		].join("\n");
		expect(parseEnumDoc(body)).toEqual([
			{ member: '"button"', meaning: "The button has no default behavior." },
			{ member: '"reset"', meaning: "The button resets all the controls." },
			{ member: '"submit"', meaning: "The button submits the form data." },
		]);
	});

	test("supports bare (unquoted) members and asterisk bullets", () => {
		const body = ["* start: align to the start", "* end: align to the end"].join("\n");
		expect(parseEnumDoc(body)).toEqual([
			{ member: "start", meaning: "align to the start" },
			{ member: "end", meaning: "align to the end" },
		]);
	});

	test("ignores non-bullet lines", () => {
		const body = ["intro prose without a bullet", '- `"a"`: meaning a'].join("\n");
		expect(parseEnumDoc(body)).toEqual([{ member: '"a"', meaning: "meaning a" }]);
	});

	test("returns an empty array when there are no bullets", () => {
		expect(parseEnumDoc("just some prose")).toEqual([]);
	});
});

describe("detectHostElement", () => {
	test("extracts the intrinsic element from ComponentProps<...>", () => {
		expect(detectHostElement('type ButtonProps = ComponentProps<"button"> & X')).toBe("button");
		expect(detectHostElement('type BadgeProps = ComponentProps<"span"> & Y')).toBe("span");
	});

	test("handles ComponentPropsWithoutRef and Omit wrappers", () => {
		expect(
			detectHostElement('type Props = Omit<ComponentPropsWithoutRef<"div">, "children"> & Z'),
		).toBe("div");
	});

	test("returns undefined when no intrinsic host element is referenced", () => {
		expect(detectHostElement("type Props = ComponentProps<typeof SomePrimitive>")).toBeUndefined();
	});
});

describe("normalizeTypeText", () => {
	test("strips undefined union members", () => {
		expect(normalizeTypeText('"start" | "end" | undefined')).toBe('"start" | "end"');
	});

	test("collapses false | true to boolean", () => {
		expect(normalizeTypeText("false | true | undefined")).toBe("boolean");
	});

	test("strips import(...) and React. qualifiers", () => {
		expect(normalizeTypeText('import("react").ReactNode')).toBe("ReactNode");
		expect(normalizeTypeText("React.ReactElement")).toBe("ReactElement");
	});

	test("leaves a plain non-union type intact", () => {
		expect(normalizeTypeText("string")).toBe("string");
	});

	test("reduces a single remaining member after dropping undefined", () => {
		expect(normalizeTypeText('"only" | undefined')).toBe('"only"');
	});
});

describe("stringLiteralMembers", () => {
	test("returns the literal members of a string-literal union", () => {
		expect(stringLiteralMembers('"start" | "end"')).toEqual(['"start"', '"end"']);
	});

	test("treats a single string literal as a one-member set", () => {
		expect(stringLiteralMembers('"muted"')).toEqual(['"muted"']);
	});

	test("returns empty for mixed unions that are not all string literals", () => {
		expect(stringLiteralMembers("string | number")).toEqual([]);
		expect(stringLiteralMembers("boolean")).toEqual([]);
	});
});

describe("classifyTypeKind", () => {
	test("classifies booleans", () => {
		expect(
			classifyTypeKind({
				typeText: "boolean",
				isBoolean: true,
				hasEnumDoc: false,
				enumMembers: [],
			}),
		).toBe("boolean");
	});

	test("classifies documented enums above plain unions", () => {
		expect(
			classifyTypeKind({
				typeText: '"button" | "submit"',
				isBoolean: false,
				hasEnumDoc: true,
				enumMembers: ['"button"', '"submit"'],
			}),
		).toBe("enum");
	});

	test("classifies ReactNode as node", () => {
		expect(
			classifyTypeKind({
				typeText: "ReactNode",
				isBoolean: false,
				hasEnumDoc: false,
				enumMembers: [],
			}),
		).toBe("node");
	});

	test("classifies string-literal unions as union", () => {
		expect(
			classifyTypeKind({
				typeText: '"start" | "end"',
				isBoolean: false,
				hasEnumDoc: false,
				enumMembers: ['"start"', '"end"'],
			}),
		).toBe("union");
	});

	test("classifies plain string and falls back to other", () => {
		expect(
			classifyTypeKind({
				typeText: "string",
				isBoolean: false,
				hasEnumDoc: false,
				enumMembers: [],
			}),
		).toBe("string");
		expect(
			classifyTypeKind({
				typeText: "() => void",
				isBoolean: false,
				hasEnumDoc: false,
				enumMembers: [],
			}),
		).toBe("other");
	});
});

describe("resolveDefault", () => {
	test("prefers cva over destructure over jsdoc", () => {
		expect(
			resolveDefault({
				name: "appearance",
				cvaDefaults: { appearance: '"outlined"' },
				destructureDefaults: { appearance: '"ghost"' },
				jsdocDefault: '"link"',
			}),
		).toEqual({ value: '"outlined"', source: "cva" });
	});

	test("falls through to destructure when not in cva", () => {
		expect(
			resolveDefault({
				name: "iconPlacement",
				cvaDefaults: {},
				destructureDefaults: { iconPlacement: '"start"' },
				jsdocDefault: undefined,
			}),
		).toEqual({ value: '"start"', source: "destructure" });
	});

	test("falls through to jsdoc when not in cva or destructure", () => {
		expect(
			resolveDefault({
				name: "size",
				cvaDefaults: {},
				destructureDefaults: {},
				jsdocDefault: '"l"',
			}),
		).toEqual({ value: '"l"', source: "jsdoc" });
	});

	test("returns undefined when no default is known", () => {
		expect(
			resolveDefault({
				name: "icon",
				cvaDefaults: {},
				destructureDefaults: {},
				jsdocDefault: undefined,
			}),
		).toBeUndefined();
	});
});

describe("branchRequiredness", () => {
	test("required when required in every branch", () => {
		expect(branchRequiredness([{ optional: false }, { optional: false }])).toEqual({
			required: true,
		});
	});

	test("optional when optional in every branch", () => {
		expect(branchRequiredness([{ optional: true }, { optional: true }])).toEqual({
			required: false,
		});
	});

	test("conditionally required surfaces branchInfo and stays optional overall", () => {
		expect(
			branchRequiredness([
				{ optional: true, discriminantWhen: "asChild is true" },
				{ optional: false, discriminantWhen: "asChild is not set" },
			]),
		).toEqual({ required: false, branchInfo: "Required when asChild is not set" });
	});

	test("handles an empty branch set", () => {
		expect(branchRequiredness([])).toEqual({ required: false });
	});
});

describe("deriveExtendsLabel", () => {
	test.each([
		["@radix-ui/react-dialog", "Content", "Radix Dialog.Content"],
		["@radix-ui/react-dialog", "Trigger", "Radix Dialog.Trigger"],
		["@radix-ui/react-alert-dialog", "Root", "Radix AlertDialog.Root"],
		["@radix-ui/react-select", "Item", "Radix Select.Item"],
		["@radix-ui/react-dropdown-menu", "Label", "Radix DropdownMenu.Label"],
		["@radix-ui/react-tabs", "Trigger", "Radix Tabs.Trigger"],
		["@radix-ui/react-popover", "Content", "Radix Popover.Content"],
		["@radix-ui/react-hover-card", "Content", "Radix HoverCard.Content"],
		["@radix-ui/react-tooltip", "Content", "Radix Tooltip.Content"],
		["@radix-ui/react-accordion", "Item", "Radix Accordion.Item"],
		["@radix-ui/react-radio-group", "Item", "Radix RadioGroup.Item"],
	])("maps %s.%s to the Radix label", (moduleSpecifier, memberName, expected) => {
		expect(deriveExtendsLabel({ moduleSpecifier, memberName })).toBe(expected);
	});

	test("maps @ariakit/react members to an Ariakit label", () => {
		expect(deriveExtendsLabel({ moduleSpecifier: "@ariakit/react", memberName: "Combobox" })).toBe(
			"Ariakit Combobox",
		);
		expect(
			deriveExtendsLabel({
				moduleSpecifier: "@ariakit/react/combobox",
				memberName: "ComboboxItem",
			}),
		).toBe("Ariakit ComboboxItem");
	});

	test("returns undefined for an unmapped module specifier", () => {
		expect(
			deriveExtendsLabel({ moduleSpecifier: "@radix-ui/react-toast", memberName: "Root" }),
		).toBeUndefined();
		expect(
			deriveExtendsLabel({ moduleSpecifier: "react", memberName: "Fragment" }),
		).toBeUndefined();
	});
});

describe("parseExtendsTagTarget", () => {
	test("reads the target from an `@extends Button` augments tag's raw text", () => {
		// TS parses `@extends Button` as an augments tag whose body is empty;
		// this is the raw `getText()` shape the generator must recover from.
		expect(parseExtendsTagTarget("@extends Button\n *\n * ")).toBe("Button");
	});

	test("supports the `@augments` alias and brace-wrapped targets", () => {
		expect(parseExtendsTagTarget("@augments {Foo} bar")).toBe("Foo");
		expect(parseExtendsTagTarget("@extends Button")).toBe("Button");
	});

	test("returns undefined when no target token follows the tag", () => {
		expect(parseExtendsTagTarget("@extends")).toBeUndefined();
		expect(parseExtendsTagTarget("@extends \n * ")).toBeUndefined();
	});
});

// Project-backed integration covering the discriminated-union flatten,
// own/inherited classification, and cva/destructure default resolution against
// the real Button source. Heavier, but the most faithful regression guard.
describe("generateArtifact (Button integration)", () => {
	const project = new Project({
		tsConfigFilePath: join(PACKAGE_DIR, "tsconfig.build.json"),
		skipAddingFilesFromTsConfig: false,
	});
	const artifact = generateArtifact(project);
	const button = artifact.components.find(
		(component): component is ComponentPropSchema => component.name === "Button",
	);

	test("emits a Button entry with the button host element", () => {
		expect(button).toBeDefined();
		expect(button?.hostElement).toBe("button");
		expect(button?.importPath).toBe("@ngrok/mantle/button");
	});

	test("flattens the asChild discriminated union into a single prop set", () => {
		const names = button?.props.map((prop) => prop.name) ?? [];
		expect(names).toEqual(
			expect.arrayContaining([
				"appearance",
				"asChild",
				"icon",
				"iconPlacement",
				"isLoading",
				"priority",
				"type",
			]),
		);
	});

	test("excludes inherited native DOM/aria props from props[]", () => {
		const names = button?.props.map((prop) => prop.name) ?? [];
		expect(names).not.toContain("className");
		expect(names).not.toContain("disabled");
		expect(names.some((name) => name.startsWith("aria-"))).toBe(false);
	});

	test("resolves appearance/priority/isLoading defaults from cva", () => {
		const byName = new Map(button?.props.map((prop) => [prop.name, prop]));
		expect(byName.get("appearance")).toMatchObject({
			default: '"outlined"',
			defaultSource: "cva",
			required: false,
		});
		expect(byName.get("priority")).toMatchObject({ default: '"default"', defaultSource: "cva" });
		expect(byName.get("isLoading")).toMatchObject({
			default: "false",
			defaultSource: "cva",
			typeKind: "boolean",
		});
	});

	test("resolves iconPlacement default from the destructure", () => {
		const iconPlacement = button?.props.find((prop) => prop.name === "iconPlacement");
		expect(iconPlacement).toMatchObject({ default: '"start"', defaultSource: "destructure" });
	});

	test("the type prop carries branchInfo, enumDoc, and the see URL", () => {
		const type = button?.props.find((prop) => prop.name === "type");
		expect(type?.required).toBe(false);
		expect(type?.typeKind).toBe("enum");
		expect(type?.branchInfo).toBe("Required when asChild is not set");
		expect(type?.enumDoc?.map((entry) => entry.member)).toEqual([
			'"button"',
			'"reset"',
			'"submit"',
		]);
		expect(type?.see).toContain(
			"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type",
		);
	});

	test("captures the asChild see URL", () => {
		const asChild = button?.props.find((prop) => prop.name === "asChild");
		expect(asChild?.see).toContain(
			"https://www.radix-ui.com/docs/primitives/guides/composition#composition",
		);
	});
});

// Project-backed integration for the compound (POJO-namespace) extraction phase
// against the real AlertDialog source. Covers the dotted-name keying, the
// extends-label derivation (@extends override, Radix package map, hostElement),
// and the relaxed emit gate (passthroughs with no own props still emit).
describe("generateArtifact (AlertDialog compound integration)", () => {
	const project = new Project({
		tsConfigFilePath: join(PACKAGE_DIR, "tsconfig.build.json"),
		skipAddingFilesFromTsConfig: false,
	});
	const artifact = generateArtifact(project);
	const byName = new Map(artifact.components.map((component) => [component.name, component]));

	test("emits one entry per callable member keyed by dotted name", () => {
		const names = artifact.components
			.map((component) => component.name)
			.filter((name) => name.startsWith("AlertDialog."));
		expect(names).toEqual([
			"AlertDialog.Action",
			"AlertDialog.Body",
			"AlertDialog.Cancel",
			"AlertDialog.Close",
			"AlertDialog.Content",
			"AlertDialog.Description",
			"AlertDialog.Footer",
			"AlertDialog.Header",
			"AlertDialog.Icon",
			"AlertDialog.Root",
			"AlertDialog.Title",
			"AlertDialog.Trigger",
		]);
	});

	test("Content derives the Radix extends label and the preferredWidth destructure default", () => {
		const content = byName.get("AlertDialog.Content");
		expect(content?.extends).toBe("Radix Dialog.Content");
		expect(content?.hostElement).toBeUndefined();
		expect(content?.importPath).toBe("@ngrok/mantle/alert-dialog");
		const preferredWidth = content?.props.find((prop) => prop.name === "preferredWidth");
		// Regression: the source destructure default is `"max-w-lg"`; the artifact
		// must reflect it (the hand-authored docs previously claimed "max-w-md").
		expect(preferredWidth).toMatchObject({ default: '"max-w-lg"', defaultSource: "destructure" });
	});

	test("passthrough members emit with a label and zero own props (relaxed emit gate)", () => {
		const trigger = byName.get("AlertDialog.Trigger");
		expect(trigger).toBeDefined();
		expect(trigger?.props).toEqual([]);
		expect(trigger?.extends).toBe("Radix Dialog.Trigger");

		for (const member of ["Title", "Description", "Close"]) {
			expect(byName.get(`AlertDialog.${member}`)?.extends).toBe(`Radix Dialog.${member}`);
		}
	});

	test("@extends override wins: Action/Cancel surface the bare Button label", () => {
		expect(byName.get("AlertDialog.Action")?.extends).toBe("Button");
		expect(byName.get("AlertDialog.Cancel")?.extends).toBe("Button");
		// The override does not suppress own props (Button-derived props still emit).
		expect(byName.get("AlertDialog.Action")?.props.length).toBeGreaterThan(0);
	});

	test("intrinsic members get a hostElement (mutually exclusive with extends)", () => {
		for (const member of ["Body", "Header", "Footer"]) {
			const schema = byName.get(`AlertDialog.${member}`);
			expect(schema?.hostElement).toBe("div");
			expect(schema?.extends).toBeUndefined();
			expect(schema?.props.map((prop) => prop.name)).toContain("asChild");
		}
	});

	test("the relaxation is scoped to compounds: the 18 single-component entries are unaffected", () => {
		const singles = artifact.components.filter((component) => !component.name.includes("."));
		expect(singles).toHaveLength(18);
		// The single-component gate is unchanged — every single entry has own props.
		for (const single of singles) {
			expect(single.props.length).toBeGreaterThan(0);
		}
	});
});

// Determinism guard for the compound phase: formatting a freshly generated
// artifact twice must yield byte-identical output (no checker-order dependence
// in the new extends/hostElement derivation).
describe("artifact idempotency", () => {
	test("formatArtifact(generateArtifact(...)) is byte-stable across repeated runs", async () => {
		const project = new Project({
			tsConfigFilePath: join(PACKAGE_DIR, "tsconfig.build.json"),
			skipAddingFilesFromTsConfig: false,
		});
		const first = await formatArtifact(generateArtifact(project));
		const second = await formatArtifact(generateArtifact(project));
		expect(second).toBe(first);
	});
});

// Drift guard: the committed artifact must byte-equal a fresh generation so CI
// (which runs the generator in prebuild) cannot ship a stale artifact. Uses the
// oxfmt-formatted output (the same path `main` writes), so the comparison also
// guarantees the committed file is fmt-clean.
describe("committed artifact drift", () => {
	test("committed component-props.json byte-equals a fresh generation", async () => {
		const project = new Project({
			tsConfigFilePath: join(PACKAGE_DIR, "tsconfig.build.json"),
			skipAddingFilesFromTsConfig: false,
		});
		const fresh = await formatArtifact(generateArtifact(project));
		const committed = readFileSync(ARTIFACT_PATH, "utf8");
		expect(committed).toBe(fresh);
	});
});

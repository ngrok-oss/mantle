# Mantle Component Namespace Migration Plan

## Status

**ACCEPTED** - Approved on 2025-07-11

- [ ] Proposed
- [x] Accepted  
- [ ] Implemented
- [ ] Superseded

## Decision Drivers

- Developer experience complaints about verbose imports
- Component naming inconsistency across the library
- Inspiration from successful patterns (Radix UI, Chakra UI)
- Need for better component discoverability
- Reduction of import statement complexity
- Tree-shaking and bundle size optimization (at the component boundary only)

## Overview

This document outlines the complete migration plan for converting Mantle components from individual named exports to namespace-based exports. The goal is to improve developer experience by allowing usage like `<Dialog.Root>` instead of importing many individual components.

## Background

### Current State

```tsx
// Current pattern
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@ngrok/mantle/dialog";

<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogTitle>Title</DialogTitle>
  </DialogContent>
</Dialog>
```

### Target State

```tsx
// New pattern
import { Dialog } from "@ngrok/mantle/dialog";

<Dialog>
  <Dialog.Trigger>Open</Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Title>Title</Dialog.Title>
  </Dialog.Content>
</Dialog>
```

## Alternatives Considered

### Option 1: Keep Current Pattern

- **Pros**: No migration needed, familiar to current users, no breaking changes
- **Cons**: Verbose imports, naming inconsistency, poor developer experience

### Option 2: Plain Object Namespace (like Radix)

```tsx
const Dialog = { Root, Content, Trigger };
// Usage: <Dialog.Root><Dialog.Content /></Dialog.Root>
```
- **Pros**: Simple, predictable, widely adopted pattern
- **Cons**: Root component not directly callable, requires `.Root` everywhere

### Option 3: Dual Export (both patterns)

```tsx
export { Dialog, DialogContent }; // Keep both old and new
```
- **Pros**: Backward compatible, gradual migration possible
- **Cons**: Confusing API, increases bundle size, maintenance burden

### **CHOSEN: Option 4: createNamespacedComponent Helper**
```tsx
const Dialog = createNamespacedComponent(Root, { Content, Trigger });
// Usage: <Dialog><Dialog.Content /></Dialog>
```
- **Pros**: Best developer experience, callable root + namespace, type-safe, clean API
- **Cons**: Requires migration, custom implementation to maintain

## Decision Outcome

We will migrate 16 Mantle components to use a namespace pattern where the main export is both callable (root component) and has sub-component properties, implemented using a custom `createNamespacedComponent` helper.

## Migration Scope

### Total Components: 16

- **Pure Namespace Pattern**: 13 components
- **Mixed Pattern**: 3 components (namespace + named exports)

### Excluded Components (DO NOT MIGRATE)

- **`button`** - Imported by many components, would break tree-shaking
- **`icon-button`** - Part of button package
- **`dialog/primitive`** - Used by `sheet` and `alert-dialog` as primitives

## Component Migration Lists

### Pure Namespace Pattern (13 components)

1. **`alert-dialog`** - 11 exports
   - `AlertDialog` → `AlertDialog` (root component)
   - `AlertDialogAction` → `AlertDialog.Action`
   - `AlertDialogBody` → `AlertDialog.Body`
   - `AlertDialogCancel` → `AlertDialog.Cancel`
   - `AlertDialogClose` → `AlertDialog.Close`
   - `AlertDialogContent` → `AlertDialog.Content`
   - `AlertDialogDescription` → `AlertDialog.Description`
   - `AlertDialogFooter` → `AlertDialog.Footer`
   - `AlertDialogHeader` → `AlertDialog.Header`
   - `AlertDialogIcon` → `AlertDialog.Icon`
   - `AlertDialogTitle` → `AlertDialog.Title`
   - `AlertDialogTrigger` → `AlertDialog.Trigger`

2. **`sheet`** - 13 exports
   - `Sheet` → `Sheet` (root component)
   - `SheetActions` → `Sheet.Actions`
   - `SheetBody` → `Sheet.Body`
   - `SheetClose` → `Sheet.Close`
   - `SheetCloseIconButton` → `Sheet.CloseIconButton`
   - `SheetContent` → `Sheet.Content`
   - `SheetDescription` → `Sheet.Description`
   - `SheetFooter` → `Sheet.Footer`
   - `SheetHeader` → `Sheet.Header`
   - `SheetTitle` → `Sheet.Title`
   - `SheetTitleGroup` → `Sheet.TitleGroup`
   - `SheetTrigger` → `Sheet.Trigger`

3. **`dropdown-menu`** - 16 exports
   - `DropdownMenu` → `DropdownMenu` (root component)
   - `DropdownMenuCheckboxItem` → `DropdownMenu.CheckboxItem`
   - `DropdownMenuContent` → `DropdownMenu.Content`
   - `DropdownMenuGroup` → `DropdownMenu.Group`
   - `DropdownMenuItem` → `DropdownMenu.Item`
   - `DropdownMenuLabel` → `DropdownMenu.Label`
   - `DropdownMenuPortal` → `DropdownMenu.Portal`
   - `DropdownMenuRadioGroup` → `DropdownMenu.RadioGroup`
   - `DropdownMenuRadioItem` → `DropdownMenu.RadioItem`
   - `DropdownMenuSeparator` → `DropdownMenu.Separator`
   - `DropdownMenuShortcut` → `DropdownMenu.Shortcut`
   - `DropdownMenuSub` → `DropdownMenu.Sub`
   - `DropdownMenuSubContent` → `DropdownMenu.SubContent`
   - `DropdownMenuSubTrigger` → `DropdownMenu.SubTrigger`
   - `DropdownMenuTrigger` → `DropdownMenu.Trigger`

4. **`table`** - 9 exports
   - `Table` → `Table` (root component)
   - `TableBody` → `Table.Body`
   - `TableCaption` → `Table.Caption`
   - `TableCell` → `Table.Cell`
   - `TableFoot` → `Table.Foot`
   - `TableHead` → `Table.Head`
   - `TableHeader` → `Table.Header`
   - `TableRoot` → `Table.Root` (note: TableRoot becomes Table.Root property)
   - `TableRow` → `Table.Row`

5. **`accordion`** - 6 exports
   - `Accordion` → `Accordion` (root component)
   - `AccordionContent` → `Accordion.Content`
   - `AccordionHeading` → `Accordion.Heading`
   - `AccordionItem` → `Accordion.Item`
   - `AccordionTrigger` → `Accordion.Trigger`
   - `AccordionTriggerIcon` → `Accordion.TriggerIcon`

6. **`tabs`** - 5 exports
   - `Tabs` → `Tabs` (root component)
   - `TabsContent` → `Tabs.Content`
   - `TabsList` → `Tabs.List`
   - `TabsTrigger` → `Tabs.Trigger`
   - `TabBadge` → `Tabs.Badge`

7. **`select`** - 8 exports
   - `Select` → `Select` (root component)
   - `SelectContent` → `Select.Content`
   - `SelectGroup` → `Select.Group`
   - `SelectItem` → `Select.Item`
   - `SelectLabel` → `Select.Label`
   - `SelectSeparator` → `Select.Separator`
   - `SelectTrigger` → `Select.Trigger`
   - `SelectValue` → `Select.Value`

8. **`combobox`** - 9 exports
   - `Combobox` → `Combobox` (root component)
   - `ComboboxContent` → `Combobox.Content`
   - `ComboboxGroup` → `Combobox.Group`
   - `ComboboxGroupLabel` → `Combobox.GroupLabel`
   - `ComboboxInput` → `Combobox.Input`
   - `ComboboxItem` → `Combobox.Item`
   - `ComboboxItemValue` → `Combobox.ItemValue`
   - `ComboboxSeparator` → `Combobox.Separator`

9. **`code-block`** - 8 exports
   - `CodeBlock` → `CodeBlock` (root component)
   - `CodeBlockBody` → `CodeBlock.Body`
   - `CodeBlockCode` → `CodeBlock.Code`
   - `CodeBlockCopyButton` → `CodeBlock.CopyButton`
   - `CodeBlockExpanderButton` → `CodeBlock.ExpanderButton`
   - `CodeBlockHeader` → `CodeBlock.Header`
   - `CodeBlockIcon` → `CodeBlock.Icon`
   - `CodeBlockTitle` → `CodeBlock.Title`

10. **`alert`** - 6 exports
    - `Alert` → `Alert` (root component)
    - `AlertContent` → `Alert.Content`
    - `AlertDescription` → `Alert.Description`
    - `AlertDismissIconButton` → `Alert.DismissIconButton`
    - `AlertIcon` → `Alert.Icon`
    - `AlertTitle` → `Alert.Title`

11. **`card`** - 5 exports
    - `Card` → `Card` (root component)
    - `CardBody` → `Card.Body`
    - `CardFooter` → `Card.Footer`
    - `CardHeader` → `Card.Header`
    - `CardTitle` → `Card.Title`

12. **`radio-group`** - 11 exports
    - `RadioGroup` → `RadioGroup` (root component)
    - `RadioButton` → `RadioGroup.Button`
    - `RadioButtonGroup` → `RadioGroup.ButtonGroup`
    - `RadioCard` → `RadioGroup.Card`
    - `RadioGroupList` → `RadioGroup.List`
    - `RadioIndicator` → `RadioGroup.Indicator`
    - `RadioInputSandbox` → `RadioGroup.InputSandbox`
    - `RadioItem` → `RadioGroup.Item`
    - `RadioItemContent` → `RadioGroup.ItemContent`
    - `RadioListItem` → `RadioGroup.ListItem`

13. **`popover`** - 5 exports
    - `Popover` → `Popover` (root component)
    - `PopoverAnchor` → `Popover.Anchor`
    - `PopoverClose` → `Popover.Close`
    - `PopoverContent` → `Popover.Content`
    - `PopoverTrigger` → `Popover.Trigger`

14. **`hover-card`** - 4 exports
    - `HoverCard` → `HoverCard` (root component)
    - `HoverCardContent` → `HoverCard.Content`
    - `HoverCardPortal` → `HoverCard.Portal`
    - `HoverCardTrigger` → `HoverCard.Trigger`

15. **`tooltip`** - 4 exports
    - `Tooltip` → `Tooltip` (root component)
    - `TooltipContent` → `Tooltip.Content`
    - `TooltipProvider` → `Tooltip.Provider`
    - `TooltipTrigger` → `Tooltip.Trigger`

16. **`media-object`** - 3 exports
    - `MediaObject` → `MediaObject` (root component)
    - `MediaObjectContent` → `MediaObject.Content`
    - `MediaObjectMedia` → `MediaObject.Media`

### Mixed Pattern (3 components)

These components have both namespace objects AND named exports:

1. **`pagination`**
   - **Namespace**: `CursorPagination` (root component), `CursorPagination.Buttons`, `CursorPagination.PageSizeSelect`, `CursorPagination.PageSizeValue`
   - **Named Exports**: `getOffsetPaginatedSlice`, `useOffsetPagination`

2. **`data-table`**
   - **Namespace**: `DataTable` (root component), `DataTable.ActionCell`, `DataTable.Body`, `DataTable.EmptyRow`, `DataTable.Head`, `DataTable.Header`, `DataTable.HeaderSortButton`, `DataTable.Row`, `DataTable.Rows`
   - **Named Exports**: `export * from "@tanstack/react-table"`

3. **`toast`**
   - **Namespace**: `Toast` (root component), `Toast.Action`, `Toast.Icon`, `Toast.Message`, `Toast.Toaster`
   - **Named Exports**: `makeToast`

## Implementation Details

### Using createNamespacedComponent Helper

The migration uses the `createNamespacedComponent` helper located at `packages/mantle/src/utils/create-namespaced-component.tsx`.

#### Helper Function Usage:

```tsx
import { createNamespacedComponent } from "../../utils/create-namespaced-component.js";

// Example implementation
const Dialog = createNamespacedComponent(
  Root,
  {
    Body,
    Close,
    CloseIconButton,
    Content,
    Description,
    Footer,
    Header,
    Overlay,
    Portal,
    Title,
    Trigger,
  },
  "Dialog",
);
```

### Migration Pattern

For each component, follow these steps:

#### Step 1: Rename Internal Components

```tsx
// Before
const Dialog = forwardRef<...>(...);
const DialogContent = forwardRef<...>(...);
const DialogHeader = forwardRef<...>(...);

// After
const Root = forwardRef<...>(...);
const Content = forwardRef<...>(...);
const Header = forwardRef<...>(...);
```

#### Step 2: Update Display Names

```tsx
// Before
Dialog.displayName = "Dialog";
DialogContent.displayName = "DialogContent";

// After
Root.displayName = "Dialog"; // Keep original display name for debugging
Content.displayName = "DialogContent"; // Keep original display name for debugging
```

#### Step 3: Create Namespace Object
```tsx
const Dialog = createNamespacedComponent(
  Root, // The main component becomes Root
  {
    Content,
    Header,
    // ... other components
  },
  "Dialog", // Display name for the namespace
);
```

#### Step 4: Update Exports
```tsx
// Before
export {
  Dialog,
  DialogContent,
  DialogHeader,
  // ... other individual exports
};

// After
export {
  Dialog, // Export the namespace object (which is both callable and has properties)
};
```

## Migration Phases

### Phase 1A: Component Migration (First Batch - 4 components)

**Components**: `alert-dialog`, `sheet`, `dropdown-menu`, `table`

**Timeline**: 1-2 weeks

**Steps**:
1. Update each component file following the migration pattern
2. Test component functionality
3. Run validation commands (see Validation Commands section)
4. Verify tree-shaking works correctly

### Phase 1B: WWW Docs Updates for Phase 1A

**Timeline**: 1 week

**Steps**:
1. Update React imports in `apps/www/app/routes/components.*.tsx`
2. Update JSX usage from individual components to namespace
3. Update code block examples (strings in markdown)
4. Update documentation prose
5. Test all examples work correctly

### Phase 2A: Component Migration (Second Batch - 5 components)

**Components**: `accordion`, `tabs`, `select`, `combobox`, `code-block`

**Timeline**: 1-2 weeks

**Steps**: Same as Phase 1A

### Phase 2B: WWW Docs Updates for Phase 2A

**Timeline**: 1 week

**Steps**: Same as Phase 1B

### Phase 3A: Component Migration (Third Batch - 4 components)

**Components**: `radio-group`, `popover`, `hover-card`, `tooltip`

**Timeline**: 1-2 weeks

**Steps**: Same as Phase 1A

### Phase 3B: WWW Docs Updates for Phase 3A

**Timeline**: 1 week

**Steps**: Same as Phase 1B

### Phase 4A: Mixed Pattern Components (Final Batch - 3 components)

**Components**: `pagination`, `data-table`, `toast`

**Timeline**: 1-2 weeks

**Special Considerations**:
- Maintain both namespace AND named exports
- Update import statements carefully
- Test utility functions still work

### Phase 4B: WWW Docs Updates for Phase 4A

**Timeline**: 1 week

**Steps**: Same as Phase 1B, but include mixed pattern examples

## Detailed Implementation Examples

### Example 1: Pure Namespace Pattern (Alert)

#### Before:

```tsx
// packages/mantle/src/components/alert/alert.tsx
const Alert = forwardRef<...>(...);
const AlertContent = forwardRef<...>(...);
const AlertIcon = forwardRef<...>(...);

export {
  Alert,
  AlertContent,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  AlertDismissIconButton,
};
```

#### After:

```tsx
// packages/mantle/src/components/alert/alert.tsx
import { createNamespacedComponent } from "../../utils/create-namespaced-component.js";

const Root = forwardRef<...>(...);
const Content = forwardRef<...>(...);
const Icon = forwardRef<...>(...);
const Title = forwardRef<...>(...);
const Description = forwardRef<...>(...);
const DismissIconButton = forwardRef<...>(...);

// Keep original display names for debugging
Root.displayName = "Alert";
Content.displayName = "AlertContent";
Icon.displayName = "AlertIcon";
Title.displayName = "AlertTitle";
Description.displayName = "AlertDescription";
DismissIconButton.displayName = "AlertDismissIconButton";

const Alert = createNamespacedComponent(
  Root,
  {
    Content,
    Description,
    DismissIconButton,
    Icon,
    Title,
  },
  "Alert",
);

export {
  Alert,
};
```

### Example 2: Mixed Pattern (Toast)

#### Before:

```tsx
// packages/mantle/src/components/toast/toast.tsx
const Toast = forwardRef<...>(...);
const ToastAction = forwardRef<...>(...);
const ToastIcon = forwardRef<...>(...);
const ToastMessage = forwardRef<...>(...);
const Toaster = forwardRef<...>(...);

function makeToast(children: ReactNode, options?: MakeToastOptions) {
  // ... implementation
}

export {
  makeToast,
  Toast,
  ToastAction,
  Toaster,
  ToastIcon,
  ToastMessage,
};
```

#### After:

```tsx
// packages/mantle/src/components/toast/toast.tsx
import { createNamespacedComponent } from "../../utils/create-namespaced-component.js";

const Root = forwardRef<...>(...);
const Action = forwardRef<...>(...);
const Icon = forwardRef<...>(...);
const Message = forwardRef<...>(...);
const Toaster = forwardRef<...>(...);

function makeToast(children: ReactNode, options?: MakeToastOptions) {
  // ... implementation
}

// Keep original display names
Root.displayName = "Toast";
Action.displayName = "ToastAction";
Icon.displayName = "ToastIcon";
Message.displayName = "ToastMessage";
Toaster.displayName = "Toaster";

const Toast = createNamespacedComponent(
  Root,
  {
    Action,
    Icon,
    Message,
    Toaster,
  },
  "Toast",
);

export {
  makeToast, // Keep as named export
  Toast,     // Namespace object (both callable and has properties)
};
```

## WWW Documentation Updates

### File Locations

Update the following files in `apps/www/app/routes/`:
- `components.alert.tsx`
- `components.alert-dialog.tsx`
- `components.sheet.tsx`
- `components.dropdown-menu.tsx`
- `components.table.tsx`
- `components.accordion.tsx`
- `components.tabs.tsx`
- `components.select.tsx`
- `components.combobox.tsx`
- `components.code-block.tsx`
- `components.card.tsx`
- `components.radio-group.tsx`
- `components.popover.tsx`
- `components.hover-card.tsx`
- `components.tooltip.tsx`
- `components.media-object.tsx`
- `components.pagination.tsx`
- `components.data-table.tsx`
- `components.toast.tsx`

### Update Pattern

#### 1. Import Statements

```tsx
// Before
import {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@ngrok/mantle/alert";

// After
import { Alert } from "@ngrok/mantle/alert";
```

#### 2. JSX Usage

```tsx
// Before
<Alert>
  <AlertIcon />
  <AlertContent>
    <AlertTitle>Title</AlertTitle>
    <AlertDescription>Description</AlertDescription>
  </AlertContent>
</Alert>

// After
<Alert>
  <Alert.Icon />
  <Alert.Content>
    <Alert.Title>Title</Alert.Title>
    <Alert.Description>Description</Alert.Description>
  </Alert.Content>
</Alert>
```

#### 3. Code Block Examples

```tsx
// Before - in markdown strings
const exampleCode = `
import { Alert, AlertContent, AlertTitle } from "@ngrok/mantle/alert";

<Alert>
  <AlertContent>
    <AlertTitle>Example</AlertTitle>
  </AlertContent>
</Alert>
`;

// After - in markdown strings
const exampleCode = `
import { Alert } from "@ngrok/mantle/alert";

<Alert>
  <Alert.Content>
    <Alert.Title>Example</Alert.Title>
  </Alert.Content>
</Alert>
`;
```

## Validation Commands

Use these commands to validate your changes after each component migration:

### 1. Lint and Format

```bash
pnpm -w fmt-liint
```

### 2. Type Checking

```bash
pnpm -w typecheck
```

### 3. Build

```bash
pnpm -w build
```

### 4. Start WWW Dev Server

```bash
pnpm -w start
```
Then open http://localhost:3333 in your browser to test the components visually.

### 5. Automated Testing (Optional)

You can use Playwright or similar tools to test against the live dev server at http://localhost:3333.

## Testing Requirements

### Unit Tests

- [ ] All component functionality works as before
- [ ] Props are properly forwarded
- [ ] Refs work correctly
- [ ] Display names are preserved
- [ ] TypeScript types are correct

### Integration Tests

- [ ] Components compose correctly
- [ ] Event handlers work
- [ ] Styling is preserved
- [ ] Accessibility is maintained

### Build Tests

- [ ] All validation commands succeed (see Validation Commands section)
- [ ] Bundle size hasn't increased significantly

### Tree-Shaking Tests

- [ ] Importing single components doesn't pull in namespace
- [ ] Cross-component imports still work
- [ ] Bundle analyzer shows proper tree-shaking

### WWW Site Tests

- [ ] All component examples render correctly
- [ ] Interactive examples work
- [ ] Code examples are syntactically correct
- [ ] Hot reload works during development

## Quality Assurance Checklist

### Before Migration

- [ ] Identify all cross-component dependencies
- [ ] Run full test suite
- [ ] Document current bundle sizes
- [ ] Verify all examples work

### During Migration

- [ ] Test each component individually
- [ ] Run all validation commands
- [ ] Check React DevTools component names
- [ ] Test Hot Module Replacement

### After Migration

- [ ] Run full test suite
- [ ] Compare bundle sizes
- [ ] Test all www examples at http://localhost:3333
- [ ] Verify tree-shaking works
- [ ] Check component display names in React DevTools

## Troubleshooting Guide

### Common Issues

#### TypeScript Errors

**Problem**: TypeScript can't find component properties
**Solution**: Check that `createNamespacedComponent` is properly typed and imported

#### Component Not Rendering

**Problem**: Component returns blank/error
**Solution**: Verify that `Root` component is properly passed to `createNamespacedComponent`

#### Tree-Shaking Issues

**Problem**: Bundle size increased unexpectedly
**Solution**: Check for circular imports or accidental namespace imports

#### Hot Reload Not Working

**Problem**: Changes don't reflect during development
**Solution**: Verify `displayName` is set correctly on the namespace object

#### Cross-Component Imports Broken

**Problem**: Other components can't import sub-components
**Solution**: Check if component should be excluded from migration (like button, icon-button)

### Rollback Plan

If issues arise, components can be quickly rolled back:

1. Restore original exports in the component file
2. Restore individual component names
3. Update corresponding www documentation
4. Run tests to verify rollback

## Success Criteria

### Component Level

- [ ] All component functionality preserved
- [ ] TypeScript types work correctly
- [ ] Display names preserved for debugging
- [ ] Tree-shaking works properly

### Developer Experience

- [ ] Namespace pattern works as expected
- [ ] IDE autocomplete works
- [ ] Error messages are clear
- [ ] Hot reload works correctly

### Documentation

- [ ] All examples updated
- [ ] Code blocks syntactically correct
- [ ] Interactive examples work
- [ ] Migration guide available

### Performance

- [ ] Bundle size not significantly increased
- [ ] Tree-shaking works correctly
- [ ] No runtime performance regression
- [ ] Build times not significantly increased

## Timeline Summary

| Phase | Components | Duration | Description |
|-------|------------|----------|-------------|
| 1A    | 4          | 1-2 weeks | High priority components |
| 1B    | -          | 1 week    | WWW docs update |
| 2A    | 5          | 1-2 weeks | Medium priority components |
| 2B    | -          | 1 week    | WWW docs update |
| 3A    | 4          | 1-2 weeks | Lower priority components |
| 3B    | -          | 1 week    | WWW docs update |
| 4A    | 3          | 1-2 weeks | Mixed pattern components |
| 4B    | -          | 1 week    | WWW docs update |

**Total Estimated Timeline**: 8-12 weeks

## Getting Started

1. **Read this entire document** - Make sure you understand the migration pattern
2. **Review the `createNamespacedComponent` helper** - Understand how it works
3. **Start with Phase 1A** - Begin with `alert-dialog` component
4. **Test thoroughly** - Use the validation commands after each change
5. **Update documentation** - Don't forget the WWW site updates
6. **Ask questions** - If anything is unclear, ask before proceeding

## Notes for Junior Engineers

- **Take your time** - This is a large migration, accuracy is more important than speed
- **Test everything** - Run all validation commands after each change
- **Follow the pattern** - Use the examples provided, don't deviate
- **Document changes** - Keep notes of any issues or deviations
- **Ask for help** - If you're stuck, ask for assistance
- **Check your work** - Run all validation commands before considering a phase complete

## Consequences

### Positive

- Improved developer experience with cleaner imports
- Better component discoverability through namespace exploration
- Consistent naming patterns across the entire library
- Reduced cognitive load for new developers learning the API
- Better IDE autocomplete and IntelliSense support
- Alignment with industry standards (similar to Radix UI)

### Negative

- Large migration effort across codebase and documentation
- Breaking change requiring major version bump
- Temporary disruption during migration phases
- Custom helper function to maintain long-term
- Potential confusion during transition period
- Learning curve for existing users familiar with current pattern

### Neutral

- Documentation requires comprehensive updates
- WWW site examples need migration
- Bundle size impact should be minimal due to tree-shaking
- React DevTools component names preserved via displayName

Good luck with the migration! 🚀

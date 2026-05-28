---
"@ngrok/mantle": patch
---

Stabilize default prop references in `Alert`, `Field`, and `MultiSelect`. The default `<XIcon />` for `Alert.DismissIconButton`, the default `<QuestionIcon />` for `Field.HelpTrigger`, and the default `[]` for `MultiSelect.Root`'s `defaultSelectedValue` and `MultiSelect.TagValues`'s `lockedValues` are now hoisted to module scope so they keep referential equality across renders. No behavior or API change.

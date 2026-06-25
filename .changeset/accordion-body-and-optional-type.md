---
"@ngrok/mantle": patch
---

`Accordion` updates — a new `Accordion.Body` part and an optional `type`.

**`Accordion.Content` is split into a `Content` viewport plus a new `Accordion.Body`**, matching the `Content` + `Body` composition of `Dialog` and `Sheet`. `Accordion.Content` is now the zero-padding region that animates open and closed; the section's bottom padding moves to `Accordion.Body`. Keeping padding off the animating element is what lets a closed section collapse fully — a padded `h-0` border-box can't shrink below its own padding — and it gives you a dedicated element to restyle. The accordion no longer forces `text-sm` on its content or its trigger; both inherit the ambient text size now (set a text class on `Accordion.Body` or `Accordion.Trigger` where you need one).

- `Accordion.Content` no longer applies its own `pb-4` / `text-sm`. Wrap a section's content in `Accordion.Body` to keep the default bottom padding:

  ```tsx
  // Before
  <Accordion.Content>Two to five business days.</Accordion.Content>

  // After
  <Accordion.Content>
    <Accordion.Body>Two to five business days.</Accordion.Body>
  </Accordion.Content>
  ```

  Override `Accordion.Body`'s `className` (for example `pb-0` or `px-6`) to retune the padding; `cx` resolves last-wins over the defaults.

**`Accordion.Root`'s `type` prop is now optional and defaults to `"multiple"`.** Omitting `type` is the same as `type="multiple"`: sections open independently and opening one never closes another (and `value` / `defaultValue` / `onValueChange` are typed as string arrays). Set `type="single"` to opt into the accordion where opening a section auto-closes the previously open one. This is additive — existing call sites that pass `type` are unchanged — and mirrors the recent `Button` change where `type` became optional with a safe default.

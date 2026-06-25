---
"@ngrok/mantle": patch
---

fix(mantle): keep the Accordion trigger's focus ring from overlapping the body

When an open section's trigger was focused, the `ring-4` focus ring painted over
the first line of the body because the body sat flush against the bottom of the
trigger's box. The open-state trigger now trades 8px of its bottom padding for
matching top padding on `Accordion.Body`, moving that space outside the button
box to give the ring vertical clearance. The trigger→body gap stays a uniform
16px and the collapsed trigger keeps its symmetric `py-4` rhythm.

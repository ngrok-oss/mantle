---
"@ngrok/mantle": patch
---

fix(mantle): match Accordion item dividers to the Separator color

Accordion item dividers used `border-card-muted` (solid neutral), which differed
from the `Separator` component's translucent `gray-500/20` (→ `gray-600/20` in
dark, `black` in high-contrast). The dividers now mirror `Separator`'s exact
color so the two read as the same line throughout the design system.

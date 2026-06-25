---
"@ngrok/mantle": patch
---

fix(mantle): ease the Accordion trigger's padding in step with the open/close slide

The open-state `pb-2` padding swap (which gives the focus ring its vertical
clearance) was applied instantly, so the trigger's bottom padding — and the
ring's bottom edge — snapped 16px→8px at the start of opening and back on close,
jittering against the content's height animation. The padding now transitions on
the same 200ms/ease-out curve as `Accordion.Content`'s height, so it eases in
lockstep with the slide. `motion-reduce` disables the transition.

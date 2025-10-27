---
"@ngrok/mantle": patch
---

fix: restore text-size-inherit utility

Re-added `text-size-inherit` font-size utility that was accidentally removed in v0.57.3. This utility allows components to inherit font-size from their parent element.

**Note:** This utility is named `text-size-inherit` (not `text-inherit`) to avoid conflicts with Tailwind's standard `text-inherit` utility which controls color inheritance.

**Changes:**
- Added `--text-size-inherit: inherit;` to `@theme inline` block
- Added `text-size-inherit` to font-size class group in cx helper's tailwind-merge config
- Added tests for proper class merging with text-size-inherit

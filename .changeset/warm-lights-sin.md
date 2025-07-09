---
"@ngrok/mantle": patch
---

Fix bug where `setValueOnClick` prop was destructured (to set a default) but then never passed along and used (so the consumer could never override it).
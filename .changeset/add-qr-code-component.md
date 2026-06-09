---
"@ngrok/mantle": minor
---

Add the `QrCode` component — a scannable QR code that encodes its `value` with the dependency-free `uqr` library. Compose `QrCode.Root` with a `QrCode.Frame` wrapping a `QrCode.Pattern`, plus an optional `QrCode.Overlay` for a centered brand logo. Always renders black modules on a white background for scannability in any theme. The quiet-zone margin around the code is configurable via the `quietZone` prop (defaults to the spec-recommended `4`).

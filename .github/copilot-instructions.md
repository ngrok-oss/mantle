# Copilot PR Review Rules

- Always treat [AGENT.md](../AGENT.md) as the authoritative reference for repo structure, conventions, and workflows.
- Do not comment on code patterns or placeholders documented in AGENT.md (e.g., sentinel comments like `//,`).
- Assume formatting/linting is already enforced by `pnpm run fmt-lint`; do not duplicate those checks.
- Focus feedback on correctness, security, performance, and missing tests.
- Avoid suggesting changes to intentional patterns documented in AGENT.md.

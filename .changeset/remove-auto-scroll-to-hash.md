---
"@ngrok/mantle": minor
---

Remove `AutoScrollToHash` component and `useAutoScrollToHash` hook. This also removes `react-router` as a peer dependency of `@ngrok/mantle`. If you were using `AutoScrollToHash`, move the implementation into your app directly.


## 2024-05-19 - Deep Text Search Blocking Main Thread
**Learning:** In React components with deep textual searching (like `SearchModal.tsx` scanning all books, chapters, and verses), executing the filtering array methods synchronously on every keystroke blocks the main thread, causing severe input lag.
**Action:** Use `useDeferredValue` combined with `useMemo` for heavy client-side filtering instead of custom debounce logic. This keeps the input highly responsive by letting React interrupt the rendering of the heavy list when the user continues typing. Always pair this with a visual indicator (like an `opacity-50` class) when `query !== deferredQuery` to show the user that results are loading.

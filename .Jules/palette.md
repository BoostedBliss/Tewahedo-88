## 2026-11-10 - Interactive Elements Visibility for Keyboard Users
**Learning:** The pattern `group-hover:opacity-0` combined with `group-hover:opacity-100` hides interactive elements completely for keyboard users, making them inaccessible during tabbing. This pattern was found in ReaderView's verse action buttons.
**Action:** Always pair `opacity-0` with `focus-within:opacity-100` on the container so that when a keyboard user tabs into the hidden element, its parent becomes visible, ensuring sighted keyboard users can see the interactive elements they are focused on.

### Day 5: Forms, useEffect and localStorage
- Controlled inputs (`value` + `onChange`) and why React owns the form state
- Form submission with `preventDefault()` and basic validation
- `useEffect` and the dependency array (`fn`, `[]`, `[dep]`)
- Persisting data with `localStorage` (`JSON.stringify` / `JSON.parse`)
- Lazy initial state: `useState(() => ...)`
- Defensive coding with `try / catch` around storage access



- **Controlled form** to add income or expense with validation
- Conditional form fields (category shown only for expenses)
- **Data persistence** using `localStorage`, so data stays after refresh
- Reset data option

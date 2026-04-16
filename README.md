1. What is React and why do we use it?
React is a JavaScript library used to build reusable and dynamic user interfaces. It uses a component-based architecture and Virtual DOM to efficiently update the UI and improve performance.

2. What is the difference between props and state?
Props are used to pass data from parent to child components and are read-only, whereas state is used to manage dynamic data within a component and can be updated using setState or useState.

3. What is Virtual DOM and how does it improve performance?
Virtual DOM is a lightweight copy of the real DOM. When state changes, React creates a new Virtual DOM, compares it with the previous one (diffing), and updates only the changed parts in the real DOM, improving performance.

4. What is useEffect and what is dependency array?
useEffect is a React hook used to handle side effects like API calls, subscriptions, and DOM manipulation. It runs after render, and the dependency array controls when it executes — for example, an empty array runs it only once on mount.

5. What is the difference between useMemo and useCallback?
useMemo is used to memoize the result of an expensive computation and recomputes only when dependencies change, whereas useCallback memoizes a function so that the same function reference is preserved between renders. Both are used for performance optimization to prevent unnecessary recalculations or re-renders.

6. What is lifting state up? Give real example ?
Lifting state up is a pattern where state is moved to a common parent component so it can be shared between child components. The parent passes data and callback functions to children for communication.

7. const arr = [1, 2, 3];
const result = arr.map((num) => {
  if (num > 1) return num * 2;
});
console.log(result);

output: [undefined, 4, 6];
****UI Scenario Questions****
1. Search with Debounce
Scenario:
You have a search input that calls API on every keystroke. How will you optimize it?

Expected:
Debounce, useEffect + setTimeout OR lodash debounce

2. Large List Performance
Scenario:
You are rendering 10,000 items and UI is slow. What will you do?

Expected:
Virtualization (react-window), Pagination, useMemo, React.memo

3. Prevent Re-render
Scenario:
Child component is re-rendering unnecessarily. How will you fix it?

Expected: React.memo, useCallback, Avoid inline functions

***State Management Scenarios***
1. Share Data Between Components
Scenario:
Two sibling components need same data. What will you do?

Expected: Lift state up, Context API / Redux

2. Form Handling
Scenario:
You have a form with multiple inputs. How will you manage state?

Expected: Controlled components, Single state object

****API Handling Scenarios****
1. Multiple API Calls
Scenario: You need to call 3 APIs and show data together.

Expected: Promise.all(), Parallel calls

2. Loading & Error Handling
Scenario: How will you handle loading and error states?
Expected: loading, error, data

****Real-Time UI Problems****
1. Modal / Dropdown Closing
Scenario:
Close modal when clicking outside.

Expected: useRef, Event listener.

2. Infinite Scroll
Scenario:
Load more data when user scrolls.

Expected: Scroll event / Intersection Observer

3. Authentication Flow
Scenario: User logs in → protect routes
Expected: Context / Redux, Private routes

****Advanced Scenarios****
1. Avoid API Call on Every Render -> useEffect with dependency array

2. Optimize Expensive Calculation -> useMemo()

3. Reusable Component Design
Scenario: Create reusable button / input 
Expected: Props, Children, Configurable styles.
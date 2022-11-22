---
sidebar_position: 5
---

# [React] React Optimization

## useMemo vs React.memo vs useCallback

**TL;DR;**

- `useMemo` returns a memoized value.
- `useCallback` returns a memoized callback function.
- `React.Memo` is to memoize a component by using shallow comparison.

&nbsp;

#### `useMemo`

:keep expensive, resource intensive functions from needlessly running.
:the expensive function will only run when `count`is changed and not when todo's are added.

ex. `const calculation = useMemo(() => expensiveCalculation(count), [count]);`

https://www.w3schools.com/react/react_usememo.asp

#### `React.Memo`

:will cause React to skip rendering a component if its props have not changed by using shallow comparison.
:if values passed into memo are objects(functions/callbacks/objects), then `React.Memo` won’t work. (solution ⇒ useCallback to memoize those object props./)

[https://overreacted.io/before-you-memo/](https://overreacted.io/before-you-memo/)

Before using memo, maybe try to lift/ put down the state(that makes other irrelevant component's rerender).

#### `useCallback`

:to prevent a component from re-rendering unless its props have changed.

https://www.w3schools.com/react/react_usecallback.asp

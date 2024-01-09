# Documentation

Information about React, and how to use their features correctly.

## Composition
How to compose function, or compose smaller functions together.
This is done by passing props, or properties, from one component to another.
Composition is a more flexible and explicit way to reuse code, as it allows you to precisely control how components are connected and how their behavior is modified.
Composition promotes a modular design approach, as components are decoupled and can be reused in different contexts.

## Component

For better performance and avoid bugs in event handlers in Component is good to use 'curry' function.

When using hooks, use state hook to handle each information separately.

The `children` is part of `props` object

Another component can be passed via `props` to component (there are no limitations on what you can pass as props in React)


## Strict-Mode

Cause that application is re-rendered - is rendered twice


## useEffect

When 'deps' parameter is empty array, it means that effect will run only **once** after initial render (good for initialization)

## useMemo

When you're doing some calculation and want cache data?

## useRef

When accessing for some DOM element?
Can be used for mutable objects.

## useContext

When you want to subscribe for some data that can be accessible in whole application?

## useCallback


## useReducer


## AOT

Ahead of Time - 

## HOC / HOF

High Order Component / High order function 

https://www.robinwieruch.de/react-higher-order-components/

Can cover not wanted to use cases which can happen (empty data list, error problems, loading till data arrive, etc.)

Array arrow functions (`map(), filter()`) can be HOF?
Benefit is organizing code into smaller pieces

`const dummyFunc = (a) => (b) => (c) => { /* ... */ };`
`const x = dummyFunc(a)(b); // (c) is parameter for 'b' function`

Can be done with `compose()` function in more readable way

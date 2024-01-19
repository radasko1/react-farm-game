TODO


- create Task Window component
- create Task List component
- create Task component
- create Store Window component
- create Store List component
- create Store Item component

- check performance, if there's anything to improve or rewrite

- is there special place to have requests?


- Application structure
  - **Player component**
    - get data from server
    - pass props from component to below
    - no interaction needed - probably
  - **FieldList component**
    - render list of all fields
    - get data from server
    - pass props to FieldTile component
    - use interval to re-render all wanted field (special status)
  - **FieldTile component**
    - has interaction with a lot of variants
    - show data based on single prop



# Documentation

Information about React, and how to use their features correctly.

## Pattern
React function components are like basic functions - accept input (props) and return React elements on screen
It's good practise to extract large component into small REUSABLE pieces
Each component should have single purpose

## State
State holds data that may change over lifetime

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
**Prop drilling** = pass data through several layer of component to reach the one 

## Fetch Data
I've seen example, where they have custom hook to get data, which were assigned to constant in component

## Strict-Mode
Cause that application is re-rendered - is rendered twice


## useEffect
When 'deps' parameter is empty array, it means that effect will run only **once** after initial render (good for initialization)
When fetching data, and some `props` parameters are used there (or any other), should be part of `deps`
For better readability is recommended to use function with fetching inside `useEffect`

## useMemo
When you're doing some calculation and want cache data?

## useRef
When accessing for some DOM element?
Can be used for mutable objects.

## useContext
When you want to subscribe for some data that can be accessible in whole application, but only from top-down way.

## useCallback


## useReducer
TODO: can be used in many components? Probably via custom hook

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

## Controlled vs Uncontrolled
Controlled = form data is handled by React component (handled state by user input change)
Uncontrolled = form data is handled by DOM (the `input` element has `ref` attribute)

## S.O.L.I.D principles
S - each component has one job?
O - use composition over adding new features to the component
L - extend component behaviour instead of override it
I - 
D - 

## Functional programming

Currying = 
https://miro.medium.com/v2/resize:fit:576/1*OHN2sWFzuWY7gP_dqOQoeA.png
https://miro.medium.com/v2/resize:fit:557/1*aTHu_4UDNiKH-0S_fu-Ddg.png

---

react context - hydration
useffect and uselayouteffect
# React Calculator

A simple calculator built with plain React state (no external libraries).

## File structure

```
src/
├── App.jsx                     # entry component
├── components/
│   ├── Calculator.jsx          # composes Display + Keypad
│   ├── Display.jsx             # shows current value
│   ├── Keypad.jsx              # lays out all buttons
│   ├── Button.jsx              # single reusable button
│   └── calculator.css          # all styling
└── hooks/
    └── useCalculator.js        # all calculator logic/state
```

## How it's split up

- **useCalculator.js** owns all state and math (digit entry, decimal point,
  clear, sign toggle, percent, and chained +/−/×/÷ with `=`). The UI
  components are purely presentational — they just call the handlers this
  hook returns.
- **Button.jsx** is one generic button; `variant` (`number` / `operator` /
  `function`) and `active` control its look, so Keypad.jsx stays a plain
  list of buttons instead of repeating styling logic.
- **calculator.css** holds the whole visual design (a warm "paper tape"
  theme — cream monospace display, teal operators, dusty-rose function
  keys) separately from the component logic, so you can restyle without
  touching any JS.

## Using it in your own project

Drop the `src/` contents into an existing Create React App or Vite React
project (they already have React set up), then render `<App />` or just
`<Calculator />` directly wherever you like.

## Features

- Digits 0–9 and decimal point
- Add, subtract, multiply, divide — chainable like a phone calculator
  (e.g. `4 + 5 + 6 =`)
- Clear (`C`), sign toggle (`+/-`), percent (`%`)
- Divide-by-zero / invalid results show `Error` and clear on next input
- Active operator button highlights while pending

# 🧾 Notes on Custom React Rendering & Vite Integration

---

## 📌 1. Custom React Renderer (Vanilla JavaScript)

You can create your own lightweight renderer that mimics how React creates and mounts elements to the DOM.

### ✅ Example Code:

```js
function customRender(myReactComponent, target) {
    const ele = document.createElement(myReactComponent.tag);
    ele.innerHTML = myReactComponent.child;
    for (const prop in myReactComponent.props) {
        ele.setAttribute(prop, myReactComponent.props[prop]);
    }
    target.appendChild(ele);
}

const myReactComponent = {
    tag: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    child: 'Click me to go to google.com'
};

const target = document.getElementById('root');
customRender(myReactComponent, target);
```

### 📝 Output:

```html
<a href="https://www.google.com" target="_blank">
  Click me to go to google.com
</a>
```

---

## 🚀 2. Customizable React Project via Vite

Creating a React project using **Vite** allows greater flexibility and faster development compared to CRA.

### 🧱 Example Setup (`main.jsx`):

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import SayMyName from './Demo.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <SayMyName />
  </>
);
```

### 💡 Customizing the Render

You can render your own component functions directly:

```jsx
function CustomApp() {
  return (
    <>
      <h1>This is a custom app!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga commodi 
        necessitatibus voluptatibus ducimus vitae? Aspernatur quaerat sapiente 
        architecto dignissimos placeat, nesciunt enim ad, commodi laboriosam fuga 
        ipsa odit magnam dolor!
      </p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  CustomApp() // 🔁 Directly executing the function
);
```

---

## 🔍 3. JSX is Just Syntactic Sugar for React.createElement

React ultimately converts JSX to JavaScript object trees using `React.createElement`.

### ✅ Manual Element Creation:

```js
import react from 'react';
import { createRoot } from 'react-dom/client';

const domElement = react.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank'
  },
  'Click Me'
);

createRoot(document.getElementById('root')).render(domElement);
```

This is **functionally equivalent** to:

```jsx
<a href="https://www.google.com" target="_blank">Click Me</a>
```

---

## 🧠 Key Takeaways

| Concept                         | Description                                                                                          |
| ------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `customRender()`                | A basic function mimicking React’s rendering system using DOM APIs                                   |
| JSX                             | Transpiles to `React.createElement()` which builds a virtual DOM object                              |
| `render()` in React DOM         | Mounts the React component tree to a DOM node                                                        |
| Vite-based React Projects       | Easier to customize, faster HMR, no need to eject                                                    |
| Rendering Components vs Objects | You can pass either a component function (like `CustomApp()`) or a DOM-like object (`createElement`) |

---

Got it! Here’s a clear note explaining how you can inject variables in React elements and JSX, plus how JSX handles expressions:

---

# 📝 Injecting Variables in React Elements and JSX

---

## 1. Injecting Variables in `React.createElement`

When you create elements manually using `React.createElement`, you can pass children as subsequent arguments. These children can be strings, variables, or even nested elements.

### Example:

```js
import React from 'react';
import { createRoot } from 'react-dom/client';

const myVariable = 'Keshab Dey';

const domElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank',
  },
  'Click Me ',  // first child (string)
  myVariable    // second child (variable)
);

createRoot(document.getElementById('root')).render(domElement);
```

**Result:**
The rendered anchor will show:
**Click Me Keshab Dey**

---

## 2. Injecting Variables in JSX

In JSX, you inject variables and JavaScript **expressions** by wrapping them in curly braces `{}`.

### Example (`App.jsx`):

```jsx
function App() {
  const myVariable = 'Keshab Dey';
  return (
    <div>
      <h1>Hello, {myVariable}!</h1>
      <p>Welcome to React.</p>
    </div>
  );
}

export default App;
```

**Explanation:**

* Anything inside `{}` in JSX is evaluated as JavaScript.
* This means you can use variables, function calls, or any valid expression.
* Example: `{myVariable}`, `{2 + 2}`, `{user.name.toUpperCase()}`

---

## 3. Important Notes

* You **cannot** directly put raw JS statements (like `if`, `for`, `switch`) inside JSX braces. Only **expressions** are allowed.
* For conditional rendering, use ternary operators or short-circuit logic inside `{}`.

### Example:

```jsx
const isLoggedIn = true;

return (
  <div>
    {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
  </div>
);
```

---

### Summary

| Approach              | How to Inject Variables / Expressions  | Notes                                      |
| --------------------- | -------------------------------------- | ------------------------------------------ |
| `React.createElement` | Pass variables as children arguments   | Each argument after props is a child node  |
| JSX                   | Wrap variables/expressions inside `{}` | Supports any JS expression, not statements |

---




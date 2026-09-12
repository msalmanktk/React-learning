# React Fundamentals

---

## 1. Components

**Components:** React applications are entirely made out of components. These are essentially just **JavaScript functions**.

Components are the **building blocks of user interfaces in React**.

A component is a piece of UI that has:

- Its own **data**
- Its own **JavaScript logic**
- Its own **appearance** — how it looks and works

We build complex UI by building multiple components and combining them.

Components can be:

- Reused
- Nested inside each other
- Used to pass data between them

### Simple Example

```jsx
function Welcome() {
  return <h1>Hello World</h1>;
}
```

Here, `Welcome` is a component that returns a piece of UI.

---

# 2. What is JSX?

### Components = Data + Logic + Appearance

**JSX** is a **declarative syntax** to describe what components look like and how they work.

JSX is an extension of JavaScript that allows us to embed JavaScript, CSS, and React components into HTML-like syntax.

Each JSX element is converted into React element creation code.

We could use React **without JSX**, but JSX makes writing UI much easier and cleaner.

### Simple Example

```jsx
function App() {
  return <h1>Hello World</h1>;
}
```

Here, `<h1>Hello World</h1>` is JSX.

---

# 3. JSX is a Declarative Syntax

JSX is a **declarative syntax**.

There are two ways of thinking about building UI:

### 1. Imperative

**Manual DOM element selections and DOM traversing.**

We perform step-by-step DOM mutations until we reach the desired UI.

In simple words:

> We manually tell the browser **how** to create or change the UI.

### 2. Declarative

We describe **what the UI should look like using JSX based on current data**.

React is an abstraction away from the DOM. We normally don't touch the DOM directly.

Instead, we think of the UI as a **reflection of the current data**.

In simple words:

> We tell React **what the UI should look like**, and React takes care of updating the UI.

### Main Idea

```text
Imperative
    ↓
Tell the browser HOW to change the UI

Declarative
    ↓
Describe WHAT the UI should look like
```

---

# 4. Why Does React Make HTML, CSS and JavaScript Combine Together?

React combines HTML, CSS, and JavaScript because it unites the **layout, style, and logic** of a single user interface element into one self-contained file.

The main idea is that everything related to a particular UI feature can be kept together inside its component.

For example, a button can have its:

- UI
- Logic
- Styling

all related to the same component.

---

# 5. Separation of Concerns

React absolutely has **Separation of Concerns**, but it separates your code by **feature (components)** rather than strictly by technology (HTML/CSS/JS files).

Instead of separating everything only into:

```text
HTML
CSS
JavaScript
```

React commonly organizes the application into components:

```text
Navbar
Button
Card
Footer
```

Each component focuses on its own feature or part of the UI.

---

# 6. Props

**Props** are essentially how we pass data between components, and in particular from **parent components to child components**.

We can imagine props as being like a **communication channel between a parent and a child component**.

Props are used to pass data from parent components to child components.

Anything can be passed as props:

- Single values
- Arrays
- Objects
- Functions
- Even other components

### Small Example

```jsx
function Greeting({ name }) {
  return <h1>Hello {name}</h1>;
}

<Greeting name="Salman" />;
```

Here, `name="Salman"` is passed from the parent to the child as a prop.

---

# 7. How JSX Works

JSX works essentially like HTML, but we can enter **JavaScript mode** by using `{}` — for text or attributes.

We can place JavaScript **expressions** inside `{}`.

### Small Example

```jsx
<h1>{name}</h1>
```

Here, `{name}` allows us to use the JavaScript variable `name` inside JSX.

Statements are not allowed directly inside `{}`:

- `if/else`
- `for`
- etc.

A piece of JSX produces a **JavaScript expression**.

We can place other pieces of JSX inside `{}`.

We can write JSX anywhere inside a component:

- In conditional expressions
- Assign it to variables
- Pass it into functions

### Small Example

```jsx
const element = <h1>Hello</h1>;
```

Here, JSX is assigned to a variable.

---

# 8. JSX Root Element

A piece of JSX can only have **one root element**.

If you need more than one root element, use:

```jsx
<React.Fragment>
```

or the short syntax:

```jsx
<>
```

### Small Example

```jsx
<>
  <h1>Hello</h1>
  <p>Welcome</p>
</>
```

Both elements are grouped together without adding an extra HTML element.

---

# 9. Differences Between JSX and HTML

JSX looks very similar to HTML, but there are some important differences.

### `className` instead of HTML `class`

HTML:

```html
<div class="box"></div>
```

JSX:

```jsx
<div className="box"></div>
```

---

### Every Tag Needs to Be Closed

For example:

```jsx
<img />
<br />
```

---

### Event Handlers and Other Properties Use camelCase

React uses camelCase for event handlers and many other properties.

Examples:

```jsx
onClick;
onChange;
```

---

### CSS Inline Styles

CSS inline styles are written like this:

```jsx
style={{ ... }}
```

These CSS properties are also named using **camelCase**.

Example:

```jsx
<h1 style={{ fontSize: "20px" }}>Hello</h1>
```

---

### Comments

Comments inside JSX need to be written inside `{}`:

```jsx
{
  /* This is a comment */
}
```

---

# 10. Short-Circuiting `&&`

Short-circuiting with `&&` returns the **second value if the first value is true**.

For example:

```jsx
isOpen && "Yeah, open";
```

If:

```text
isOpen = true
```

then it produces:

```text
Yeah, open
```

If `isOpen` is false, the second value is not returned.

### Simple Rule

```text
true && value
      ↓
    value

false && value
      ↓
    false
```

This is commonly useful for conditional rendering.

---

# 11. Short-Circuiting `||`

Short-circuiting with `||` works like this:

If the **first one is true/truthy**, then it returns the first value.

If the first one is **false/falsy**, then it moves to the second one and returns it.

### Simple Rule

```text
First value is truthy
        ↓
Return first value

First value is falsy
        ↓
Move to second value
```

### Small Example

```jsx
const name = userName || "Guest";
```

If `userName` has a value, that value is used.

If `userName` is falsy, `"Guest"` is used.

---

# 12. Using `if/else` in Component `return()`

Hum `if/else` ko `return()` ke andar directly nahi likh sakte.

Iske bajaye hum **ternary operators** use karte hain in the return statement.

Asan lafzon me baat ye hai ke:

> `if/else` ek **"Statement"** hai (jo koi value nahi deta), jabkay **Ternary Operator** ek **"Expression"** hai (jo ek final value return karta hai).

React ke return ke andar hum sirf wahi cheez directly likh sakte hain jo koi **Value generate kare**.

### Small Example

```jsx
return <h1>{isOpen ? "Open" : "Closed"}</h1>;
```

Yahan ternary operator ek value produce kar raha hai.

---

# 13. React Fragments

**React Fragments** ek aisa feature hain jo aapko multiple JSX elements ko group karne ki ijazat deta hai bina kisi extra HTML element (jaise `<div>`) ko DOM me add kiye.

Simple lafzon me kahein to:

> Ye code ko wrapper to deta hai lekin browser ke DOM me koi naya tabahi ya fuzool `<div>` paida nahi karta.

### Humein Fragments ki Zaroorat Kyun Parti Hai?

React ka ek sakht rule hai:

> Aapka component hamesha ek **single root element/tree** return karna chahiye.

Agar aap ek se zyada sibling elements return karne ki koshish karenge, to React error de dega.

Instead of adding an unnecessary `<div>`, we can use a Fragment.

### Use

Short syntax:

```jsx
<>
  <h1>Hello</h1>
  <p>Welcome</p>
</>
```

Full syntax:

```jsx
<React.Fragment>
  <h1>Hello</h1>
  <p>Welcome</p>
</React.Fragment>
```

### Fragment with `.map()`

`<></>` or the full syntax can be used when grouping multiple elements.

**Full syntax (`<React.Fragment>`) becomes important when you use `.map()` and need to assign a unique `key` to the Fragment, but you don't want an extra `<div>`.**

Example:

```jsx
items.map((item) => (
  <React.Fragment key={item.id}>
    <h2>{item.name}</h2>
    <p>{item.description}</p>
  </React.Fragment>
));
```

---

# 14. Rendering

**Rendering:** Rendering ka matlab hai React Component ke code ko screen par actual HTML visual me convert karna.

Jab aapka React component run hota hai, to wo JSX (HTML jaisa code) return karta hai.

React is JSX ko process karta hai aur aapke browser ke screen par elements (text, buttons, divs) ko draw ya display karta hai.

Is poore process ko **Rendering** kehte hain.

### Simple Flow

```text
React Component
       ↓
      JSX
       ↓
React processes JSX
       ↓
UI displayed on screen
```

### Small Example

```jsx
function App() {
  return <h1>Hello World</h1>;
}
```

Yahan:

- `App` → React Component
- `<h1>Hello World</h1>` → JSX
- React JSX ko process karta hai
- UI browser ki screen par display hoti hai

### In Simple Words

> **Rendering ka matlab hai React ka component ke JSX ko process karke uska UI screen par display karna.**

### Important Clarification

Rendering ko sirf **"JSX ko HTML mein convert karna"** samajhna thora simplified explanation hai.

More accurately, React JSX se UI ki representation banata hai aur browser ke DOM ko required updates karta hai.

---

# Quick Revision

```text
Components
    ↓
Building blocks of React UI

JSX
    ↓
Declarative syntax for describing UI

Props
    ↓
Pass data from parent → child

Declarative
    ↓
Describe WHAT the UI should look like

&&
    ↓
Useful for conditional rendering

||
    ↓
Returns first truthy value, otherwise checks the next value

Ternary
    ↓
Conditional expression

Fragments
    ↓
Group JSX without adding an extra DOM element

Rendering
    ↓
React processes the component's JSX and displays the UI
```

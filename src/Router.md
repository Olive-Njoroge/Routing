# React Router Basics

Routing enables us to move between different pages in a single-page app without refreshing the whole page.  
(It enables you to create multiple pages in your single-page application.)

Without a router, your React app would be limited to a single page with no way to navigate between different views.

---

## Install React Router
```bash
pnpm add react-router-dom
````

---

## Core Components & Hooks

### **BrowserRouter**

* Enables routing in your app.
* Lets you define virtual routes inside your React app (e.g., `/`, `/about`, `/contacts`).

```js
import { BrowserRouter } from 'react-router-dom';
```

---

### **Link**

* Enables navigation by clicking (like `<a>` in HTML, but without reloading).
* Used to add links in a navbar or buttons that move the user to another page.

```js
import { Link } from 'react-router-dom';
```

---

### **useNavigate**

* Navigates programmatically with JS (no user click needed).
* Useful for redirecting users after a form submission, login, or when some condition is met.

```js
import { useNavigate } from 'react-router-dom';
```

---

### **Outlet**

* Acts as a placeholder for nested routes.
* Useful when you have a layout (e.g., Navbar + Footer) and want the middle part to change depending on the route.

```js
import { Outlet } from 'react-router-dom';
```

---

### **Routes**

* A container for all your routes.

```js
import { Routes } from 'react-router-dom';
```

---

### **Route**

* Defines what component shows at which URL.

Example:

```jsx
<Route path="/about" element={<About />} />
```

```js
import { Route } from 'react-router-dom';
```

---

### **Index**

* Represents the **default child route** (instead of repeating `/`).

```


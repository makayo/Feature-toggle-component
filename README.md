# Feature Toggle Component (React)

A simple React component demonstrating **conditional rendering** based on props. This project was built as part of an assignment to understand how React components can enable or disable features without using state.

---

## 🚀 Overview

# Feature Toggle Demo (React)

A lightweight React project demonstrating two different implementations of a feature toggle: one using a **functional component** and one using a **class-based component**. This assignment explores how React components can enable or disable UI features based on props — without relying on state or external libraries.

### Class-Based FeatureToggleClass
A React class component that performs the same logic using the `render()` method. It evaluates the `isEnabled` prop and either displays its children or returns `null`.

### Core Component API
Both components accept the following props:
* **`isEnabled`**: Determines whether the wrapped content should be shown.
* **`children`**: The React elements to be conditionally rendered.

---

## 🔀 Switching Between Versions

The main application (`App.js`) includes a boolean flag that determines which toggle implementation is used. The UI also displays a message indicating whether the functional or class-based version is active, making it easy to confirm which component is currently rendering:

* 🔥 **Using the CLASS-based FeatureToggle**
* ✨ **Using the FUNCTIONAL FeatureToggle**

---

## 📂 Project Structure
```text
feature-toggle-demo/
├── src/
│   ├── App.js
│   ├── App.test.js
│   ├── FeatureToggle.js
│   ├── FeatureToggleClass.js
│   ├── FeatureToggle.test.js
│   ├── index.js
│   └── setupTests.js
├── package.json
└── README.md

---

## 🧪 Testing

This project uses **Jest** and **React Testing Library** to validate component behavior. The test suite covers 8 total tests with a focus on stability and edge cases.

### ✔ Normal Test Cases (FeatureToggle)
* **Renders children when enabled**: Ensures that when the feature is turned on, the component displays its children.
* **Does not render children when disabled**: Confirms that when the feature is off, the component returns nothing.
* **Renders multiple children when enabled**: Validates that the component correctly handles more than one child element.

### ✔ Edge Case Test Cases (FeatureToggle)
* **Handles undefined children**: If no children are provided, the component does not crash and renders nothing.
* **Treats truthy non-boolean values as enabled**: Values like `"yes"` or `1` still render children.
* **Treats falsy non-boolean values as disabled**: Values like `0`, `""`, or `null` prevent rendering.

### ✔ App Component Tests
* **Renders the active toggle version label**: Confirms the UI displays which version is active.
* **Renders the toggled content**: Ensures content inside the toggle appears when enabled.

---

## 🧪 Test Results

All tests currently pass successfully:
* **Test Suites:** 2 passed, 2 total
* **Tests:** 8 passed, 8 total
* **Snapshots:** 0 total

---

## ▶️ How to Run Tests

### Step 1 — Navigate to the project folder
cd feature-toggle-demo

### Step 2 — Run Jest in watch mode
npm test

---

## 🚦 Running the App

### Step 1: Install Dependencies
npm install

### Step 2: Start the Development Server
npm start

### Step 3: Open in Browser
Visit: http://localhost:3000

---

## 📘 Summary

This project demonstrates a reusable feature toggle, implemented in two ways: Functional and Class-based.It demonstrates architectural parity, dynamic switching between implementations in a live environment, and validation through behavior with a comprehensive test suite.

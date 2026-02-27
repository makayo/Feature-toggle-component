# Feature Toggle Component (React)

A simple React component demonstrating **conditional rendering** based on props. This project was built to understand how React components can enable or disable features without using state.

---

## 🚀 Overview

The `FeatureToggle` component accepts two props:

- **`isEnabled`** — determines whether the feature’s content should be shown
- **`children`** — the React elements that will be conditionally rendered

This component is used to toggle UI content while demonstrating two different React component styles: a functional component and a class-based component.

---

## 🔧 Behavior Logic

- **If `isEnabled` is true**: the component renders its children.
- **If `isEnabled` is false**: the component returns `null` (renders nothing).

Both the functional and class-based versions of the component follow this same behavior.

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
```

### Step 3: View in Browser

The app will automatically open. If it does not, navigate to:

- [http://localhost:3000](http://localhost:3000)

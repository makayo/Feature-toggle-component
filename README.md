# Feature Toggle Component (React)

A simple React component demonstrating **conditional rendering** based on props. This project was built as part of an assignment to understand how React components can enable or disable features without using state.

---

## 🚀 Overview

The `FeatureToggle` component accepts two primary props:

* **`isEnabled`**: A boolean that determines whether the feature is active.
* **`featureName`**: The name of the feature being toggled.

### Behavior Logic
* **If `isEnabled` is true**: The component displays the feature name.
* **If `isEnabled` is false**: It displays: `Feature [featureName] is disabled`.

This pattern is useful for controlling access to experimental features, beta flags, or UI elements that should only appear under specific conditions.

---

## 📂 Project Structure

```text
feature-toggle-demo/
├── src/
│   ├── App.js
│   ├── FeatureToggle.js
│   ├── FeatureToggle.test.js
│   └── index.js
├── package.json
└── README.md
```

---

## 🛠 FeatureToggle Component

The component uses simple conditional rendering based on props to keep the logic reusable and predictable:

### Conditional States
* **When `isEnabled` is true**: Show the feature name.
* **When `isEnabled` is false**: Show a standard disabled message.



---

## 🧪 Testing

This project uses **Jest** and **React Testing Library**.

### How to Run Tests

To execute the test suite, follow these steps in your terminal:

1. **Navigate to the project folder:**
   ```bash
   cd feature-toggle-demo
   ```
2. **Launch the test runner:**
   ```bash
   npm test
   ```

This will launch **Jest** in watch mode and run all included test suites.

### Included Test Cases

The test suite covers 6 specific scenarios to ensure robust behavior:

#### Normal Cases
* **Renders feature name** when enabled.
* **Renders disabled message** when disabled.
* **Renders correct feature name** for another enabled feature.

#### Edge Cases
* **Handles empty `featureName`** string.
* **Handles `undefined` `featureName`**.
* **Handles non-boolean truthy `isEnabled`** values.

> **Result:** All tests pass successfully. ✅

---

## 🚦 Running the App

Follow these steps to get the development server running:

### Step 1: Install Dependencies
Run the following command to install required packages:
```bash
npm install
```

### Step 2: Start the Server
Start the development server with:
```bash
npm start
```

### Step 3: View in Browser
The app will automatically open. If it does not, navigate to:
* [http://localhost:3000](http://localhost:3000)

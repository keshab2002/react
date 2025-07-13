## ⚡ How to Create a React Project Using Vite

### 🔧 Prerequisites

Make sure you have the following installed:

* **Node.js** (v14.18+, v16+ recommended)
* **npm** or **yarn** (comes with Node.js)

Check with:

```bash
node -v
npm -v
```

---

## 🛠️ Steps to Create a Vite + React Project

### ✅ Step 1: Create the project

Using **`npm` + `create-vite`**:

```bash
npm create vite@latest my-app -- --template react
```

Or with **`yarn`**:

```bash
yarn create vite my-app --template react
```

Or with **`pnpm`**:

```bash
pnpm create vite my-app --template react
```

> `my-app` is your project name. You can name it anything you want.

---

### ✅ Step 2: Navigate into your project

```bash
cd my-app
```

---

### ✅ Step 3: Install dependencies

```bash
npm install
```

---

### ✅ Step 4: Start the development server

```bash
npm run dev
```

Your app will run at **`http://localhost:5173`** by default.

---

## 📁 Vite React Project Structure

```
my-app/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx
│   ├── main.jsx
├── index.html
├── package.json
├── vite.config.js
```

---

## 💡 Why Use Vite Over Create React App?

| Feature                          | Vite                     | Create React App          |
| -------------------------------- | ------------------------ | ------------------------- |
| Dev server startup               | ⚡ Instant                | 🐢 Slower                 |
| HMR (Hot Module Reloading)       | ✅ Very fast              | ✅ Slower                  |
| Default bundler                  | **ESBuild** / **Rollup** | **Webpack**               |
| Config flexibility               | ✅ Easier                 | ❌ Harder (needs ejecting) |
| Built-in TypeScript, JSX support | ✅                        | ✅                         |
| Out-of-the-box features          | Minimal, but modern      | Heavier by default        |

---

## 🚀 Bonus: Add TypeScript (Optional)

To create a **TypeScript** React project:

```bash
npm create vite@latest my-app -- --template react-ts
```

---


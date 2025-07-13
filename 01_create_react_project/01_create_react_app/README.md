# create-react-app

To create a new React project using **`create-react-app`**, you have two main options: **`npx`** or **`npm`**. Below is a step-by-step guide for both methods, including what each command does and when to use it.

---

## 🔧 Prerequisites

Before starting, make sure you have the following installed:

* **Node.js** (v14 or later recommended)
  Download from: [https://nodejs.org/](https://nodejs.org/)

You can verify installation using:

```bash
node -v
npm -v
```

---

## 🚀 Method 1: Using `npx` (Recommended)

`npx` comes bundled with `npm` (v5.2+). It allows you to use `create-react-app` **without installing it globally**.

### ✅ Steps

1. **Open Terminal/Command Prompt**
2. Run the following command:

```bash
npx create-react-app my-app
```

Replace `my-app` with your desired project name.

3. **Navigate into the project folder:**

```bash
cd my-app
```

4. **Start the development server:**

```bash
npm start
```

This will open the React app in your default web browser at `http://localhost:3000`.

---

## 📦 Method 2: Using `npm` (Global Install)

You can install `create-react-app` globally if you plan to use it often, though this is **not recommended** anymore due to potential versioning conflicts.

### ✅ Steps

1. **Install globally:**

```bash
npm install -g create-react-app
```

2. **Create the app:**

```bash
create-react-app my-app
```

3. **Navigate and start the app:**

```bash
cd my-app
npm start
```

---

## 📁 Project Structure (Default)

When the app is created, it includes the following key folders and files:

```
my-app/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── index.js
├── .gitignore
├── package.json
├── README.md
```

---

## ✅ After Setup

You can now:

* Edit `src/App.js` to customize your component
* Install dependencies (e.g., `npm install axios`)
* Use `npm run build` to create a production build

---

## 🧼 Common Commands

| Command         | Purpose                                     |
| --------------- | ------------------------------------------- |
| `npm start`     | Runs the development server                 |
| `npm run build` | Creates optimized production build          |
| `npm test`      | Runs test suites                            |
| `npm run eject` | Exposes full Webpack config (irreversible!) |

---

Let me know if you'd like help customizing the project, adding routing, using TypeScript, or deploying to platforms like **Vercel** or **Netlify**!

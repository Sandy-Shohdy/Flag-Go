# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# ✈️ Next-Stop

A personal travel bucket list app built with React and Vite. Add the destinations you dream of visiting, mark the ones you've already explored, and keep the adventure going!

🔗 **Live Demo:** [next-stop-ashy.vercel.app](https://next-stop-ashy.vercel.app)

---

## 📸 Preview

> A modern, dark-themed travel tracker with smooth animations and a responsive layout.

---

## ✨ Features

- 🗺️ **Add destinations** with name, country, notes, and travel dates
- ✏️ **Edit & delete** destinations
- ✅ **Mark as visited / unvisited**
- 🔍 **Live country search** powered by the RestCountries API
- 🗂️ **Filter** by All / Want to Visit / Visited
- 💾 **Persists data** with localStorage — survives page refreshes
- 📱 **Fully responsive** — works on mobile, tablet, and desktop

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| React Router v7 | Client-side routing |
| Vite | Build tool |
| RestCountries API | Live country data |
| localStorage | Data persistence |
| CSS | Styling (no UI library) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/Sandy-Shohdy/Next-Stop.git

# Navigate into the project
cd Next-Stop

# Install dependencies
npm install

# Start the dev server
npm run dev
```
---

## 📁 Project Structure

```
Next-Stop/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── DestinationList.jsx
│   │   ├── DestinationList.css
│   │   ├── DestinationCard.jsx
│   │   ├── DestinationCard.css
│   │   ├── DestinationForm.jsx
│   │   └── DestinationForm.css
│   ├── Pages/
│   │   ├── HomePage.jsx
│   │   ├── HomePage.css
│   │   ├── VisitedPage.jsx
│   │   ├── VisitedPage.css
│   │   ├── AboutPage.jsx
│   │   └── AboutPage.css
│   ├── App.jsx
│   ├── main.jsx
│   └── global.css
├── index.html
├── vite.config.js
├── vercel.json
└── package.json
```

---

## 🧠 React Concepts Used

- `useState` & `useEffect` for state management and side effects
- Props for passing data between components
- Component-based architecture (smart vs presentational components)
- React Router for multi-page navigation
- Controlled forms with validation
- API fetching with `fetch` and `Promise.all`
- localStorage for data persistence

---
## 📄 License

MIT
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

Next-Stop is a personal travel bucket list app built with React and Vite. Track the places you dream of visiting and the ones you've already explored!

## Features

- Add, edit, and delete destinations
- Mark places as visited or unvisited
- Filter destinations by status (all, want to visit, visited)
- Live country search with suggestions
- Responsive and modern UI

## Tech Stack

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)
- [RestCountries API](https://restcountries.com/)
- CSS Modules

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   ```

3. **Build for production:**
   ```sh
   npm run build
   ```

4. **Preview the production build:**
   ```sh
   npm run preview
   ```

## Project Structure

```
src/
  App.jsx
  main.jsx
  components/
  Pages/
  global.css
  ...
public/
index.html
vite.config.js
```

## Deployment

This project is ready to deploy with GitHub Pages. Use:

```sh
npm run deploy
```

## License

MIT
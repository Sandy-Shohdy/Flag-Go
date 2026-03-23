import { Routes, Route } from "react-router";
import { HomePage } from "./Pages/HomePage";
import "./App.css";
import InitialDes from "./InitialDestination.js";
import { useState } from "react";

export default function App() {
  const [destinations, setDestinations] = useState(InitialDes);

  function handleEdit(updated) {
    setDestinations(
      destinations.map((d) => (d.id === updated.id ? updated : d)),
    );
  }

  function handleDelete(id) {
    setDestinations(destinations.filter((d) => d.id !== id));
  }

  function handleToggleVisited(id) {
    setDestinations(
      destinations.map((d) =>
        d.id === id ? { ...d, visited: !d.visited } : d,
      ),
    );
  }

  return (
    <Routes>
      <Route
        index
        element={
          <HomePage
            destinations={destinations}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onToggleVisited={handleToggleVisited}
          />
        }
      />
    </Routes>
  );
}

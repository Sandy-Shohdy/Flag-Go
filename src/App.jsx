import { Routes, Route } from "react-router";
import { HomePage } from "./Pages/HomePage";
import React from "react";
import Header from "./components/Header.jsx";
import VisitedPage from "./Pages/VisitedPage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";

export default function App() {
  const [destinations, setDestinations] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // Fetch initial destinations from restcountries API on mount
  React.useEffect(() => {
    const fetchInitialDestinations = async () => {
      try {
        const starterCountries = [
          "Argentina",
          "Iceland",
          "Spain",
          "Egypt",
          "South Africa",
        ];

        const res = await fetch(
          `https://restcountries.com/v3.1/name/${starterCountries.join(",")}?fields=name,capital,region`,
        );

        // Fetch each country individually and combine results
        const results = await Promise.all(
          starterCountries.map((country) =>
            fetch(
              `https://restcountries.com/v3.1/name/${country}?fields=name,capital,region`,
            ).then((r) => r.json()),
          ),
        );

        const initial = results
          .map((data, index) => {
            const c = Array.isArray(data) ? data[0] : null;
            if (!c) return null;
            return {
              id: (index + 1).toString(),
              name: c.capital?.[0] || c.name.common,
              country: {
                name: c.name.common,
                capital: c.capital?.[0] || "",
                region: c.region || "",
              },
              notes: "",
              visited: false,
            };
          })
          .filter(Boolean); // remove any nulls

        setDestinations(initial);
      } catch (error) {
        console.error("Failed to fetch initial destinations:", error);
        setDestinations([]);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialDestinations();
  }, []); // runs once on mount

  function handleAdd(newDestination) {
    setDestinations((prev) => [newDestination, ...prev]);
  }

  function handleEdit(updated) {
    setDestinations((prev) =>
      prev.map((des) => (des.id === updated.id ? updated : des)),
    );
  }

  function handleDelete(id) {
    setDestinations((prev) => prev.filter((des) => des.id !== id));
  }

  function handleToggleVisited(id) {
    setDestinations((prev) =>
      prev.map((des) =>
        des.id === id ? { ...des, visited: !des.visited } : des,
      ),
    );
  }

  if (loading) {
    return (
      <p style={{ color: "white", textAlign: "center", marginTop: "4rem" }}>
        Loading destinations...
      </p>
    );
  }

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                destinations={destinations}
                onAdd={handleAdd}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onToggleVisited={handleToggleVisited}
              />
            }
          />
          <Route
            path="/visited"
            element={
              <VisitedPage
                destinations={destinations}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onToggleVisited={handleToggleVisited}
              />
            }
          />
          <Route
            path="*"
            element={
              <p
                style={{
                  color: "white",
                  textAlign: "center",
                  marginTop: "4rem",
                }}
              >
                Page not found
              </p>
            }
          />

          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </>
  );
}

// import { Routes, Route } from "react-router";
// import { HomePage } from "./Pages/HomePage";
// import InitialDes from "./InitialDestination.js";
// import React from "react";
// import Header from "./components/Header.jsx";
// import VisitedPage from "./Pages/VisitedPage.jsx";
// import AboutPage from "./Pages/AboutPage.jsx";

// export default function App() {
//   const [destinations, setDestinations] = React.useState(InitialDes);

//   function handleAdd(newDestination) {
//     setDestinations((prev) => [newDestination, ...prev]);
//   }

//   function handleEdit(updated) {
//     setDestinations((prev) =>
//       prev.map((des) => (des.id === updated.id ? updated : des)),
//     );
//   }

//   function handleDelete(id) {
//     setDestinations((prev) => prev.filter((des) => des.id !== id));
//   }
//   function handleToggleVisited(id) {
//     setDestinations((prev) =>
//       prev.map((des) =>
//         des.id === id ? { ...des, visited: !des.visited } : des,
//       ),
//     );
//   }

//   return (
//     <>
//       <Header />

//       <main>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <HomePage
//                 destinations={destinations}
//                 onAdd={handleAdd}
//                 onEdit={handleEdit}
//                 onDelete={handleDelete}
//                 onToggleVisited={handleToggleVisited}
//               />
//             }
//           />
//           <Route
//             path="/visited"
//             element={
//               <VisitedPage
//                 destinations={destinations}
//                 onEdit={handleEdit}
//                 onDelete={handleDelete}
//                 onToggleVisited={handleToggleVisited}
//               />
//             }
//           />

//           <Route path="/about" element={<AboutPage />} />
//         </Routes>
//       </main>
//     </>
//   );
// }

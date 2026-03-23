import Header from "../components/Header";
import DestinationCard from "../components/DestinationCard";
import "./HomePage.css";

export function HomePage({ destinations, onEdit, onDelete, onToggleVisited }) {
  return (
    <>
      <Header />
      <main>
        {destinations.map((d) => (
          <DestinationCard
            key={d.id}
            destination={d}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggleVisited={onToggleVisited}
          />
        ))}
      </main>
    </>
  );
}

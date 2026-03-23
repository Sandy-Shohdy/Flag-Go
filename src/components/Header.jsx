import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <span className="navbar-logo">✈️ Travel Bucket List</span>

      <div className="left-section">
        <nav className="Nav-Bar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </div>
  );
}

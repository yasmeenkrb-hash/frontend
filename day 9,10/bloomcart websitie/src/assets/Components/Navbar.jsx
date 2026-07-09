import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <span className="brand">🌸 BloomCart</span>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/flowers">Flowers</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
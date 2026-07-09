import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#f5f5f5" }}>
      <Link to="/" style={{ margin: "10px" }}>Home</Link>
      <Link to="/flowers" style={{ margin: "10px" }}>Flowers</Link>
      <Link to="/cart" style={{ margin: "10px" }}>Cart</Link>
      <Link to="/about" style={{ margin: "10px" }}>About</Link>
    </nav>
  );
}

export default Navbar;
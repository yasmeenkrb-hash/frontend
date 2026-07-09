import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar"; 
import Home from "./pages/Home";
import Flowers from "./pages/Flowers";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flowers" element={<Flowers />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
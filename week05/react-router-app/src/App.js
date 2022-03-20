import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Nav, Navbar } from "react-bootstrap";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <Navbar fixed="top" bg="primary" variant="dark">
        <Nav className="me-auto">
          <Link to="/" element={<Home />}>
            Home
          </Link>
          <Link to="/about" element={<About />}>
            About
          </Link>
          <Link to="/contact" element={<Contact />}>
            Contact
          </Link>
        </Nav>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

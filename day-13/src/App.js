import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/pagenotFound";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <div>Copyright &copy; {new Date().getFullYear()}</div>
      </Router>
    </div>
  );
};

export default App;
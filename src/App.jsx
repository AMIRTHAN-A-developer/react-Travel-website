import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Pages/Navbar/Navbar';
import Home from './Components/Pages/Home/Home'
import Destinations from './Components/Pages/Destinations/Destinations';
import Packages from './Components/Pages/Packages/Packages';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import './index.css'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact"  element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

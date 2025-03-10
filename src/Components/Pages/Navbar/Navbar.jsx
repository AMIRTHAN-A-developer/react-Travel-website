import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5"; 
import "./navbar.css";
import { useLocation, useNavigate } from "react-router-dom";


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.location.reload(); 
    } else {
      navigate("/"); 
    }
  };


  return (
    <>
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}

      <nav className="navbar">
        <div className="nav-container">
          
          <div className="logo-container" onClick={handleLogoClick}>
            <span className="logo-texts">. AKT</span>
            <h2 className="logos">holidays</h2>
          </div>

          
          <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoClose className="menu-icon" /> : <TiThMenu className="menu-icon" />}
          </button>

          
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/destinations" onClick={() => setIsOpen(false)}>Destinations</Link></li>
            <li><Link to="/packages" onClick={() => setIsOpen(false)}>Packages</Link></li>
           
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;

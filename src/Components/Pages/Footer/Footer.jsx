import React from "react";
import { Link } from "react-router-dom";
import './footer.css';
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <div className="footer__logo">
            <div className="heading">
              <h1 className="h1-head">AKT</h1>
              <span className="h1-span"> holidays.</span>
            </div>
          </div>
          <p>
            Explore the world's best destinations, enjoy unbeatable prices, and
            book your perfect getaway instantly.
          </p>
          <h4>CONNECT WITH US</h4>
          <ul className="footer__socials">
            <li>
              <div className="contact-detail">
                <p className="ri-phone-fill">+91 8072333966 | </p>
                <p className="ri-phone-fill">+91 9385842639 | </p>
                <p className="ri-phone-fill">+91 9578943639 </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>QUICK LINKS</h4>
          <ul className="footer__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li>
            <h4 className="hover-h4"><Link to="/contact">Contact Us</Link></h4>
              <a href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer">
                <IoLogoInstagram className="foot-link"/>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>DESTINATIONS</h4>
          <ul className="footer__links">
            <li><Link to="/destinations">Kerala</Link></li>
            <li><Link to="/destinations">Karnataka</Link></li>
            <li><Link to="/destinations">Mysore</Link></li>
            <li><Link to="/destinations">Bangalore</Link></li>
            <li><Link to="/destinations"> & More</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>OUR ACTIVITIES</h4>
          <ul className="footer__links">
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/packages">College IV</Link></li>
            <li><Link to="/packages">Trekking</Link></li>
            <li><Link to="/packages">River Rafting</Link></li>
            <li><Link to="/packages">Cultural Tour</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer__bar">
        Copyright &copy; 2025 AKT holidays. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

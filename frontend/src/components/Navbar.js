import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <p><strong>DeliverOO</strong></p>
      </div>
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/faqs">FAQs</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

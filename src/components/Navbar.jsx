import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Professor's Portfolio</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/work-experience">Work Experience</Link></li>
        <li><Link to="/publications">Publications</Link></li>
        <li><Link to="/paper-presentation">Paper Presentation</Link></li>
        <li><Link to="/achievements">Achievements</Link></li>
        <li><Link to="/workshops">Workshops</Link></li>
        <li><Link to="/webinar">Webinar</Link></li>
        <li><Link to="/development-program">Development Program</Link></li>
        <li><Link to="/subjects">Subjects at UG/PG Level</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

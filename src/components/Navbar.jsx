import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <h1 className="logo">UTHAYAKUMAR G.S</h1> */}
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/education">Education</NavLink></li>
        <li><NavLink to="/work-experience">Work Experience</NavLink></li>
        <li><NavLink to="/publications">Publications</NavLink></li>
        <li><NavLink to="/paper-presentation">Paper Presentation</NavLink></li>
        <li><NavLink to="/achievements">Achievements</NavLink></li>
        <li><NavLink to="/workshops">Workshops</NavLink></li>
        <li><NavLink to="/webinar">Webinar</NavLink></li>
        <li><NavLink to="/development-program">Development Program</NavLink></li>
        <li><NavLink to="/subjects">Subjects at UG/PG Level</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;

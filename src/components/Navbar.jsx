import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/education">Education</NavLink></li>
        <li><NavLink to="/work-experience">Work Experience</NavLink></li>

        {/* Dropdown for Publications */}
        <li className="dropdown">
          <NavLink to="/publications">Publications</NavLink>
          <ul className="dropdown-menu">
            <li><NavLink to="/publications/journals">Journals</NavLink></li>
            <li><NavLink to="/publications/book">Book</NavLink></li>
            <li><NavLink to="/publications/patents">Patents</NavLink></li>
          </ul>
        </li>
        <li className="dropdown">
          <NavLink to="/paper-presentation">Paper Presentation</NavLink>
          <ul className="dropdown-menu">
            <li><NavLink to="/national">National-Level</NavLink></li>
            <li><NavLink to="/international">International-Level</NavLink></li>
           
          </ul>
        </li>
        <li className="dropdown">
        <NavLink to="/achievements">Achievements</NavLink>
          <ul className="dropdown-menu">
            <li><NavLink to="/academic">Academic</NavLink></li>
            <li><NavLink to="/project">Projects</NavLink></li>
            <li><NavLink to="/membership">Membership</NavLink></li>
          </ul>
        </li>
        <li className="dropdown">
        <NavLink to="/workshops">Workshops</NavLink>
          <ul className="dropdown-menu">
            <li><NavLink to="/publications/journals">Journals</NavLink></li>
            <li><NavLink to="/publications/book">Book</NavLink></li>
            <li><NavLink to="/publications/patents">Patents</NavLink></li>
          </ul>
        </li>
        <li><NavLink to="/webinar">Webinar</NavLink></li>
        <li className="dropdown">
        <NavLink to="/development-program">Development Program</NavLink>
          <ul className="dropdown-menu">
            <li><NavLink to="/publications/journals">Journals</NavLink></li>
            <li><NavLink to="/publications/book">Book</NavLink></li>
            <li><NavLink to="/publications/patents">Patents</NavLink></li>
          </ul>
        </li>
       
       
        <li><NavLink to="/subjects">Subjects at UG/PG Level</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;

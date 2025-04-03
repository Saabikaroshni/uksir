import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">UTHAYAKUMAR G.S</h1>
      <ul className="nav-links">
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
        <li><Link to="work-experience" smooth={true} duration={500}>Work Experience</Link></li>
        <li><Link to="publications" smooth={true} duration={500}>Publications</Link></li>
        <li><Link to="paper-presentation" smooth={true} duration={500}>Paper Presentation</Link></li>
        <li><Link to="achievements" smooth={true} duration={500}>Achievements</Link></li>
        <li><Link to="workshops" smooth={true} duration={500}>Workshops</Link></li>
        <li><Link to="webinar" smooth={true} duration={500}>Webinar</Link></li>
        <li><Link to="development-program" smooth={true} duration={500}>Development Program</Link></li>
        <li><Link to="subjects" smooth={true} duration={500}>Subjects at UG/PG Level</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

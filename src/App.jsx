import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Publications from "./components/Publications";
import PaperPresentation from "./components/PaperPresentation";
import Achievements from "./components/Achievements";
import Workshops from "./components/Workshops";
import Webinar from "./components/Webinar";
import DevelopmentProgram from "./components/DevelopmentProgram";
import Subjects from "./components/Subjects";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/paper-presentation" element={<PaperPresentation />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/webinar" element={<Webinar />} />
        <Route path="/development-program" element={<DevelopmentProgram />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/contact" element={<Contact />} />
        {/* Optional: 404 Page */}
        <Route path="*" element={<div style={{ padding: "2rem" }}><h1>404 - Page Not Found</h1></div>} />
      </Routes>
    </>
  );
}

export default App;

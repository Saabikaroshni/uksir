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
import Journals from "./components/publications/Journels";
import Book from "./components/publications/Book";
import Patents from "./components/publications/Patents";
import National from "./components/Paperpresentation/National";
import International from "./components/Paperpresentation/International";
import Projects from "./components/achievements/Projects";
import Academic from "./components/achievements/Academic";
import Membership from "./components/achievements/Membership";
import Nationallevel from "./components/Workshop/Nationallevel";
import Internationallevel from "./components/Workshop/Internationallevel";
import GuestLecture from "./components/program/GuestLecture";
import Faculty from "./components/program/Faculty";

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
        <Route path="/publications/journals" element={<Journals />} />
        <Route path="/publications/book" element={<Book />} />
        <Route path="/publications/patents" element={<Patents />} />
        <Route path="/paper-presentation" element={<PaperPresentation />} />
        <Route path="/national" element={<National />} />
        <Route path="/international" element={<International />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/nat" element={<Nationallevel />} />
        <Route path="/inter" element={<Internationallevel />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/project" element={<Projects/>} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/webinar" element={<Webinar />} />
        <Route path="/development-program" element={<DevelopmentProgram />} />
        <Route path="/fdp" element={<Faculty />} />
        <Route path="/guest" element={<GuestLecture />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/contact" element={<Contact />} />
        {/* Optional: 404 Page */}
        <Route path="*" element={<div style={{ padding: "2rem" }}><h1>404 - Page Not Found</h1></div>} />
      </Routes>
    </>
  );
}

export default App;

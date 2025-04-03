import React from "react";
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
      <main>
        <section id="home"><Home /></section>
        <section id="education"><Education /></section>
        <section id="work-experience"><WorkExperience /></section>
        <section id="publications"><Publications /></section>
        <section id="paper-presentation"><PaperPresentation /></section>
        <section id="achievements"><Achievements /></section>
        <section id="workshops"><Workshops /></section>
        <section id="webinar"><Webinar /></section>
        <section id="development-program"><DevelopmentProgram /></section>
        <section id="subjects"><Subjects /></section>
        <section id="contact"><Contact /></section>
      </main>
      <ScrollToTop />
    </>
  );
}

export default App;

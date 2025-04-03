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
      <div id="home"><Home /></div>
      <div id="education"><Education /></div>
      <div id="work-experience"><WorkExperience /></div>
      <div id="publications"><Publications /></div>
      <div id="paper-presentation"><PaperPresentation /></div>
      <div id="achievements"><Achievements /></div>
      <div id="workshops"><Workshops /></div>
      <div id="webinar"><Webinar /></div>
      <div id="development-program"><DevelopmentProgram /></div>
      <div id="subjects"><Subjects /></div>
      <div id="contact"><Contact /></div>
    </>
  );
}

export default App;

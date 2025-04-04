import React, { useState, useEffect } from "react";
import "../styles/Home.css";

const Home = () => {
  const firstLine = "Welcome to the Portfolio of";
  const secondLine = "UTHAYAKUMAR G.S";

  const [displayedText1, setDisplayedText1] = useState("");
  const [displayedText2, setDisplayedText2] = useState("");
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [typingFirstDone, setTypingFirstDone] = useState(false);

  // Typing Effect for the first line
  useEffect(() => {
    if (index1 < firstLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedText1((prev) => prev + firstLine[index1]);
        setIndex1(index1 + 1);
      }, 75);

      return () => clearTimeout(timeout);
    } else {
      setTypingFirstDone(true);
    }
  }, [index1, firstLine]);

  // Typing Effect for the second line after first is complete
  useEffect(() => {
    if (typingFirstDone && index2 < secondLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedText2((prev) => prev + secondLine[index2]);
        setIndex2(index2 + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [index2, secondLine, typingFirstDone]);

  return (
    <section id="home" className="home-section">
      {/* Animated Heading */}
      <div className="name-container">
        <h1 className="typing-text">
          {displayedText1}
          <span className={`cursor ${index1 === firstLine.length ? "hidden" : ""}`}>|</span>
        </h1>

        {typingFirstDone && (
          <h1 className="typing-text">
            {displayedText2}
            <span className={`cursor ${index2 === secondLine.length ? "hidden" : ""}`}>|</span>
          </h1>
        )}
      </div>

      {/* Introduction Section */}
      <div className="home-content">
        <p>
          I am an <strong>Electronics and Communication Engineer</strong> with an <strong>M.B.A. (Marketing)</strong> and <strong>M.E. (Medical Electronics)</strong>. 
          I earned my Ph.D. from the College of Engineering, <strong>Anna University</strong>.
        </p>
        <p>
          With <strong>31 years of experience</strong>, I have dedicated <strong>12 years</strong> to IT design and development 
          and <strong>20 years</strong> to teaching. My contributions include publishing <strong>30+ international journal papers</strong> 
          and presenting research at both national and international conferences.
        </p>
        <p>
          I have played a key role in initiating various <strong>IEEE technical student branch chapters</strong>, including:
        </p>

        <ul className="ieee-list">
          <li>Communication Society</li>
          <li>Antenna and Propagation Society</li>
          <li>Industrial Electronics Society</li>
          <li>Engineering in Medicine and Biology Society</li>
          <li>Broadcast Technology Society</li>
          <li>Computer Society</li>
          <li>Computational Intelligence Society</li>
          <li>Control Systems Society</li>
        </ul>
      </div>
    </section>
  );
};

export default Home;

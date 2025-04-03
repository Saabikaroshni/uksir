import React, { useState, useEffect } from "react";
import "../styles/Home.css";

const Home = () => {
  const firstLine = "Welcome to the portfolio of";
  const secondLine = "UTHAYAKUMAR G.S";

  const [displayedText1, setDisplayedText1] = useState("");
  const [displayedText2, setDisplayedText2] = useState("");
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [typingFirstDone, setTypingFirstDone] = useState(false);

  // Type the first line
  useEffect(() => {
    if (index1 < firstLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedText1((prev) => prev + firstLine[index1]);
        setIndex1(index1 + 1);
      }, 100); // Adjust speed

      return () => clearTimeout(timeout);
    } else {
      setTypingFirstDone(true); // Once first line is done, start second line
    }
  }, [index1, firstLine]);

  // Type the second line after first is completed
  useEffect(() => {
    if (typingFirstDone && index2 < secondLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedText2((prev) => prev + secondLine[index2]);
        setIndex2(index2 + 1);
      }, 150); // Adjust speed

      return () => clearTimeout(timeout);
    }
  }, [index2, secondLine, typingFirstDone]);

  return (
    <section id="home" className="home-section">
      {/* Typing Effect for Name */}
      <div className="name-container">
        <h1
          className={`typing-text ${
            index1 === firstLine.length ? "typing-complete" : ""
          }`}
        >
          {displayedText1}
          <span className="cursor">|</span>
        </h1>

        {typingFirstDone && (
          <h1
            className={`typing-text ${
              index2 === secondLine.length ? "typing-complete" : ""
            }`}
          >
            {displayedText2}
            <span className="cursor">|</span>
          </h1>
        )}
      </div>

      {/* Introduction Content */}
      <div className="home-container">
        <div className="home-container">
        <p>
          I am basically an Electronics and Communication Engineer with M.B.A
          (Marketing) and M.E. (Medical Electronics) and completed Ph.D. in
          College of Engineering, Anna University.
        </p>
        <p>
          I have 31 years of experience in various fields, including over 12
          years in IT design and development, and 20 years in teaching. I have
          published more than 30 international journal papers and presented
          papers at international and national conferences in different
          engineering colleges.
        </p>
        <p>
          I have initiated various IEEE technical student branch chapters,
          including:
        </p>
        </div>
        <div>
        <ul>
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
       
      </div>
    </section>
  );
};

export default Home;

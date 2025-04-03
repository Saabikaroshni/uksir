// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home
import React, { useState, useEffect } from 'react';
import "../styles/Home.css";

const Home = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <section id="home">
      <div className={`home-container ${fadeIn ? 'fade-in' : ''}`}>
      <h1>Welcome to My Portfolio</h1>
      <p>
        I am basically an Electronics and Communication Engineer with M.B.A (Marketing) and M.E. (Medical Electronics) and completed Ph.D. in College of Engineering, Anna University.
      </p>
      <p>
        I have 31 years of experience in various fields, including over 12 years in IT design and development, and 20 years in teaching. I have published more than 30 international journal papers and presented papers at international and national conferences in different engineering colleges.
      </p>
      <p>
        I have initiated various IEEE technical student branch chapters, including:
      </p>
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
    </section>
  );
};

export default Home;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/global.css"

const Publications = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <section id="paper-presentation" style={{ padding: '2rem' }}>
      <h2>Paper Presentation</h2>
      <div className="edu-grid">
        <div
          className="edu-card"
          onClick={() => handleClick('/journels')}
        >
          Journals
        </div>
        <div
          className="edu-card"
          onClick={() => handleClick('/book')}
        >
          Book
        </div>
        <div
          className="edu-card"
          onClick={() => handleClick('/patents')}
        >
          Patents
        </div>
      </div>
    </section>
  );
};

export default Publications;

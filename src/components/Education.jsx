import React from "react";
import "../styles/education.css"; // Import CSS for styling

const Education = () => {
  const educationData = [
    { year: 2021, degree: "M.S.W", university: "IGNOU", college: "Gurunanak College", grade: "B-Grade", class: "First" },
    { year: 2019, degree: "Ph.D.", university: "Anna University", college: "CEG, Guindy", grade: "B-Grade", class: "First" },
    { year: 2010, degree: "M.E.", university: "Anna University", college: "CEG, Guindy", grade: "B-Grade", class: "First" },
    { year: 2001, degree: "M.B.A.", university: "IGNOU", college: "New College", grade: "B-Grade", class: "First" },
    { year: 1998, degree: "H.D.I.N.C.C.", university: "NIIT", college: "NIIT, Parrys", grade: "61%", class: "First" },
    { year: 1990, degree: "B.E.(ECE)", university: "Madras University", college: "APEC, Melmaruvathur", grade: "68%", class: "First" },
    { year: 1986, degree: "H.S.C", university: "BSE, TN", college: "GHSS, Podaturpet", grade: "78%", class: "First" },
    { year: 1984, degree: "S.S.L.C", university: "BSE, TN", college: "GHSS, Podaturpet", grade: "76%", class: "First" }
  ];

  return (
    <section id="education">
      <h2 className="edu-title">Education</h2>
      <div className="edu-grid">
        {educationData.map((edu, index) => (
          <div key={index} className="edu-card">
            <div className="edu-header">
              <span className="edu-year">{edu.year}</span>
              <h3 className="edu-degree">{edu.degree}</h3>
            </div>
            <div className="edu-body">
              <p><strong>University:</strong> {edu.university}</p>
              <p><strong>College:</strong> {edu.college}</p>
              <p><strong>Grade:</strong> {edu.grade}</p>
              <p><strong>Class:</strong> {edu.class}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

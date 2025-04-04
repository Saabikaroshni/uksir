import React from "react";
import { FaBriefcase, FaChalkboardTeacher, FaProjectDiagram } from "react-icons/fa";
import "../styles/work.css";

const WorkExperience = () => {
  return (
    <section id="work-experience">
      <h2 className="section-title">Work Experience</h2>

      {/* Work Cards Container */}
      <div className="work-container">
        {/* Employment Details */}
        <div className="work-card">
          <div className="card-header">
            <FaBriefcase className="work-icon" />
            <h3>Employment Details</h3>
          </div>
          <div className="table-container">
            <table className="experience-table">
              <thead>
                <tr>
                  <th>Employer</th>
                  <th>Designation</th>
                  <th>Period</th>
                  <th>Experience</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>St. Joseph’s Institute of Technology,Chennai</td>
                  <td>Associate Professor</td>
                  <td>01.06.2019 - Present</td>
                  <td>5 years</td>
                </tr>
                <tr>
                  <td>St. Joseph’s College Of Engineering,Chennai</td>
                  <td>Associate Professor</td>
                  <td>01.08.08 to 31.05.19</td>
                  <td>10 years 10 months</td>
                </tr>
                <tr>
                  <td>Lord Venkateshwaraa Engineering College,Puliyambakkam</td>
                  <td>Vice Principal</td>
                  <td>01.08.06 to 31.07.08</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td>Lord Venkateshwaraa Engineering College,Puliyambakkam</td>
                  <td>HOD-ECE</td>
                  <td>12.08.05 to 31.07.06</td>
                  <td>11 months</td>
                </tr>
                <tr>
                  <td>Kalsar College of Engineering,Chennai</td>
                  <td>HOD-ECE</td>
                  <td>11.08.04 to 11.08.05</td>
                  <td>1 year</td>
                </tr>
                <tr>
                  <td>Infotronics & Compucontrols Pvt.,Ltd,Chennai</td>
                  <td>Project Manager</td>
                  <td>27.05.99 - 10.08.04</td>
                  <td>5 years</td>
                </tr>
                <tr>
                  <td>S & S Systems, Chennai</td>
                  <td>Proprietor</td>
                  <td>02.03.94 to 26.05.99 </td>
                  <td>5 years</td>
                </tr>
                <tr>
                  <td>Utility Engineering, Chennai</td>
                  <td>Service Engineer</td>
                  <td>03.01.94 - 01.03.94</td>
                  <td>2 months</td>
                </tr>
                <tr>
                  <td>Medal Marketing, Trichur,Kerala</td>
                  <td>Service Engineer</td>
                  <td>30.10.92 to 30.10.93</td>
                  <td>1 year</td>
                </tr>
                <tr>
                  <td>Mekaster Electronics Service Centre Pvt.Ltd.,Chennai</td>
                  <td>Executive Engineer</td>
                  <td> 01.04.92 to 01.07.92</td>
                  <td>3 months</td>
                </tr>
                <tr>
                  <td>Indian Engineering College, Nagakoil</td>
                  <td>Assoc.Lecturer</td>
                  <td> 01.05.90 to 01.03.92</td>
                  <td>1 year 10 months</td>
                                        
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Experience Overview */}
    </div>
    <div className="grid">
    <div className="work-card">
          <div className="card-header">
            <FaChalkboardTeacher className="work-icon" />
            <h3 className="gridh">Total Experience</h3>
            
          </div>
          <p className="gridfont"><strong>Teaching:</strong> 20 Years 4 Months 2 Days</p>
          <p className="gridfont"><strong>Industrial:</strong> 11 Years 6 Months 1 Day</p>
        </div>
    

        {/* Industry Career */}
        <div className="work-card">
          <div className="card-header">
            <FaProjectDiagram className="work-icon" />
            <h3 className="gridh">Industry Career</h3>
          </div>
          <ul>
            <li className="gridfont">Completed <strong>50+ projects</strong> successfully and implemented them at client locations.</li>
            <li className="gridfont">Managed teams and recruited <strong>450 candidates</strong> for domestic and overseas roles.</li>
          </ul>
        </div>
    </div>
      

      {/* Key Responsibilities */}
      <div className="responsibilities">
        <h3>Key Responsibilities</h3>
        <ul>
          <li>Guiding trainees in project development.</li>
          <li>Correcting coding errors & adding new features.</li>
          <li>Optimizing software for speed and efficiency.</li>
          <li>Providing technical training and mentoring teams.</li>
        </ul>
      </div>
    </section>
  );
};

export default WorkExperience;

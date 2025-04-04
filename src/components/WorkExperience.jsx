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
            <h3 className="emp">Employment Details</h3>
          </div>
          <div className="table-container">
            <table className="experience-table">
              <thead>
                <tr className="emp1">
                  <th>Employer</th>
                  <th>Designation</th>
                  <th>Period</th>
                  <th>Experience</th>
                </tr>
              </thead>
              <tbody >
                <tr >
                  <td >St. Joseph’s Institute of Technology,Chennai</td>
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
          <div className="grid1">
          <p className="gridfont"><strong>Teaching:</strong> 20 Years 4 Months 2 Days</p>
          <p className="gridfont"><strong>Industrial:</strong> 11 Years 6 Months 1 Day</p>
          </div>
          <div className="grid1">
          <h2 className="career">Departmental Activities :</h2>
          <ul>
            <li className="gridfont"> Time table in-charge</li>
            <li className="gridfont">Placement in-charge for department</li>
            <li className="gridfont">Guest Lecture in-charge</li>
            <li className="gridfont">Industrial visit in-charge</li>
            <li className="gridfont">Students workshop in-charge</li>
          </ul>
          </div>
        </div>
    

        {/* Industry Career */}
        <div className="work-card">
          <div className="card-header">
            <FaProjectDiagram className="work-icon" />
            <h3 className="gridh">Industry Career</h3>
          </div>
          <div className="grid">
          <h2>Significant Achievements</h2>

            <ul>
              <li className="gridfont">Completed <strong>50+ projects</strong> successfully and implemented them at client locations.</li>
              <li className="gridfont">Meeting client and finding the exact requirement and providing
                solutions.</li>
              <li className="gridfont">Managed teams and recruited <strong>450 candidates</strong> for domestic and overseas roles.</li>
            </ul>
          </div>
          <div className="grid"><h2>Significant achievement during Execution of the project</h2>
          <ul>
            <li className="gridfont">Insist upon the right to select key project team members. </li>
            <li className="gridfont">Select key team members with proven track records in their fields.</li>
            <li className="gridfont">Develop commitment and a sense of mission from the outset.</li>
            <li className="gridfont">Have key team member's assist in decision-making and problem
            solving.</li>
            <li className="gridfont">Develop realistic costs, schedules, end performance estimate and
            goals.</li>
            <li className="gridfont">Seek to eliminate the image of the project in viewpoint of the
            client.</li>
            <li className="gridfont">Avoid over reliance on a particular type of control tool.</li>
          </ul></div>
        </div>
    </div>
      

      {/* Key Responsibilities */}
      <div className="responsibilities">
        <div className="grid">
        <h3>Key Responsibilities</h3>
        <ul>
          <li>Guiding trainees in project development.</li>
          <li>Selecting subordinates to domestic and Overseas.</li>
          <li>Identify the right teams and motivating them in the project.</li>
          <li>Correcting coding errors & adding new features.</li>
          <li>Optimizing software for speed and efficiency.</li>
          <li>Reconfiguring the software to solve a similar related package.</li>
          <li>Comparisons of current 'as-is' operations with potential 'to-be'
          charted with confidence.</li>
          <li>Making pricing decisions</li>
          <li>Determine the 'mix of employees skills' to meet the corporate
          objectives.</li>
        </ul>
        </div>
        <div className="grid">
          
        <h3>Roles and Responsibilities</h3>
        <ul>
        <li> Responsible for developing intranet and custom applications for the
                                        'Supervision and
                                        regulation' department in order to assist in the supervision and control of
                                        various banks</li>
                                    <li>Designed and developed intranet applications in Java, using the server stream
                                        and web
                                        logic application server and a MS SQL database.</li>
                                    <li>Maintained the department intranet on a daily basis using(HTML, JavaScript,
                                        DHTML,
                                        Photoshop and Acrobat).</li>
                                    <li>Provided one-on-one as well as group tutoring to help students of introductory
                                        and
                                        intermediate level in CS and Physics classes in C++, Algorithms, and Digital
                                        Systems.
                                        Mentored students on Java++ pointer manipulation, sorting, searching and graph
                                        algorithms and NP Completeness.</li>
                                    <li>Responsible for pre-sales technical support for a J2EE / Services Oriented
                                        Architecture
                                        product</li>
                                    <li>Involved in preparing presentations, demos, proof of concepts, technical sales
                                        material,
                                        and sales tools such as ROI, and Architecture Maturity</li>
                                    <li>Managed NT 4 servers operating as file/print/application servers. Initiated
                                        UNIX-NT
                                        integration. Responsibilities included writing PERL scripts for
                                        accounts/Directory
                                        synchronization and performing daily administrative tasks such as directory
                                        replication,
                                        backups, and domain management. Installed FTP and HTTP servers and a UNIX shell.
                                    </li>
                                    <li>Worked on proof of concepts on using the Wakesoft Architecture Platform to
                                        deliver
                                        service-oriented applications on BEA web logic and IBM WebSphere.</li>
                                    <li>Work with prospective customers giving presentations, helping in evaluations,
                                        and
                                        technical training.</li>
                                </ul>
        </div>
                            
      </div>
    </section>
  );
};

export default WorkExperience;

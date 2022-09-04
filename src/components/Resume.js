import React, { useState } from 'react';
import "./styles/Resume.css";
import resumeData from "../data/resume-data.json";
//contains the education and work experience sections of the resume
const Resume = () => {

  const [toggledSection, setToggledSection] = useState("N");

  const checkToggledSection = (triggeredBy) => {
    if (toggledSection === triggeredBy) {
      setToggledSection("N");
    }
    else {
      setToggledSection(triggeredBy);
    }
  };

  return (
    <div className='section' id="resume">
      <h3>Resume</h3>
      <h1>Here is my work and education history.</h1>
      <div className='work toggle'>
        <h2 onClick={() => checkToggledSection("W")}>Work History</h2>
        { toggledSection === "W"
          ? (
              <div className='work specific'>
                { resumeData.work.map(curr => (
                  <div key={curr.id} className='work item'>
                    <h3>{curr.for}</h3><span className='location'>{curr.location}</span><br />
                    <span className='italic'>{curr.position}</span><span className='date'>{curr.date}</span>
                    <p className='desc'>{curr.desc}</p>
                  </div>
                ))}
              </div>
            )
          : (<></>) }
      </div>
      <div className='education toggle'>
        <h2 onClick={() => checkToggledSection("E")}>Education History</h2>
        { toggledSection === "E"
          ? (
              <div className='education specific'>
                { resumeData.education.map(curr => (
                  <div key={curr.id} className='education item'>
                    <h3>{curr.school}</h3><span className='location'>{curr.location}</span><br />
                    <span className='italic'>{curr.degree}</span><span className='date'>{curr.date}</span>
                    { curr.hasOwnProperty("gpa") ? (<span className='gpa'>{curr.gpa}</span>) : (<></>) }
                    { curr.hasOwnProperty("desc") ? (<p className='desc'>{curr.desc}</p>) : (<></>) }
                  </div>
                ))}
              </div>
            )
          : (<></>) }
      </div>
    </div>
  );
};

export default Resume;
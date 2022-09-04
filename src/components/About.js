import React from 'react';
import "./styles/About.css";
import aboutData from "../data/about-data.json";
/*
  personal bio, profile picture, languages/technologies I know
*/
const About = () => {
  return (
    <div className='section' id='about'>
      <h3>About</h3>
      <h1>Hi! I'm Steve Fan. Let me tell you about myself:</h1>
      <div className='pic-bio'>
        <div className='pp'>
          <img src={require('../images/headshot.jpg')} alt='headshot.jpg' />
        </div>
        <div className='bio'>
          <span>I am a third-year at University of Michigan studying Computer Science as an undergrad with plans to graduate this academic year. Currently, I am also applying to the Sequential Undergraduate/Graduate Studies (SUGS) program at University of Michigan, which will allow me to continue studying Computer Science here as a grad student. I am interested in Web Development, Data Science and Software Development and am very excited to explore opportunities in these areas.</span>
        </div>
      </div>
      <div className='languages'>
        <span>I am familar with these languages:</span>
        <div>{ aboutData.map(curr => (<img key={curr.image} src={require('../images/headshot.jpg')} alt='headshot.jpg' />)) }</div>
      </div>
      <a href='https://sf200212345.github.io/resume.pdf' target="_blank" rel="noopener noreferrer">Click to see resume as PDF</a>
    </div>
  );
};

export default About;
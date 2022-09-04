import React from 'react';
import "./styles/Projects.css";
import projData from "../data/projects-data.json";
import ProjectsPopup from './ProjectsPopup';
//all projects should show up in a pop up window that's overlaid on the page

const Projects = () => {
  return (
    <div className='section' id='projects'>
      <h3>Projects</h3>
      <h1>Check out what I've made.</h1>
      <div className='projects-wrapper'>{projData.map((curr) => (<ProjectsPopup key={curr.id} info={curr} />))}</div>
    </div>
  );
};

export default Projects;
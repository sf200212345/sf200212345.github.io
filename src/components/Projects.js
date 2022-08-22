import React from 'react';
import "./styles/Projects.css";
import projData from "../data/projects-data.json";
import ProjectsPopup from './ProjectsPopup';

const Projects = () => {
  return (
    <div className='section' id='projects'>
      {projData.map((curr) => (<ProjectsPopup key={curr.title} info={curr} />))}
    </div>
  );
};

export default Projects;
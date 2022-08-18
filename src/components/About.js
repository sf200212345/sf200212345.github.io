import React from 'react';

const About = () => {
  return (
    <div className='section' id='about'>
      <div className='pp'>
        <img src={require('../images/headshot.jpg')} alt='headshot.jpg' />
      </div>
      <div className='bio'>
        Adaptable rising Junior working on a B.S. in Computer Science and seeking to engage with meaningful projects in a Summer 2022 internship. Inquisitive, hard-working, and familiar with working in project teams. Comfortable working both virtually and in-person.
      </div>
    </div>
  );
};

export default About;
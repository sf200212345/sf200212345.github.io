import React from 'react';
/*
  personal bio, profile picture, languages/technologies I know
*/
const About = () => {
  return (
    <div className='section' id='about'>
      <div className='pp'>
        <img src={require('../images/headshot.jpg')} alt='headshot.jpg' />
      </div>
      <div className='bio'>
      I am a third-year at University of Michigan studying Computer Science as an undergrad with plans to graduate this academic year. Currently, I am also applying to the Sequential Undergraduate/Graduate Studies (SUGS) program at University of Michigan, which will allow me to continue studying Computer Science here as a grad student. I am interested in Web Development, Data Science and Software Development and am very excited to explore opportunities in these areas.
      </div>
    </div>
  );
};

export default About;
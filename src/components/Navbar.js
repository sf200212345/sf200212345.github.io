import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className='navbar'>
      <div className='nav-item'>
        <a href='#introduction' className='nav-link'>Introduction</a>
      </div>
      <div className='nav-item'>
        <a href="#resume" className='nav-link'>Resume</a>
      </div>
      <div className='nav-item'>
        <a href='#projects' className='nav-link'>Projects</a>
      </div>
    </header>
  );
};

export default Navbar;
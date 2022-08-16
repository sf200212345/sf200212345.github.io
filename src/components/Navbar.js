import React, { useState, useEffect, useCallback } from 'react';
import "./Navbar.css";

const Navbar = () => {

  const notFocused = "nav-item";
  const Focused = "nav-item focused";
  const introduction = document.getElementById("introduction");
  const resume = document.getElementById("resume");
  const projects = document.getElementById("projects");

  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);
  const [isScrollDown, setIsScrollDown] = useState(false);
  
  const handleScrollCallback = useCallback(
    () => {
      setIsScrollDown(window.pageYOffset > scrollPosition);
      setScrollPosition(window.pageYOffset);
    }, [scrollPosition]
  );

  useEffect(
    () => {
      window.addEventListener("scroll", handleScrollCallback, {passive: true});
      return () => window.removeEventListener("scroll", handleScrollCallback);
    }, [scrollPosition, handleScrollCallback]
  );

  return (
    <div className={isScrollDown ? " hidden navbar-container" : "navbar-container"}>
      <header className="navbar">
        <div className={scrollPosition <= window.innerHeight * 0.60 ? Focused : notFocused} onClick={() => introduction.scrollIntoView()}>Introduction</div>
        <div className={scrollPosition > window.innerHeight * 0.60 && scrollPosition <= window.innerHeight * 1.60 ? Focused : notFocused} onClick={() => resume.scrollIntoView()}>Resume</div>
        <div className={scrollPosition > window.innerHeight * 1.60 ? Focused : notFocused} onClick={() => projects.scrollIntoView()}>Projects</div>
      </header>
    </div>
  );
};

export default Navbar;
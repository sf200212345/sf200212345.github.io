import React, { useState, useEffect, useCallback } from 'react';
import "./styles/Navbar.css";

//change for mobile view into the expandable menu?

const Navbar = () => {

  const notFocused = "nav-item";
  const Focused = "nav-item focused";

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
    <div className={isScrollDown ? "hidden navbar-container" : "navbar-container"}>
      <header className="navbar">
        <div className={scrollPosition <= window.innerHeight * 0.60 ? Focused : notFocused} onClick={() => document.getElementById("about").scrollIntoView()}>About</div>
        <div className={scrollPosition > window.innerHeight * 0.60 && scrollPosition <= window.innerHeight * 1.60 ? Focused : notFocused} onClick={() => document.getElementById("resume").scrollIntoView()}>Resume</div>
        <div className={scrollPosition > window.innerHeight * 1.60 && scrollPosition <= window.innerHeight * 2.10 ? Focused : notFocused} onClick={() => document.getElementById("projects").scrollIntoView()}>Projects</div>
        <div className={scrollPosition > window.innerHeight * 2.10 ? Focused : notFocused} onClick={() => document.getElementById("contact").scrollIntoView()}>Contact</div>
      </header>
    </div>
  );
};

export default Navbar;
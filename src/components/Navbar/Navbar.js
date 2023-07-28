import React, { useContext, useRef, useLayoutEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { NavMenu } from "../index";
import { LightModeContext } from "../../themeContext";

import "./Navbar.scss";

function Navbar() {
  const { lightMode, toggleLightMode } = useContext(LightModeContext);
  const refRef = useRef(null);

  function handleClick() {
    toggleLightMode();
  }

  function onScroll() {
    const header = document.getElementById("header");
    if (this.scrollY >= 50) {
      header.classList.add("scroll-header");
    } else {
      header.classList.remove("scroll-header");
    }
  }

  useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="header" id="header" ref={refRef}>
      <nav className="container nav__container">
        <a className="nav__logo" href="/">
          TyreseDev
        </a>
        <NavMenu />
        {lightMode ? (
          <FiMoon className="nav__change-theme" onClick={handleClick} />
        ) : (
          <FiSun className="nav__change-theme" onClick={handleClick} />
        )}
      </nav>
    </header>
  );
}

export default Navbar;

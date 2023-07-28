import React from "react";
import {
  BiHomeAlt,
  BiUser,
  BiBook,
  BiBriefcase,
  BiPhone,
} from "react-icons/bi";
import Scrollspy from "react-scrollspy";

import "./NavMenu.scss";

function NavMenu() {
  return (
    <div className="nav__menu">
      <Scrollspy
        items={["home", "about", "skills", "work", "contact"]}
        currentClassName="active-link"
        className="nav__list"
      >
        <li>
          <a href="#home">
            <BiHomeAlt />
          </a>
        </li>
        <li>
          <a href="#about">
            <BiUser />
          </a>
        </li>
        <li>
          <a href="#skills">
            <BiBook />
          </a>
        </li>
        <li>
          <a href="#work">
            <BiBriefcase />
          </a>
        </li>
        <li>
          <a href="#contact">
            <BiPhone />
          </a>
        </li>
      </Scrollspy>
    </div>
  );
}

export default NavMenu;

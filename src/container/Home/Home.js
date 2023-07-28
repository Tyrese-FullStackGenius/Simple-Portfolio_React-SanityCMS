import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaDribbbleSquare,
  FaGithub,
  FaMouse,
} from "react-icons/fa";
import { AppWrap } from "../../wrapper";

import { images } from "../../constants";
import "./Home.scss";

const dataSocials = [
  {
    link: "https://www.linkedin.com/in/Tyrese3915/",
    Icon: <FaLinkedin />,
  },
  {
    link: "https://github.com/Tyrese-FullStackGenius",
    Icon: <FaGithub />,
  },
  {
    link: "#",
    Icon: <FaDribbbleSquare />,
  },
];

function Home() {
  const [socials, setSocials] = useState([]);

  useEffect(() => {
    setSocials(dataSocials);
  }, []);

  return (
    <div className="container grid home__container">
      <div className="home__data">
        <span className="home__greeting">Hello, I'm</span>
        <h1 className="home__name">Tyrese</h1>
        <h3 className="home__education">Frontend Developer</h3>

        <div className="home__buttons">
          <a className="button button--ghost" href="#download-cv">
            Download CV
          </a>
          <a className="button" href="#about">
            About Me
          </a>
        </div>
      </div>

      <div className="home__handle">
        <img src={images.profile} alt="profile" />
      </div>

      <div className="home__social">
        {socials.map((social, i) => (
          <a key={i} href={social.link} target="_blank" rel="noreferrer">
            {social.Icon}
          </a>
        ))}
      </div>

      <a href="#about" className="home__scroll">
        <FaMouse className="home__scroll-icon" />
        <span className="home__scroll-name">Scroll Down</span>
      </a>
    </div>
  );
}

export default AppWrap(Home, "home");

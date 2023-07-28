import React, { useState, useEffect } from "react";
import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";
import { FaBlogger } from "react-icons/fa";

import "./Footer.scss";

const dataLinks = [
  {
    link: "#about",
    name: "About",
  },
  {
    link: "#work",
    name: "Work",
  },
  {
    link: "#testimonials",
    name: "Testimonials",
  },
];

const dataSocials = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/Tyrese3915",
    Icon: <BsInstagram />,
  },
  {
    name: "Facebook",
    link: "#",
    Icon: <BsFacebook />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Tyrese3915",
    Icon: <BsTwitter />,
  },
  {
    name: "Blogger",
    link: "https://tyresejin.netlify.app/",
    Icon: <FaBlogger />,
  },
];

function Footer() {
  const [links, setLinks] = useState([]);
  const [socials, setSocials] = useState([]);

  useEffect(() => {
    setLinks(dataLinks);
    setSocials(dataSocials);
  }, []);

  return (
    <footer className="footer">
      <div className="container footer__container">
        <h1 className="footer__title">TyreseDev</h1>

        <ul className="footer__list">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>

        <ul className="footer__social">
          {socials.map((social, index) => (
            <a href={social.link} key={index}>
              {social.Icon}
            </a>
          ))}
        </ul>

        <span className="footer__copy">
          &#169; TyreseDev. All rigths reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;

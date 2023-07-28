import React, { useState, useEffect } from "react";
import { AppWrap } from "../../wrapper";
import { client } from "../../client";
import { SkillsCard } from "../../components";

import "./Skills.scss";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client.fetch(query)
      .then((data) => {
        setSkills(data)
      });
  }, []);

  return (
    <>
      <span className="section__subtitle">My Abilities</span>
      <h2 className="section__title">My Experience</h2>

      <div className="container grid skills__container">
        {skills.map((skill, index) => (
          <SkillsCard {...skill} key={index}/>
        ))}
      </div>
    </>
  )
}

export default AppWrap(Skills, "skills");

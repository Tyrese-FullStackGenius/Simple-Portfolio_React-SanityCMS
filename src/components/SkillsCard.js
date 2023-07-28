import React from "react";


import { HiBadgeCheck } from "react-icons/hi";
import "./SkillsCard.scss";

function SkillsCard({title, left, right}) {
  return (
    <div className="skills__content">
      <h3 className="skills__title">{ title }</h3>

      <div className="skills__box">
        <div className="skills__group">
          {left.map((item, index) => (
            <div
              className="skills__data"
              key={index}
            >
              <HiBadgeCheck className="skills__icon"/>
              <div>
                <h3>{ item.name }</h3>
                <span>{ item.level }</span>
              </div>
            </div>
          ))}
        </div>

        <div className="skills__group">
          {right.map((item, index) => (
            <div
              className="skills__data"
              key={index}
            >
              <HiBadgeCheck className="skills__icon"/>
              <div>
                <h3>{ item.name }</h3>
                <span>{ item.level }</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillsCard;

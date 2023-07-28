import React, {useState} from "react";

import { BsCheck } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";

import "./ServicesCard.scss";

function ServicesCard({title, description, offers}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="services__card">
      <h3 className="services__title">{title}</h3>
      <span
        className="services__button"
        onClick={() => setIsOpen(true)}
      >
        See More <BsArrowRight className="services__icon" />
      </span>

      {/* modal */}
      <div
        className={`services__modal ${isOpen ? "active-modal" : ""}`}
      >
        <div className="services__modal-content">
          <IoIosClose
            className="services__modal-close"
            onClick={() => setIsOpen(false)}
          />
          <h3 className="services__modal-title">{title}</h3>
          <p className="services__modal-description">
            {description}
          </p>

          <ul className="services__modal-list">
            {offers.map((offer, i) => (
              <li key={i}>
                <BsCheck className="services__modal-icon" />
                <p>
                  {offer}
                </p>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
}

export default ServicesCard;

import React from "react";
import { AppWrap } from "../../wrapper";
import { MdOutlineAttachEmail } from "react-icons/md";
import { BsArrowRight, BsWhatsapp, BsInstagram } from "react-icons/bs";

import "./Contact.scss";

function Contact() {
  return (
    <>
      <span className="section__subtitle">Get in Touch</span>
      <h2 className="section__title">Contact Me</h2>

      <div className="container grid contact__container">
        <div className="contact__content">
          <h3 className="contact__title">Talk to Me</h3>
          <div className="contact__info">
            <div>
              <MdOutlineAttachEmail className="contact__card-icon" />
              <h3>Email</h3>
              <span>wizardlydeveloper@gmail.com</span>
              <a
                href="mailto:wizardlydeveloper@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Write Me <BsArrowRight className="contact__button-icon" />
              </a>
            </div>
            <div>
              <BsWhatsapp className="contact__card-icon" />
              <h3>Whatsapp</h3>
              <span>+62 818-0463-6624</span>
              <a
                href="https://api.whatsapp.com/send?phone=6281804636624&text=Hello, more information!"
                target="_blank"
                rel="noreferrer"
              >
                Write Me <BsArrowRight className="contact__button-icon" />
              </a>
            </div>
            <div>
              <BsInstagram className="contact__card-icon" />
              <h3>Direct Message</h3>
              <span>tyrese</span>
              <a
                href="https://instagram.com/tyrese"
                target="_blank"
                rel="noreferrer"
              >
                Write Me <BsArrowRight className="contact__button-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me Your Project</h3>
          <form className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Names</label>
              <input
                className="contact__form-input"
                type="text"
                name="name"
                placeholder="Insert your name"
              />
            </div>
            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                className="contact__form-input"
                type="email"
                name="email"
                placeholder="Insert your email"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                className="contact__form-input"
                name="message"
                cols="30"
                rows="10"
                placeholder="Write your project"
              />
            </div>

            <button className="button" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AppWrap(Contact, "contact");

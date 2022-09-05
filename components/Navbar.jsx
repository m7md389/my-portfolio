import React from "react";
import navbarStyles from "../styles/components/Navbar.module.scss";

export default function Navbar({ messages, handleNavigate, isActiveToggler }) {
  function getNavClass() {
    return isActiveToggler
      ? `${navbarStyles["nav"]} ${navbarStyles["active"]}`
      : navbarStyles["nav"];
  }

  return (
    <nav className={getNavClass()}>
      <ul className={navbarStyles["nav-list"]}>
        <li onClick={() => handleNavigate(messages.landing.id)}>
          <p className={navbarStyles["nav-link"]}>{messages.landing.title}</p>
        </li>
        <li onClick={() => handleNavigate(messages.about.id)}>
          <p className={navbarStyles["nav-link"]}>{messages.about.heading}</p>
        </li>
        <li onClick={() => handleNavigate(messages.portfolio.id)}>
          <p className={navbarStyles["nav-link"]}>
            {messages.portfolio.heading}
          </p>
        </li>
        <li onClick={() => handleNavigate(messages.skills.id)}>
          <p className={navbarStyles["nav-link"]}>{messages.skills.heading}</p>
        </li>
        <li onClick={() => handleNavigate(messages.experience.id)}>
          <p className={navbarStyles["nav-link"]}>
            {messages.experience.heading}
          </p>
        </li>
        <li onClick={() => handleNavigate(messages.education.id)}>
          <p className={navbarStyles["nav-link"]}>
            {messages.education.heading}
          </p>
        </li>
        <li onClick={() => handleNavigate(messages.contact.id)}>
          <p className={navbarStyles["nav-link"]}>{messages.contact.heading}</p>
        </li>
      </ul>
    </nav>
  );
}

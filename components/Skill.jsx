import React from "react";
import skillSectionStyles from "../styles/components/SkillSection.module.scss";

export default function Title({ animateDelay, heading, skills }) {
  return (
    <li
      data-aos-delay={animateDelay}
      data-aos="fade-in"
      className={skillSectionStyles["skills"]}
    >
      <h3 className={skillSectionStyles["skills-heading"]}>{heading}</h3>
      <ul className={skillSectionStyles["skills-list"]}>
        {skills.map((skill) => (
          <li className={skillSectionStyles["skills-item"]} key={skill}>
            {skill}
          </li>
        ))}
      </ul>
    </li>
  );
}

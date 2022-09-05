import React from "react";
import Section from "../Section";
import Skill from "../Skill";
import skillsStyles from "../../styles/components/Skills.module.scss";

export default function Skills({
  heading,
  id,
  INITIAL_ANIMATE_DELAY,
  setSectionRef,
  skills,
  tagline
}) {
  return (
    <Section
      heading={heading}
      id={id}
      setSectionRef={setSectionRef}
      tagline={tagline}
    >
      <ul className={skillsStyles["skills"]}>
        {skills.map((skill, index) => (
          <Skill
            animateDelay={INITIAL_ANIMATE_DELAY * (index + 1)}
            heading={skill.name}
            key={skill.name}
            skills={skill.list}
          />
        ))}
      </ul>
    </Section>
  );
}

import React from "react";
import { useWindowWidth } from "@react-hook/window-size";

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
  const screenWidth = useWindowWidth();

  const getAnimationDelay = (index) => {
    return screenWidth < 600
      ? INITIAL_ANIMATE_DELAY
      : INITIAL_ANIMATE_DELAY * index;
  };
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
            animateDelay={getAnimationDelay(index + 1)}
            heading={skill.name}
            key={skill.name}
            skills={skill.list}
          />
        ))}
      </ul>
    </Section>
  );
}

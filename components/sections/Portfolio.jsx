import React from "react";
import Project from "../Project";
import Section from "../Section";

export default function Portfolio({
  heading,
  id,
  INITIAL_ANIMATE_DELAY,
  projects,
  setSectionRef,
  tagline
}) {
  let delayCounter = 0;
  return (
    <Section
      heading={heading}
      id={id}
      setSectionRef={setSectionRef}
      tagline={tagline}
    >
      <div>
        {projects.map((item, index) => {
          const isRightImage = index % 2 === 1;
          return (
            <Project
              {...item}
              animateDelay={
                INITIAL_ANIMATE_DELAY * (index + (delayCounter += 1))
              }
              description={item.description}
              github={item.github}
              image={item.image}
              INITIAL_ANIMATE_DELAY={INITIAL_ANIMATE_DELAY}
              isRightImage={isRightImage}
              key={item.title}
              name={item.name}
              title={item.title}
              website={item.website}
            />
          );
        })}
      </div>
    </Section>
  );
}

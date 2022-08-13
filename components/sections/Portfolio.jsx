import React from "react";
import Project from "../Project";
import Section from "../Section";

export default function Portfolio({
  setSectionRef,
  id,
  heading,
  tagline,
  projects
}) {
  return (
    <Section
      setSectionRef={setSectionRef}
      id={id}
      heading={heading}
      tagline={tagline}
    >
      <div>
        {projects.map((item, index) => {
          const isRightImage = index % 2 === 1;
          return (
            <Project
              key={item.title}
              {...item}
              name={item.name}
              title={item.title}
              description={item.description}
              website={item.website}
              github={item.github}
              image={item.image}
              isRightImage={isRightImage}
            />
          );
        })}
      </div>
    </Section>
  );
}

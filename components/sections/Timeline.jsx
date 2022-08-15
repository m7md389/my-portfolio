import React from "react";
import Section from "../Section";
import TimeEvent from "../TimeEvent";
import timelineStyles from "../../styles/components/Timeline.module.scss";

export default function Timeline({
  heading,
  id,
  INITIAL_ANIMATE_DELAY,
  setSectionRef,
  tagline,
  timelineEvents
}) {
  return (
    <Section
      heading={heading}
      id={id}
      setSectionRef={setSectionRef}
      tagline={tagline}
    >
      <ul
        className={timelineStyles["timeline"]}
        data-aos-delay={INITIAL_ANIMATE_DELAY}
        data-aos="fade-down"
      >
        {timelineEvents.map((event) => (
          <TimeEvent
            company={event.company}
            description={event.description}
            endYear={event.endYear}
            key={event.title}
            startYear={event.startYear}
            title={event.title}
          />
        ))}
      </ul>
    </Section>
  );
}

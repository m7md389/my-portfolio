import React from "react";
import Section from "../Section";
import TimeEvent from "../TimeEvent";
import timelineStyles from "../../styles/Timeline.module.scss";

export default function Timeline({
  setSectionRef,
  id,
  heading,
  tagline,
  timelineEvents
}) {
  return (
    <Section
      setSectionRef={setSectionRef}
      id={id}
      heading={heading}
      tagline={tagline}
    >
      <ul className={timelineStyles["timeline"]}>
        {timelineEvents.map((event) => (
          <TimeEvent
            key={event.title}
            title={event.title}
            company={event.company}
            description={event.description}
            startYear={event.startYear}
            endYear={event.endYear}
          />
        ))}
      </ul>
    </Section>
  );
}

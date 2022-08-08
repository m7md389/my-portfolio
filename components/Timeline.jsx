import React from "react";
import timelineStyles from "../styles/Timeline.module.scss";
import Section from "./Section";
import TimeEvent from "./TimeEvent";

export default function Timeline({ t, id, heading, tagline }) {
  const timelineEvents = getTimelineEvents(t, id);

  return (
    <Section id={id} heading={heading} tagline={tagline}>
      <ul className={timelineStyles["timeline"]}>
        {timelineEvents.map((event) => (
          <TimeEvent
            key={event.title}
            title={event.title}
            company={event.company}
            startYear={event.startYear}
            endYear={event.endYear}
            description={event.description}
          />
        ))}
      </ul>
    </Section>
  );
}

function getTimelineEvents(t, id) {
  const eventsAsStrings = t(`${id}:timeEvents`).split("&&");
  const eventsAsArrays = eventsAsStrings.map((item) => item.split("__"));
  const eventsAsObjects = eventsAsArrays.map((item) => ({
    title: item[0],
    company: item[1],
    startYear: item[2],
    endYear: item[3],
    description: item[4]
  }));

  return eventsAsObjects;
}

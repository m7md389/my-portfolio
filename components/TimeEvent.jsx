import React from "react";
import timeEventStyles from "../styles/TimeEvent.module.scss";

export default function TimeEvent({
  title,
  company,
  startYear,
  endYear,
  description
}) {
  return (
    <li
      className={timeEventStyles["event"]}
      data-date={`${startYear} - ${endYear}`}
    >
      <h3 className={timeEventStyles["event-title"]}>
        {title}, {company}
      </h3>
      <p className={timeEventStyles["event-description"]}>{description}</p>
    </li>
  );
}

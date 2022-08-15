import React from "react";
import ExternalLink from "./ExternalLink";
import timeEventStyles from "../styles/components/TimeEvent.module.scss";

export default function TimeEvent({
  title,
  company,
  startYear,
  endYear,
  description,
  links
}) {
  return (
    <li
      className={timeEventStyles["event"]}
      data-date={`${startYear} - ${endYear}`}
    >
      <h3 className={timeEventStyles["event-title"]}>{title}</h3>
      <h4 className={timeEventStyles["event-company"]}>{company}</h4>
      <p className={timeEventStyles["event-description"]}>{description}</p>
      {links && (
        <div className={timeEventStyles["event-links"]}>
          {links.map((link) => (
            <ExternalLink key={link.name} href={link.link}>
              {link.name}
            </ExternalLink>
          ))}
        </div>
      )}
    </li>
  );
}

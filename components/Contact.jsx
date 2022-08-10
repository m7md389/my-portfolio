import React from "react";
import Section from "./Section";
import contactStyles from "../styles/Contact.module.scss";
import ExternalLink from "./ExternalLink";

export default function Contact({ t, id, heading, tagline }) {
  const contactInfo = getContactInfo(t, id);

  return (
    <Section id={id} heading={heading} tagline={tagline}>
      <ul className={contactStyles["contact-list"]}>
        {contactInfo.map((info) => (
          <li key={info[0]} className={contactStyles["contact-item"]}>
            <h3 className={contactStyles["contact-label"]}>{info[0]}</h3>
            <ContactValue data={info} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

function getContactInfo(t, id) {
  const infoAsStrings = t(`${id}:contactInfo`).split("&&");
  const infoAsArrays = infoAsStrings.map((item) => item.split("__"));

  return infoAsArrays;
}

function ContactValue({ data }) {
  if (["LinkedIn", "GitHub"].includes(data[0]))
    return <ExternalLink href={data[1]}>{data[1]}</ExternalLink>;
  if (["Email"].includes(data[0]))
    return <ExternalLink href={`mailto:${data[1]}`}>{data[1]}</ExternalLink>;

  return <p className={contactStyles["contact-value"]}>{data[1]}</p>;
}

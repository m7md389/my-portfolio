import React from "react";
import Section from "../Section";
import contactStyles from "../../styles/Contact.module.scss";
import ExternalLink from "../ExternalLink";

export default function Contact({
  email,
  heading,
  id,
  INITIAL_ANIMATE_DELAY,
  links,
  phone,
  setSectionRef,
  tagline
}) {
  return (
    <Section
      heading={heading}
      id={id}
      setSectionRef={setSectionRef}
      tagline={tagline}
    >
      <ul
        className={contactStyles["contact-list"]}
        data-aos-delay={INITIAL_ANIMATE_DELAY}
        data-aos="fade-up"
      >
        <li className={contactStyles["contact-item"]}>
          <h3 className={contactStyles["contact-label"]}>{phone.name}</h3>
          <ExternalLink href={phone.value}>{phone.value}</ExternalLink>
        </li>
        <li className={contactStyles["contact-item"]}>
          <h3 className={contactStyles["contact-label"]}>{email.name}</h3>
          <ExternalLink href={`mailto:${email.value}`}>
            {email.value}
          </ExternalLink>
        </li>
        {links.map((link) => (
          <li key={link.name} className={contactStyles["contact-item"]}>
            <h3 className={contactStyles["contact-label"]}>{link.name}</h3>
            <ExternalLink href={link.value}>{link.value}</ExternalLink>
          </li>
        ))}
      </ul>
    </Section>
  );
}

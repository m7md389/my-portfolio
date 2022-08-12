import React from "react";
import Section from "./Section";
import contactStyles from "../styles/Contact.module.scss";
import ExternalLink from "./ExternalLink";

export default function Contact({
  t,
  id,
  heading,
  tagline,
  phone,
  email,
  links
}) {
  return (
    <Section id={id} heading={heading} tagline={tagline}>
      <ul className={contactStyles["contact-list"]}>
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

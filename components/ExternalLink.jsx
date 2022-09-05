import React from "react";
import externalLinkStyles from "../styles/components/ExternalLink.module.scss";

export default function ExternalLink({ href, children, uppercase }) {
  return (
    <a
      className={getLinkClass(uppercase)}
      rel="noopener noreferrer"
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
}

function getLinkClass(uppercase) {
  const constClass = externalLinkStyles["external-link"];
  const conditionalClass = " uppercase";
  return uppercase ? constClass + conditionalClass : constClass;
}

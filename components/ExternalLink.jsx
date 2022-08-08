import externalLinkStyles from "../styles/ExternalLink.module.scss";

export default function ExternalLink({ href, children, uppercase }) {
  return (
    <a className={getLinkClass(uppercase)} href={href} target="_blank">
      {children}
    </a>
  );
}

function getLinkClass(uppercase) {
  const constClass = externalLinkStyles["external-link"];
  const conditionalClass = " uppercase";
  return uppercase ? constClass + conditionalClass : constClass;
}

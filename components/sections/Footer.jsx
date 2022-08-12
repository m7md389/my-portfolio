import React from "react";
import footerStyles from "../../styles/Footer.module.scss";

export default function Footer({ copyright }) {
  return (
    <footer className={footerStyles["footer"]}>
      <p className={footerStyles["footer-copyright"]}>
        &copy; {copyright.year} {copyright.name}
      </p>
    </footer>
  );
}

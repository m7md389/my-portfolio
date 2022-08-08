import React from "react";
import footerStyles from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={footerStyles["footer"]}>
      <p className={footerStyles["footer-copyright"]}>
        &copy; 2022 Mohammad Abd Alrahman
      </p>
    </footer>
  );
}

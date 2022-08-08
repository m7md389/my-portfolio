import React from "react";
import footerStyles from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={footerStyles["footer"]}>
      <h2 className={footerStyles["copy-write"]}>
        &copy; 2022 Mohammad Abd Alrahman
      </h2>
    </footer>
  );
}

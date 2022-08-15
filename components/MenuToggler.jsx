import React from "react";
import menuTogglerStyles from "../styles/components/MenuToggler.module.scss";

export default function MenuToggler({ isActiveToggler, handleMenuToggler }) {
  function getTogglerClass() {
    return isActiveToggler
      ? `${menuTogglerStyles["menu-toggler"]} ${menuTogglerStyles["active"]}`
      : menuTogglerStyles["menu-toggler"];
  }

  return (
    <div dir="ltr" className={getTogglerClass()} onClick={handleMenuToggler}>
      <div
        className={`${menuTogglerStyles["bar"]} ${menuTogglerStyles["half"]} ${menuTogglerStyles["start"]}`}
      ></div>
      <div className={menuTogglerStyles["bar"]}></div>
      <div
        className={`${menuTogglerStyles["bar"]} ${menuTogglerStyles["half"]} ${menuTogglerStyles["end"]}`}
      ></div>
    </div>
  );
}

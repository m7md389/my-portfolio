import { useState } from "react";
import MenuToggler from "../MenuToggler";
import Navbar from "../Navbar";
import headerStyles from "../../styles/components/Header.module.scss";

export default function Menu({
  _handleNavigate,
  messages,
  setSectionRef,
  id,
  heading,
  tagline
}) {
  const [isActiveToggler, setActiveToggler] = useState(false);

  function handleMenuToggler() {
    setActiveToggler(!isActiveToggler);
  }

  function handleNavigate(section) {
    setActiveToggler(false);
    _handleNavigate(section);
  }

  return (
    <header className={headerStyles["header"]}>
      <MenuToggler
        isActiveToggler={isActiveToggler}
        handleMenuToggler={handleMenuToggler}
      />

      <Navbar
        handleNavigate={handleNavigate}
        messages={messages}
        isActiveToggler={isActiveToggler}
      />

      <div
        className={headerStyles["landing"]}
        ref={(el) => setSectionRef(id, el)}
      >
        <h1 className={headerStyles["landing-heading"]}>{heading}</h1>
        <p className={headerStyles["landing-tagline"]}>{tagline}</p>
      </div>
    </header>
  );
}

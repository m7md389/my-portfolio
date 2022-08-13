import { useState } from "react";
import MenuToggler from "../MenuToggler";
import Navbar from "../Navbar";

export default function Menu({ _handleNavigate, messages }) {
  const [isActiveToggler, setActiveToggler] = useState(false);

  function handleMenuToggler() {
    setActiveToggler(!isActiveToggler);
  }

  function handleNavigate(section) {
    setActiveToggler(false);
    _handleNavigate(section);
  }

  return (
    <header>
      <MenuToggler
        isActiveToggler={isActiveToggler}
        handleMenuToggler={handleMenuToggler}
      />

      <Navbar
        handleNavigate={handleNavigate}
        messages={messages}
        isActiveToggler={isActiveToggler}
      />
    </header>
  );
}

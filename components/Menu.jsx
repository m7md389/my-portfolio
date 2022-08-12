import Link from "next/link";
import { useState } from "react";
import MenuToggler from "./MenuToggler";
import Navbar from "./Navbar";

export default function Menu({ messages }) {
  const [isActiveToggler, setActiveToggler] = useState(false);

  function handleMenuToggler() {
    setActiveToggler(!isActiveToggler);
  }

  function handleNavItem() {
    setActiveToggler(false);
  }

  return (
    <header>
      <MenuToggler
        isActiveToggler={isActiveToggler}
        handleMenuToggler={handleMenuToggler}
      />

      <Navbar
        messages={messages}
        isActiveToggler={isActiveToggler}
        handleNavItem={handleNavItem}
      />
    </header>
  );
}

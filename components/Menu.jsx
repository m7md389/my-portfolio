import Link from "next/link";
import { useState } from "react";
import MenuToggler from "./MenuToggler";
import Navbar from "./Navbar";

export default function Menu() {
  const [isActiveToggler, setActiveToggler] = useState(false);

  function handleToggler() {
    setActiveToggler(!isActiveToggler);
  }

  return (
    <header>
      <MenuToggler
        isActiveToggler={isActiveToggler}
        handleToggler={handleToggler}
      />

      <Navbar isActiveToggler={isActiveToggler} />
    </header>
  );
}

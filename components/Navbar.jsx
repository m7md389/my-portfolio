import Link from "next/link";
import navbarStyles from "../styles/Navbar.module.scss";

export default function Navbar({ isActiveToggler }) {
  function getNavClass() {
    return isActiveToggler
      ? `${navbarStyles["nav"]} ${navbarStyles["active"]}`
      : navbarStyles["nav"];
  }

  return (
    <nav className={getNavClass()}>
      <ul className={navbarStyles["nav-list"]}>
        <li>
          <Link href="#home">
            <a className={navbarStyles["nav-link"]}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <a className={navbarStyles["nav-link"]}>About</a>
          </Link>
        </li>
        <li>
          <Link href="#portfolio">
            <a className={navbarStyles["nav-link"]}>Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href="#technical_skills">
            <a className={navbarStyles["nav-link"]}>Technical Skills</a>
          </Link>
        </li>
        <li>
          <Link href="#work_experience">
            <a className={navbarStyles["nav-link"]}>Work Experience</a>
          </Link>
        </li>
        <li>
          <Link href="#education">
            <a className={navbarStyles["nav-link"]}>Education</a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a className={navbarStyles["nav-link"]}>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

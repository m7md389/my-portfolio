import Link from "next/link";
import navbarStyles from "../styles/Navbar.module.scss";

export default function Navbar({ messages, isActiveToggler, handleNavItem }) {
  function getNavClass() {
    return isActiveToggler
      ? `${navbarStyles["nav"]} ${navbarStyles["active"]}`
      : navbarStyles["nav"];
  }

  return (
    <nav className={getNavClass()}>
      <ul className={navbarStyles["nav-list"]}>
        <li onClick={handleNavItem}>
          <Link href="">
            <a className={navbarStyles["nav-link"]}>{messages.landing.title}</a>
          </Link>
        </li>
        <li onClick={handleNavItem}>
          <Link href={`#${messages.about.id}`}>
            <a className={navbarStyles["nav-link"]}>{messages.about.heading}</a>
          </Link>
        </li>
        <li onClick={handleNavItem}>
          <Link href={`#${messages.portfolio.id}`}>
            <a className={navbarStyles["nav-link"]}>
              {messages.portfolio.heading}
            </a>
          </Link>
        </li>
        <li onClick={handleNavItem}>
          <Link href={`#${messages.skills.id}`}>
            <a className={navbarStyles["nav-link"]}>
              {messages.skills.heading}
            </a>
          </Link>
        </li>
        <li onClick={handleNavItem}>
          <Link href={`#${messages.experience.id}`}>
            <a className={navbarStyles["nav-link"]}>
              {messages.experience.heading}
            </a>
          </Link>
        </li>
        <li onClick={handleNavItem}>
          <Link href={`#${messages.education.id}`}>
            <a className={navbarStyles["nav-link"]}>
              {messages.education.heading}
            </a>
          </Link>
        </li>
        <li onClick={handleNavItem}>
          <Link href={`#${messages.contact.id}`}>
            <a className={navbarStyles["nav-link"]}>
              {messages.contact.heading}
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

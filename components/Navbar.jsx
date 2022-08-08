import Link from "next/link";
import navbarStyles from "../styles/Navbar.module.scss";

export default function Navbar({ t, isActiveToggler, handleNavItem }) {
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
            <a className={navbarStyles["nav-link"]}>{t("navbar:home")}</a>
          </Link>
        </li>
        <li onClick={handleNavItem}>
          <Link href="#about">
            <a className={navbarStyles["nav-link"]}>{t("navbar:about")}</a>
          </Link>
        </li>
        <li onClick={handleNavItem}>
          <Link href="#portfolio">
            <a className={navbarStyles["nav-link"]}>{t("navbar:portfolio")}</a>
          </Link>
        </li>
        <li onClick={handleNavItem}>
          <Link href="#technical_skills">
            <a className={navbarStyles["nav-link"]}>{t("navbar:skills")}</a>
          </Link>
        </li>
        <li onClick={handleNavItem}>
          <Link href="#experience">
            <a className={navbarStyles["nav-link"]}>
              {t("navbar:workExperience")}
            </a>
          </Link>
        </li>
        <li onClick={handleNavItem}>
          <Link href="#education">
            <a className={navbarStyles["nav-link"]}>{t("navbar:education")}</a>
          </Link>
        </li>
        <li onClick={handleNavItem}>
          <Link href="#contact">
            <a className={navbarStyles["nav-link"]}>{t("navbar:contact")}</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

import Link from "next/link";
import navbarStyles from "../styles/Navbar.module.scss";

export default function Navbar() {
  return (
    <nav>
      <ul className={navbarStyles.navLinks}>
        <li>
          <Link href="#home">Home</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="#technical_skills">Technical Skills</Link>
        </li>
        <li>
          <Link href="#work_experience">Work Experience</Link>
        </li>
        <li>
          <Link href="#education">Education</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

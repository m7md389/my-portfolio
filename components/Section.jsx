import sectionStyles from "../styles/Section.module.scss";

export default function Section({ heading, tagline, children, id }) {
  return (
    <section id={id} className={`${sectionStyles["section"]} container`}>
      <header className={sectionStyles["section-heading"]}>
        <h2 className={sectionStyles["section-title"]}>{heading}</h2>
        <p className={sectionStyles["section-tagline"]}>{tagline}</p>
      </header>
      <main>{children}</main>
    </section>
  );
}

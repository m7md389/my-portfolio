import sectionStyles from "../styles/components/Section.module.scss";

export default function Section({
  setSectionRef,
  heading,
  tagline,
  children,
  id
}) {
  return (
    <section
      ref={(el) => setSectionRef(id, el)}
      id={id}
      className={"container"}
    >
      <header className={sectionStyles["section-heading"]}>
        <h2 className={sectionStyles["section-title"]}>{heading}</h2>
        <p className={sectionStyles["section-tagline"]}>{tagline}</p>
      </header>
      {children}
    </section>
  );
}

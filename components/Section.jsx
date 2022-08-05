import sectionStyles from "../styles/Section.module.scss";

export default function Section({ heading, tagline, children }) {
  return (
    <section>
      <header>
        <h2>{heading}</h2>
        <p>{tagline}</p>
      </header>
      <main>{children}</main>
    </section>
  );
}

import aboutStyles from "../styles/About.module.scss";

export default function About({ heading, tagline }) {
  return (
    <section>
      <h2>{heading}</h2>
      <p>{tagline}</p>
    </section>
  );
}

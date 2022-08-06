import landingStyles from "../styles/Landing.module.scss";

export default function Title({ heading, tagline, about }) {
  return (
    <section className={landingStyles["landing"]}>
      <h2 className={landingStyles["landing-heading"]}>{heading}</h2>
      <p className={landingStyles["landing-tagline"]}>{tagline}</p>
    </section>
  );
}

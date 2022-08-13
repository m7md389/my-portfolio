import landingStyles from "../../styles/Landing.module.scss";

export default function Title({ setSectionRef, id, heading, tagline }) {
  return (
    <div
      className={landingStyles["landing"]}
      ref={(el) => setSectionRef(id, el)}
    >
      <h1 className={landingStyles["landing-heading"]}>{heading}</h1>
      <p className={landingStyles["landing-tagline"]}>{tagline}</p>
    </div>
  );
}

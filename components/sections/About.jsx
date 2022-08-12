import aboutStyles from "../../styles/About.module.scss";

export default function About({ id, image, heading, tagline, description }) {
  return (
    <section className={`${aboutStyles["about"]} container`} id={id}>
      <img
        src={image}
        alt="Picture of me"
        className={aboutStyles["about-image"]}
      />
      <div className={aboutStyles["about-content"]}>
        <div className={aboutStyles["about-heading"]}>
          <h2>{heading}</h2>
          <p>{tagline}</p>
        </div>

        <p className={aboutStyles["about-description"]}>{description}</p>
      </div>
    </section>
  );
}

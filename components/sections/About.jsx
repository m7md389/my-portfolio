import aboutStyles from "../../styles/components/About.module.scss";

export default function About({
  setSectionRef,
  id,
  INITIAL_ANIMATE_DELAY,
  image,
  heading,
  tagline,
  description
}) {
  return (
    <section
      ref={(el) => setSectionRef(id, el)}
      className={`${aboutStyles["about"]} container`}
      id={id}
    >
      <img
        alt="Picture of me"
        className={aboutStyles["about-image"]}
        data-aos-delay={INITIAL_ANIMATE_DELAY}
        data-aos="fade-right"
        src={image}
      />

      <div
        className={aboutStyles["about-content"]}
        data-aos-delay={INITIAL_ANIMATE_DELAY * 2}
        data-aos="fade-left"
      >
        <div className={aboutStyles["about-heading"]}>
          <h2>{heading}</h2>
          <p>{tagline}</p>
        </div>

        <p className={aboutStyles["about-description"]}>{description}</p>
      </div>
    </section>
  );
}

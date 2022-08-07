import heroStyles from "../styles/Hero.module.scss";

export default function Hero({ id, image, heading, tagline, description }) {
  return (
    <section className={`${heroStyles["hero"]} container`} id={id}>
      <img
        src={image}
        alt="Picture of me"
        className={heroStyles["hero-image"]}
      />
      <div className={heroStyles["hero-content"]}>
        <div className={heroStyles["hero-heading"]}>
          <h2>{heading}</h2>
          <p>{tagline}</p>
        </div>

        <p className={heroStyles["hero-description"]}>{description}</p>
      </div>
    </section>
  );
}

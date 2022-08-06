import landingStyles from "../styles/Landing.module.scss";
import { Image } from "next/image";

export default function Title({ image, heading, tagline, about }) {
  return (
    <section className={landingStyles["landing"]}>
      {/* <Image></Image> */}
      <div>
        <h2 className={landingStyles["landing-heading"]}>{heading}</h2>
        <p className={landingStyles["landing-tagline"]}>{tagline}</p>
      </div>
    </section>
  );
}

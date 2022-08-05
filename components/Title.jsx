import titleStyles from "../styles/Title.module.scss";
import { Image } from "next/image";

export default function Title({ image, heading, tagline, about }) {
  return (
    <section>
      {/* <Image></Image> */}
      <div>
        <h2>{heading}</h2>
        <p>{tagline}</p>
        <p>{about}</p>
      </div>
    </section>
  );
}
